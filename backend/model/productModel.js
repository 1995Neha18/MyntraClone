const mongoose = require('mongoose')

const productSchema=mongoose.Schema({
    name: {type:String,isRequired:true},
    description: {type:String,isRequired:true},
    price: {type:Number,isRequired:true},
    size: {type:String,isRequired:true},
    brand: {type:String,isRequired:true},
    category: {type:String,isRequired:true},
    image: {type:String,isRequired:true},
    image1: {type:String,isRequired:true},
    image2: {type:String,isRequired:true},
    image3: {type:String,isRequired:true},

},{
    versionKey: false
})

const productModel = mongoose.model('product',productSchema)

module.exports ={
    productModel
}

