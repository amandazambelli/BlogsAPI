# Blogs API #

## O Projeto ##

Neste projeto desenvolvi uma API e um banco de dados para a produção de conteúdo para um blog.

A aplicação foi desenvolvida em Node.js utilizando o pacote Sequelize com um banco de dados MySQL para fazer um CRUD de posts seguindo os princípios do REST. Para autenticação e autorização de usuários utilizei o JSON Web Token.

## Rotas ##

### Posts ###

POST | http://localhost:3000/post

GET | http://localhost:3000/post

GET | http://localhost:3000/post/search?q=content

GET | http://localhost:3000/post/:id

PUT | http://localhost:3000/post/:id

DELETE | http://localhost:3000/post/:id

### Categories ###

GET | http://localhost:3000/categories

POST | http://localhost:3000/categories


## Instruções ##

<details>

1. Clone o repositório e entre na pasta que você acabou de clonar:
  * `git@github.com:amandazambelli/BlogsAPI.git`.
  
2. Instale as dependências:
  * `npm install`
  
3. Rode a aplicação:
  * `npm run debug`
  
4. Acesse pelo navegador:
  * `http://localhost:3000/`

<br />
</details>

## Banco de Dados ##

- Para criar o banco e gerar as tabelas:
  * `npm run prestart`

- Para inserir dados e popular as tabelas:
  * `npm run seed`

- Para deletar o banco de dados:
  * `npm run drop`
