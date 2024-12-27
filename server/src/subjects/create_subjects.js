
async function main(req,res){
    const subject_id=req.query.subject_id;
    const subject_name=req.query.subject_name; 
    const subject_topics=req.query.subject_topics;
    const subject_code=req.query.subject_code;
    console.log(subject_id,subject_name, subject_topics ,subject_code);


const {getPGConnection}=require('../base/pg_connector');
let  client=await getPGConnection();
const result= await client.query(' INSERT INTO subjects ( subject_id,subject_name, subject_topics ,subject_code)  values($1,$2,$3,$4)', 
    [ subject_id,subject_name, subject_topics ,subject_code]
    ,function(err,data){
    if(err){
        console.log("Error",err);
        res.send(`ERROR in inserting the vlaue:-  ${err}`);
    } else{
        if(res.send){
            res.send(`Data inserted successfully:- ${JSON.stringify(result)}`)
        }
    }

     client.end();
}
);

}
module.exports={
    main
}