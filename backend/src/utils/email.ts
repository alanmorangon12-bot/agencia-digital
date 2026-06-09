import nodemailer from 'nodemailer'

// Configure your email service
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

export const sendContactEmail = async (
  nome: string,
  email: string,
  mensagem: string
) => {
  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'contato@agenciadigital.com',
      subject: `Novo contato de ${nome}`,
      html: `
        <h2>Novo Contato Recebido</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${mensagem}</p>
      `,
    })
    return true
  } catch (error) {
    console.error('Erro ao enviar email:', error)
    return false
  }
}

export const sendWelcomeEmail = async (nome: string, email: string) => {
  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Bem-vindo à Agência Digital!',
      html: `
        <h2>Bem-vindo, ${nome}!</h2>
        <p>Sua conta foi criada com sucesso.</p>
        <p>Agora você pode solicitar orçamentos e acompanhar seus projetos.</p>
        <a href="${process.env.FRONTEND_URL}/dashboard">Acessar Dashboard</a>
      `,
    })
    return true
  } catch (error) {
    console.error('Erro ao enviar email:', error)
    return false
  }
}
