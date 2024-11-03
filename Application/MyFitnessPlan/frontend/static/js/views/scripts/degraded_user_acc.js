document.getElementById('degraded_user_account_button').addEventListener('click', () => {
    try {
        var  degraded_user_acc_name = document.getElementById("degraded_user_account_choose");
        var  show_user_data_name = degraded_user_acc_name.options[degraded_user_acc_name.selectedIndex].text;

        var  degraded_user_acc_new_value = document.getElementById("degraded_user_account_choose_option");
        var  show_user_data_username = degraded_user_acc_new_value.options[degraded_user_acc_new_value.selectedIndex].text;

        var  degraded_user_acc_new_value = document.getElementById("degraded_user_account_new_value");
        var  show_user_new_value = degraded_user_acc_new_value.options[degraded_user_acc_new_value.selectedIndex].text;

        fetch("/userplace/degradeduser", {
            method: "POST", body: JSON.stringify( {
                show_user_data_name, show_user_data_username, show_user_new_value
            }), headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    catch (e) { }
});