const mongoose = require('mongoose');
const {DB_URL} = require('../config');

module.exports = () => {
    try {
        mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('connected to database');
    } catch (error) {
        console.log(error);
    }

}