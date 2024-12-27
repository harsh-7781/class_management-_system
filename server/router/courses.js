module.exports=function(app){

    app.get('/create_courses',(req,res)=>{
        let x = require("../src/courses/create_courses");
        console.log("X",x);
        x.main(req,res);
    })

    app.get('/read_courses',(req,res)=>{
        let x = require("../src/courses/read_courses");
        console.log("X",x);
        x.main(req,res);
    })

    app.get('/update_courses',(req,res)=>{
        let x = require("../src/courses/update_courses");
        console.log("X",x);
        x.main(req,res);
    })

    
    app.get('/delete_courses',(req,res)=>{
        let x = require("../src/courses/delete_courses");
        console.log("X",x);
        x.main(req,res);
    })

}