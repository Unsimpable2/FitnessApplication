function add_user_record_func(event){
    
    const user_section = event.target.value
    const user_fragment = document.createDocumentFragment()

    userplacedata_user.filter(chosen_user_data => chosen_user_data.user_name == user_section).forEach(users => {
        const user_option = document.createElement("option")
        user_option.textContent = users.user_username
        user_option.value = users.user_id
        user_fragment.appendChild(user_option)
    });
    document.getElementById(event.target.dataset.secondSelect).replaceChildren(user_fragment)
}

var user_all_id = ["show_user_bmi_bfp_dcr_choose",
                    "show_user_record_choose",
                    "count_workout_plan_users_choose",
                    "show_act_abd_comp_workout_plans_choose",
                    "create_trainer_select_choose",
                    "create_new_admin_choose",
                    "ban_activ_user_acc_choose",
                    "degraded_user_account_choose"]

for (const id of user_all_id) {
    const change_user_option = document.getElementById(id);

    const names = new Set(userplacedata_user.map(user_data => user_data.user_name))
    const names_fragment = document.createDocumentFragment()
    for (const name of names) {
        const name_option = document.createElement("option")
        name_option.value = name;
        name_option.textContent = name;
        names_fragment.appendChild(name_option);
    }
    change_user_option.replaceChildren(names_fragment)

    change_user_option.addEventListener("change", add_user_record_func)

    add_user_record_func({
        target: change_user_option
    })
}