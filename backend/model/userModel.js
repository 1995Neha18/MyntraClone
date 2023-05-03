const mongoose = require('mongoose')

const userSchema=mongoose.Schema({
    username: {type:String,isRequired:true},
    email: {type:String,isRequired:true},
    password: {type:Number,isRequired:true},

},{
    versionKey: false
})

const userModel = mongoose.model('user',userSchema)

module.exports ={
    userModel
}