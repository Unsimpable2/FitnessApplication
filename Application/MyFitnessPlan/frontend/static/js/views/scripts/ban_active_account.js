document.getElementById('ban_activ_user_acc_button').addEventListener('click', () => {
    try {
        var filtrData = document.getElementsByName('ban_activ_user_accoption');
        var selectedData = Array.from(filtrData).find(radio => radio.checked);

        var selectedData = selectedData.value;

        var  ban_active_acc_name = document.getElementById("ban_activ_user_acc_choose");
        var  show_user_data_name = ban_active_acc_name.options[ban_active_acc_name.selectedIndex].text;

        var  ban_actve_acc_username = document.getElementById("ban_activ_user_acc_choose_option");
        var  show_user_data_username = ban_actve_acc_username.options[ban_actve_acc_username.selectedIndex].text;

        fetch("/userplace/banaccaccount", {
            method: "POST", body: JSON.stringify( {
                selectedData, show_user_data_name, show_user_data_username 
            }), headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    catch (e) { }
});