module.exports=function(app){

    app.get('/create_subjects',(req,res)=>{
        let x = require("../src/subjects/create_subjects");
        console.log("X",x);
        x.main(req,res);
    })

    app.get('/read_subjects',(req,res)=>{
        let x = require("../src/subjects/read_subjects");
        console.log("X",x);
        x.main(req,res);
    })

    app.get('/update_subjects',(req,res)=>{
        let x = require("../src/subjects/update_subjects");
        console.log("X",x);
        x.main(req,res);
    })

    
    app.get('/delete_subjects',(req,res)=>{
        let x = require("../src/subjects/delete_subjects");
        console.log("X",x);
        x.main(req,res);
    })

}