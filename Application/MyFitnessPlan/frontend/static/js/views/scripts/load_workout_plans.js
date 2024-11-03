(async function () {
    const response = await fetch("/workoutplan/loadplans")
    /** @type {HTMLTemplateElement} */
    const plan_template = document.getElementById("template")
    const plan_exercises_template = document.getElementById("exersices_template_data")
    const main_workout_plan_box = document.getElementById("wkorkout_plan_update")
    const body = await response.json()
    
    const all_plans = document.createDocumentFragment()

    for (const plan of body) {
        const plan_fragment = plan_template.content.cloneNode(true)
        const main_workout_div = plan_fragment.children[0]
        
        main_workout_div.children[0].textContent = plan.plan_name
        main_workout_div.children[1].children[0].textContent = plan.plan_goal
        main_workout_div.children[3].children[0].textContent = plan.plan_description
        main_workout_div.children[5].children[0].textContent = plan.plan_time
        main_workout_div.children[7].children[0].textContent = plan.plan_difficulty

        main_workout_div.getElementsByClassName("workout_plan_join_button")[0].addEventListener("click", e => {
            try {
                join_plan(plan.plan_id)
            }
            catch(e){}
        })

        const all_exercises = document.createDocumentFragment()
        
        for (const exercise of plan.exercises) {
            const exercise_fragment = plan_exercises_template.content.cloneNode(true)

            const main_exercise_div = exercise_fragment.children[0]
            main_exercise_div.childNodes[0].textContent = exercise.Exer_number + ". "
            main_exercise_div.children[0].textContent = exercise.exercise_name
            main_exercise_div.children[1].textContent = exercise.Series
            main_exercise_div.children[3].textContent = exercise.Reps

            all_exercises.appendChild(exercise_fragment)
        }
        main_workout_div.getElementsByClassName("exercises_info")[0].replaceChildren(all_exercises)
        all_plans.appendChild(plan_fragment)
    }
    main_workout_plan_box.replaceChildren(all_plans)

})()

function join_plan(id) {
    
    var plan_id = id
        fetch("/workoutplan/joinworkoutplan", {
            method: "POST", body: JSON.stringify( {
                plan_id 
            }), headers: {
                'Content-Type': 'application/json'
            }
        }) 
}
