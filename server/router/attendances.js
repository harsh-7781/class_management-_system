module.exports=function(app){

    app.get('/create_attendance',(req,res)=>{
        let x = require("../src/attendances/create_attendance");
        console.log("X",x);
        x.main(req,res);
    })

    app.get('/read_attendance', (req, res) => {
        // Import the object
        let x = require("../src/attendances/read_attendance");
        console.log("X:", x); // Ensure `x` has a `main` function
        x.main(req, res); // Call the `main` function
    }); 

    app.get('/update_attendance',(req,res)=>{
        let x = require("../src/attendances/update_attendance");
        console.log("X",x);
        x.main(req,res);
    })

    
    app.get('/delete_attendance',(req,res)=>{
        let x = require("../src/attendances/delete_attendance");
        console.log("X",x);
        x.main(req,res);
    })

}