

document.getElementById('delete_workout_plan_button').addEventListener('click', () =>{
    try{
    
        var chosen_workout_plan = document.getElementById("workout_plan_select2");
        var chosen_plan = chosen_workout_plan.options[chosen_workout_plan.selectedIndex].text;

        fetch("/userplace/deleteworkoutplan", {
            method: "POST", body: JSON.stringify( {
                chosen_plan
            }), headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    catch (e) { }
});