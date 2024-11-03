document.getElementById('comp_ab_workout_plans_button').addEventListener('click', async () =>{
    try{
        var filtrOptionWorkoutPlan = document.getElementsByName('comp_aba_option');
        var selectedOption = Array.from(filtrOptionWorkoutPlan).find(radio => radio.checked);

        var selectedOption = selectedOption.value;

        var chosen_workout_plan = document.getElementById("workout_plan_select");
        var chosen_plan = chosen_workout_plan.options[chosen_workout_plan.selectedIndex].text;

        fetch("/userplace/compabanworkoutplan", {
            method: "POST", body: JSON.stringify( {
                selectedOption, chosen_plan
            }), headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    catch (e) { }
});