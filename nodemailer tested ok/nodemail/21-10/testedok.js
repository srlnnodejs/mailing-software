var nodemailer=require("nodemailer");
let transporter=nodemailer.createTransport({
service:'gmail',
sercure:'false',
port:25,
auth:{user:'srlnhtml@gmail.com',
pass:'hariomtatshat'
},
tls:{
    rejectUnauthorized:false}
});
let HelperOptions={
    from:'"s rama laxmi narayan patro" <srlnhtml@gmail.com',
    to:'srlncorejava@gmail.com',
    subject:'welcome the message coming from nodejs',
    text:"this is the branch of engineering which deals with study of generationa andtransmission and disritbution of electicalt power and utilization of electircal pwer thango"
};
transporter.sendMail(HelperOptions,(error,info)=>{
    if(error){
        return console.log(error);
    }
    else{
    console.log('the message was send');
    consoe.log(info);
}});    
