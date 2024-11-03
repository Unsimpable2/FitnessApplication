import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Login");
    }

    getScripts() {
        return [
           
        ]
    }

    async getHtml() {
        return `
            <h1>Signin or Signup to Save Your Progress and More!</h1>

            <div id="login_main_box">
                <div id="logout_box">
                    <p class="box_text">Logout option</p>
                    <div id="input_box_2">
                        <a  href="/logout"><button id="logout_button" class="button_style">Logout</button></a>
                    </div>
                </div>
            </div>
        `;
    }
}