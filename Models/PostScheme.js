const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    photos: {
        type: Array,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('postSchema', postSchema)