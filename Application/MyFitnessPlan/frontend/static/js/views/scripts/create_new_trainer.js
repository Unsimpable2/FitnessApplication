document.getElementById('create_new_trainer_button').addEventListener('click', async() => {
    try {
        var  create_new_trainer_name = document.getElementById("create_triner_select_choose");
        var  show_user_data_name = create_new_trainer_name.options[create_new_trainer_name.selectedIndex].text;

        var  create_new_trainer_username = document.getElementById("create_triner_select_choose_option");
        var  show_user_data_username = create_new_trainer_username.options[create_new_trainer_username.selectedIndex].text;

        fetch("/userplace/createnewtrainer", {
            method: "POST", body: JSON.stringify( {
                show_user_data_name, show_user_data_username 
            }), headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    catch (e) { }
});