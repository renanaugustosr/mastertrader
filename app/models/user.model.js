const mongoose = require('mongoose');

const OperacaoSchema = mongoose.Schema({
    papel: String
});

const UserSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    operacoes: [OperacaoSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);