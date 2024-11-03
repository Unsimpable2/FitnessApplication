document.getElementById('show_chosen_user_option_button').addEventListener('click', async () =>{
    try{
        var  show_user_b_b_d_name = document.getElementById("show_user_bmi_bfp_dcr_choose");
        var  show_user_data_name = show_user_b_b_d_name.options[show_user_b_b_d_name.selectedIndex].text;

        var  show_user_b_b_d_username = document.getElementById("show_user_bmi_bfp_dcr_choose_option");
        var  show_user_data_username = show_user_b_b_d_username.options[show_user_b_b_d_username.selectedIndex].text;

        var filtrOptionAggr = document.getElementsByName('show_user_bmi_bfp_dcr_op');
        var selectedOptionAggr = Array.from(filtrOptionAggr).find(radio => radio.checked);

        var selectedOptionAggr = selectedOptionAggr.value;

        var filtrOptionType = document.getElementsByName('show_user_bmi_bfp_dcr_ver');
        var selectedOptionType = Array.from(filtrOptionType).find(radio => radio.checked);

        var selectedOptionType = selectedOptionType.value;

        if(selectedOptionType === "bmi") {
            selectedOptionType = "result_bmi"
        }

        if(selectedOptionType === "bfp") {
            selectedOptionType = "result_bfp"
        }

        if(selectedOptionType === "dcr") {
            selectedOptionType = "result_dcr"
        }

        const response = await fetch("/userplace/selectuserbmibfpdcr", {
            method: "POST", body: JSON.stringify( {
                show_user_data_name, show_user_data_username, 
                selectedOptionAggr, selectedOptionType
            }), headers: {
                'Content-Type': 'application/json'
            }
        })
        const body = await response.json()

        document.getElementById('show_user_bmi_bfp_dcr_text_show').innerText = body.result.toFixed(2)

    }
    catch (e) { }
});