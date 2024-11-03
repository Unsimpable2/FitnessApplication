document.getElementById('count_chosen_user_workout_plan_button').addEventListener('click', async() => {
    try {
        var  user_name_workout_plan = document.getElementById("count_workout_plan_users_choose");
        var  user_name = user_name_workout_plan.options[user_name_workout_plan.selectedIndex].text;

        var  user_username_workout_plan = document.getElementById("count_workout_plan_users_choose_option");
        var  user_username = user_username_workout_plan.options[user_username_workout_plan.selectedIndex].text;

        var filtrOptionWorkoutPlan = document.getElementsByName('count_comp_aba_option');
        var selectedOption = Array.from(filtrOptionWorkoutPlan).find(radio => radio.checked);

        var selectedOption = selectedOption.value;

        const response = await fetch("/userplace/countuserworkoutplans", {
            method: "POST", body: JSON.stringify( {
                user_name, user_username, selectedOption
            }), headers: {
                'Content-Type': 'application/json'
            }
        })
        const body = await response.json()

        document.getElementById('count_workout_plan_users_text_show').innerText = body.result;
    }
    catch (e) { }
});