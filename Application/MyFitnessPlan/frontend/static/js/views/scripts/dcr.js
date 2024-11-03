document.getElementById('calculate_drc').addEventListener('click', () => {
    try {
        var gender_drc = document.getElementsByName('Sex_drc');
        var selected_gender = Array.from(gender_drc).find(radio => radio.checked);

        var age = document.getElementById("Age_drc").value;
        var height = document.getElementById("Height_drc").value;
        var weight = document.getElementById("Weight_drc").value;

        var ActiviityScalar = 0;

        var goal_drc = document.getElementsByName('Goal');
        var selected_goal = Array.from(goal_drc).find(radio => radio.checked);

        var activity_drc = document.getElementsByName('Activity');
        var selected_activity = Array.from(activity_drc).find(radio => radio.checked);

        age = parseInt(age);
        height = parseInt(height);
        weight = parseInt(weight);

        if (selected_activity.value === "Zero" || selected_activity.value === "A_Zero") {
            ActiviityScalar = 1;

        } else if (selected_activity.value === "VeryLow" && selected_gender.value === "Man") {
            ActiviityScalar = 1.1;
        } else if (selected_activity.value === "Low" && selected_gender.value === "Man") {
            ActiviityScalar = 1.2;
        } else if (selected_activity.value === "Mid" && selected_gender.value === "Man") {
            ActiviityScalar = 1.5;
        } else if (selected_activity.value === "High" && selected_gender.value === "Man") {
            ActiviityScalar = 1.7;
        } else if (selected_activity.value === "VeryHigh" && selected_gender.value === "Man") {
            ActiviityScalar = 1.95;
        
        } else if (selected_activity.value === "A_VeryLow" && selected_gender.value === "Man") {
            ActiviityScalar = 1.2;
        } else if (selected_activity.value === "A_Low" && selected_gender.value === "Man") {
            ActiviityScalar = 1.3;
        } else if (selected_activity.value === "A_Mid" && selected_gender.value === "Man") {
            ActiviityScalar = 1.6;
        } else if (selected_activity.value === "A_High" && selected_gender.value === "Man") {
            ActiviityScalar = 1.8;
        } else if (selected_activity.value === "A_VeryHigh" && selected_gender.value === "Man") {
            ActiviityScalar = 2.05;

        } else if (selected_activity.value === "VeryLow" && selected_gender.value === "Woman") {
            ActiviityScalar = 1.05;
        } else if (selected_activity.value === "Low" && selected_gender.value === "Woman") {
            ActiviityScalar = 1.15;
        } else if (selected_activity.value === "Mid" && selected_gender.value === "Woman") {
            ActiviityScalar = 1.45;
        } else if (selected_activity.value === "High" && selected_gender.value === "Woman") {
            ActiviityScalar = 1.65;
        } else if (selected_activity.value === "VeryHigh" && selected_gender.value === "Woman") {
            ActiviityScalar = 1.85;
            
        } else if (selected_activity.value === "A_VeryLow" && selected_gender.value === "Woman") {
            ActiviityScalar = 1.15;
        } else if (selected_activity.value === "A_Low" && selected_gender.value === "Woman") {
            ActiviityScalar = 1.35;
        } else if (selected_activity.value === "A_Mid" && selected_gender.value === "Woman") {
            ActiviityScalar = 1.45;
        } else if (selected_activity.value === "A_High" && selected_gender.value === "Woman") {
            ActiviityScalar = 1.7;
        } else if (selected_activity.value === "A_VeryHigh" && selected_gender.value === "Woman") {
            ActiviityScalar = 1.95;
        }

        if (selected_gender.value === "Man") {
            var kcal = 66.47 + (13.7 * weight) + (5.0 * height) - (6.76 * age);
        } else if (selected_gender.value === "Woman") {
            var kcal = 665.1 + (9.567 * weight) + (1.85 * height) - (4.68 * age);
        }

        kcal *= ActiviityScalar;

        if (selected_goal.value === "Loss") {
            kcal -= 300;
        }

        if (selected_goal.value === "Gain") {
            kcal += 300;
        }

        document.getElementById('dcr_result').innerText = "Your Daily Caloric Requirement is Equal to: " + kcal.toFixed(2);

        fetch("/calculators/dcr", {
            method: "POST", body: JSON.stringify( {
                kcal
            }), headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    catch (e) { }
});