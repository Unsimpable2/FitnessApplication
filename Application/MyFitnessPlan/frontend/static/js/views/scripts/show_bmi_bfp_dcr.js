document.getElementById('show_chosen_option_button').addEventListener('click', async () =>{
    try{
        var filtrOption = document.getElementsByName('Show_bmi_bfp_dcr_op');
        var selectedOption = Array.from(filtrOption).find(radio => radio.checked);

        var filtrData = document.getElementsByName('Show_bmi_bfp_dcr');
        var selectedData = Array.from(filtrData).find(radio => radio.checked);

        var selectedOption = selectedOption.value;
        var selectedData = selectedData.value;

        if(selectedData === "bmi"){
            selectedData = "result_bmi"
        }

        if(selectedData === "bfp"){
            selectedData = "result_bfp"
        }

        if(selectedData === "dcr"){
            selectedData = "result_dcr"; 
        }

        const response = await fetch("/userplace/selectbmibfpdcr", {
            method: "POST", body: JSON.stringify( {
                selectedOption, selectedData
            }), headers: {
                'Content-Type': 'application/json'
            }
        })
        const body = await response.json()

        document.getElementById('user_text_show').innerText = body.result.toFixed(2);

    }
    catch (e){}
});