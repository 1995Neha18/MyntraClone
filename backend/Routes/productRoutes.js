const express= require('express');
const { productModel } = require('../model/productModel');

const productRoutes = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     NewProduct:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           description: product name.
 *         category:
 *           type: string
 *           description: category of product.
 *         image:
 *           type: string
 *           description: link of product image.
 *         price:
 *           type: integer
 *           description: price of product.
 *     RegResult:
 *       type: object
 *       properties:
 *         msg:
 *           type: string
 *           description: message
 *           example: User Registered Succesfully. 
 *     LogReq:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           description: message
 *           example: Albin@gmail.com.
 *         password:
 *           type: string
 *           description: message
 *           example: Albin123.
 *     AddResponse:
 *       type: object
 *       properties:
 *         msg:
 *           type: string
 *           description: message
 *           example: Product Added Succesfully.
 */

/**
 * @swagger
 * /products/add:
 *  post:
 *    summary: To add new Products.
 *    tags: [Products]
 *    security:
 *      - bearerAuth: []
 *    requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *            $ref: '#/components/schemas/NewProduct' 
 *    responses:
 *     200:
 *       description: The user was successfully registered
 *       content:
 *         application/json:
 *            schema:
 *               $ref: '#/components/schemas/AddResponse'
 *     400:
 *       description: Bad Request      
 */

// POST Route
productRoutes.post("/add",async (req,res)=>{
    try {
        const product = new productModel(req.body)
        await product.save()
        res.status(200).send({"msg": "Product added successfully"})
    } catch (error) {
        res.status(400).send({"err":error.message})
    }
})


productRoutes.get("/",async (req,res)=>{
    try {
        
    } catch (error) {
        
    }
})


productRoutes.patch("/update/:id",async (req,res)=>{
    try {
        
    } catch (error) {
        
    }
})

productRoutes.delete("/delete/:id",async (req,res)=>{
    try {
        
    } catch (error) {
        
    }
})


module.exports = {productRoutes}