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

            "/static/js/views/scripts/show_user_bmi_bfp_dcr.js", //trainer
            "/static/js/views/scripts/show_user_exercise_record.js", //trainer
            "/static/js/views/scripts/create_new_trainer.js", //trainer
            "/static/js/views/scripts/create_workout_plan.js", //trainer
            "/static/js/views/scripts/count_user_workout_plan.js", //trainer
            "/static/js/views/scripts/show_user_activ_comp_aban_workout_plans.js", //trainer
            
            "/static/js/views/scripts/add_record.js", //load exercise data to select
            "/static/js/views/scripts/add_user_record.js", //load user data to select
            "/static/js/views/scripts/add_workoutplans.js" //load workout plans data to select
        ]
    }

    async getHtml() {
        return `
            <h1>Your Private Part Visible Only to You! Trainer Version!</h1>
                <div id="userplace_main_box">
                    <div id="trainer_main_full_box">
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

                        <div id="trainer_main_box_1">
                            <div id="show_user_bmi_bfp_dcr">
                                <form>
                                    <p id="show_user_bmi_bfp_dcr_text">Show </p>
                                    <div id="show_user_bmi_bfp_dcr_select_option_box">
                                        
                                        <p class="workout_plan_entry_text">Name:</p>
                                        <select class="select_max_width_3" id="show_user_bmi_bfp_dcr_choose" data-second-select="show_user_bmi_bfp_dcr_choose_option">
                                        </select></br>

                                        <p class="workout_plan_entry_text">Username:</p>
                                        <select class="select_max_width_2" id="show_user_bmi_bfp_dcr_choose_option">
                                            Name: <option>Choose Name</option>
                                        </select>
                                    </div>

                                    <div id="show_user_bmi_bfp_dcr_options">
                                        <input type="radio" name="show_user_bmi_bfp_dcr_op" value="MIN" checked>Min
                                        <input type="radio" name="show_user_bmi_bfp_dcr_op" value="AVG">Avg</br>
                                        <input type="radio" name="show_user_bmi_bfp_dcr_op" value="MAX">Max
                                        <input type="radio" name="show_user_bmi_bfp_dcr_op" value="latest">Latest</br>
                                    </div>

                                    <div id="show_user_bmi_bfp_dcr_options_version">
                                        <input type="radio" name="show_user_bmi_bfp_dcr_ver" value="bmi" checked>BMI</br>
                                        <input type="radio" name="show_user_bmi_bfp_dcr_ver" value="bfp">BFP</br>
                                        <input type="radio" name="show_user_bmi_bfp_dcr_ver" value="dcr">DCR
                                    </div>

                                    <div id="show_user_bmi_bfp_dcr_button">
                                        <input type="button" value="Show" id="show_chosen_user_option_button"/>
                                    </div>

                                    <p id="show_user_bmi_bfp_dcr_text_show"></p>
                                </form>
                            </div>

                            <div id="show_user_record_box">
                                <form>
                                    <p id="show_user_record_text">Show </p>
                                    <div id="show_user_record_select_option_box">
                                        <p class="workout_plan_entry_text">Name:</p>
                                        <select class="select_max_width_3" id="show_user_record_choose" data-second-select="show_user_record_choose_option">
                                        </select></br>

                                        <p class="workout_plan_entry_text">Username:</p>
                                        <select class="select_max_width_2" id="show_user_record_choose_option">
                                            Name: <option>Choose Name</option>
                                        </select>
                                    </div>

                                    <div id="show_user_record_options">
                                        <input type="radio" name="show_user_record_options_op" value="MIN" checked>Min
                                        <input type="radio" name="show_user_record_options_op" value="AVG">Avg</br>
                                        <input type="radio" name="show_user_record_options_op" value="MAX">Max
                                        <input type="radio" name="show_user_record_options_op" value="latest">Latest</br>
                                    </div>
                                    
                                    <div id="show_user_record_options_version_sec_exe">
                                        <select id="show_user_record_options_version_sec_exe_opt" data-second-select="show_user_record_options_version_sec_exe_opt_cho">
                                            <option value="Chest">Chest</option>
                                            <option value="Back">Back</option>
                                            <option value="Shoulders">Shoulders</option>
                                            <option value="Biceps">Biceps</option>
                                            <option value="Triceps">Triceps</option>
                                            <option value="Legs">Legs</option>
                                            <option value="Abs">Abs</option>
                                        </select></br>

                                        <select class="select_max_width" id="show_user_record_options_version_sec_exe_opt_cho">
                                            <option>Please select category</option>
                                        </select>
                                    </div>

                                    <div id="show_user_record_button">
                                        <input type="button" value="Show" id="show_chosen_user_record_option_button"/>
                                    </div>

                                    <p id="show_user_record_text_show"></p>
                                </form>
                            </div>

                            <div id="count_workout_plan_users">
                                <form>
                                <p id="count_workout_plan_users_text">Count</p>
                                    <div id="count_workout_plan_users_option_box">
                                        <p class="workout_plan_entry_text">Name:</p>
                                        <select class="select_max_width_3" id="count_workout_plan_users_choose" data-second-select="count_workout_plan_users_choose_option">
                                        </select></br>

                                        <p class="workout_plan_entry_text">Username:</p>
                                        <select class="select_max_width_2" id="count_workout_plan_users_choose_option">
                                            Name: <option>Choose Name</option>
                                        </select>
                                    </div>

                                    <div class="show_workout_plan_options_2">
                                        <input type="radio" name="count_comp_aba_option" value="Completed" checked>Completed</br>
                                        <input type="radio" name="count_comp_aba_option" value="Abandoned">Abandoned
                                    </div>

                                    <p id="count_workout_plan_users_text">plans.</p>

                                    <div id="count_workout_plan_users_button_box">
                                        <input type="button" value="Show" id="count_chosen_user_workout_plan_button"/>
                                    </div>

                                    <p id="count_workout_plan_users_text_show"></p>
                                </form>
                            </div>

                            <div id="show_act_abd_comp_workout_plans_box_full">
                                <form>
                                    <div id="show_act_abd_comp_workout_plans_box_1">
                                        <p id="show_act_abd_comp_workout_plans_text">Show </p>
                                        <div id="show_user_record_select_option_box">
                                            <p class="workout_plan_entry_text">Name:</p>
                                            <select class="select_max_width_3" id="show_act_abd_comp_workout_plans_choose" data-second-select="show_act_abd_comp_workout_plans_choose_option">
                                            </select></br>

                                            <p class="workout_plan_entry_text">Username:</p>
                                            <select class="select_max_width_2" id="show_act_abd_comp_workout_plans_choose_option">
                                                Name: <option value="show_act_abd_comp_workout_plans_username">Choose Name</option>
                                            </select>
                                        </div>

                                        <div id="show_act_abd_comp_workout_plans_options">
                                            <input type="radio" name="show_act_abd_comp_workout_plans_op" value="Active" checked>Active</br>
                                            <input type="radio" name="show_act_abd_comp_workout_plans_op" value="Completed">Completed</br>
                                            <input type="radio" name="show_act_abd_comp_workout_plans_op" value="Abandoned">Abandoned
                                        </div>

                                        <p id="user_text">workout plan(s).</p>

                                        <div id="show_act_abd_comp_workout_plans_button_box">
                                            <a></a><input type="button" value="Show" id="show_act_abd_comp_workout_plans_button"/>
                                        </div>
                                    </div>

                                    <div id="show_act_abd_comp_workout_plans_box_2">
                                        <li class="show_act_abd_comp_workout_plans_show_text" id="show_user_act_abd_comp_workout_plans_show_text_1"></li>
                                        <li class="show_act_abd_comp_workout_plans_show_text" id="show_user_act_abd_comp_workout_plans_show_text_2"></li></br>
                                        <li class="show_act_abd_comp_workout_plans_show_text" id="show_user_act_abd_comp_workout_plans_show_text_3"></li>
                                        <li class="show_act_abd_comp_workout_plans_show_text" id="show_user_act_abd_comp_workout_plans_show_text_4"></li>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div id="trainer_main_box_2">
                        <div id="workout_plan_create_box">
                            <form>
                                <p id="create_workout_plan_text">Create Workout Plan</p>
                                <p class="workout_plan_entry_text">Enter Plan Name:</p><input type="text" id="workout_plan_name" maxlength="22"></br>
                                <p class="workout_plan_entry_text">Enter Plan Goal:</p><input type="text" id="workout_plan_goal" maxlength="50"></br>
                                <p class="workout_plan_entry_text">Enter Plan Description:</p><input type="text" id="workout_plan_description" maxlength="255"></br>
                                
                                <p class="workout_plan_entry_text">Enter Plan Duration Time:</p>
                                <select id="workout_plan_duration">
                                    <option id="1_month">1 Month</option>
                                    <option id="2_month">2 Month</option>
                                    <option id="3_month">3 Month</option>
                                    <option id="4_month">4 Month</option>
                                    <option id="5_month">5 Month</option>
                                    <option id="6_month">6 Month</option>
                                    <option id="7_month">7 Month</option>
                                    <option id="8_month">8 Month</option>
                                    <option id="9_month">9 Month</option>
                                    <option id="10_month">10 Month</option>
                                    <option id="11_month">11 Month</option>
                                    <option id="12_month">12 Month</option>
                                </select></br>

                                <p class="workout_plan_entry_text">Enter Plan Difficulty:</p> 
                                <select id="workout_plan_diff">
                                    <option id="Easy">Easy</option>
                                    <option id="Easy">Medium</option>
                                    <option id="Easy">Hard</option>
                                    <option id="Easy">Very Hard</option>
                                </select>

                                <p id="create_workout_plan_text">Exercises</p>
                                
                                <p class="workout_plan_entry_text">1.</p>
                                <select id="add_exer_workout_plan_opt1" data-second-select="add_exer_workout_plan_opt1_exer1">
                                    <option value="Chest">Chest</option>
                                    <option value="Back">Back</option>
                                    <option value="Shoulders">Shoulders</option>
                                    <option value="Biceps">Biceps</option>
                                    <option value="Triceps">Triceps</option>
                                    <option value="Legs">Legs</option>
                                    <option value="Abs">Abs</option>
                                </select>
                                <select class="select_max_width" id="add_exer_workout_plan_opt1_exer1">
                                    <option>Please select category</option>
                                </select>

                                Series: <input type="number" id="workout_plan_series_1" value="0">
                                Reps: <input type="number" id="workout_plan_reps_1" value="0"></br>

                                <p class="workout_plan_entry_text">2.</p>
                                <select id="add_exer_workout_plan_opt2" data-second-select="add_exer_workout_plan_opt2_exer1">
                                    <option value="Chest">Chest</option>
                                    <option value="Back">Back</option>
                                    <option value="Shoulders">Shoulders</option>
                                    <option value="Biceps">Biceps</option>
                                    <option value="Triceps">Triceps</option>
                                    <option value="Legs">Legs</option>
                                    <option value="Abs">Abs</option>
                                </select>
                                <select class="select_max_width" id="add_exer_workout_plan_opt2_exer1">
                                    <option>Please select category</option>
                                </select>

                                Series: <input type="number" id="workout_plan_series_2" value="0">
                                Reps: <input type="number" id="workout_plan_reps_2" value="0"></br>

                                <p class="workout_plan_entry_text">3.</p>
                                <select id="add_exer_workout_plan_opt3" data-second-select="add_exer_workout_plan_opt3_exer1">
                                    <option value="Chest">Chest</option>
                                    <option value="Back">Back</option>
                                    <option value="Shoulders">Shoulders</option>
                                    <option value="Biceps">Biceps</option>
                                    <option value="Triceps">Triceps</option>
                                    <option value="Legs">Legs</option>
                                    <option value="Abs">Abs</option>
                                </select>
                                <select class="select_max_width" id="add_exer_workout_plan_opt3_exer1">
                                    <option>Please select category</option>
                                </select>

                                Series: <input type="number" id="workout_plan_series_3" value="0">
                                Reps: <input type="number" id="workout_plan_reps_3" value="0"></br>

                                <p class="workout_plan_entry_text">4.</p>
                                <select id="add_exer_workout_plan_opt4" data-second-select="add_exer_workout_plan_opt4_exer1">
                                    <option value="Chest">Chest</option>
                                    <option value="Back">Back</option>
                                    <option value="Shoulders">Shoulders</option>
                                    <option value="Biceps">Biceps</option>
                                    <option value="Triceps">Triceps</option>
                                    <option value="Legs">Legs</option>
                                    <option value="Abs">Abs</option>
                                </select>
                                <select class="select_max_width" id="add_exer_workout_plan_opt4_exer1">
                                    <option>Please select category</option>
                                </select>

                                Series: <input type="number" id="workout_plan_series_4" value="0">
                                Reps: <input type="number" id="workout_plan_reps_4" value="0"></br>

                                <p class="workout_plan_entry_text">5.</p>
                                <select id="add_exer_workout_plan_opt5" data-second-select="add_exer_workout_plan_opt5_exer1">
                                    <option value="Chest">Chest</option>
                                    <option value="Back">Back</option>
                                    <option value="Shoulders">Shoulders</option>
                                    <option value="Biceps">Biceps</option>
                                    <option value="Triceps">Triceps</option>
                                    <option value="Legs">Legs</option>
                                    <option value="Abs">Abs</option>
                                </select>
                                <select class="select_max_width" id="add_exer_workout_plan_opt5_exer1">
                                    <option>Please select category</option>
                                </select>

                                Series: <input type="number" id="workout_plan_series_5" value="0">
                                Reps: <input type="number" id="workout_plan_reps_5" value="0"></br>

                                <p class="workout_plan_entry_text">6.</p>
                                <select id="add_exer_workout_plan_opt6" data-second-select="add_exer_workout_plan_opt6_exer1">
                                    <option value="Chest">Chest</option>
                                    <option value="Back">Back</option>
                                    <option value="Shoulders">Shoulders</option>
                                    <option value="Biceps">Biceps</option>
                                    <option value="Triceps">Triceps</option>
                                    <option value="Legs">Legs</option>
                                    <option value="Abs">Abs</option>
                                </select>
                                <select class="select_max_width" id="add_exer_workout_plan_opt6_exer1">
                                    <option>Please select category</option>
                                </select>

                                Series: <input type="number" id="workout_plan_series_6" value="0">
                                Reps: <input type="number" id="workout_plan_reps_6" value="0"></br>

                                <p class="workout_plan_entry_text">7.</p>
                                <select id="add_exer_workout_plan_opt7" data-second-select="add_exer_workout_plan_opt7_exer1">
                                    <option value="Chest">Chest</option>
                                    <option value="Back">Back</option>
                                    <option value="Shoulders">Shoulders</option>
                                    <option value="Biceps">Biceps</option>
                                    <option value="Triceps">Triceps</option>
                                    <option value="Legs">Legs</option>
                                    <option value="Abs">Abs</option>
                                </select>
                                <select class="select_max_width" id="add_exer_workout_plan_opt7_exer1">
                                    <option>Please select category</option>
                                </select>

                                Series: <input type="number" id="workout_plan_series_7" value="0">
                                Reps: <input type="number" id="workout_plan_reps_7" value="0"></br>

                                <p class="workout_plan_entry_text">8.</p>
                                <select id="add_exer_workout_plan_opt8" data-second-select="add_exer_workout_plan_opt8_exer1">
                                    <option value="Chest">Chest</option>
                                    <option value="Back">Back</option>
                                    <option value="Shoulders">Shoulders</option>
                                    <option value="Biceps">Biceps</option>
                                    <option value="Triceps">Triceps</option>
                                    <option value="Legs">Legs</option>
                                    <option value="Abs">Abs</option>
                                </select>
                                <select class="select_max_width" id="add_exer_workout_plan_opt8_exer1">
                                    <option>Please select category</option>
                                </select>

                                Series: <input type="number" id="workout_plan_series_8" value="0">
                                Reps: <input type="number" id="workout_plan_reps_8" value="0"></br>

                                <div id="create_workout_plan_button_box">
                                    <input type="button" value="Create" id="create_workout_plan_button"/>
                                </div>
                            </form>
                        </div>

                        <div id="create_trainer_box">
                            <p id="create_new_trainer_text">Create New Trainer:</p>
                            <div id="create_trainer_select_box">
                                
                                <p class="workout_plan_entry_text">Name:</p>
                                <select class="select_max_width_3" id="create_trainer_select_choose" data-second-select="create_trainer_select_choose_option">
                                </select></br>

                                <p class="workout_plan_entry_text">Username:</p>
                                <select class="select_max_width_2" id="create_trainer_select_choose_option">
                                    <option>Choose Name</option>
                                </select>
                            </div>
                            <input type="button" value="Create" id="create_new_trainer_button"/>
                        </div>

                        <div id="delete_workout_plan">
                            <p id="create_new_trainer_text">Delete workout plan: </p>
                            <div id="comp_ab_workout_plan_section">
                                <select class="select_max_width" id="workout_plan_select2">
                                    <option>Select plan</option>
                                </select>
                            </div>

                            <div id="comp_ab_workout_plans_button_box">
                                <a></a><input type="button" value="Action" id="delete_workout_plan_button"/>
                            </div>
                        </div>
                    </div>
                </div>
        `;
    }
}