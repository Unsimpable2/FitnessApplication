document.getElementById('add_record_section_button').addEventListener('click', async () =>{
    try{
       var exercises_choosen = document.getElementById("add_record_section_exer");
       var exercises_record = exercises_choosen.options[exercises_choosen.selectedIndex].text;
       
       var record = document.getElementById("record_kg").value;
       
       record = parseFloat(record)
       
        fetch("/userplace/addexerciserecord", {
            method: "POST", body: JSON.stringify({
                exercises_record, record
            }), headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    catch (e){}
});