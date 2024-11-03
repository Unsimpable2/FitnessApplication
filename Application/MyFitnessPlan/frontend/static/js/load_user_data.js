(async () => {
    try {
        const response_user = await fetch("/userplace/loaduserdata")
        const user_data = await response_user.json()
        window.userplacedata_user = user_data
    }
    catch (e) { }
})()