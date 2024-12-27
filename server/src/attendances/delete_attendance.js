async function main (req,res){
   
    const attendance_id=req.query.attendance_id;

       const {getPGConnection} = require("../base/pg_connector")
       const client =await getPGConnection();
       console.log("CLIENT",client)
       
          await client.query(`DELETE FROM attendances WHERE attendance_id=$1;`, [attendance_id],async function(err,data){
              if(data){
                  res.send(' delete successfully');
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