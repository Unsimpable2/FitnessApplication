/**
 * Check password requirements
 * @param {string} username
 * @param {string} name
 * @param {string} password
 * @returns `null` on success, `string` if an error occured
 */
export function verify(username, name, password) {
	//username check
	if (username.length <= 7) {
		return "Your Username Is To Short";
	}

	const usernameTru = username.match(/[A-Z]/g);
	if (usernameTru === null) {
		return "Your Username Doesn't Have Capital Letter";
	}

	//name check
	const nameTru = (name.charAt(0) === name.charAt(0).toUpperCase());
	if (nameTru === false) {
		return "First Letter In Your Name Is Not a Capital Letter";
	}

	//password check
	if (password.length <= 7) {
		return "Your Password Is To Short";
	}

	const passwordTruCap = password.match(/[A-Z]/g);
	if (passwordTruCap === null) {
		return "Your Password Doesn't Have Capital Letter";
	}

	const passwordTruLow = password.match(/[a-z]/g);
	if (passwordTruLow === null) {
		return "Your Password Doesn't Have Lowercase Letter";
	}

	const passwordTruNumber = password.match(/\d+/g);
	if (passwordTruNumber === null) {
		return "Your Password Doesn't Have Any Number";
	}

	const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
	const passwordTruSpec = specialChars.test(password);
	if (passwordTruSpec === false) {
		return "Your Password Doesn't Have Any Special Character";
	}

	const pattern1 = "123";
	const passwordTruPat1 = password.includes(pattern1);
	if (passwordTruPat1 === true) {
		return "Your Password Contains Sequences '123'";
	}

	return null;
}
