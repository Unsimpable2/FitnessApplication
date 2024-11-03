document.getElementById('show_chosen_user_record_option_button').addEventListener('click', async () =>{
    try{
        var  show_user_exer_record_name = document.getElementById("show_user_record_choose");
        var  show_user_data_name = show_user_exer_record_name.options[show_user_exer_record_name.selectedIndex].text;

        var  show_user_exer_record_username = document.getElementById("show_user_record_choose_option");
        var  show_user_data_username = show_user_exer_record_username.options[show_user_exer_record_username.selectedIndex].text;

        var filtrOptionAggr = document.getElementsByName('show_user_record_options_op');
        var selectedOptionAggr = Array.from(filtrOptionAggr).find(radio => radio.checked);

        var selectedOptionAggr = selectedOptionAggr.value;

        var  show_user_exer_record_exercise = document.getElementById("show_user_record_options_version_sec_exe_opt_cho");
        var  show_user_data_exercise = show_user_exer_record_exercise.options[show_user_exer_record_exercise.selectedIndex].text;

        const response = await fetch("/userplace/selectuserexerciserecord", {
            method: "POST", body: JSON.stringify( {
                show_user_data_name, show_user_data_username, 
                selectedOptionAggr, show_user_data_exercise
            }), headers: {
                'Content-Type': 'application/json'
            }
        })
        const body = await response.json()

        document.getElementById('show_user_record_text_show').innerText = body.result.toFixed(2) + "kg"

    }
    catch (e) { }
});