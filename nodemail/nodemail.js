var express=require("express");
var nodemailer = require('nodemailer');
var app=express();
app.get("/mail",function(req,res){
// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
nodemailer.createTestAccount((err, account) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
          user:'jjmsgnrkx35ee6je@ethereal.email', // generated ethereal user
          pass:'XKbw7zrYcskGba9RB1' // generated ethereal password
      }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: '"srlnhtml@gmail.com', // sender address
      to: 'srlncorejava@gmail.com,srlnoracle@gmail.com', // list of receivers
      subject: 'Hello ✔', // Subject line
      text: 'Hello world?', // plain text body
      html: '<b>Hello world?</b>' // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
      // Preview only available when sending through an Ethereal account
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  });
});
})
app.listen("1111",function(){
console.log("welcome to node mailer");
});