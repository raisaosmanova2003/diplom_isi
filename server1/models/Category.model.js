const mongoose = require("mongoose")

const category = mongoose.model("category", new mongoose.Schema({
   // id: {
   //    type: Number
   // },
   Name: {
      type: String
   },
   books:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:"books"
   }]

}))
module.exports = { category }
