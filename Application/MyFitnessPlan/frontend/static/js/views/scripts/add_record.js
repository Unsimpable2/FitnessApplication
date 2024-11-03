function add_record_func(event){
    
    const section = event.target.value
    const fragment = document.createDocumentFragment()

    userplacedata.filter(chosen_data => chosen_data.exercise_part == section).forEach(exercise => {
        const option = document.createElement("option")
        option.textContent = exercise.exercise_name
        option.value = exercise.exercise_id
        fragment.appendChild(option)
    });
    document.getElementById(event.target.dataset.secondSelect).replaceChildren(fragment)
}

var all_id = ["add_record_section_choose", 
                "show_record_section_choose", 
                "show_user_record_options_version_sec_exe_opt",
                "add_exer_workout_plan_opt1",
                "add_exer_workout_plan_opt2",
                "add_exer_workout_plan_opt3",
                "add_exer_workout_plan_opt4",
                "add_exer_workout_plan_opt5",
                "add_exer_workout_plan_opt6",
                "add_exer_workout_plan_opt7",
                "add_exer_workout_plan_opt8"]

for (const id of all_id) {
    const change_option = document.getElementById(id);
    change_option.addEventListener("change", add_record_func)

    add_record_func({
        target: change_option
    })
}