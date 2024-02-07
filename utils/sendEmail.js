const nodemailer = require('nodemailer');
const nodemailerConfig = require('./nodemailerConfig');

const sendEmail = async () => {
  nodemailer.createTestAccount((err, account) => {
    if (err) {
        console.error('Failed to create a testing account. ' + err.message);
        return process.exit(1);
    }

    console.log('Credentials obtained, sending message...');

    // Create a SMTP transporter object
    let transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: false,
        auth: {
            user: account.user,
            pass: account.pass
        }
    });
    console.log('Messagetyjgyjgfyuytujtfg');

    // Message object
    let message = {
        from: 'Sender Name <sender@example.com>',
        to: 'Recipient <recipient@example.com>',
        subject: 'Nodemailer is unicode friendly ✔',
        html: '<p><b>Hello</b> to myself!</p>'
    };
    console.log('mmm');


    transporter.sendMail(message, (err, info) => {
    console.log('bbbb');

        if (err) {
            console.log(err);
            return process.exit(1);
        }

        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
});
};

module.exports = sendEmail;
