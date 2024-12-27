module.exports=function(app){

    app.get('/create_topics',(req,res)=>{
        let x = require("../src/topics/create_topics");
        console.log("X",x);
        x.main(req,res);
    })

    app.get('/read_topics',(req,res)=>{
        let x = require("../src/topics/read_topics");
        console.log("X",x);
        x.main(req,res);
    })

    app.get('/update_topics',(req,res)=>{
        let x = require("../src/topics/update_topics");
        console.log("X",x);
        x.main(req,res);
    })

    
    app.get('/delete_topics',(req,res)=>{
        let x = require("../src/topics/delete_topics");
        console.log("X",x);
        x.main(req,res);
    })

}