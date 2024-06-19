const mongoose = require("mongoose")

const Books = mongoose.model("books", new mongoose.Schema({
   id:{
type: Number
   },
   bookName:{
type: String
   },
   categoryName:{
      type: String
         },
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