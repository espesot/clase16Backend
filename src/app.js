import dotenv from 'dotenv'
import { createTransport } from 'nodemailer'

dotenv.config()

const mailOption ={
  from: process.env.USER_GMAIL,
  to: ['enzospesot@hotmail.com',process.env.USER_GMAIL,'italijancic@outlook.com'],
  // text:'Hola desde App',
  html:'<h1>A ver cagoncito que elegis</h1>',
  subject:'Send from backend',
  attachments:[
    {
      path: './img/moto1.jpg',
      filename: 'Opcion de compra uno'
    },
    {
      path: './img/moto2.jpg',
      filename: 'Opcion de compra dos'
    },
  ]
}

const transportGmail = createTransport({
  service:'gmail',
  port:587,
  auth:{
    user:process.env.USER_GMAIL,
    pass:process.env.PASS_GMAIL
  },
})

async function sendEmail(){
  try {
    const response = await transportGmail.sendMail(mailOption)
    console.log(response)
  } catch (error) {
    throw new Error(error.message)
  }
}

sendEmail()