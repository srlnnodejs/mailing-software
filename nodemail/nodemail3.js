var express=require("express");
var app=express();
var nodemailer=require("nodemailer")
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'srlncorejava@gmail.com',
      pass: 'lalita@1988'
    }
  });
app.post("/sentmail",function(req,res)
{
var msg={html:"<h1>welcome this is branch of science of power</h1>",
createTextFromHtml:true,
from:"<srlncorejava@gmail.com>",
to:"<srlnhtml@gmail.com>",
subject:"testing demo"
};
transport.sendMail(msg,function(err){
if(err)
{
    return(err);
}else
{
return res.json({"successMessage":"all message has been send"});
}
});});
app.listen("1111",function(){
    console.log("sir mail server listning");
})