module.exports=function(app){
    require('./attendances')(app);
    require('./courses')(app);
    require('./staffs')(app);
    require('./students')(app);
    require('./subjects')(app);
    require('./topics')(app);
}