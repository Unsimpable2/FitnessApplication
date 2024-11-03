document.getElementById('calculate_bmi_bfp').addEventListener('click', () =>{
    try{
        var gender = document.getElementsByName('Sex');
        var selected = Array.from(gender).find(radio => radio.checked);

        var height = document.getElementById("Height").value;
        var weight = document.getElementById("Weight").value;
        var neck = document.getElementById('Neck').value;
        var waist = document.getElementById('Waist').value;

        height = parseInt(height);
        weight = parseInt(weight);
        neck = parseInt(neck);
        waist = parseInt(waist);

        var bmi = (weight/(Math.pow((height/100), 2)));

        document.getElementById('description_dcr_bmi').innerText = "Your BMI is equal to: " + bmi.toFixed(2);

        if (selected.value === 'Woman') {
            var hip = document.getElementById('Hip').value;
            hip = parseInt(hip);

            var bfp = (495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.22100 * Math.log10(height))) - 450;

            document.getElementById('description_dcr_bfp').innerText = "Your BFP is equal to: " + bfp.toFixed(2);
        }
        else {
            var bfp = (495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height))) - 450;

            document.getElementById('description_dcr_bfp').innerText = "Your BFP is equal to: " + bfp.toFixed(2);
        } 

        fetch("/calculators/bmibfp", {
            method: "POST", body: JSON.stringify( {
                bmi, bfp 
            }), headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    catch (e) { }
});