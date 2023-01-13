
const mongoose=require("mongoose")
require("dotenv").config()
mongoose.set('strictQuery', false)
const connection=mongoose.connect(process.env.Mongo_URL)

const BookSchema=mongoose.Schema({
    "Book_ID":{type:String,require:true},
"Title":{type:String,require:true},
"Author_ID":{type:String,require:true},
"Publisher":{type:String,require:true},
 "Publish Date":{type:String,require:true},
 "Category":{type:String,require:true},
 "Price":{type:String,require:true},
"Sold_Count":{type:String,require:true},

})
const AuthorSchema=mongoose.Schema({
    "Author_ID":{type:String,require:true},
     "Name":{type:String,require:true},
   "Phone number":{type:String,require:true,default:null},
   "Birth Date":{type:String,require:true,},
  "Death Date":{type:String,require:true,default:null}

})
const BookModel=mongoose.model("book",BookSchema)
const AuthorModel=mongoose.model("author",AuthorSchema)
module.exports={connection,BookModel,AuthorModel}