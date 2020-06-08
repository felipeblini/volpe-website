import express from 'express'
import nodemailer from 'nodemailer'
import validator from 'validator'
import xssFilters from 'xss-filters'

const app = express()

app.use(express.json())

const rejectFunctions = new Map([
  ['name', v => !v],
  ['phone', v => !v],
  ['email', v => !validator.isEmail(v)],
  ['msg', v => !v]
])
const validateAndSanitize = (key, value) => {
  // If map has key and function returns false, return sanitized input. Else, return false
  return rejectFunctions.has(key) && !rejectFunctions.get(key)(value) && xssFilters.inHTMLData(value)
}

const sendMail = async (mailContent) => {
  const transporter = nodemailer.createTransport({
    host: "mail.volpeambiental.com.br",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "contato@volpeambiental.com.br",
      pass: "RLi^#Igtpmcm1"
    },
    tls: { rejectUnauthorized: false }
  });

  const mailOptions = {
    from: 'contato@volpeambiental.com.br',
    to: 'contato@volpeambiental.com.br',
    subject: 'Novo contato enviado pelo site',
    html: `<h1>Nova mensagem:</h1>
            <p><b>Nome:</b> ${mailContent.name}</p>
            <p><b>Telefone:</b> ${mailContent.phone}</p>
            <p><b>Email:</b> ${mailContent.email}</p>
            <p><b>Mensagem:</b> ${mailContent.msg}</p>`
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        reject(error);
      } else {
        resolve('Email sent: ' + info.response);
      }
    });
  })
}

app.post('/', async (req, res) => {
  // Validate, sanitize and send
  const attributes = ['name', 'phone', 'email', 'msg']

  // Map each attribute name to the validated and sanitized equivalent (false if validation failed)
  const sanitizedAttributes = attributes.map(n => validateAndSanitize(n, req.body[n]))

  // True if some of the attributes new values are false -> validation failed
  const someInvalid = sanitizedAttributes.some(r => !r)

  if (someInvalid) {
    return res.status(422).json({ 'erro': 'Algum campo não é válido!' })
  }

  sendMail({ ...sanitizedAttributes })
    .then(response => res.status(200).json({ 'message': response }))
    .catch(e => res.status(500).json({ 'message': e }))

})

export default {
  path: 'api/contact',
  handler: app
}
