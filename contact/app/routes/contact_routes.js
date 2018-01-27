const sgMail = require('@sendgrid/mail')

const toEmail = process.env.SENDGRID_TO_EMAIL
const subject = 'Portfolio Contact Form' 

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

module.exports = function(app, contact) {
  app.post('/contact', (req, res) => {
    const msg = {
      to: toEmail,
      from: req.body.email,
      subject: subject,
      text: req.body.message,
      html: `<p>Name: ${req.body.name} </p>
        <p>Message: ${req.body.message}</p>`,
    }
    sgMail.send(msg)
    res.send('sent')
  })
};