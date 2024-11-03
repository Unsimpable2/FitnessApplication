import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("User Place");
    }

    async getHtml() {
        return `
            <h1>Your Private Part Visible Only to You!</h1>

            <div id="userplace_main_box">
                <div id="not_log_in_message_box">
                    <h1> Please login first to have access to this section of my website. </h1>
                </div>
            </div>
        `;
    }
}