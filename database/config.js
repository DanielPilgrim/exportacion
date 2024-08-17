const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CNN);
        console.log('conect to server database');
    } catch (error){
        console.error('error connection to mongodb', error,message);
        
    }
}

module.exports = dbConnection; //exportar la funcion dbconnection