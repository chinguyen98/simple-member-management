const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/simplemembermanagement');
const db = mongoose.connection;

const memberSchema = mongoose.Schema({
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

const Member = mongoose.model('Member', memberSchema);

module.exports.createMember = (newUser, callback) => {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            newUser.password = hash;
            newUser.save(callback);
        })
    })
}

module.exports = Member;

