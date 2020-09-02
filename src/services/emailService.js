const nodemailer = require('nodemailer');
require('dotenv/config');

const user = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASS;
const emailTo = process.env.EMAIL_TO;

async function sendEmail(req, res) {
    const trasporter = nodemailer.createTransport({
        host:"smtp.office365.com",
        port:587,
        auth:{
            user,
            pass
        }
    });
    try {
        trasporter.sendMail({
            from: user,
            to: emailTo,
            replyTo: req.body.email,
            subject: "Você possui uma nova mensagem",
            text: "----------Nova mensagem----------"
            + "\n" + 
            "Nome: "
            + req.body.name 
            + "\n" +
            "Email: "
            + req.body.email  
            + "\n" +
            "Telefone: "
            + req.body.whatsapp  
            + "\n" +
            "Mensagem: "
            + req.body.message
        });     
        
        res.render('success-contact.html');
    } catch (error) {
        console.log("erro no envio do email", error);
    }
}

module.exports = { sendEmail }