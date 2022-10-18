const sendEmail = () => {
  // let userEmail = 'cesinhaobdc@gmail.com'
  const sgMail = require('@sendgrid/mail')

  // console.log('API KEY', process.env.SENDGRID_API_KEY)
  sgMail.setApiKey(import.meta.env.VITE_SENDGRID_API_KEY)
  const msg = {
    to: 'cesinhaobdc@gmail.com', // Change to your recipient
    from: 'cesinhaobdc@gmail.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
}

export default sendEmail;

