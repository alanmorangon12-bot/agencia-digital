-- Users Table
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  nome VARCHAR(255) NOT NULL,
  telefone VARCHAR(20),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Services Table
CREATE TABLE IF NOT EXISTS servicos (
  id SERIAL PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  descricao TEXT,
  preco DECIMAL(10, 2),
  icon VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Projects/Portfolio Table
CREATE TABLE IF NOT EXISTS projetos (
  id SERIAL PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  descricao TEXT,
  imagem_url VARCHAR(500),
  categoria VARCHAR(100),
  link VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Orders/Quotes Table
CREATE TABLE IF NOT EXISTS pedidos (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  servico_id INTEGER REFERENCES servicos(id),
  status VARCHAR(50) DEFAULT 'pendente',
  valor DECIMAL(10, 2),
  descricao TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Contact Messages Table
CREATE TABLE IF NOT EXISTS mensagens_contato (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  telefone VARCHAR(20),
  mensagem TEXT NOT NULL,
  lida BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample services
INSERT INTO servicos (titulo, descricao, preco, icon) VALUES
  ('Tráfego Pago', 'Campanhas em Google Ads, Facebook e Instagram com ROI garantido', NULL, '📊'),
  ('Criação de Sites', 'Websites modernos, responsivos e otimizados para conversão', NULL, '🌐'),
  ('Design Gráfico', 'Imagens personalizadas, banners e materiais visuais profissionais', NULL, '🎨'),
  ('Criação de Logos', 'Identidade visual única e memorável para sua marca', NULL, '✨'),
  ('Promoção de Sites', 'SEO, SEM e estratégias de marketing para aumentar visibilidade', NULL, '🚀'),
  ('Desenvolvimento de Apps', 'Aplicativos mobile e web com tecnologia de ponta', NULL, '📱');
