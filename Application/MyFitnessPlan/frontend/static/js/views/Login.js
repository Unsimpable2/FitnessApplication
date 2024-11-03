import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Login");
    }

    getScripts() {
        return [
            "/static/js/views/scripts/verification_reg.js"
        ]
    }

    escapeHtml(unsafe) {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    async getHtml() {
        const queryString = window.location.search;
        const params = new URLSearchParams(queryString);
        const error = params.get("err");
        let error_mes = "";
        if(error === "ban"){
            error_mes = "You have been baned!"
        }
        else if (error === "true"){
            error_mes = "Incorrect Username or Password"
        }
        const reg_error = params.has("register_error") ? this.escapeHtml(params.get("register_error")) : null

        return `
            <h1>Signin or Signup to Save Your Progress and More!</h1>

            <div id="login_main_box">
                    <div id="login_box">
                        <p class="box_text">SIGNIN</p>

                        <form method="POST">
                            <div class="input_box">
                                <p class="box_description">Enter Your Username</p>
                                <input type="text" name="username" id="username">
                            </div>

                            <div class="input_box">
                                <p class="box_description">Enter Your Password</p>
                                <input type="password" name="password" id="password">
                            </div>
                        
                            <div class="input_box">
                                <p id="error_message_log" class="error_message">${error_mes}</p>
                            </div>

                            <div class="input_box">
                                <button id="login_button" class="button_style">Signin to Page</button>
                            </div>
                        </form>
                    </div>

                <div id="register_box">
                    <p class="box_text">REGISTER</p>

                    <form method="POST" action="/register" id="reg_id">
                        <div class="input_box">
                            <p class="box_description">Enter Your Username</p>
                            <input type="text" name="username_reg" id="username_reg">
                        </div>

                        <div class="input_box">
                            <p class="box_description">Enter Your Name</p>
                            <input type="text" name="name_reg" id="name_reg">
                        </div>

                        <div class="input_box">
                            <p class="box_description">Enter Your Password</p>
                            <input type="password" name="password_reg" id="password_reg">
                        </div>
                        
                        <div class="input_box">
                            <p id="error_message_reg" class="error_message">${reg_error ? reg_error : ""}</p>
                        </div>

                        <div class="input_box">
                            <button id="register_button" class="button_style">Register Your Account</button>
                        </div>
                    </form>
                </div>

                <div id="login_info_box">
                    <p class="box_text">Account Requirements</p>

                    <p class="box_description">Username Should Contain:</p>
                    <ul>
                        <li>Minimum 8 Characters</li>
                        <li>At Least One Capital Letter</li>
                    </ul>

                    <p class="box_description">Name Should Contain:</p>
                    <ul>
                        <li>Your Real Name</li>
                        <li>Start With a Capital Letter</li>
                    </ul>

                    <p class="box_description">Password Should Contain:</p>
                    <ul>
                        <li>Minimum 8 Characters</li>
                        <li>At Least One Capital Letter</li>
                        <li>At Least One Lowercase Letter</li>
                        <li>At Least One Number</li>
                        <li>At Least One Special Character</li>
                        <li>Not Having a Number Sequence Like "123" Or "1234"</li>
                    </ul>
                </div>

                
                
            </div>
            <script type="module" src="/static/js/views/scripts/verification_reg.js" defer></script>
        `;
    }
}