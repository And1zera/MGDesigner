const nodemailer = require('nodemailer');

const user = "help1.anderson@hotmail.com";
const pass = "Soeuseimesmo878!";

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
            to: user,
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