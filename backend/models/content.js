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
    path: {
        ...requiredString
    },
    views: {
        type: Number,
        default: 0
    },
    upvotes: {
        type: Number,
        default: 0
    },
    comments: [{        
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    tags: [{
        type: Schema.Types.ObjectId,
        ref: 'Tag'
    }]
}, {timestamps: true})

module.exports = mongoose.model("content", ContentSchema);