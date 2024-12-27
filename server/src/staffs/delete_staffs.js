async function main (req,res){
   
    const staff_id = req.query.staff_id;

       const {getPGConnection} = require("../base/pg_connector")
       const client =await getPGConnection();
       console.log("CLIENT",client)
       
          await client.query(`DELETE FROM staffs WHERE staff_id=$1;`, [staff_id],async function(err,data){
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