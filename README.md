# api-login-test
**Descrição do projeto** <br> 
Api para o frontend login

**Inicia o projeto**
npm init

**Dependencias para começo de projeto**
_Typescript como linguagem padrão, tsx para executar a aplicação e tsup para fazer o build da aplicação_
npm install -D typescript @types/node tsx tsup

**Em seguida, cria uma pasta chamada de src**
_Dentro da pasta src crie um arquivo chamando de server.ts_
_Vai servir como o servidor da aplicação_

**Executa o tsc --init**
_Para iniciar a configuração do typescript. Você pode configurar uma versão especifica do ES (ecmascript) no atributo target, no meu caso usei a versão es2020, pois o node suporta a maioria das features_
npx tsc --init

**Instalar a dependecia do Fastify**
_Vamos utilizar o fastify como framework no node, poderia ser express, mas como vamos fazer só uma rota simples, já da pro gasto_
npm i fastify

**Instalar as dependencias do Prisma**
_Vamos utilizar o Prisma com dependencia de desenvolvimento para acesso ao banco de dados._
npm i prisma -D

_E vamos utilizar o Prisma com dependencia de produção para operar o banco de dados através do servidor node_
npm i @prisma/client

**Criando a configuração do prisma**
_Isso cria uma pasta Prisma com arquivo de configuração para o banco de dados_
npx prisma init

**Criar model da tabela para ser usado no banco**
_No arquivo schema.prisma cria uma model Task para guardar as atividades na tabela Task do banco_

**Configurar variavel ambiente**
_No arquivo .env editar a DATABASE_URL com a senha do seu usuario, no meu caso eu estou usando o usuário root (postgre) e sua senha, e logo após a port coloco o nome do banco siteKanban e usar o schema public mesmo_


**Configurar o banco**
_Vá para o postgresql e crie um banco de dados com o nome siteKanban_
_Volte para o terminal do vscode e execute o codigo abaixo para fazer as alterações no banco de dados conforme foi feito na configuração do arquivo schema.prisma_
npx prisma migrate dev

**Criar aplicação**
_No arquivo server.ts import o fastify para poder criar a aplicação_

**Crir rotas**
_Ainda no arquivo server.ts criaremos duas rotas para listar e criar as tasks_

**Pegar conexão com o banco**
_Importar o prisma client para usar como conexão com o banco_

**Validar inputs**
_Para saber se os valores das variaveis no body ou header são válidas e no tipo correto, usaremos a biblioteca Zod para validação_

**Criar o server**
_Usaremos o metodo listen do para o fastify escutar o host e a port que quisermos para iniciar o servidor_

**Configurar o script para executar em desenvolvimento**
_No arquivo package.json criaremos um script "dev" para poder executar o servidor_
npm run dev

**Especificando versão para o serviço de deploy**
_As vezes os serviços de deplloy usar bibliotecas diferentes das que foram utilizadas no projeto, para resolver isso podemos usar uma propriedade no package.json chamada de "engines", é nela que especificamos nossa versão de determinada biblioteca usada no projeto. No meu caso, especifiquei que estou usando o nodejs na versão 19_

**Configurar o script para buildar**
_No arquivo package.json criaremos um script "build" para poder criar a pasta com a aplicação em um arquivo com código em javascript puro, sem typescript_
npm run build

**Configurar o script para executar em produção**
_No arquivo package.json criaremos um script "start" para poder executar a aplicação buildada. O serviço de host que vai se utilizar mais disso, para que ele entenda_
npm start

**Adicionar ignore**
_No arquivo .gitignore vamos adicionar uma execessão para o git ignorar a pasta dist para quando formos subir a aplicação no repositório remoto_

**Deploy**
_Cria conta no Fly.io ou render.com, no meu caso usei o render_
_Usa a conta do GitHub mesmo para ter acesso aos repositorios_
_Cria um novo banco de dados, usei o postgresql_
_Cria um web service, vai em advanced e coloca a variavel ambiente com o link interno do postgresql que você criou. E também configure os comandos de build e start dessa forma, respectivamnte:_
_npm ci && npm run build && npx prisma migrate deploy_
_npm run start_
_Pronto! Você criou uma API REST_