async function main (req,res){
   
    const subject_id=req.query.subject_id;

       const {getPGConnection} = require("../base/pg_connector")
       const client =await getPGConnection();
       console.log("CLIENT",client)
       
          await client.query(`DELETE FROM subjects WHERE subject_id=$1;`, [subject_id],async function(err,data){
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