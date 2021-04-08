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
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Email sent: ');
    }, 3000);
  })
}

app.get('/', (req, res) => {
  res.status(200).json({ ok: 'ok' })
})

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
  path: '/api/contact',
  handler: app
}
