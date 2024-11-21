const nodemailer = require('nodemailer');
// sender infos 
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:  {
        user: '7ot email mteek @gmail.com',
        pass: '7ot el pass mtaa email mteek',
},
});
// sending details
const mailOptions = {
    from: '7ot email mteek @gmail.com'
    to:'email eli bch taba3thlou  @gmail.com'
    subject:'Test Email from Node.js'
    text:'ASSLEMA! hedha  test email sent b Node.js.',
};
// sending stage
transporter.sendMail(mailOptions, (err, info) => {
if (err) {
    console.error('Error sending email:', err);

} else {
    console.log('Email sent:', infp.response);
}
});