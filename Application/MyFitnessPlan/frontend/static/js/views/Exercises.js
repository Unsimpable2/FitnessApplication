import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Exercises");
    }

    getScripts() {
        return [
            "/static/js/views/scripts/photo_change.js"
        ]
    }

    async getHtml() {
        return `
            <h1>Best Place to Learn New Exercises, Just Click Button!</h1>

            <div id="main_exercises">

                <div id="button_box">
                    <p id="description_button">Workout Section</p>

                    <button type="button" id="w_chest" class="buttons_options">Chest</button>
                    <button type="button" id="w_back" class="buttons_options">Back</button>
                    <button type="button" id="w_shoulders" class="buttons_options">Shoulders</button>
                    <button type="button" id="w_biceps" class="buttons_options">Biceps</button>
                    <button type="button" id="w_triceps" class="buttons_options">Triceps</button>
                    <button type="button" id="w_legs" class="buttons_options">Legs</button>
                    <button type="button" id="w_abs" class="buttons_options">Abs</button>
                    
                    <p id="description_button">Stretch Section</p>

                    <button type="button" id="s_legs" class="buttons_options">Legs</button>
                    <button type="button" id="s_chest" class="buttons_options">Chest</button>
                    <button type="button" id="s_arms" class="buttons_options">Arms</button>
                    <button type="button" id="s_abs" class="buttons_options">Abs</button>
                    <button type="button" id="s_others" class="buttons_options">Others</button>

                </div>

                <div id="main_content">

                    <div id="photo_box">
                        <img src="" id="photo_id">
                    </div>

                    <div id="prev_next_box">
                        <div id="show_buttons" style="visibility:hidden">
                            <button type="button" id="prev_photo">Previous Photo</button>
                            <button type="button" id="next_photo">Next Photo</button>
                        </div>
                    </div>
                </div>

                <div id="description_box">
                    <div id="exercise_des_full">
                        <div id="exercise_des">

                            <p id="description_exercise"></p>

                            <p id="exercise_text"></p>

                        </div>

                        <div id="exercise_text_source">
                            <p id="exercise_text_source"></p>
                        </div>
                    </div>

                    <div id="stability_info">
                        <p id="stability_description">Prober Stability</p>

                        <p id="stability_text">
                            To stabilize the body during exercise, 
                            place the tongue on the palate so that its beginning touches the beginning of the teeth, 
                            then inhale through the nose, at this moment the diaphragm should tense, add tension to the abdominal muscles.
                        </p>
                    </div>

                    <div id="icon_legend">
                        <p id="description_button">Legend</p>
                        
                        <div class="legend_img">
                            <img src="/static/img/Legend/bothside.png"> Perform Exercise On Both Sides. 
                        </div>
                        <div class="legend_img">
                            <img src="/static/img/Legend/stability.png"> Keep Proper Body Stabilization.
                        </div>

                        <div class="legend_img">
                            <img src="/static/img/Legend/easy.png"> Exercise Level: Easy 
                        </div>

                        <div class="legend_img">
                            <img src="/static/img/Legend/medium.png"> Exercise Level: Medium
                        </div>

                        <div class="legend_img">
                            <img src="/static/img/Legend/hard.png"> Exercise Level: Hard
                        </div>

                        <div class="legend_img">
                            <img src="/static/img/Legend/veryhard.png"> Exercise Level: Very Hard
                        </div>
                    </div>
                </div>

            </div>
            <script type="module" src="/static/js/views/scripts/photo_change.js" defer></script>
        `;
    }
}