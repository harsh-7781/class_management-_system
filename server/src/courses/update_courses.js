async function main (req,res){
  
    const course_id = req.query.course_id;
    const course_name = req.query.course_name;
   
       const {getPGConnection} = require("../base/pg_connector")
       const client =await getPGConnection();
       console.log("CLIENT",client)
       
          await client.query(`UPDATE public.courses SET course_id=$1 WHERE course_name = $2;`, [course_id,course_name],async function(err,data){
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