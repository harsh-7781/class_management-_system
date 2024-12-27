async function main (req,res){
  
    const topic_id=req.query.topic_id;
    const topic_name=req.query.topic_name;

   
       const {getPGConnection} = require("../base/pg_connector")
       const client =await getPGConnection();
       console.log("CLIENT",client)
       
          await client.query(`UPDATE public.topics SET topic_id=$1 WHERE topic_name = $2;`, [topic_id,topic_name],async function(err,data){
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