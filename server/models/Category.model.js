const mongoose = require("mongoose")

const category = mongoose.model("category", new mongoose.Schema({
   id:{
type: Number
   },
   Name:{
type: String
   }
  
}))
module.exports = { category }
