const Member = require('../models/member');

module.exports.registerPage = function (req, res) {
	res.render('register');
}

module.exports.register = function (req, res) {
	const name = req.body.name;
	const username = req.body.username;
	const password = req.body.password;

	let newMember = new Member({
		name: name,
		username: username,
		password: password
	});

	Member.findOne({ username: username }, (err, user) => {
		if (err)
			throw err;
		if (!user) {
			Member.createMember(newMember);
			req.flash('successRegister', 'Register successfully!');
			res.location('/');
			res.redirect('/');
		} else {
			req.flash('fail', 'Username already exist!');
			res.location('/register');
			res.redirect('/register');
		}
	})

};