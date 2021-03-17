const {Schema, model} = require('mongoose')

const User = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    avatarUrl: {
        type: String,
        required: false,
    },
    date: {
        type: Date,
        default: Date.now
    },
    rating: [{
        countryId: {
            type: String,
            required: false
        },
        score: {
            type: Number,
            required: false
        }
    }
    ]
}, {collection:'users'})


module.exports = model('User', User)