module.exports=function(app){

    app.get('/create_staffs',(req,res)=>{
        let x = require("../src/staffs/create_staffs");
        console.log("X",x);
        x.main(req,res);
    })

    app.get('/read_staffs',(req,res)=>{
        let x = require("../src/staffs/read_staffs");
        console.log("X",x);
        x.main(req,res);
    })

    app.get('/update_staffs',(req,res)=>{
        let x = require("../src/staffs/update_staffs");
        console.log("X",x);
        x.main(req,res);
    })

    
    app.get('/delete_staffs',(req,res)=>{
        let x = require("../src/staffs/delete_staffs");
        console.log("X",x);
        x.main(req,res);
    })

}