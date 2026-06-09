# 🚀 Guia Completo - Agência Digital

## 📋 Índice
1. [Visão Geral](#visão-geral)
2. [Stack Tecnológico](#stack-tecnológico)
3. [Instalação](#instalação)
4. [Configuração](#configuração)
5. [Uso](#uso)
6. [Deploy](#deploy)
7. [Troubleshooting](#troubleshooting)

## 🎯 Visão Geral

Plataforma completa de agência digital com:
- ✅ Homepage profissional
- ✅ 6 serviços principais
- ✅ Portfolio de projetos
- ✅ Blog com artigos
- ✅ Autenticação de usuários
- ✅ Dashboard de usuário
- ✅ Painel administrativo
- ✅ Sistema de pagamentos (Stripe)
- ✅ Chat em tempo real
- ✅ Analytics e relatórios
- ✅ Email marketing
- ✅ SEO otimizado
- ✅ Rate limiting
- ✅ Validação de inputs

## 🛠️ Stack Tecnológico

### Frontend
- Next.js 14+ (React framework)
- TypeScript
- Tailwind CSS
- Framer Motion (animações)
- Stripe React

### Backend
- Node.js + Express
- TypeScript
- PostgreSQL
- JWT Authentication
- Stripe SDK
- Nodemailer

### DevOps
- Docker & Docker Compose
- Rate Limiting
- Input Validation
- CORS Security

## 📦 Instalação

### Pré-requisitos
- Node.js 18+
- npm ou yarn
- Git
- Docker (opcional)
- PostgreSQL (se não usar Docker)

### 1. Clone o repositório
```bash
git clone https://github.com/alanmorangon12-bot/agencia-digital.git
cd agencia-digital
```

### 2. Configurar Backend
```bash
cd backend
npm install
cp .env.example .env
```

### 3. Configurar Frontend
```bash
cd ../frontend
npm install
```

## ⚙️ Configuração

### Backend (.env)
```env
PORT=5000
NODE_ENV=development
DB_HOST=localhost
DB_PORT=5432
DB_NAME=agencia_digital
DB_USER=postgres
DB_PASSWORD=password
JWT_SECRET=sua_chave_secreta_super_segura
STRIPE_SECRET_KEY=sk_test_seu_stripe_key
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=seu_email@gmail.com
SMTP_PASSWORD=sua_senha_app
FRONTEND_URL=http://localhost:3000
```

### Frontend
Não precisa de .env, usa NEXT_PUBLIC_API_URL automaticamente

## 🚀 Uso

### Desenvolvimento Local

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
# Rodará em http://localhost:5000
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
# Rodará em http://localhost:3000
```

### Com Docker Compose
```bash
# Na raiz do projeto
docker-compose up

# Parar
docker-compose down
```

## 📱 URLs Disponíveis

| URL | Descrição |
|-----|----------|
| `/` | Homepage |
| `/servicos` | Serviços oferecidos |
| `/portfolio` | Galeria de projetos |
| `/blog` | Blog com artigos |
| `/precos` | Tabela de preços |
| `/seo` | Informações SEO |
| `/contato` | Formulário de contato |
| `/auth/login` | Login |
| `/auth/register` | Registro |
| `/dashboard` | Dashboard do usuário |
| `/checkout` | Página de pagamento |
| `/admin` | Painel administrativo |
| `/analytics` | Analytics |

## 🔌 API Endpoints

### Autenticação
- `POST /api/auth/register` - Registrar novo usuário
- `POST /api/auth/login` - Fazer login

### Serviços
- `GET /api/servicos` - Listar serviços

### Pedidos
- `POST /api/pedidos` - Criar pedido
- `GET /api/pedidos` - Listar pedidos do usuário

### Blog
- `GET /api/blog` - Listar posts
- `GET /api/blog/:id` - Detalhes do post
- `POST /api/blog` - Criar post (admin)

### Newsletter
- `POST /api/newsletter/subscribe` - Inscrever
- `GET /api/newsletter/count` - Contar inscritos

### Pagamentos (Stripe)
- `POST /api/payment/create-intent` - Criar payment intent
- `POST /api/payment/confirm` - Confirmar pagamento

### Email Marketing
- `POST /api/email-marketing/subscribe` - Inscrever newsletter
- `POST /api/email-marketing/send-campaign` - Enviar campanha

## 📊 Estrutura do Banco de Dados

### Tabelas
- `users` - Usuários cadastrados
- `servicos` - Serviços oferecidos
- `projetos` - Portfolio/Projetos
- `pedidos` - Pedidos/Orçamentos
- `mensagens_contato` - Mensagens de contato

## 🚢 Deploy

### Frontend (Vercel)
```bash
npm install -g vercel
vercel
```

### Backend (Railway/Render)
1. Conecte seu repositório
2. Configure as variáveis de ambiente
3. Deploy automático

## 🔒 Segurança

- ✅ JWT Authentication
- ✅ Password Hashing (bcryptjs)
- ✅ Rate Limiting (100 req/15min)
- ✅ Input Validation
- ✅ CORS configurado
- ✅ XSS Prevention

## 🧪 Testes

```bash
# Backend
cd backend
npm test

# Frontend
cd frontend
npm test
```

## 🐛 Troubleshooting

### Erro de conexão ao banco
```bash
# Certifique-se que PostgreSQL está rodando
# Verifique credenciais em .env
# Porta 5432 disponível
```

### Porta já em uso
```bash
# Linux/Mac
lsof -ti:5000 | xargs kill -9
lsof -ti:3000 | xargs kill -9

# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

### Erro CORS
```bash
# Certifique-se que FRONTEND_URL está correto em .env
```

## 📚 Documentação Adicional

- [Next.js Docs](https://nextjs.org/docs)
- [Express Docs](https://expressjs.com/)
- [Stripe Docs](https://stripe.com/docs)
- [Tailwind Docs](https://tailwindcss.com/docs)

## 📞 Suporte

Para dúvidas e problemas:
1. Abra uma issue no GitHub
2. Verifique a documentação
3. Consulte o Troubleshooting

---

**Desenvolvido com ❤️ em 2024**
