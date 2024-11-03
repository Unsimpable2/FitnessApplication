import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Workout Plans");
    }

    getScripts() {
        return [
            "/static/js/views/scripts/load_workout_plans.js"
        ]
    }

    async getHtml() {
        return `
            <h1>Choose Your Ideal Workout Plan!</h1>
            <p>
                Here you can check workout plans created by Trainers. Maybe you will find something for you!</br>
                Remember, every user can belonge to one plan at the time, complete/abandon plan to start next one and this you can do in User Place section!
            </p>

            <div id="wkorkout_plan_update">
            </div>

            <template id="template">
                <div class="workout_plan_dec_box">
                    <p class="workout_plan_big_text">GIGA BIG MILKERS</p>
                    
                    <span class="workout_plan_des_text">Goal: 
                        <span class="workout_plan_common_text">Increasing the strength and size of the chest.Iaa.</span>
                    </span></br>

                    <span class="workout_plan_des_text">Description: 
                        <span class="workout_plan_common_text">
                            Increasing the strength and size of the chest.Increasing the strength and size of the chest.Increasing the strength and size of the chest.Increasing the strength and size of the chest.Increasing the strength and size of the chest.Increasing the saa.
                        </span>
                    </span></br>

                    <span class="workout_plan_des_text">Duration: 
                        <span class="workout_plan_common_text">
                            12 Month
                        </span>
                    </span></br>

                    <span class="workout_plan_des_text">Difficulty: 
                        <span class="workout_plan_common_text">
                            Very Hard
                        </span>
                    </span></br>

                    <p class="workout_plan_big_text">Exercises</p>

                    <div class="exercises_info">
                    </div>

                    <div class="workout_plan_join_button_box">
                        <input type="button" value="Join" class="workout_plan_join_button"/>
                    </div>
                </div>
            </template>

            <template id="exersices_template_data">
                <div class="workout_plan_des_text">1.
                    <span class="workout_plan_common_text">Dumbbell Bent Over Lateral Raise</span>
                    <span class="workout_plan_des_text">4</span>
                    <span class="workout_plan_des_text">x</span>
                    <span class="workout_plan_des_text">12</span>
                </div>
            </template>
        `;
    }
}