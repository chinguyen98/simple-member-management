const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/membermanagement', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
	console.log('Connect successfully!!!');
});

const memberSchema = new mongoose.Schema({
	username: {
		type: String,
	},
	password: {
		type: String
	},
	name: {
		type: String
	}
});

const Member = module.exports = mongoose.model('Member', memberSchema);

module.exports.createMember = (newMember) => {
	bcrypt.genSalt(10, (err, salt) => {
		bcrypt.hash(newMember.password, salt, (err, hash) => {
			newMember.password = hash;
			newMember.save().then((member) => console.log(member));
		})
	});
};

