async function main (req,res){
  
    const subject_id=req.query.subject_id;
    const subject_name=req.query.subject_name;
    // const course_id=req.query.course_id;

   
       const {getPGConnection} = require("../base/pg_connector")
       const client =await getPGConnection();
       console.log("CLIENT",client)
       
          await client.query(`UPDATE public.subjects SET subject_id=$1 WHERE subject_name = $2;`, [subject_id,subject_name],async function(err,data){
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