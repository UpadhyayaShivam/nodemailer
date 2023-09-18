const nodemailer = require('nodemailer');
const signup = async (request , response)=>{
    // creating test account on nodemailer 
    let testAccount = await nodemailer.createTestAccount();

    // creating transporter
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port:587,
        secure:false,
        auth:{
            user:testAccount.user,
            pass: testAccount.pass,

            // user: 'angeline.mcglynn32@ethereal.email',
            // pass: 'kh8dfYMgvnA4eEcrCn'
        },
    });

    let yourmessage = {
        from :'"shivam sharma"<shivam.upadhyaya23@gmail.com>',
        to: "client@gmail.com",
        subject:"testing 123 day 9/18/23 formvsprop",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",

    };

    transporter.sendMail(yourmessage).then((info)=>{
        return response.status(201).json({
            msg:"mail is sent successfully ....",
            info : info.messageId,
            preview : nodemailer.getTestMessageUrl(info),
    });
    }).catch(err=>{
        return response.status(500).json({err});
    });


    // response.status(201).json("signup successfully ..... ");
    console.log('in the signup route');
};

module.exports = {
    signup,

}