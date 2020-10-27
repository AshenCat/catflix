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
    subscriptions: [{
        
    }],
    notifications: [{

    }],
    history: [{

    }]
}, {timestamps: true})

module.exports = mongoose.model("users", userSchema)