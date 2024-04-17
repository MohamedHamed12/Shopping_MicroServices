const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost:27017/customer';
module.exports = async () =>{
    try {
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('connected to database');
    } catch (error) {
        console.log(error);
    }
}