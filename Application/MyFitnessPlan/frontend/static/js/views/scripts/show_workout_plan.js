document.getElementById('show_workout_plans_button').addEventListener('click', async () => {
    try {

        var elements = [
            "show_act_abd_comp_workout_plans_show_text_1",
            "show_act_abd_comp_workout_plans_show_text_2",
            "show_act_abd_comp_workout_plans_show_text_3",
            "show_act_abd_comp_workout_plans_show_text_4"
        ]

        document.getElementById("show_act_abd_comp_workout_plans_show_text_1").innerText = ""
        document.getElementById("show_act_abd_comp_workout_plans_show_text_2").innerText = ""
        document.getElementById("show_act_abd_comp_workout_plans_show_text_3").innerText = ""
        document.getElementById("show_act_abd_comp_workout_plans_show_text_4").innerText = ""

        var filtrOptionWorkoutPlan = document.getElementsByName('Show_workout_plan_option');
        var selectedOption = Array.from(filtrOptionWorkoutPlan).find(radio => radio.checked);

        var selectedOption = selectedOption.value;

        const response = await fetch("/userplace/showworkoutplans", {
            method: "POST", body: JSON.stringify({
                selectedOption
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