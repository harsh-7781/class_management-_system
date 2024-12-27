
async function main(req,res){
    const staff_id=req.body.staff_id;
    const staff_name=req.body.staff_name; 
    const staff_age=req.body.staff_age;
    const staff_salary=req.body.staff_salary;
    console.log(staff_id,staff_name, staff_age ,staff_salary);


const {getPGConnection}=require('../base/pg_connector');
let  client=await getPGConnection();
await client.query(' INSERT INTO staffs ( staff_id,staff_name, staff_age ,staff_salary)  values($1,$2,$3,$4)', 
    [ staff_id,staff_name, staff_age ,staff_salary]
    ,function(err,data){
    if(err){
        console.log("Error",err);
        res.send(`ERROR in inserting the vlaue:-  ${err}`);
    } else{
        if(res.send){
            res.send(`Data inserted successfully:- ${JSON.stringify(data.rows)}`)
        }
    }

     client.end();
}
);

}
module.exports={
    main
}