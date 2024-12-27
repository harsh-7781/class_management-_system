async function main(req,res){
    const course_id=req.query.course_id;
    const course_name=req.query.course_name; 
    const course_duration=req.query.course_duration;
    const course_fees=req.query.course_fees;
    console.log(course_id,course_name,course_duration,course_fees);
  
  
  const {getPGConnection}=require('../base/pg_connector');
  let  client=await getPGConnection();
  const result= await client.query(' INSERT INTO courses (course_id,course_name,course_duration,course_fees)  values($1,$2,$3,$4)', 
    [course_id,course_name,course_duration,course_fees]
    ,function(err,data){
    if(err){
        console.log("Error",err);
        res.send(`ERROR in inserting the vlaue:-  ${err}`);
    } else{
        if(res.send){
            res.send(`Data inserted successfully:- ${JSON.stringify(result)}`)
        }
    }
  
  }
  );
  
  }
  module.exports={
    main
  }