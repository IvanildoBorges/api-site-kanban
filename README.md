# 📦 API Login Test

**Resumo** <br>
API REST simples para autenticação, criada com TypeScript, Fastify e Prisma. Ideal para consumo por um frontend de login.

---

## 🚀 Iniciando o Projeto

```bash
npm init -y
```

---

## 📦 Instalação de Dependências

### Dependências de Desenvolvimento:

```bash
npm install -D typescript @types/node tsx tsup
```

- **TypeScript**: linguagem padrão do projeto.
- **TSX**: executa arquivos `.ts`/`.tsx`.
- **Tsup**: faz o build da aplicação.

### Dependências de Produção:

```bash
npm install fastify
```

- **Fastify**: framework leve para Node.js.

### Prisma:

```bash
npm install -D prisma
npm install @prisma/client
```

- **Prisma**: ORM para comunicação com o banco de dados.

---

## 🛠 Configuração do Projeto

1. **Criar pasta `src`**  
   Dentro dela, crie o arquivo `server.ts` — será o ponto de entrada da aplicação.

2. **Inicializar TypeScript**  
   ```bash
   npx tsc --init
   ```
   - No `tsconfig.json`, altere o `target` para `es2020`.

3. **Inicializar Prisma**  
   ```bash
   npx prisma init
   ```
   Isso criará a pasta `prisma` com o arquivo `schema.prisma`.

4. **Criar Model**
   No `schema.prisma`, defina o seguinte modelo:

   ```prisma
   model Task {
     id        Int      @id @default(autoincrement())
     title     String
     completed Boolean  @default(false)
     createdAt DateTime @default(now())
   }
   ```

5. **Configurar Variáveis de Ambiente**  
   Edite o arquivo `.env`:

   ```
   DATABASE_URL="postgresql://root:senha@localhost:5432/siteKanban?schema=public"
   ```

---

## 🗃 Configurar o Banco de Dados

1. Crie um banco chamado `siteKanban` no PostgreSQL.
2. Rode a migração:

```bash
npx prisma migrate dev --name init
```

---

## 🧱 Criando o Servidor

No `src/server.ts`:

1. Importe o Fastify.
2. Importe o Prisma Client.
3. Crie duas rotas básicas (listar e criar tasks).
4. Use o método `listen()` para rodar o servidor.

---

## ✅ Validação de Dados

Instale a biblioteca Zod:

```bash
npm install zod
```

Use-a para validar inputs do `body`, `params` ou `headers`.

---

## ⚙ Scripts do Projeto

No `package.json`, adicione os scripts:

```json
"scripts": {
  "dev": "tsx src/server.ts",
  "build": "tsup src/server.ts --format esm --dts --out-dir dist",
  "start": "node dist/server.js"
}
```

---

## 📌 Engines (Versão do Node)

Adicione ao `package.json` para evitar incompatibilidades de ambiente:

```json
"engines": {
  "node": "19.x"
}
```

---

## 🧹 Ignorar Arquivos no Git

No `.gitignore`:

```
dist/
.env
```

---

## ☁️ Deploy no Render (ou Fly.io)

1. Crie conta no [render.com](https://render.com/).
2. Conecte com seu GitHub.
3. Crie um banco PostgreSQL.
4. Crie um Web Service.
5. Configure as variáveis de ambiente:
   - `DATABASE_URL`: string de conexão interna do banco.
   - `JWT_SECRET`: string com letras, números e símbolos.
6. Comandos de deploy:
   - **Build**: `npm ci && npm run build && npx prisma migrate deploy`
   - **Start**: `npm run start`

---

## ✅ Pronto!

Sua API REST está no ar 🚀
