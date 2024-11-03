(async () => {
    try {
        const response_workout_plans = await fetch("/userplace/loadworkoutplansdata")
        const workout_plans = await response_workout_plans.json()
        window.workout_plans_data = workout_plans
    }
    catch (e) { }
})()