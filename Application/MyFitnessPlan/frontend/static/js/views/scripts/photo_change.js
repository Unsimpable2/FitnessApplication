var photo_nr;
var max_number;
var path;
var dec_nr;

function next_image(photo_nr, path) {
    document.getElementById("photo_id").src="/static/img/" + path + photo_nr + ".png";
}

function prev_image(photo_nr, path) {
    document.getElementById("photo_id").src="/static/img/" + path + photo_nr + ".png";
}

async function change_name(dec_nr) {
    var dec_path = "/static/img/" + path + dec_nr + ".txt"
    
    let response = await fetch(dec_path);
    let body = await response.text();
    let arr = body.split("\n");

    document.getElementById("description_exercise").innerHTML = arr[0];
    document.getElementById("exercise_text").innerHTML = arr[1];
    document.getElementById("exercise_text_source").innerHTML = "Page from which this exercise description was taken can be find in Source section.";
}

function reset(){
    document.getElementById("description_exercise").innerHTML = ""
    document.getElementById("exercise_text").innerHTML = ""
    document.getElementById("exercise_text_source").innerHTML = ""
}

document.getElementById('next_photo').addEventListener("click", () => {
    if((photo_nr && dec_nr) >= max_number){
        photo_nr = 0;
        dec_nr = 0;
    }
    next_image(photo_nr+=1, path)
    change_name(dec_nr+=1)
});

document.getElementById('prev_photo').addEventListener("click", () => {
    photo_nr-=1;
    dec_nr-=1;

    if((photo_nr && dec_nr) <= 0){
        photo_nr = max_number;
        dec_nr = max_number;
    }
    prev_image(photo_nr, path)
    change_name(dec_nr)
});

document.getElementById('button_box').addEventListener('click', (e) => {
   document.getElementById('show_buttons').style.visibility = e.currentTarget.checked ? 'hidden' : 'visible';
});

//Workout

document.getElementById('w_chest').addEventListener("click", (e) => {
    document.getElementById("photo_id").src="/static/img/Workout/Chest/c.png";
    photo_nr = 0;
    dec_nr = 0; 
    max_number = 7;
    path = "Workout/Chest/";
    reset();
});

document.getElementById('w_back').addEventListener("click", (e) => {
    document.getElementById("photo_id").src="/static/img/Workout/Back/b.png";
    photo_nr = 0;
    dec_nr = 0;  
    max_number = 8;
    path = "Workout/Back/";
    reset();
});

document.getElementById('w_shoulders').addEventListener("click", (e) => {
    document.getElementById("photo_id").src="/static/img/Workout/Shoulders/s.png";
    photo_nr = 0; 
    dec_nr = 0; 
    max_number = 8;
    path = "Workout/Shoulders/";
    reset();
});

document.getElementById('w_biceps').addEventListener("click", (e) => {
    document.getElementById("photo_id").src="/static/img/Workout/Biceps/bi.png";
    photo_nr = 0;
    dec_nr = 0;  
    max_number = 6;
    path = "Workout/Biceps/";
    reset();
});

document.getElementById('w_triceps').addEventListener("click", (e) => {
    document.getElementById("photo_id").src="/static/img/Workout/Triceps/t.png";
    photo_nr = 0; 
    dec_nr = 0; 
    max_number = 6;
    path = "Workout/Triceps/";
    reset();
});

document.getElementById('w_legs').addEventListener("click", (e) => {
    document.getElementById("photo_id").src="/static/img/Workout/Legs/l.png";
    photo_nr = 0; 
    dec_nr = 0; 
    max_number = 7;
    path = "Workout/Legs/";
    reset();
});

document.getElementById('w_abs').addEventListener("click", (e) => {
    document.getElementById("photo_id").src="/static/img/Workout/Abs/a.png";
    photo_nr = 0; 
    dec_nr = 0; 
    max_number = 6;
    path = "Workout/Abs/";
    reset();
});

//Streach

document.getElementById('s_legs').addEventListener("click", (e) => {
    document.getElementById("photo_id").src="/static/img/Streach/Legs/sl.png";
    photo_nr = 0;
    dec_nr = 0;  
    max_number = 6;
    path = "Streach/Legs/";
    reset();
});

document.getElementById('s_chest').addEventListener("click", (e) => {
    document.getElementById("photo_id").src="/static/img/Streach/Chest/sc.png";
    photo_nr = 0; 
    dec_nr = 0; 
    max_number = 5;
    path = "Streach/Chest/";
    reset();
});

document.getElementById('s_arms').addEventListener("click", (e) => {
    document.getElementById("photo_id").src="/static/img/Streach/Arms/sa.png";
    photo_nr = 0; 
    dec_nr = 0; 
    max_number = 5;
    path = "Streach/Arms/";
    reset();
});

document.getElementById('s_abs').addEventListener("click", (e) => {
    document.getElementById("photo_id").src="/static/img/Streach/Abs/sabs.png";
    photo_nr = 0;
    dec_nr = 0;  
    max_number = 6;
    path = "Streach/Abs/";
    reset();
});

document.getElementById('s_others').addEventListener("click", (e) => {
    document.getElementById("photo_id").src="/static/img/Streach/Others/so.png";
    photo_nr = 0; 
    dec_nr = 0; 
    max_number = 6;
    path = "Streach/Others/";
    reset();
});