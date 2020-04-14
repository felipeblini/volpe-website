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

const sendMail = (name, phone, email, msg) => {
  console.log('sendmail', name, phone, email, msg);
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'felipe.blini@gmail.com',
      pass: 'Protectedjourney36912!!!'
    }
  });

  var mailOptions = {
    from: 'felipe.blini@gmail.com',
    to: 'felipe.blini@gmail.com',
    subject: 'Novo contato enviado pelo site',
    html: `<h1>Nova mensagem:</h1>
            <p><b>Nome:</b> ${name}</p>
            <p><b>Telefone:</b> ${phone}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Mensagem:</b> ${msg}</p>`
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log({ error });
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

app.post('/', (req, res) => {
  // Validate, sanitize and send
  const attributes = ['name', 'phone', 'email', 'msg']

  // Map each attribute name to the validated and sanitized equivalent (false if validation failed)
  const sanitizedAttributes = attributes.map(n => validateAndSanitize(n, req.body[n]))

  // True if some of the attributes new values are false -> validation failed
  const someInvalid = sanitizedAttributes.some(r => !r)

  if (someInvalid) {
    return res.status(422).json({ 'erro': 'Algum campo não é válido!' })
  }

  sendMail(...sanitizedAttributes)
  res.status(200).json({ 'message': 'Email enviado' })
})

export default {
  path: 'api/contact',
  handler: app
}
