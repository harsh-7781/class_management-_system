
async function main(req,res){
    const topic_id=req.query.topic_id;
    const topic_name=req.query.topic_name; 
    const subject_id=req.query.subject_id;
    const topic_order=req.query.topic_order;
    console.log(topic_id,topic_name, subject_id ,topic_order);


const {getPGConnection}=require('../base/pg_connector');
let  client=await getPGConnection();
const result= await client.query(' INSERT INTO topics ( topic_id,topic_name, subject_id ,topic_order)  values($1,$2,$3,$4)', 
    [ topic_id,topic_name, subject_id ,topic_order]
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