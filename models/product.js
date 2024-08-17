const {model, Schema} = require('mongoose')

const productSchema = new Schema({
    nameProduct:{
        type:String,//tipo de dato
        unique:true,//unico
        required:[true, 'the name is required'],//es obligatorio
        minlength:[3,'min 3 characters']//minimo
    },
    price:{
        type:Number,//tipo de dato
        required:[true, 'the price is required'],//es obligatorio
    },
    weight:{
        type:Number,
        required:[true, 'the weight is required'],

    }
}
)

module.exports = model('product', productSchema, 'product'); //crea la coleccion si no existe 

