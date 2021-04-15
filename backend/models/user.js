const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let userSchema = new Schema({
    username: {
        required: true,
        unique: true,
        type: String,
        minlength: 6,
        maxlength: 18
    },
    password: {
        required: true,
        type: String,
    },
    avatar: {
        type: String,
        default: "generic"
    },
    quote: {
        type: String,
    },
    email: {
        type: String,
        minlength: 6,
        maxlength: 18
    },
    access: {
        type: String,
        enum: ["user", "admin", "tech"],
        default: "user"
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    notifications: [{
        type: Schema.Types.ObjectId,
        ref: 'Notification'
    }],
    history: [{
        type: Schema.Types.ObjectId,
        ref: 'Content'
    }],
    uploads: [{
        type: Schema.Types.ObjectId,
        ref: 'Content'
    }]
}, {timestamps: true})

module.exports = mongoose.model("users", userSchema)