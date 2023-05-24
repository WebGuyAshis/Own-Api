const express = require('express');
const app = express();

app.use('/api', require('./api'));

// app.use('/', require('./routes'))

app.listen(8000, function(err){
    if(err){
        console.log("Error Running Server", err );
        return;
    }
    console.log("Server Running at Port 8000");
});