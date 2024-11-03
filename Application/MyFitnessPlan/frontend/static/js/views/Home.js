import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("MyFitnessPlan");
    }

    async getHtml() {
        return `
            <h1>About my Application!</h1>
            <a id="description_text">
                In this main section, I will briefly describe each part, how it works and what you can find in it.</br>
                You can get to them by clicking on the boxes below or the navigation bar on the left side.
            </a>

            <div id="home_main">

                <a href="/exercises">
                <div id="home_box">
                    <p id="description_title">Exercises</p>
                    <p id="description_text">
                        In this section you will find different types of exercises for each part of the body.
                        Select the body part you are interested in using the button and by using the next and previous buttons you can change the exercises to the chosen body part. 
                        Each exercise will be shown with a detailed description of how to do it, how difficult the exercise is and whether the exercise is two-sided.
                    </p>
                </div>
                </a>

                <a href="/calculators">
                <div id="home_box">
                    <p id="description_title">Calculators</p>
                    <p id="description_text">
                        Here you can find easy-to-use calculators that calculate your BMI (Body Mass Index), 
                        BFP (Body Fat Percentage) and Daily Caloric Requirement depending on the amount of 
                        exercise you have and whether you want to lose/maintain or gain weight.
                    </p>
                </div>
                </a>

                <a href="/workoutplan">
                <div id="home_box">
                    <p id="description_title">Workout Plans</p>
                    <p id="description_text">
                        Here you will find various types of training plans prepared by trainers. 
                        Each plan consists of specific exercises related to a given plan, what is its goal and 
                        how long it can take on average. The trainer has the ability to view the current results 
                        of those who signed up for a given plan.</br>
                        LOGIN FIRST TO ACCESS THIS FEATURE!!
                    </p>
                </div>
                </a>

                <a href="/login">
                <div id="home_box">
                    <p id="description_title">Login</p>
                    <p id="description_text">
                        Here you will find login or registration options if you do not have an account 
                        yet to be able to save your results or records, without an account it is not possible. 
                        Thanks to the account, the user gains the opportunity to sign up for all kinds of training plans.
                    </p>
                </div>
                </a>

                <a href="/userplace">
                <div id="home_box">
                    <p id="description_title">User Place</p>
                    <p id="description_text">
                        Your own space where, after logging in, you will be able to view your exercise records, 
                        saved results from calculators or what exercise plans you have signed up for, all in one place.</br>
                        LOGIN FIRST TO ACCESS THIS FEATURE!!
                    </p>
                </div>
                </a>

                <a href="/source">
                <div id="home_box">
                    <p id="description_title">Source</p>
                    <p id="description_text">
                        In this place you can find all links to sites from which I took information used on my site. 
                        I don't own those descriptions and please send all expressions of appreciation to the authors of specific descriptions.
                    </p>
                </div>
                </a>
                
            </div>
        `;
    }
}