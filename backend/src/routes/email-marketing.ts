import express from 'express'
import nodemailer from 'nodemailer'

const router = express.Router()

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

// Subscribe to newsletter
router.post('/subscribe', async (req, res) => {
  try {
    const { email } = req.body

    if (!email) {
      return res.status(400).json({ erro: 'Email obrigatório' })
    }

    // Send welcome email
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Bem-vindo à Newsletter da Agência Digital',
      html: `
        <h2>Bem-vindo!</h2>
        <p>Obrigado por se inscrever em nossa newsletter.</p>
        <p>Você receberá as últimas dicas e tendências sobre marketing digital.</p>
      `,
    })

    res.json({
      sucesso: true,
      mensagem: 'Inscrito com sucesso! Confira seu email.',
    })
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao se inscrever' })
  }
})

// Send marketing email
router.post('/send-campaign', async (req, res) => {
  try {
    const { subject, htmlContent, recipients } = req.body

    if (!subject || !htmlContent || !recipients || recipients.length === 0) {
      return res.status(400).json({ erro: 'Campos obrigatórios faltando' })
    }

    // Send to all recipients
    for (const email of recipients) {
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: email,
        subject: subject,
        html: htmlContent,
      })
    }

    res.json({
      sucesso: true,
      mensagem: `Campanha enviada para ${recipients.length} destinatários`,
    })
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao enviar campanha' })
  }
})

export default router
