document.getElementById('show_record_button').addEventListener('click', async () =>{
    try{
        var filtrOption = document.getElementsByName('Show_record_op');
        var selectedOption = Array.from(filtrOption).find(radio => radio.checked);

        var selectedOption = selectedOption.value;

        var show_exercises_choosen = document.getElementById("show_record_section_exer");
        var show_exercises_record = show_exercises_choosen.options[show_exercises_choosen.selectedIndex].text;

        const response = await fetch("/userplace/selectrecord", {
            method: "POST", body: JSON.stringify( {
                selectedOption, show_exercises_record
            }), headers: {
                'Content-Type': 'application/json'
            }
        })
        const body = await response.json()

        document.getElementById('show_record_text').innerText = body.result.toFixed(2) + "kg";
    }
    catch (e) { }
});