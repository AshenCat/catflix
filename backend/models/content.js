const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const requiredString = {
    type: String,
    required: true,
}

let ContentSchema = new Schema({
    title: {
        ...requiredString,
        minlength: 3,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    file: {
        filename: {...requiredString},
        path: {...requiredString}
    },
    views: {
        type: Number,
        default: 0
    },
    upvotes: {
        type: Number,
        default: 0
    },
    visibility: {
        type: String,
        enum: ['public', 'private'],
        default: 'public'
    },
    comments: [{        
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    tags: [{
        type: String,
        default: 'meme'
    }]
}, {timestamps: true})

module.exports = mongoose.model("content", ContentSchema);