async function main (req,res){
  
    const staff_id = req.query.staff_id;
    const staff_name = req.query.staff_name;
   
       const {getPGConnection} = require("../base/pg_connector")
       const client =await getPGConnection();
       console.log("CLIENT",client)
       
          await client.query(`UPDATE public.staffs SET staff_name=$1 WHERE Staff_id = $2;`, [staff_name,staff_id],async function(err,data){
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