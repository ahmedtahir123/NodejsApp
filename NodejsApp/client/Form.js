const mongoose=require("mongoose")
const Schema=mongoose.Schema

//Create Schema

const FormSchema=new Schema({
    name:{
        type: String,
        required:true
    }
})
// export Schema

module.exports = Form =mongoose.model("todo",FormSchema)