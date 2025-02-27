const express = require('express');
const app = express();
const cors =require('cors');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const statusMonitor = require('express-status-monitor')();
app.use(statusMonitor);  // .use is a middleware 

app.use(cors())


require("./router")(app);

app.listen(9998,(error)=>{
    if(!error){
        console.log("server running on port no 9998 :");
    }
})