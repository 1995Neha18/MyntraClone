const mongoose = require('mongoose')

const productSchema=mongoose.Schema({
    name: String,
    title: String,
    strike_price: Number,
    size: String,
    brand: String,
    discount: String,
    category: String,
    images: Array,
    userID:String
},{
    versionKey: false
})

const productModel = mongoose.model('product',productSchema)

module.exports ={
    productModel
}

