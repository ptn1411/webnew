const nodemailer = require('nodemailer');
let Sendmail = function (req, res) {
    console.log(req.body.name);
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'phamthanhnamdev@gmail.com',
            pass: 'nguyenxuantrung2'
        },
        tls: {

            rejectUnauthorized: false
        }
    });
    let content = '';
    content += `
                <div style="padding: 10px; background-color: #FFC0CB">
            <div style="padding: 10px; background-color: white;">
                <h4 style="color: #0085ff">${req.body.name}</h4>
                <h4 style="color: #0085ff">${req.body.email}</h4>
                 <h4 style="color: #0085ff">${req.body.category}</h4>
                <h4 style="color: #0085ff">${req.body.message}</h4>
            </div>
        </div>
        `;
    const mainOptions = {
        from: 'phamthanhnamdev@gmail.com',
        to: req.body.email,
        subject: 'phamthanhnam.com',
        html: content
    };
    transporter.sendMail(mainOptions, function (err, info) {
        if (err) {
            console.log(err);

            res.redirect('/');
        } else {
            console.log('Message sent: ' + info.response);

            setTimeout(function () {
                res.redirect('/');
            }, 1000);

        }
    });
}
module.exports = {
    Sendmail: Sendmail
}