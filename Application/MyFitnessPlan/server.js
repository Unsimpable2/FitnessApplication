const express = require("express");
const path = require("path");

const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);

const ver = import("./frontend/static/js/views/scripts/verification_common.mjs")

const mysql = require('mysql');
const connectionOptions = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'myfitnessplan'
};

const connection = mysql.createConnection(connectionOptions);
const sessionStore = new MySQLStore({}, connection);

connection.connect();

const app = express();

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(session({
    key: 'session_cookie_name',
    secret: 'session_cookie_secret',
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: "auto", httpOnly: true }
}));

//load correct page if user is logged in for user place
app.get("/static/js/views/UserPlace.js", (req, res, next) => {
    if (req.session.acc_type === "User") {
        res.sendFile(path.resolve(__dirname, "frontend/hiden/UserPlaceUser.js"))
    }
    else if (req.session.acc_type === "Trainer") {
        res.sendFile(path.resolve(__dirname, "frontend/hiden/UserPlaceTrainer.js"))
    }
    else if (req.session.acc_type === "Admin") {
        res.sendFile(path.resolve(__dirname, "frontend/hiden/UserPlaceAdmin.js"))
    }
    else
        next()
})

//load correct page if user is logged in for workout plan
app.get("/static/js/views/WorkoutPlans.js", (req, res, next) => {
    if (typeof req.session.userId === "number") {
        res.sendFile(path.resolve(__dirname, "frontend/hiden/WorkoutPlansLogin.js"))
    }
    else
        next()
})

//load correct page if user is logged in
app.get("/static/js/views/Login.js", (req, res, next) => {
    if (typeof req.session.userId === "number") {
        res.sendFile(path.resolve(__dirname, "frontend/hiden/UserLogged.js"))
    }
    else
        next()
})

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

//test your session data
app.get("/test", (req, res) => {
    if (typeof req.session.userId != "number") {
        return res.sendStatus(403);
    }
    res.send(req.session);
});

//logout from page
app.get("/logout", (req, res) => {
    req.session.destroy(err => {
        if (err) {
            console.log(err);
        }
        res.redirect("/");
    });
});

//************** load data to page (exercises) **************
app.get("/userplace/loaddata", (req, res) => {
    if (typeof req.session.userId != "number") {
        return res.sendStatus(403);
    }
    connection.query("SELECT * FROM `exercises` WHERE `exercise_category`= \"Workout\"", (err, values) => {
        if (err !== null) {
            console.error(err)
            return res.sendStatus(500)
        }
        res.send(values)
    })
})

//************** load data to page (users) **************
app.get("/userplace/loaduserdata", (req, res) => {
    if (typeof req.session.userId != "number") {
        return res.sendStatus(403);
    }
    connection.query("SELECT * FROM `user_accounts` WHERE `userAcc_activation` = \"Activate\" AND `userAcc_type` = \"User\" OR `userAcc_type` = \"Trainer\" OR `userAcc_type` = \"Admin\"", (err, values) => {
        if (err !== null) {
            console.error(err)
            return res.sendStatus(500)
        }
        res.send(values)
    })
})

//************** load data to page (workout plans names) **************
app.get("/userplace/loadworkoutplansdata", (req, res) => {
    if (typeof req.session.userId != "number") {
        return res.sendStatus(403);
    }
    connection.query("SELECT * FROM workout_plans;", (err, values) => {
        if (err !== null) {
            console.error(err)
            return res.sendStatus(500)
        }
        res.send(values)
    })
})

//************** load data to page (workout plans) **************
app.get("/workoutplan/loadplans", (req, res) => {
    if (typeof req.session.userId != "number") {
        return res.sendStatus(403);
    }
    connection.query("SELECT * FROM workout_plans", (err, plans) => {
        if (err !== null) {
            console.error(err)
            return res.sendStatus(500)
        }
        connection.query("SELECT * FROM plans_has_exercices p JOIN exercises e ON p.exercise_id = e.exercise_id ORDER BY p.Exer_number ASC", (err, exercises) => {
            if (err !== null) {
                console.error(err)
                return res.sendStatus(500)
            }
            const plan_data = plans.map(plan => ({ ...plan, exercises: exercises.filter(exercise => exercise.plan_id === plan.plan_id) }))
            res.send(plan_data)
        })
    })
})

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

//#################### User ####################

//************** save bmi/bfp to database **************
app.post("/calculators/bmibfp", (req, res) => {
    if (typeof req.session.userId != "number") {
        return res.status(403).send("You are not login. Log in first.");
    }
    if (req.session.acc_type != "Admin" && req.session.acc_type != "Trainer" && req.session.acc_type != "User") {
        return res.status(403).send("You are not Admin/Trainer/User!");
    }
    if (typeof req.body.bmi != "number" || typeof req.body.bfp != "number") {
        return res.status(400).send("Incorrect data.")
    }

    connection.query("INSERT INTO `calculator_bmibfp`(`result_bmi`, `result_bfp`, `resultCalc_date`, `user_id`) VALUES (?, ?, ?, ?)", [req.body.bmi, req.body.bfp, new Date(), req.session.userId], (err, values) => {
        if (err !== null) {
            console.error(err)
            return res.sendStatus(500)
        }
        res.sendStatus(200)
    })
})

//************** add exercise record **************
app.post("/userplace/addexerciserecord", (req, res) => {
    if (typeof req.session.userId != "number") {
        return res.status(403).send("You are not login. Log in first.");
    }
    if (req.session.acc_type != "Admin" && req.session.acc_type != "Trainer" && req.session.acc_type != "User") {
        return res.status(403).send("You are not Admin/Trainer/User!");
    }
    if (typeof req.body.exercises_record != "string") {
        return res.status(400).send("Incorrect data.")
    }

    connection.query("INSERT INTO exercises_result(exercisesResult_date, exercisesResult, user_id, exercise_id) SELECT NOW(), ?, ?, e.exercise_id FROM exercises e WHERE e.exercise_name = ?", [req.body.record, req.session.userId, req.body.exercises_record], (err) => {
        if (err !== null) {
            console.error(err)
            return res.sendStatus(500)
        }
        res.sendStatus(200)
    })
})

//************** show bmi/bfp/dcr data **************
app.post("/userplace/selectbmibfpdcr", (req, res) => {
    if (typeof req.session.userId != "number") {
        return res.status(403).send("You are not login. Log in first.");
    }
    if (req.session.acc_type != "Admin" && req.session.acc_type != "Trainer" && req.session.acc_type != "User") {
        return res.status(403).send("You are not Admin/Trainer/User!");
    }
    if (typeof req.body.selectedOption != "string" || typeof req.body.selectedData != "string") {
        return res.status(400).send("Incorrect data.")
    }

    const aggregation = req.body.selectedOption;
    const allowedFunctions = ["MAX", "MIN", "AVG", "latest"];

    const fields = req.body.selectedData;
    const allowedFields = ["result_bmi", "result_bfp", "result_dcr"];

    if (!allowedFunctions.includes(aggregation) || !allowedFields.includes(fields))
        return res.sendStatus(400);

    if (req.body.selectedData === "result_dcr") {
        if (req.body.selectedOption === "latest") {
            connection.query(`SELECT ${fields} AS result FROM \`calculator_dcr\` WHERE \`user_id\` = ? ORDER BY \`resultCalcDcr_date\` DESC LIMIT 1;`, [req.session.userId], (err, values) => {
                if (err !== null) {
                    console.error(err)
                    return res.sendStatus(500)
                }
                res.send(values[0])
            })
        }
        else {
            connection.query(`SELECT ${aggregation}(${fields}) AS result FROM \`calculator_dcr\` WHERE \`user_id\` = ?;`, [req.session.userId], (err, values) => {
                if (err !== null) {
                    console.error(err)
                    return res.sendStatus(500)
                }
                res.send(values[0])
            })
        }
    }

    if (req.body.selectedData === "result_bmi" || req.body.selectedData === "result_bfp") {
        if (req.body.selectedOption === "latest") {
            connection.query(`SELECT ${fields} AS result FROM \`calculator_bmibfp\` WHERE \`user_id\` = ? ORDER BY \`resultCalc_date\` DESC LIMIT 1;`, [req.session.userId], (err, values) => {
                if (err !== null) {
                    console.error(err)
                    return res.sendStatus(500)
                }
                res.send(values[0])
            })
        }
        else {
            connection.query(`SELECT ${aggregation}(${fields}) AS result FROM \`calculator_bmibfp\` WHERE \`user_id\` = ?;`, [req.session.userId], (err, values) => {
                if (err !== null) {
                    console.error(err)
                    return res.sendStatus(500)
                }
                res.send(values[0])
            })
        }
    }
})

//************** save dcr data **************
app.post("/calculators/dcr", (req, res) => {
    if (typeof req.session.userId != "number") {
        return res.status(403).send("You are not login. Log in first.");
    }
    if (req.session.acc_type != "Admin" && req.session.acc_type != "Trainer" && req.session.acc_type != "User") {
        return res.status(403).send("You are not Admin/Trainer/User!");
    }
    if (typeof req.body.kcal != "number") {
        return res.status(400).send("Incorrect data.")
    }

    connection.query("INSERT INTO `calculator_dcr`(`result_dcr`, `resultCalcDcr_date`, `user_id`) VALUES (?, ?, ?)", [req.body.kcal, new Date(), req.session.userId], (err, values) => {
        if (err !== null) {
            console.error(err)
            return res.sendStatus(500)
        }
        res.sendStatus(200)
    })
})

//************** show exercise record **************
app.post("/userplace/selectrecord", async (req, res) => {
    if (typeof req.session.userId != "number") {
        return res.status(403).send("You are not login. Log in first.");
    }
    if (req.session.acc_type != "Admin" && req.session.acc_type != "Trainer" && req.session.acc_type != "User") {
        return res.status(403).send("You are not Admin/Trainer/User!");
    }
    if (typeof req.body.show_exercises_record != "string") {
        return res.status(400).send("Incorrect data.")
    }
    const aggregation = req.body.selectedOption;
    const allowedFunctions = ["MAX", "MIN", "AVG", "latest"];

    if (!allowedFunctions.includes(aggregation))
        return res.sendStatus(400);

    if (req.body.selectedOption === "latest") {
        connection.query(`SELECT r.exercisesResult AS result FROM exercises_result r JOIN exercises e ON e.exercise_id = r.exercise_id WHERE e.exercise_name = ? AND r.user_id = ? ORDER BY r.exercisesResult_date DESC LIMIT 1;`, [req.body.show_exercises_record, req.session.userId], (err, values) => {
            if (err !== null) {
                console.error(err)
                return res.sendStatus(500)
            }
            res.send(values[0])
        })
    }
    else {
        connection.query(`SELECT ${aggregation}(r.exercisesResult) AS result FROM exercises_result r JOIN exercises e ON e.exercise_id = r.exercise_id WHERE e.exercise_name = ? AND r.user_id = ?;`, [req.body.show_exercises_record, req.session.userId], (err, values) => {
            if (err !== null) {
                console.error(err)
                return res.sendStatus(500)
            }
            res.send(values[0])
        })
    }
})

//************** complete/abandon workout plan **************
app.post("/userplace/compabanworkoutplan", (req, res) => {
    if (typeof req.session.userId != "number") {
        return res.status(403).send("You are not login. Log in first.");
    }
    if (req.session.acc_type != "Admin" && req.session.acc_type != "Trainer" && req.session.acc_type != "User") {
        return res.status(403).send("You are not Admin/Trainer/User!");
    }
    if (typeof req.body.chosen_plan != "string" && req.body.selectedOption != "string") {
        return res.status(400).send("Incorrect data.")
    }
    connection.query("SELECT plan_id FROM workout_plans WHERE plan_name = ?", [req.body.chosen_plan], (err, value) => {
        if (err !== null) {
            console.error(err)
            return res.sendStatus(500)
        }
        connection.query("UPDATE workout_plan_time SET workoutPlan_state = ? WHERE user_id = ? AND plan_id = ?", [req.body.selectedOption, req.session.userId, value[0].plan_id], (err, values) => {
            if (err !== null) {
                console.error(err)
                return res.sendStatus(500)
            }
            res.send(values[0])
        })
    })
})

//************** show workout plan/s **************
app.post("/userplace/showworkoutplans", (req, res) => {
    if (typeof req.session.userId != "number") {
        return res.status(403).send("You are not login. Log in first.");
    }
    if (req.session.acc_type != "Admin" && req.session.acc_type != "Trainer" && req.session.acc_type != "User") {
        return res.status(403).send("You are not Admin/Trainer/User!");
    }
    if (typeof req.body.selectedOption != "string") {
        return res.status(400).send("Incorrect data.")
    }
    
    connection.query("SELECT w.plan_name AS result FROM workout_plans w JOIN workout_plan_time t ON w.plan_id = t.plan_id WHERE t.user_id = ? AND t.workoutPlan_state = ? LIMIT 4;", [req.session.userId, req.body.selectedOption], (err, values) => {
        if (err !== null) {
            console.error(err)
            return res.sendStatus(500)
        }
        res.send(values)
    })
})

//************** join workout plan **************
app.post("/workoutplan/joinworkoutplan", (req, res) => {
    if (typeof req.session.userId != "number") {
        return res.status(403).send("You are not login. Log in first.");
    }
    if (typeof req.body.plan_id != "number") {
        return res.status(403).send("Incorrect data.");
    }
    if (req.session.acc_type != "Admin" && req.session.acc_type != "Trainer" && req.session.acc_type != "User") {
        return res.status(403).send("You are not Admin/Trainer/User!");
    }

    connection.query("SELECT COUNT(PlanChoose_id) as Result FROM workout_plan_time WHERE user_id = ? AND workoutPlan_state = ?", [req.session.userId, "Active"], (err, values) => {
        if (err !== null) {
            console.error(err)
            return res.sendStatus(500)
        }
        if (values[0].Result > 0) {
            return res.status(403).send("You already have one active workout plan!");
        }
        connection.query("INSERT INTO workout_plan_time(PlanStart_date, workoutPlan_state, user_id, plan_id) VALUES (NOW(), ?, ?, ?)", ["Active", req.session.userId, req.body.plan_id], (err, values) => {
            if (err !== null) {
                console.error(err)
                return res.sendStatus(500)
            }
            res.send(values[0])
        })
    })
})

//#################### Trainer ####################

//************** create new trainer **************
app.post("/userplace/createnewtrainer", (req, res) => {
    if (typeof req.session.userId != "number") {
        return res.status(403).send("You are not login. Log in first.");
    }
    if (req.session.acc_type != "Trainer" && req.session.acc_type != "Admin") {
        return res.status(403).send("You are not Admin/Trainer!");
    }
    if (typeof req.body.show_user_data_name != "string") {
        return res.status(400).send("Incorrect data.")
    }
    connection.query("SELECT userAcc_type FROM user_accounts WHERE user_name = ? AND user_username = ?", [req.body.show_user_data_name, req.body.show_user_data_username], (err, values) => {
        if (err !== null) {
            console.error(err)
            return res.sendStatus(500)
        }
        if (values[0].userAcc_type == "Admin") {
            return res.send("Selected account is a Administrator, cannot be chanced to Trainer!")
            //return res.status(400).send("Selected account is a Administrator, cannot be chanced to Trainer!")
        }
        connection.query("UPDATE `user_accounts` SET `userAcc_type` = 'Trainer' WHERE `user_name` = ? AND `user_username` = ?", [req.body.show_user_data_name, req.body.show_user_data_username], (err, values) => {
            if (err !== null) {
                console.error(err)
                return res.sendStatus(500)
            }
            res.sendStatus(200)
        })
    })
})

//************** create workout plan **************
app.post("/userplace/createworkoutplan", (req, res) => {
    if (typeof req.session.userId != "number") {
        return res.status(403).send("You are not login. Log in first.");
    }
    if (req.session.acc_type != "Trainer" && req.session.acc_type != "Admin") {
        return res.status(403).send("You are not Admin/Trainer!");
    }
    const { plan_name, plan_goal, plan_dec, duration, difficulty, exercises_arr } = req.body

    connection.beginTransaction(function (err) {
        if (err !== null) {
            console.error(err)
            return res.sendStatus(500)
        }

        connection.query("INSERT INTO `workout_plans`(plan_name, plan_goal, plan_description, plan_time, plan_difficulty) VALUES (?, ?, ?, ?, ?)", [plan_name, plan_goal, plan_dec, duration, difficulty], (err, result) => {
            if (err !== null) {
                return connection.rollback(function () {
                    console.error(err)
                    return res.sendStatus(500)
                });
            }

            const values = exercises_arr.map(({ index, exercises_id, series, reps }) => [result.insertId, exercises_id, index, series, reps])

            connection.query("INSERT INTO `plans_has_exercices`(`plan_id`, `exercise_id`, `Exer_number`, `Series`, `Reps`) VALUES ?", [values], (err) => {
                if (err !== null) {
                    return connection.rollback(function () {
                        console.error(err)
                        return res.sendStatus(500)
                    });
                }
                connection.commit(function (err) {
                    if (err) {
                        return connection.rollback(function () {
                            console.error(err)
                            return res.sendStatus(500)
                        });
                    }
                    res.sendStatus(200)
                })
            })
        })
    })
})

//************** delete workout plan **************
app.post("/userplace/deleteworkoutplan", (req, res) => {
    if (typeof req.session.userId != "number") {
        return res.status(403).send("You are not login. Log in first.");
    }
    if (req.session.acc_type != "Admin" && req.session.acc_type != "Trainer" && req.session.acc_type != "User") {
        return res.status(403).send("You are not Admin/Trainer/User!");
    }
    
    connection.query("SELECT COUNT(t.workoutPlan_state) as result FROM workout_plan_time t JOIN workout_plans w ON t.plan_id = w.plan_id WHERE w.plan_name = ? AND t.workoutPlan_state = ?", [req.body.chosen_plan, "Active"], (err, values) => {
        if (err !== null) {
            console.error(err)
            return res.sendStatus(500)
        }
        if (values[0].result > 0 ) {
            return res.status(400).send("Cannot delete workout plan with active user(s)!")
        }
        connection.query("DELETE FROM workout_plans WHERE plan_name = ?", [req.body.chosen_plan], (err, values) => {
            if (err !== null) {
                console.error(err)
                return res.sendStatus(500)
            }
            res.sendStatus(200)
        })
    })
})

//************** show user workout plan/s **************
app.post("/userplace/showuserworkoutplans", (req, res) => {
    if (typeof req.session.userId != "number") {
        return res.status(403).send("You are not login. Log in first.");
    }
    if (req.session.acc_type != "Admin" && req.session.acc_type != "Trainer" && req.session.acc_type != "User") {
        return res.status(403).send("You are not Admin/Trainer/User!");
    }
    if (typeof req.body.selectedOption != "string" && typeof req.body.user_name != "string") {
        return res.status(400).send("Incorrect data.")
    }
    
    connection.query("SELECT w.plan_name AS result FROM workout_plans w JOIN workout_plan_time t ON w.plan_id = t.plan_id JOIN user_accounts u ON u.user_id = t.user_id WHERE u.user_username = ? AND u.user_name = ? AND t.workoutPlan_state = ? LIMIT 4;", [req.body.user_username, req.body.user_name, req.body.selectedOption], (err, values) => {
        if (err !== null) {
            console.error(err)
            return res.sendStatus(500)
        }
        res.send(values)
    })
})

//************** show user exercise record **************
app.post("/userplace/selectuserexerciserecord", (req, res) => {
    if (typeof req.session.userId != "number") {
        return res.status(403).send("You are not login. Log in first.");
    }
    if (req.session.acc_type != "Trainer" && req.session.acc_type != "Admin") {
        return res.status(403).send("You are not Admin/Trainer!");
    }
    if (typeof req.body.show_user_data_name != "string" || typeof req.body.show_user_data_username != "string"
        || typeof req.body.selectedOptionAggr != "string" || typeof req.body.show_user_data_exercise != "string") {
        return res.status(400).send("Incorrect data.")
    }

    const aggregation = req.body.selectedOptionAggr;
    const allowedFunctions = ["MAX", "MIN", "AVG", "latest"];

    if (!allowedFunctions.includes(aggregation))
        return res.sendStatus(400);

    if (aggregation === "latest") {
        connection.query(`SELECT r.exercisesResult AS result FROM exercises_result r JOIN exercises e ON e.exercise_id = r.exercise_id JOIN user_accounts u ON u.user_id = r.user_id WHERE e.exercise_name = ? AND u.user_username = ? ORDER BY r.exercisesResult_date DESC LIMIT 1;`, [req.body.show_user_data_exercise, req.body.show_user_data_username], (err, values) => {
            if (err !== null) {
                console.error(err)
                return res.sendStatus(500)
            }
            res.send(values[0])
        })
    }
    else {
        connection.query(`SELECT ${aggregation}(r.exercisesResult) AS result FROM exercises_result r JOIN exercises e ON e.exercise_id = r.exercise_id JOIN user_accounts u ON u.user_id = r.user_id WHERE e.exercise_name = ? AND u.user_username = ?;`, [req.body.show_user_data_exercise, req.body.show_user_data_username], (err, values) => {
            if (err !== null) {
                console.error(err)
                return res.sendStatus(500)
            }
            res.send(values[0])
        })
    }
})

//************** count user comb/aban workout plans **************
app.post("/userplace/countuserworkoutplans", (req, res) => {
    if (typeof req.session.userId != "number") {
        return res.status(403).send("You are not login. Log in first.");
    }
    if (req.session.acc_type != "Trainer" && req.session.acc_type != "Admin") {
        return res.status(403).send("You are not Admin/Trainer!");
    }
    if (typeof req.body.user_name != "string") {
        return res.status(400).send("Incorrect data.")
    }

    connection.query("SELECT COUNT(w.PlanChoose_id) AS result FROM workout_plan_time w JOIN user_accounts u ON w.user_id = u.user_id WHERE u.user_username = ? AND u.user_name = ? AND w.workoutPlan_state = ?", [req.body.user_username, req.body.user_name, req.body.selectedOption], (err, values) => {
        if (err !== null) {
            console.error(err)
            return res.sendStatus(500)
        }
        res.send(values[0])
    })
})

//************** show user bmi/bfp/dcr **************
app.post("/userplace/selectuserbmibfpdcr", (req, res) => {
    if (typeof req.session.userId != "number") {
        return res.status(403).send("You are not login. Log in first.");
    }
    if (req.session.acc_type != "Trainer" && req.session.acc_type != "Admin") {
        return res.status(403).send("You are not Admin/Trainer!");
    }
    if (typeof req.body.show_user_data_name != "string" || typeof req.body.show_user_data_username != "string"
        || typeof req.body.selectedOptionAggr != "string" || typeof req.body.selectedOptionType != "string") {
        return res.status(400).send("Incorrect data.")
    }

    const aggregation = req.body.selectedOptionAggr;
    const allowedFunctions = ["MAX", "MIN", "AVG", "latest"];

    const fields = req.body.selectedOptionType;
    const allowedFields = ["result_bmi", "result_bfp", "result_dcr"];

    if (!allowedFunctions.includes(aggregation) || !allowedFields.includes(fields))
        return res.sendStatus(400);

    if (req.body.selectedOptionType === "result_dcr") {
        if (aggregation === "latest") {
            connection.query(`SELECT c.${fields} AS result FROM calculator_dcr c JOIN user_accounts u ON u.user_id = c.user_id WHERE u.user_username = ? ORDER BY c.resultCalcDcr_date DESC LIMIT 1`, [req.body.show_user_data_username], (err, values) => {
                if (err !== null) {
                    console.error(err)
                    return res.sendStatus(500)
                }
                res.send(values[0])
            })
        }
        else {
            connection.query(`SELECT ${aggregation}(c.${fields}) AS result FROM calculator_dcr c JOIN user_accounts u ON u.user_id = c.user_id WHERE u.user_username = ?;`, [req.body.show_user_data_username], (err, values) => {
                if (err !== null) {
                    console.error(err)
                    return res.sendStatus(500)
                }
                res.send(values[0])
            })
        }
    }

    if (req.body.selectedOptionType === "result_bmi" || req.body.selectedOptionType === "result_bfp") {
        if (aggregation === "latest") {
            connection.query(`SELECT c.${fields} AS result FROM calculator_bmibfp c JOIN user_accounts u ON u.user_id = c.user_id WHERE u.user_username = ? ORDER BY c.resultCalc_date DESC LIMIT 1;`, [req.body.show_user_data_username], (err, values) => {
                if (err !== null) {
                    console.error(err)
                    return res.sendStatus(500)
                }
                res.send(values[0])
            })
        }
        else {
            connection.query(`SELECT ${aggregation}(c.${fields}) AS result FROM calculator_bmibfp c JOIN user_accounts u ON u.user_id = c.user_id WHERE u.user_username = ?;`, [req.body.show_user_data_username], (err, values) => {
                if (err !== null) {
                    console.error(err)
                    return res.sendStatus(500)
                }
                res.send(values[0])
            })
        }
    }
})

//#################### ADMIN ####################

//************** create new admin **************
app.post("/userplace/createnewadmin", (req, res) => {
    if (typeof req.session.userId != "number") {
        return res.status(403).send("You are not login. Log in first.");
    }
    if (req.session.acc_type != "Admin") {
        return res.status(403).send("You are not Admin!");
    }
    if (typeof req.body.show_user_data_name != "string") {
        return res.status(400).send("Incorrect data.")
    }
    connection.query("SELECT userAcc_type FROM user_accounts WHERE user_name = ? AND user_username = ?", [req.body.show_user_data_name, req.body.show_user_data_username], (err, values) => {
        if (err !== null) {
            console.error(err)
            return res.sendStatus(500)
        }
        if (values[0].userAcc_type == "Admin") {
            return res.status(400).send("Selected account is already Administrator!")
        }
        connection.query("UPDATE `user_accounts` SET `userAcc_type` = 'Admin' WHERE `user_name` = ? AND `user_username` = ?", [req.body.show_user_data_name, req.body.show_user_data_username], (err, values) => {
            if (err !== null) {
                console.error(err)
                return res.sendStatus(500)
            }
            res.sendStatus(200)
        })
    })
})

//************** ban/active user account **************
app.post("/userplace/banaccaccount", (req, res) => {
    if (typeof req.session.userId != "number") {
        return res.status(403).send("You are not login. Log in first.");
    }
    if (req.session.acc_type != "Admin") {
        return res.status(403).send("You are not Admin!");
    }
    if (typeof req.body.show_user_data_name != "string" || typeof req.body.selectedData != "string") {
        return res.status(400).send("Incorrect data.")
    }
    if (req.body.show_user_data_name == "Witold" && req.body.show_user_data_username == "Unsinkable2_") {
        return res.status(400).send("You cannot ban/active application creator account!")
    }
    connection.query("UPDATE `user_accounts` SET `userAcc_activation`= ? WHERE `user_name` = ? AND `user_username` = ?", [req.body.selectedData, req.body.show_user_data_name, req.body.show_user_data_username], (err, values) => {
        if (err !== null) {
            console.error(err)
            return res.sendStatus(500)
        }
        res.sendStatus(200)
    })
})

//************** degraded user account **************
app.post("/userplace/degradeduser", (req, res) => {
    if (typeof req.session.userId != "number") {
        return res.status(403).send("You are not login. Log in first.");
    }
    if (req.session.acc_type != "Admin") {
        return res.status(403).send("You are not Admin!");
    }
    if (typeof req.body.show_user_data_name != "string" || typeof req.body.show_user_new_value != "string") {
        return res.status(400).send("Incorrect data.")
    }
    if (req.body.show_user_data_name == "Witold" && req.body.show_user_data_username == "Unsinkable2_") {
        return res.status(400).send("You cannot degrade application creator account!")
    }
    connection.query("UPDATE `user_accounts` SET `userAcc_type`= ? WHERE `user_name` = ? AND `user_username` = ?", [req.body.show_user_new_value, req.body.show_user_data_name, req.body.show_user_data_username], (err, values) => {
        if (err !== null) {
            console.error(err)
            return res.sendStatus(500)
        }
        res.sendStatus(200)
    })
})

//#################### OTHER ####################

//************** login to app **************
app.post("/login", (req, res) => {
    console.log(req.body);
    connection.query("Select * From user_accounts Where user_username = ? and user_password = ?", [req.body.username, req.body.password], (err, values) => {
        console.log(err, values);
        if (err === null && values.length) {
            if (values[0].userAcc_activation !== "Activate") {
                return res.redirect("/login?err=ban")
            }
            req.session.userId = values[0].user_id;
            req.session.acc_type = values[0].userAcc_type;
        } else {
            return res.redirect("/login?err=true")
        }
        res.redirect("/")
    })
});

//************** register to app **************
app.post("/register", async (req, res) => {
    console.log(req.body);
    const {
        username_reg,
        name_reg,
        password_reg
    } = req.body

    const { verify } = await ver;
    const error = verify(username_reg, name_reg, password_reg);
    if (error) {
        return res.redirect(`/login?register_error=${encodeURIComponent(error)}`);
    }
    connection.query("Insert Into user_accounts (user_username, user_name, user_password, userAcc_type, userAccCreation_time, userAcc_activation) Values (?, ?, ?, 'User', ?, 'Activate')", [username_reg, name_reg, password_reg, new Date()], (err, values) => {
        console.log(err, values);
        if (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                return res.redirect(`/login?register_error=${encodeURIComponent("Duplicate of Username")}`);
            }
            return res.redirect(`/login?register_error=${encodeURIComponent("A Error Ocurred")}`);
        }
        res.redirect("/login");
    })
});

app.listen(process.env.PORT || 3000, () => console.log("Server running.."));