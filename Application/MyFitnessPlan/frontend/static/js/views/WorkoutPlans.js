import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Workout Plans");
    }

    async getHtml() {
        return `
            <h1>Choose Your Ideal Workout Plan!</h1>
            
            <div id="workout_plans_main_box">
                <div id="not_log_in_message_box">
                    <h1> Please login first to have access to this section of my website. </h1>
                </div>
            </div>
        `;
    }
}