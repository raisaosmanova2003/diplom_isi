const mongoose = require("mongoose")

const Books = mongoose.model("books", new mongoose.Schema({
    // id: {
    //     type: Number
    // },
    // categoryName: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref:"category"
    // }],
    bookName: {
        type: String
    },
    category: { type: String },
    title: {
        type: String
    },
    author: {
        type: String
    },
    image: {
        type: String
    },
    price: {
        type: Number
    },
    desc: {
        type: String
    },
}))

module.exports = { Books }