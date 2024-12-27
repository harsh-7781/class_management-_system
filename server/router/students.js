module.exports=function(app){

    app.get('/create_students',(req,res)=>{
        let x = require("../src/students/create_students");
        console.log("X",x);
        x.main(req,res);
    })

    app.get('/read_students',(req,res)=>{
        let x = require("../src/students/read_students");
        console.log("X",x);
        x.main(req,res);
    })

    app.put('/update_students/:student_id',(req,res)=>{
        let x = require("../src/students/update_students");
        console.log("X",x);
        x.main(req,res);
    })

    
    app.delete('/delete_students/:student_id',(req,res)=>{
        let x = require("../src/students/delete_students");
        console.log("X",x);
        x.main(req,res);
    })

}