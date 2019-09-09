module.exports.validateForm = function (req, res, next) {
	let errors = [];
	if (!req.body.name) {
		errors.push('Name field is required!');
	}
	if (!req.body.username) {
		errors.push('Username field is required!');
	}
	if (!req.body.password) {
		errors.push('Password field is required!');
	}
	if (!req.body.confirmPassword) {
		errors.push('Confirm password field is required!');
	}

	if(req.body.password!==req.body.confirmPassword){
		errors.push('Confirm password not match!!!');
	}

	if (errors) {
		res.render('register', { errors: errors, value: req.body });
	}

	next();
}