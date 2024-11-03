document.getElementById('create_new_admin_button').addEventListener('click', () => {
    try {
        var  create_new_admin_name = document.getElementById("create_new_admin_choose");
        var  show_user_data_name = create_new_admin_name.options[create_new_admin_name.selectedIndex].text;

        var  create_new_admin_username = document.getElementById("create_new_admin_choose_option");
        var  show_user_data_username = create_new_admin_username.options[create_new_admin_username.selectedIndex].text;

        fetch("/userplace/createnewadmin", {
            method: "POST", body: JSON.stringify( {
                show_user_data_name, show_user_data_username 
            }), headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    catch (e) { }
});