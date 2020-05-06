var mailer = require('nodemailer');
var express=require("express");
var app=express();
app.get("/mail",function(req,res){
    var smtpTransport = mailer.createTransport("SMTP",{
        service: "Gmail",
        auth: {
            user: "srlncorejava@gmail.com",
            pass: "lalita@1988"
        }
    });
    var mail = {
        from: "srlncorejava@gmail.com",
        to: "srlnhtmla@gmail.com",
        subject: "Send Email Using Node.js",
        text: "Node.js New world for me",
        html: "<b>Node.js New world for me</b>"
    }
    
    smtpTransport.sendMail(mail, function(error, response){
        if(error){
            console.log(error);
        }else{
            console.log("Message sent: " + response.message);
        }
    
        smtpTransport.close();
    });
    });
    app.listen(1122);