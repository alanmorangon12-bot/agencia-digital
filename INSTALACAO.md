# 📦 Guia de Instalação

## Pré-requisitos

- Node.js 18+
- npm ou yarn
- Git
- Docker (opcional, para usar docker-compose)
- PostgreSQL (opcional se usar Docker)

## Instalação Local

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/agencia-digital.git
cd agencia-digital
```

### 2. Configurar o Backend

```bash
cd backend

# Instale as dependências
npm install

# Crie o arquivo .env
cp .env.example .env

# Configure as variáveis de ambiente no arquivo .env
# Abra .env e preencha com seus dados
```

### 3. Configurar o Frontend

```bash
cd ../frontend

# Instale as dependências
npm install
```

## Executar em Desenvolvimento

### Opção 1: Localmente (sem Docker)

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
# Servidor rodará em http://localhost:5000
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
# Aplicação rodará em http://localhost:3000
```

### Opção 2: Com Docker Compose

```bash
# Na raiz do projeto
docker-compose up

# Frontend: http://localhost:3000
# Backend: http://localhost:5000
# PostgreSQL: localhost:5432
```

## 🗄️ Configurar Banco de Dados

### Com Docker Compose
O banco é criado automaticamente ao executar `docker-compose up`

### Manualmente (PostgreSQL local)

```bash
# Conecte ao PostgreSQL
psql -U postgres

# Crie o banco
CREATE DATABASE agencia_digital;

# Selecione o banco
\c agencia_digital

# Execute o script de inicialização
\i database/init.sql
```

## ✅ Verificar se tudo está funcionando

- Frontend: http://localhost:3000
- Backend Health Check: http://localhost:5000/api/health
- API Serviços: http://localhost:5000/api/servicos

## 🛠️ Build para Produção

### Frontend
```bash
cd frontend
npm run build
npm start
```

### Backend
```bash
cd backend
npm run build
npm start
```

## 📋 Estrutura de Pastas

```
agencia-digital/
├── frontend/              # Aplicação Next.js
│   ├── app/              # Páginas e layout
│   ├── components/       # Componentes reutilizáveis
│   ├── public/           # Arquivos estáticos
│   └── package.json
├── backend/              # API Node.js + Express
│   ├── src/
│   │   ├── routes/       # Rotas da API
│   │   ├── controllers/  # Lógica de negócio
│   │   ├── middleware/   # Middlewares
│   │   └── index.ts      # Servidor principal
│   └── package.json
├── database/             # Scripts SQL
└── docker-compose.yml    # Configuração Docker
```

## 🔒 Variáveis de Ambiente

### Backend (.env)
```
PORT=5000
NODE_ENV=development
DB_HOST=localhost
DB_PORT=5432
DB_NAME=agencia_digital
DB_USER=postgres
DB_PASSWORD=password
JWT_SECRET=sua_chave_secreta
FRONTEND_URL=http://localhost:3000
```

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## 🐛 Troubleshooting

**Erro de conexão ao banco de dados:**
- Verifique se PostgreSQL está rodando
- Confira credenciais em .env
- Certifique-se de que a porta 5432 está disponível

**Erro 404 ao acessar Frontend:**
- Certifique-se que o backend está rodando
- Verifique se NEXT_PUBLIC_API_URL está correto

**Porta já em uso:**
```bash
# Matar processo na porta (exemplo 5000)
lsof -ti:5000 | xargs kill -9
```

## 📚 Próximos Passos

1. Customizar tema e cores em `frontend/tailwind.config.ts`
2. Adicionar páginas adicionais em `frontend/app/`
3. Implementar autenticação no backend
4. Conectar formulários ao banco de dados
5. Configurar integração de pagamentos (Stripe/PayPal)

## 📞 Suporte

Para dúvidas, abra uma issue no repositório!
