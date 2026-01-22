# 🎓 Edu Quest Platform

Plataforma educacional desenvolvida em **Node.js** onde **alunos podem resolver questões** e **professores podem criar, gerenciar e filtrar questões**, com sistema completo de autenticação, autorização e validações.

Este projeto foi pensado tanto como **portfólio** quanto como base real para uma plataforma educacional (vestibulares, escolas, cursos, etc.).

---

## 🚀 Funcionalidades

### 👤 Autenticação e Usuários

* Registro de usuários
* Login seguro
* Hash de senha com **bcrypt**
* Autenticação baseada em **JWT (JSON Web Token)**
* Proteção contra CSRF
* Sessões autenticadas

### 🔐 Controle de Acesso (Roles)

* **Aluno**

  * Resolver questões
  * Filtrar questões
* **Professor**

  * Criar questões
  * Gerenciar questões criadas

### 📝 Questões

* Criação de questões (restrita a professores)
* Filtro de questões por critérios
* Validações completas de dados
* Estrutura preparada para expansão (simulados, estatísticas, etc.)

### 🛡️ Segurança

* Hash de senhas com bcrypt
* Proteção CSRF
* Autenticação via token JWT
* Validação de dados no backend
* Controle de permissões por role

---

## 🛠️ Tecnologias Utilizadas

* **Node.js**
* **Express**
* **EJS** (views)
* **bcrypt** (hash de senha)
* **JWT** (JSON Web Token)
* **csurf** (proteção CSRF)
* **express-session**
* **Prisma ORM**
* **MongoDB** (banco de dados NoSQL)

---

## 📂 Estrutura do Projeto

```
edu-quest-platform/
│
├── src/
│   ├── controllers/      # Lógica das rotas
│   ├── middlewares/      # Autenticação, CSRF, roles
│   ├── routes/           # Rotas da aplicação
│   ├── views/            # EJS templates
│   ├── public/           # Arquivos estáticos
│   └── server.js         # Inicialização do servidor
│
├── prisma/               # Schema e migrations
├── package.json
└── README.md
```

---

## ⚙️ Instalação e Uso

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/Ocesinha/edu-quest-platform.git
cd edu-quest-platform
```

### 2️⃣ Instale as dependências

```bash
npm install
```

### 3️⃣ Configure as variáveis de ambiente

Crie um arquivo `.env` com as seguintes variáveis:

```env
DATABASE_URL=mongodb+srv://...
SESSION_SECRET=...
```

### 4️⃣ Execute as migrations

```bash
npx prisma migrate dev
```

### 5️⃣ Inicie o servidor

```bash
npm run dev
```

A aplicação estará disponível em:

```
http://localhost:3000
```

---

## 🧠 Validações Implementadas

* Campos obrigatórios
* Senhas mínimas
* Verificação de role do usuário
* Proteção contra envio de formulários inválidos
* Feedback de erros para o usuário

---

## 📌 Próximas Melhorias (Roadmap)

* Sistema de simulados
* Correção automática
* Estatísticas de desempenho
* Painel administrativo
* API REST
* Testes automatizados

---

## 👨‍💻 Autor

Desenvolvido por **Arthur César**

* GitHub: [@Ocesinha](https://github.com/Ocesinha)

---

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar, estudar e contribuir.
