document.getElementById('create_workout_plan_button').addEventListener('click', () => {
    try {
        var plan_name = document.getElementById("workout_plan_name").value;
        var plan_goal = document.getElementById("workout_plan_goal").value;
        var plan_dec = document.getElementById("workout_plan_description").value;

        var plan_duration = document.getElementById("workout_plan_duration");
        var duration = plan_duration.options[plan_duration.selectedIndex].text;

        var plan_difficulty = document.getElementById("workout_plan_diff");
        var difficulty = plan_difficulty.options[plan_difficulty.selectedIndex].text;

        var option_exer_1 = document.getElementById("add_exer_workout_plan_opt1_exer1");
        var exer_1 = option_exer_1.options[option_exer_1.selectedIndex].value;
        var exer_1_series = document.getElementById("workout_plan_series_1").value;
        var exer_1_reps = document.getElementById("workout_plan_reps_1").value;

        var option_exer_2 = document.getElementById("add_exer_workout_plan_opt2_exer1");
        var exer_2 = option_exer_2.options[option_exer_2.selectedIndex].value;
        var exer_2_series = document.getElementById("workout_plan_series_2").value;
        var exer_2_reps = document.getElementById("workout_plan_reps_2").value;

        var option_exer_3 = document.getElementById("add_exer_workout_plan_opt3_exer1");
        var exer_3 = option_exer_3.options[option_exer_3.selectedIndex].value;
        var exer_3_series = document.getElementById("workout_plan_series_3").value;
        var exer_3_reps = document.getElementById("workout_plan_reps_3").value;

        var option_exer_4 = document.getElementById("add_exer_workout_plan_opt4_exer1");
        var exer_4 = option_exer_4.options[option_exer_4.selectedIndex].value;
        var exer_4_series = document.getElementById("workout_plan_series_4").value;
        var exer_4_reps = document.getElementById("workout_plan_reps_4").value;

        var option_exer_5 = document.getElementById("add_exer_workout_plan_opt5_exer1");
        var exer_5 = option_exer_5.options[option_exer_5.selectedIndex].value;
        var exer_5_series = document.getElementById("workout_plan_series_5").value;
        var exer_5_reps = document.getElementById("workout_plan_reps_5").value;

        var option_exer_6 = document.getElementById("add_exer_workout_plan_opt6_exer1");
        var exer_6 = option_exer_6.options[option_exer_6.selectedIndex].value;
        var exer_6_series = document.getElementById("workout_plan_series_6").value;
        var exer_6_reps = document.getElementById("workout_plan_reps_6").value;

        var option_exer_7 = document.getElementById("add_exer_workout_plan_opt7_exer1");
        var exer_7 = option_exer_7.options[option_exer_7.selectedIndex].value;
        var exer_7_series = document.getElementById("workout_plan_series_7").value;
        var exer_7_reps = document.getElementById("workout_plan_reps_7").value;

        var option_exer_8 = document.getElementById("add_exer_workout_plan_opt8_exer1");
        var exer_8 = option_exer_8.options[option_exer_8.selectedIndex].value;
        var exer_8_series = document.getElementById("workout_plan_series_8").value;
        var exer_8_reps = document.getElementById("workout_plan_reps_8").value;

        const exercises_arr = [
            { index: 1, exercises_id: exer_1, series: exer_1_series, reps: exer_1_reps },
            { index: 2, exercises_id: exer_2, series: exer_2_series, reps: exer_2_reps },
            { index: 3, exercises_id: exer_3, series: exer_3_series, reps: exer_3_reps },
            { index: 4, exercises_id: exer_4, series: exer_4_series, reps: exer_4_reps },
            { index: 5, exercises_id: exer_5, series: exer_5_series, reps: exer_5_reps },
            { index: 6, exercises_id: exer_6, series: exer_6_series, reps: exer_6_reps },
            { index: 7, exercises_id: exer_7, series: exer_7_series, reps: exer_7_reps },
            { index: 8, exercises_id: exer_8, series: exer_8_series, reps: exer_8_reps }]

        fetch("/userplace/createworkoutplan", {
            method: "POST", body: JSON.stringify({
                plan_name, plan_goal, plan_dec, duration, difficulty, exercises_arr
            }), headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    catch (e) { }
});