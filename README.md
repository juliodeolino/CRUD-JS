# CRUD-JS

## Descrição

CRUD-JS é um projeto backend desenvolvido com Node.js e Express, focado em fornecer uma API REST para operações de autenticação, gerenciamento de usuários e posts. O projeto utiliza uma arquitetura modular, separando responsabilidades em controllers, models e rotas, facilitando a manutenção e escalabilidade.

## Tecnologias Utilizadas

- **Node.js**: Plataforma para execução do JavaScript no backend.
- **Express**: Framework para criação de APIs REST.
- **JWT (jsonwebtoken)**: Autenticação baseada em tokens.
- **dotenv**: Gerenciamento de variáveis de ambiente.
- **Nodemon**: Monitoramento e reinicialização automática do servidor durante o desenvolvimento.

## Estrutura do Projeto

```
CRUD-JS/
├── controllers/
│   ├── AuthController.js
│   ├── PostsController.js
│   └── UsuariosController.js
├── models/
│   ├── PostModel.js
│   └── UsuarioModel.js
├── rotas/
│   ├── PostsRotas.js
│   ├── RotasPrivadas.js
│   ├── RotasPublicas.js
│   └── UsuarioRotas.js
├── server.js
├── package.json
```

## Arquitetura

- **Controllers**: Contêm a lógica de negócio para autenticação, posts e usuários.
- **Models**: Simulam o armazenamento de dados em memória, com métodos CRUD.
- **Rotas**:
  - **RotasPublicas**: Endpoints acessíveis sem autenticação (ex: login).
  - **RotasPrivadas**: Endpoints protegidos por JWT, para operações de usuários e posts.

## Endpoints Principais

- `POST /login`: Autenticação de usuário e geração de token JWT.
- `GET /users`, `POST /users`, `PUT /users/:id`, `DELETE /users/:id`: CRUD de usuários (privado).
- `GET /posts`, `POST /posts`, `PUT /posts/:id`, `DELETE /posts/:id`: CRUD de posts (privado).

## Como Executar

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Configure o arquivo `.env` com a variável `APP_KEY_TOKEN`.
3. Inicie o servidor:
   ```bash
   npm start
   ```

O servidor estará disponível em `http://localhost:3000`.

## Observações

- O projeto utiliza armazenamento em memória (arrays), ideal para testes e prototipagem.
- Para produção, recomenda-se integrar um banco de dados.

---

Desenvolvido por Julio.
