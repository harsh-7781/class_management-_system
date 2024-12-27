
async function main(req,res){
    const attendance_id=req.query.attendance_id;
    const attendance_name=req.query.attendance_name; 
    const student_id=req.query.student_id;
    const subject_id=req.query.subject_id;
    const date=req.query.date;

    console.log(attendance_id,attendance_name, student_id ,subject_id,date);


const {getPGConnection}=require('../base/pg_connector');
let  client=await getPGConnection();
const result= await client.query(' INSERT INTO attendances ( attendance_id,attendance_name, student_id ,subject_id,date)  values($1,$2,$3,$4,$5)', 
    [ attendance_id,attendance_name, student_id ,subject_id,date]
    ,function(err,data){
    if(err){
        console.log("Error",err);
        res.send(`ERROR in inserting the vlaue:-  ${err}`);
    } else{
        if(res.send){
            res.send(`Data inserted successfully:- ${JSON.stringify(result)}`)
        }
    }

     client.end();
}
);

}
module.exports={
    main
}