async function main (req,res){
  
    const student_id = req.params.student_id;
    const student_name = req.body.student_name;
   
       const {getPGConnection} = require("../base/pg_connector")
       const client =await getPGConnection();
       console.log("CLIENT",student_id)
       
          await client.query(`UPDATE public.students SET student_name=$1 WHERE Student_id = $2;`, [student_name,student_id],async function(err,data){
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

