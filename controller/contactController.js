//const config = require('../config/config');
const Resend = require('resend');

const resend = new Resend.Resend(process.env.RESEND);

const contact = async (request, response) => {
    const { email } = request.body;
    const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: [email],
        subject: 'Hello World',
        html: '<strong>It works!</strong>',
      });
    
      if (error) {
        return response.status(500.).send( {error});
      }
    response.send({data});
}

module.exports = { contact };