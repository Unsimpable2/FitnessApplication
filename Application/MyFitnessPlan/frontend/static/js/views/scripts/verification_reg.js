document.getElementById('register_button').addEventListener('click', async (e) => {
    e.preventDefault();
    const verifer = import("/static/js/views/scripts/verification_common.mjs");
    const username = document.getElementById('username_reg').value;
    const name = document.getElementById('name_reg').value;
    const password = document.getElementById('password_reg').value;
    const { verify } = await verifer;
    const error = verify(username, name, password);
    if (error) {
        document.getElementById('error_message_reg').innerText = error;
    } else {
        /** @type {HTMLFormElement} */
        const form = document.getElementById('reg_id');
        form.submit()
    }
});