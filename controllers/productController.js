const Product = require('../models/product')

///////metodo get
const getProduct = async(req,res) => {
    const products = await Product.find()
    res.json(products)
}
//////metodo post
const postProduct = async(req,res) => {
    let msg = 'product inserted'
    const body =req.body
    try{
        const product = new Product(body)
        await product.save()
    }catch(error){
        msg = error
    }
    res.json({msg:msg})
}
/////metodo put
const putProduct = async (req, res) => {
    const { nameProduct, price, weight } = req.body;
    try {
        await Product.findOneAndUpdate(
            { nameProduct: nameProduct },
            { $set: { price: price, weight: weight } },
            { new: true } 
        );
        res.json({ msg: 'Product updated' });
    } catch (error) {
        res.json({ msg: 'Error updating product', error: error.message });
    }
}

/////metodo delete
const deleteProduct = async (req,res) => {
    let msg = 'product deleted'
    id = req.params.id
    try{
        await Product.findOneAndDelete({_id:id})
    }catch(error){
        msg = 'there was an error deleting'
    }
    res.json({msg:msg})
}
module.exports = {
    getProduct,
    postProduct,
    putProduct,
    deleteProduct
}