const express = require('express');
const { databaseConnection } = require('./database');
const expressApp = require('./express-app');
const PORT = process.env.PORT || 3000;
const StartServer = async()=>{
    const app = express();
    await databaseConnection();
    await expressApp(app);
    app.listen(PORT, ()=>{
        console.log(`Listening on port ${PORT}`);
    }).on('error', (err)=>{
        console.log(err);
    })
}

StartServer()