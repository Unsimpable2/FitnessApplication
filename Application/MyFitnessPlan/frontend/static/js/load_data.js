(async () => {
    try {
        const response = await fetch("/userplace/loaddata")
        const data = await response.json()
        window.userplacedata = data
    }
    catch (e) { }
})()