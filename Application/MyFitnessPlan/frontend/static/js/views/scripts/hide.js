try {
    document.getElementById('yesCheck').addEventListener('change', (e) => {
        document.getElementById('ifYes').style.visibility = e.currentTarget.checked ? 'visible' : 'hidden';
    });

    document.getElementById('noCheck').addEventListener('change', (e) => {
        document.getElementById('ifYes').style.visibility = e.currentTarget.checked ? 'hidden' : 'visible';
    });
}
catch (e) { }

try {
    document.getElementById('ZPA').addEventListener("mouseenter", () => {
        document.getElementById('description_lv').innerText = "No Physical Activity With Sitting Work";
    });

    document.getElementById('A_ZPA').addEventListener("mouseenter", () => {
        document.getElementById('description_lv').innerText = "No Physical Activity With Active Work";
    });

    document.getElementById('VLA').addEventListener("mouseenter", () => {
        document.getElementById('description_lv').innerText = "One Training Every Week With Sitting Work";
    });

    document.getElementById('A_VLA').addEventListener("mouseenter", () => {
        document.getElementById('description_lv').innerText = "One Training Every Week With Active Work";
    });

    document.getElementById('LPA').addEventListener("mouseenter", () => {
        document.getElementById('description_lv').innerText = "Two Training Every Week With Sitting Work";
    });

    document.getElementById('A_LPA').addEventListener("mouseenter", () => {
        document.getElementById('description_lv').innerText = "Two Training Every Week With Active Work";
    });

    document.getElementById('MPA').addEventListener("mouseenter", () => {
        document.getElementById('description_lv').innerText = "Three/Four Training Every Week With Sitting Work";
    });

    document.getElementById('A_MPA').addEventListener("mouseenter", () => {
        document.getElementById('description_lv').innerText = "Three/Four Training Every Week With Active Work";
    });

    document.getElementById('HPA').addEventListener("mouseenter", () => {
        document.getElementById('description_lv').innerText = "Five Training Every Week With Sitting Work";
    });

    document.getElementById('A_HPA').addEventListener("mouseenter", () => {
        document.getElementById('description_lv').innerText = "Five Training Every Week With Active Work";
    });

    document.getElementById('VHPA').addEventListener("mouseenter", () => {
        document.getElementById('description_lv').innerText = "Frequent Professional Training For Competitions With Sitting Work";
    });

    document.getElementById('A_VHPA').addEventListener("mouseenter", () => {
        document.getElementById('description_lv').innerText = "Frequent Professional Training For Competitions With Active Work";
    });

    document.getElementById('ZPA').addEventListener("mouseleave", () => {
        document.getElementById('description_lv').innerText = "";
    });

    document.getElementById('A_ZPA').addEventListener("mouseleave", () => {
        document.getElementById('description_lv').innerText = "";
    });

    document.getElementById('VLA').addEventListener("mouseleave", () => {
        document.getElementById('description_lv').innerText = "";
    });

    document.getElementById('A_VLA').addEventListener("mouseleave", () => {
        document.getElementById('description_lv').innerText = "";
    });

    document.getElementById('LPA').addEventListener("mouseleave", () => {
        document.getElementById('description_lv').innerText = "";
    });

    document.getElementById('A_LPA').addEventListener("mouseleave", () => {
        document.getElementById('description_lv').innerText = "";
    });

    document.getElementById('MPA').addEventListener("mouseleave", () => {
        document.getElementById('description_lv').innerText = "";
    });

    document.getElementById('A_MPA').addEventListener("mouseleave", () => {
        document.getElementById('description_lv').innerText = "";
    });

    document.getElementById('HPA').addEventListener("mouseleave", () => {
        document.getElementById('description_lv').innerText = "";
    });

    document.getElementById('A_HPA').addEventListener("mouseleave", () => {
        document.getElementById('description_lv').innerText = "";
    });

    document.getElementById('VHPA').addEventListener("mouseleave", () => {
        document.getElementById('description_lv').innerText = "";
    });

    document.getElementById('A_VHPA').addEventListener("mouseleave", () => {
        document.getElementById('description_lv').innerText = "";
    });
}
catch (e) { }
