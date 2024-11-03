document.getElementById('show_act_abd_comp_workout_plans_button').addEventListener('click', async() => {
    try {

        var elements = [
            "show_user_act_abd_comp_workout_plans_show_text_1",
            "show_user_act_abd_comp_workout_plans_show_text_2",
            "show_user_act_abd_comp_workout_plans_show_text_3",
            "show_user_act_abd_comp_workout_plans_show_text_4"
        ]

        document.getElementById("show_user_act_abd_comp_workout_plans_show_text_1").innerText = ""
        document.getElementById("show_user_act_abd_comp_workout_plans_show_text_2").innerText = ""
        document.getElementById("show_user_act_abd_comp_workout_plans_show_text_3").innerText = ""
        document.getElementById("show_user_act_abd_comp_workout_plans_show_text_4").innerText = ""


        var  user_name_workout_plan = document.getElementById("show_act_abd_comp_workout_plans_choose");
        var  user_name = user_name_workout_plan.options[user_name_workout_plan.selectedIndex].text;

        var  user_username_workout_plan = document.getElementById("show_act_abd_comp_workout_plans_choose_option");
        var  user_username = user_username_workout_plan.options[user_username_workout_plan.selectedIndex].text;

        var filtrOptionWorkoutPlan = document.getElementsByName("show_act_abd_comp_workout_plans_op");
        var selectedOption = Array.from(filtrOptionWorkoutPlan).find(radio => radio.checked);

        var selectedOption = selectedOption.value;

        const response = await fetch("/userplace/showuserworkoutplans", {
            method: "POST", body: JSON.stringify( {
                user_name, user_username, selectedOption
            }), headers: {
                'Content-Type': 'application/json'
            }
        })
        const body = await response.json()

        for (let i = 0; i <= body.length; i++) {
            document.getElementById(elements[i]).innerText = body[i].result
        }
    }
    catch (e) { }
});