const express = require ('express');
const dbConnect = require('../database/config')
require('../database/config')
const {postProduct,getProduct,putProduct,deleteProduct} = require('../controllers/productController')

class Server {
    constructor(){
        this.app = express();
        this.dbConnection(); 
        this.pathProduct = '/api/product';
        this.route();
        this.listen();
    }

    async dbConnection(){
        await dbConnect()
    }

    route(){
        this.app.use(express.json())
        this.app.get(this.pathProduct, getProduct)
        this.app.post(this.pathProduct, postProduct)
        this.app.put(this.pathProduct, putProduct)
        this.app.delete(this.pathProduct+'/:id', deleteProduct)

        
    }

    listen(){
        this.app.listen(process.env.PORT, ()=>{
            console.log(`Server is running `)
        })
    }
}

module.exports = Server;