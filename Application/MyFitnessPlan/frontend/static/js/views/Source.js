import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Source");
    }

    async getHtml() {
        return `
            <h1>All Important Source Used On My Site! Please Read Them!</h1>
            <a id="description_text">
                I don't own description of exercises used on my site, sometimes I change something in them but context is still the same. </br>
                By clicking on chosen exercise name, you will be redirect to site from which I took appropriate description. 
            </a>

            <div id="source_main_box">
                <div class="source_link_box">
                    <p class="source_title">Workout: Chest</p>
                        <a class="description_source_text" href="https://www.verywellfit.com/how-to-do-the-bench-press-exercise-3498278" target="_blank">Barbell Bench Press</a></br>
                        <a class="description_source_text" href="https://www.coachmag.co.uk/chest-exercises/7391/how-to-do-the-dumbbell-bench-press" target="_blank">Dumbbell Bench Press</a></br>
                        <a class="description_source_text" href="https://www.muscleandstrength.com/exercises/incline-bench-press.html" target="_blank">Incline Bench Press</a></br>
                        <a class="description_source_text" href="https://www.muscleandstrength.com/exercises/decline-bench-press.html" target="_blank">Decline Barbell Bench Press</a></br>
                        <a class="description_source_text" href="https://www.bodybuilding.com/exercises/machine-bench-press" target="_blank">Machine Chest Press</a></br>
                        <a class="description_source_text" href="https://www.masterclass.com/articles/dumbbell-pullover" target="_blank">Dumbbell Pull-Over</a></br>
                        <a class="description_source_text" href="https://www.healthline.com/health/exercise-fitness/dumbbell-chest-fly#how-to" target="_blank">Chest Fly</a>
                </div>

                <div class="source_link_box">
                    <p class="source_title">Workout: Back</p>
                        <a class="description_source_text" href="https://www.verywellfit.com/how-to-do-the-deadlift-3498608" target="_blank">Deadlift</a></br>
                        <a class="description_source_text" href="https://www.verywellfit.com/how-to-sumo-deadlift-proper-form-variations-and-common-mistakes-5212031" target="_blank">Sumo Deadlift</a></br>
                        <a class="description_source_text" href="https://www.muscleandstrength.com/exercises/bent-over-barbell-row.html" target="_blank">Bent-Over Row</a></br>
                        <a class="description_source_text" href="https://www.healthline.com/health/pull-ups#how-to" target="_blank">Pull-Up</a></br>
                        <a class="description_source_text" href="https://www.muscleandfitness.com/workouts/back-exercises/how-t-bar-row/" target="_blank">T-Bar Row</a></br>
                        <a class="description_source_text" href="https://www.verywellfit.com/how-to-do-the-cable-row-3498605" target="_blank">Seated Row</a></br>
                        <a class="description_source_text" href="https://www.verywellfit.com/how-to-do-the-lat-pulldown-3498309" target="_blank">Lat Pull-Down</a></br>
                        <a class="description_source_text" href="https://www.exercise.com/exercises/one-arm-dumbbell-row/" target="_blank">Single-Arm Dumbbell Row</a>
                </div>

                <div class="source_link_box">
                    <p class="source_title">Workout: Shoulders</p>
                        <a class="description_source_text" href="https://www.verywellfit.com/how-to-do-the-barbell-shoulder-press-4842906" target="_blank">Barbell Overhead Press</a></br>
                        <a class="description_source_text" href="https://www.masterclass.com/articles/bent-over-lateral-raises-guide" target="_blank">Dumbbell Bent Over Lateral Raise</a></br>
                        <a class="description_source_text" href="https://www.muscleandstrength.com/exercises/seated-dumbbell-press.html" target="_blank">Seated Dumbbell Shoulder Press</a></br>
                        <a class="description_source_text" href="https://www.verywellfit.com/how-to-do-the-dumbbell-front-raise-3498300" target="_blank">Front Raise</a></br>
                        <a class="description_source_text" href="https://www.setforset.com/blogs/news/reverse-pec-deck-fly" target="_blank">Reverse Pec Deck Fly</a></br>
                        <a class="description_source_text" href="https://www.muscleandstrength.com/exercises/dumbbell-lateral-raise.html" target="_blank">Dumbbell Lateral Raise</a></br>
                        <a class="description_source_text" href="https://www.muscleandstrength.com/exercises/cable-face-pull" target="_blank">Cable Face Pulls</a></br>
                        <a class="description_source_text" href="https://www.verywellfit.com/how-to-do-the-upright-row-3498316" target="_blank">Barbell Upright Row</a>
                </div>

                <div class="source_link_box">
                    <p class="source_title">Workout: Biceps</p>
                        <a class="description_source_text" href="https://www.coachmag.co.uk/exercises/arm-exercises/151/barbell-curl" target="_blank">Barbell Curl</a></br>
                        <a class="description_source_text" href="https://www.verywellfit.com/how-to-do-the-biceps-cable-curl-3498289" target="_blank">Cable Curl</a></br>
                        <a class="description_source_text" href="https://www.verywellfit.com/how-to-do-the-biceps-arm-curl-3498604" target="_blank">Dumbbell Curl</a></br>
                        <a class="description_source_text" href="https://www.verywellfit.com/how-to-hammer-curls-techniques-benefits-variations-4788329" target="_blank">Hammer Curl</a></br>
                        <a class="description_source_text" href="https://www.healthline.com/health/incline-dumbbell-curl#how-to" target="_blank">Incline Curl</a></br>
                        <a class="description_source_text" href="https://www.masterclass.com/articles/preacher-curls-guide" target="_blank">Preacher Curl</a>
                </div>

                <div class="source_link_box">
                    <p class="source_title">Workout: Triceps</p>
                        <a class="description_source_text" href="https://www.verywellfit.com/close-grip-bench-press-4686827" target="_blank">Close-Grip Bench Press</a></br>
                        <a class="description_source_text" href="https://www.menshealth.com/uk/building-muscle/a33643012/tricep-dips/" target="_blank">Triceps Dip</a></br>
                        <a class="description_source_text" href="https://www.healthline.com/health/fitness/overhead-triceps-extension#how-to" target="_blank">Dumbbell Overhead Triceps Extension</a></br>
                        <a class="description_source_text" href="https://www.muscleandfitness.com/exercise/workouts/arm-exercises/single-arm-dumbbell-overhead-triceps-extension/" target="_blank">One-Arm Overhead Extension</a></br>
                        <a class="description_source_text" href="https://www.verywellfit.com/how-to-do-the-triceps-pushdown-3498613" target="_blank">Cable Push-Down</a></br>
                        <a class="description_source_text" href="https://www.healthline.com/health/fitness/skull-crushers#proper-form" target="_blank">Skull Crusher</a>
                </div>

                <div class="source_link_box">
                        <p class="source_title">Workout: Legs</p>
                        <a class="description_source_text" href="https://www.verywellfit.com/how-to-properly-execute-the-leg-curl-exercise-3498304" target="_blank">Leg Curls</a></br>
                        <a class="description_source_text" href="https://www.verywellfit.com/leg-extensions-benefit-or-risk-3498573" target="_blank">Leg Extension</a></br>
                        <a class="description_source_text" href="https://www.verywellfit.com/how-to-do-the-leg-press-3498610" target="_blank">Leg Press</a></br>
                        <a class="description_source_text" href="https://www.muscleandstrength.com/exercises/squat.html" target="_blank">Barbell Back Squat</a></br>
                        <a class="description_source_text" href="https://www.muscleandstrength.com/exercises/dumbbell-split-squat" target="_blank">Dumbbell Split Squat</a></br>
                        <a class="description_source_text" href="https://www.healthline.com/health/fitness-exercise/dumbbell-goblet-squat#instructions" target="_blank">Goblet Squat</a></br>
                        <a class="description_source_text" href="https://blog.thewodlife.com.au/the-front-squat-ultimate-guide/" target="_blank">Barbell Front Squat</a>
                </div>

                <div class="source_link_box">
                    <p class="source_title">Workout: Abs</p>
                    <a class="description_source_text" href="https://www.masterclass.com/articles/weighted-crunches-guide" target="_blank">Dumbbell Crunch</a></br>
                    <a class="description_source_text" href="https://www.coachmag.co.uk/exercises/abs-workout/3657/3a-hanging-leg-raise" target="_blank">Hanging Leg Raise</a></br>
                    <a class="description_source_text" href="https://www.muscleandstrength.com/exercises/twisting-hanging-knee-raise.html" target="_blank">Hanging Knee Raise Twist</a></br>
                    <a class="description_source_text" href="https://www.masterclass.com/articles/how-to-do-bicycle-crunches" target="_blank">Bicycle Crunches</a></br>
                    <a class="description_source_text" href="https://www.verywellfit.com/the-plank-exercise-3120068" target="_blank">Plank</a></br>
                    <a class="description_source_text" href="https://www.muscleandstrength.com/exercises/dumbbell-side-bends.html" target="_blank">Dumbbell Side Bend</a></br>
                </div>

                <div class="source_link_box">
                    <p class="source_title">Streach: Legs</p>
                        <a class="description_source_text" href="https://www.yogajournal.com/poses/seated-forward-bend/" target="_blank">Seated Forward Bend</a></br>
                        <a class="description_source_text" href="https://www.sweat.com/blogs/exercises/single-leg-seated-forward-fold" target="_blank">Single-Leg Seated Forward Fold</a></br>
                        <a class="description_source_text" href="https://gethealthyu.com/exercise/butterfly-pose/" target="_blank">Butterfly Pose</a></br>
                        <a class="description_source_text" href="https://www.healthline.com/health/exercise-fitness/how-to-stretch-inner-thigh#static-stretches" target="_blank">Lateral Squat</a></br>
                        <a class="description_source_text" href="https://www.verywellfit.com/quadricep-stretches-2696366" target="_blank">Standing Quad Stretch</a></br>
                        <a class="description_source_text" href="https://www.exercise.com/exercises/standing-toe-touch/" target="_blank">Standing Toe Touch</a>
                </div>

                <div class="source_link_box">
                    <p class="source_title">Streach: Chest</p>
                        <a class="description_source_text" href="https://www.acefitness.org/resources/everyone/blog/5657/5-chest-stretch-variations/" target="_blank">Behind-the-back Elbow-to-elbow Grip</a></br>
                        <a class="description_source_text" href="https://www.acefitness.org/resources/everyone/blog/5657/5-chest-stretch-variations/" target="_blank">Above-the-head Chest Stretch</a></br>
                        <a class="description_source_text" href="https://www.acefitness.org/resources/everyone/blog/5657/5-chest-stretch-variations/" target="_blank">Bent-arm Wall Stretch</a></br>
                        <a class="description_source_text" href="https://www.acefitness.org/resources/everyone/blog/5657/5-chest-stretch-variations/" target="_blank">Extended Child’s Pose on Fingertips</a></br>
                        <a class="description_source_text" href="https://evofitness.ch/bar-hang-core-strength-body-control/" target="_blank">Bar Hanging</a>
                </div>

                <div class="source_link_box">
                    <p class="source_title">Streach: Arms</p>
                        <a class="description_source_text" href="https://www.healthline.com/health/bicep-stretch#doorway" target="_blank">Wall Bicep Stretch</a></br>
                        <a class="description_source_text" href="https://www.healthline.com/health/bicep-stretch#standing" target="_blank">Standing Bicep Stretch</a></br>
                        <a class="description_source_text" href="https://www.healthline.com/health/bicep-stretch#seated" target="_blank">Seated Bicep Stretch</a></br>
                        <a class="description_source_text" href="https://www.acefitness.org/resources/everyone/exercise-library/174/overhead-triceps-stretch/" target="_blank">Overhead Triceps Stretch</a></br>
                        <a class="description_source_text" href="https://www.aleanlife.com/tricep-stretch/" target="_blank">Horizontal Tricep Stretch</a>
                </div>

                <div class="source_link_box">
                    <p class="source_title">Streach: Abs</p>
                        <a class="description_source_text" href="https://www.healthline.com/health/fitness/benefits-of-cobra-pose" target="_blank">Cobra Pose Abdominal Stretch</a></br>
                        <a class="description_source_text" href="https://mobile.twitter.com/Techniquehealth/status/1188363459991408641?lang=bn" target="_blank">Twisting Crocodile Stretch</a></br>
                        <a class="description_source_text" href="https://origympersonaltrainercourses.co.uk/blog/ab-stretches" target="_blank">Side Bend</a></br>
                        <a class="description_source_text" href="https://caronefitness.com/mastercourses/exlib/exerciselibrary/core_kneeling_stretch.html" target="_blank">Kneeling Abdominal Stretch</a></br>
                        <a class="description_source_text" href="https://www.mayoclinic.org/healthy-lifestyle/stress-management/multimedia/cat-cow-pose/vid-20453581" target="_blank">Cat-Cow Stretch</a></br>
                        <a class="description_source_text" href="https://fprehab.com/2019/03/21/exercise-of-the-month-seated-lateral-bends/" target="_blank">Seated Lateral Bends</a>
                </div>

                <div class="source_link_box">
                    <p class="source_title">Streach: Other</p>
                        <a class="description_source_text" href="https://www.healthline.com/health/shoulder-pain-exercises#across-the-chest" target="_blank">Across-The-Chest Stretch</a></br>
                        <a class="description_source_text" href="https://www.healthline.com/health/shoulder-pain-exercises#thread-the-needle" target="_blank">Thread The Needle</a></br>
                        <a class="description_source_text" href="https://www.healthline.com/health/tight-shoulders#stretches" target="_blank">Reverse Prayer Pose</a></br>
                        <a class="description_source_text" href="https://www.skimble.com/exercises/143-wrist-extensor-stretches-how-to-do-exercise" target="_blank">Wrist Extensor Stretches</a></br>
                        <a class="description_source_text" href="https://www.thehealthy.com/exercise/forearm-stretches/" target="_blank">Overhead Reach</a></br>
                        <a class="description_source_text" href="https://www.thehealthy.com/exercise/forearm-stretches/" target="_blank">Fisted Wrist Flexion</a>
                </div>
            </div>
        `;
    }
}