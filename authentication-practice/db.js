const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ObjectId = mongoose.ObjectId;

const User = new Schema({
    username: String,
    email: String,
    password: String
});

const Todo = new Schema({
    title: String,
    done: Boolean,
    userId: ObjectId,
});

const Users = mongoose.model('Users',User);
const Todos = mongoose.model('Todos',Todo);

module.exports = {
    Users,
    Todos
}