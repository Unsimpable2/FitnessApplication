import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("User Place");
    }

    getScripts() {
        return [
            "/static/js/views/scripts/show_bmi_bfp_dcr.js", //user
            "/static/js/views/scripts/show_exercise_result.js", //user
            "/static/js/views/scripts/add_exercise_result.js", //user
            "/static/js/views/scripts/show_workout_plan.js", //user
            "/static/js/views/scripts/comp_aban_workout_plan.js", //user
            
            "/static/js/views/scripts/add_record.js", //load exercise data to select
            "/static/js/views/scripts/add_user_record.js", //load user data to select
            "/static/js/views/scripts/add_workoutplans.js" //load workout plans data to select
        ]
    }

    async getHtml() {
        return `
            <h1>Your Private Part Visible Only to You! User Version!</h1>
                <div id="userplace_main_box">
                    <div id="type_user_box">
                        <div id="show_bmi_bfp_dcr_box_full">
                            <div id="show_bmi_bfp_dcr_box">
                                <form>
                                    <p id="user_text">Show my</p>

                                    <div id="user_place_select_options">
                                        <input type="radio" name="Show_bmi_bfp_dcr_op" value="MIN" checked>Min
                                        <input type="radio" name="Show_bmi_bfp_dcr_op" value="AVG">Avg</br>
                                        <input type="radio" name="Show_bmi_bfp_dcr_op" value="MAX">Max
                                        <input type="radio" name="Show_bmi_bfp_dcr_op" value="latest">Latest</br>
                                    </div>

                                    <div id="user_place_select_options_version">
                                        <input type="radio" name="Show_bmi_bfp_dcr" value="bmi" checked>BMI</br>
                                        <input type="radio" name="Show_bmi_bfp_dcr" value="bfp">BFP</br>
                                        <input type="radio" name="Show_bmi_bfp_dcr" value="dcr">DCR
                                    </div>

                                    <div id="user_place_select_button">
                                        <input type="button" value="Show" id="show_chosen_option_button"/>
                                    </div>

                                    <p id="user_text_show"></p>
                                </form>
                            </div>
                        </div>

                        <div id="add_record_box_full">
                            <div id="add_record_box">
                                <form>
                                    <p id="add_record_user_text">Add record to: </p>

                                    <div id="add_record_section">
                                        <select id="add_record_section_choose" data-second-select="add_record_section_exer">
                                            <option value="Chest">Chest</option>
                                            <option value="Back">Back</option>
                                            <option value="Shoulders">Shoulders</option>
                                            <option value="Biceps">Biceps</option>
                                            <option value="Triceps">Triceps</option>
                                            <option value="Legs">Legs</option>
                                            <option value="Abs">Abs</option>
                                        </select>
                                    </div>

                                    <div id="add_record_exercise">
                                        <select class="select_max_width" id="add_record_section_exer">
                                            <option>Please select category</option>
                                        </select>
                                    </div>

                                    <div id="add_record_amount">
                                        <input type="number" id="record_kg" value="0">
                                    </div>

                                    <p id="add_record_user_text">in kg.</p>

                                    <div id="add_record_button">
                                        <input type="button" value="Add" id="add_record_section_button"/>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div id="show_record_box_full">
                            <div id="show_record_box">
                                <p id="user_text">Show my</p>

                                <div id="show_record_select_options">
                                    <input type="radio" name="Show_record_op" value="MIN" checked>Min
                                    <input type="radio" name="Show_record_op" value="AVG">Avg</br>
                                    <input type="radio" name="Show_record_op" value="MAX">Max
                                    <input type="radio" name="Show_record_op" value="latest">Latest</br>
                                </div>

                                <div id="show_record_section_options">
                                    <select id="show_record_section_choose" data-second-select="show_record_section_exer">
                                        <option value="Chest">Chest</option>
                                        <option value="Back">Back</option>
                                        <option value="Shoulders">Shoulders</option>
                                        <option value="Biceps">Biceps</option>
                                        <option value="Triceps">Triceps</option>
                                        <option value="Legs">Legs</option>
                                        <option value="Abs">Abs</option>
                                    </select>
                                </div>

                                <div id="show_record_exercise">
                                    <select class="select_max_width" id="show_record_section_exer">
                                        <option>Please select category</option>
                                    </select>
                                </div>

                                <p id="user_text">record.</p>

                                <div id="show_record_button_box">
                                    <input type="button" value="Show" id="show_record_button"/>
                                </div>

                                <p id="show_record_text"></p>
                            </div>
                        </div>

                        <div id="show_workout_plans_full">
                            <div id="show_workout_plans">
                                <form>
                                    <p id="user_text">Show my</p>
                                    
                                    <div id="show_workout_plan_options">
                                        <input type="radio" name="Show_workout_plan_option" value="Active" checked>Active</br>
                                        <input type="radio" name="Show_workout_plan_option" value="Completed">Completed</br>
                                        <input type="radio" name="Show_workout_plan_option" value="Abandoned">Abandoned
                                    </div>

                                    <p id="user_text">workout plan(s).</p>

                                    <div id="show_workout_plans_button_box">
                                        <a></a><input type="button" value="Show" id="show_workout_plans_button"/>
                                    </div>

                                    <div id="show_act_abd_comp_workout_plans_box_2">
                                        <li class="show_act_abd_comp_workout_plans_show_text" id="show_act_abd_comp_workout_plans_show_text_1"></li>
                                        <li class="show_act_abd_comp_workout_plans_show_text" id="show_act_abd_comp_workout_plans_show_text_2"></li></br>
                                        <li class="show_act_abd_comp_workout_plans_show_text" id="show_act_abd_comp_workout_plans_show_text_3"></li>
                                        <li class="show_act_abd_comp_workout_plans_show_text" id="show_act_abd_comp_workout_plans_show_text_4"></li>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div id="comp_ab_workout_plan_box_full">
                            <div id="comp_ab_workout_plan_box">
                                <form>
                                    <div class="show_workout_plan_options_2">
                                        <input type="radio" name="comp_aba_option" value="Completed" checked>Complete
                                        <input type="radio" name="comp_aba_option" value="Abandoned">Abandon
                                    </div>

                                    <p id="comp_ab_workout_plan_user_text">workout plan:</p>

                                    <div id="comp_ab_workout_plan_section">
                                        <select class="select_max_width" id="workout_plan_select">
                                            <option>Select plan</option>
                                        </select>
                                    </div>

                                    <div id="comp_ab_workout_plans_button_box">
                                        <a></a><input type="button" value="Action" id="comp_ab_workout_plans_button"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        `;
    }
}