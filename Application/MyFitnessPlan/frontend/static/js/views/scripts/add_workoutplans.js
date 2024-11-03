var plan_all_id = ["workout_plan_select", "workout_plan_select2"]

for (const id of plan_all_id) {
    const workout_plan_option = document.getElementById(id);

    const plans = new Set(workout_plans_data.map(workout_data => workout_data.plan_name))
    const plans_fragment = document.createDocumentFragment()
    for (const plan of plans) {
        const plan_option = document.createElement("option")
        plan_option.value = plan;
        plan_option.textContent = plan;
        plans_fragment.appendChild(plan_option);
    }
    workout_plan_option.replaceChildren(plans_fragment)
}

