async function main (req,res){
  
    const attendance_id=req.query.attendance_id;
    const attendance_name=req.query.attendance_name;
    // const course_id=req.query.course_id;

   
       const {getPGConnection} = require("../base/pg_connector")
       const client =await getPGConnection();
       console.log("CLIENT",client)
       
          await client.query(`UPDATE public.attendances SET attendance_id=$1 WHERE attendance_name = $2;`, [attendance_id,attendance_name],async function(err,data){
              if(data){
                  res.send(data.rows);
              }
              else{
                  res.send(err);
                  console.log(err);
              }
              await client.end() 
          })
    
}
module.exports={
    main
}