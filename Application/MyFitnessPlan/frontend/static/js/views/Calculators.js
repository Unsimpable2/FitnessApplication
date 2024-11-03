import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Calculators");
    }

    getScripts() {
        return [
            "/static/js/views/scripts/hide.js", 
            "/static/js/views/scripts/bmi_bfp.js",
            "/static/js/views/scripts/dcr.js"
        ]
    }

    async getHtml() {
        return `
            
            <h1>Calculate Your BMI/BFP and Daily Caloric Requirement!</h1>
            
            <div id="calc_main">
                <div id="calc_frame">
                    <div id="bmi_bfp_entry">
                        <p id="description_title">BMI and BFP Calculators</p>
                        <form id="calc_bmi_bfp">

                            <input type="radio" name="Sex" id="noCheck" value="Man" checked>Man
                            <input type="radio" name="Sex" id="yesCheck" value="Woman">Woman</br>
                            
                            <a> </a><input type="number" id="Height" value="0"> Height(cm)</br>
                            <a> </a><input type="number" id="Weight" value="0"> Weight(kg)</br>
                            <a> </a><input type="number" id="Neck" value="0"> Neck(cm)</br>
                            <a> </a><input type="number" id="Waist" value="0"> Waist(cm)</br>

                            <div id="ifYes" style="visibility:hidden">
                                <a> </a><input type="number" id="Hip" value="0"> Hip(cm)
                            </div>

                            </br>
                            <a> </a><input type="button" value="Calculate" id="calculate_bmi_bfp"/>
                        </form>
                    </div>

                    <div id="result_box_bmi_bfp">
                        <p id="description_dcr_bmi">Your BMI is equal to: </p></br>
                        <p id="description_dcr_bfp">Your BFP is equal to: </p></br>
                    </div>

                    <div id="dcr_box">
                        <p id="description_title">Daily Caloric Requirement</p>
                        <form>
                            <div id="input_data_1">
                                <input type="radio" name="Sex_drc" value="Man" checked>Man
                                <input type="radio" name="Sex_drc" value="Woman">Woman</br>

                                <a> </a><input type="number" id="Age_drc" value="0"> Age</br>
                                <a> </a><input type="number" id="Height_drc" value="0"> Height(cm)</br>
                                <a> </a><input type="number" id="Weight_drc" value="0"> Weight(kg)</br>
                            </div>

                            <div id="input_data_2">
                                <a id="description_dcr">Choose Your Goal:</a></br>
                                <input type="radio" name="Goal" value="Loss" checked>Weight Loss</br>
                                <input type="radio" name="Goal" value="Maintain">Maintain Weight</br>
                                <input type="radio" name="Goal" value="Gain">Gain Weight</br>
                            </div>

                            <div id="input_data_3">
                                <a id="description_dcr">Level of Physical Activity:</a></br>

                                <p id="description_level">Sitting Work</p>

                                <div id="ZPA">
                                    <input type="radio" name="Activity" value="Zero" id="ZPA_input" checked><label for="ZPA_input">Zero</label>
                                </div>

                                <div id="VLA">
                                    <input type="radio" name="Activity" value="VeryLow" id="VAL_input"><label for="VAL_input">Very Low</label>
                                </div>

                                <div id="LPA">
                                    <input type="radio" name="Activity" value="Low" id="LPA_input"><label for="LPA_input">Low</label></br>
                                </div>

                                <div id="MPA">
                                    <input type="radio" name="Activity" value="Mid" id="MPA_input"><label for="MPA_input">Mid</label>
                                </div>

                                <div id="HPA">
                                    <input type="radio" name="Activity" value="High" id="HPA_input"><label for="HPA_input">High</label>
                                </div>

                                <div id="VHPA">
                                    <input type="radio" name="Activity" value="VeryHigh" id="VHPA_input"><label for="VHPA_input">Very High</label></br>
                                </div>

                                <p id="description_level">Active Work/Physical</p>

                                <div id="A_ZPA">
                                    <input type="radio" name="Activity" value="A_Zero" id="A_ZPA_input"><label for="A_ZPA_input">Zero</label>
                                </div>

                                <div id="A_VLA">
                                    <input type="radio" name="Activity" value="A_VeryLow" id="A_VAL_input"><label for="A_VAL_input">Very Low</label>
                                </div>

                                <div id="A_LPA">
                                    <input type="radio" name="Activity" value="A_Low" id="A_LPA_input"><label for="A_LPA_input">Low</label></br>
                                </div>

                                <div id="A_MPA">
                                    <input type="radio" name="Activity" value="A_Mid" id="A_MPA_input"><label for="A_MPA_input">Mid</label>
                                </div>

                                <div id="A_HPA">
                                    <input type="radio" name="Activity" value="A_High" id="A_HPA_input"><label for="A_HPA_input">High</label>
                                </div>

                                <div id="A_VHPA">
                                    <input type="radio" name="Activity" value="A_VeryHigh" id="A_VHPA_input"><label for="A_VHPA_input">Very High</label>
                                </div>

                                <a></a><a></a><a></a><a></a><a></a><a></a><input type="button" value="Calculate" id="calculate_drc"/>
                            </div>
                            
                        </form>
                    </div>

                    <div id="result_box">
                        <p id="dcr_result">Your Daily Caloric Requirement is Equal to: </p>
                    </div>

                    <div id="level_description">
                        <p id="description_dcr">Hover Activiity Level For More Informations</p>
                        <p id="description_lv"></p>
                    </div>
                </div>

                <div id="calc_frame">
                    <img src="/static/img/BMITable.png" id="img_frame_bmi">

                    <div id="bmi_description">
                        <p id="description_dcr">BMI Description</p>
                        <p id="description_bmi_bfp">
                            Body Mass Index(BMI) is a persons weight in kilograms divided by the square of height in meters. 
                            A high BMI can indicate high body fatness. 
                            BMI screens for weight categories that may lead to health problems, but it does not diagnose the body fatness or health of an individual. 
                            It should also be taken into account that the BMI does not take muscle tissue into calculations, just overall body mass.
                        </p>
                    </div>
                    
                    <img src="/static/img/BodyFatCat.png" id="img_frame_bfp">

                    <div id="bfp_description">
                        <p id="description_dcr">BFP Description</p>
                        <p id="description_bmi_bfp">
                            Body Fat of a human or other living being is the total mass of fat divided by total body mass multiplied by 100; body fat includes essential body fat and storage body fat. 
                            Essential is necessary to maintain life and reproductive functions. 
                            The percentage of essential body fat for women is greater than that for men, due to the demands of childbearing and other hormonal functions.
                        </p>
                    </div>
                    
                </div>
            </div>
            <script type="module" src="/static/js/views/scripts/hide.js" defer></script>
            <script type="module" src="/static/js/views/scripts/bmi_bfp.js" defer></script>
            <script type="module" src="/static/js/views/scripts/dcr.js" defer></script>
        `;
    }
}