const mongoose = require('mongoose')

const userSchema=mongoose.Schema({
    username: {type:String,isRequired:true},
    email: {type:String,isRequired:true},
    password: {type:Number,isRequired:true},
    age: {type:Number,isRequired:true},
    city: {type:String,isRequired:true}
},{
    versionKey: false
})

const userModel = mongoose.model('user',userSchema)

module.exports ={
    userModel
}