<h1 align="center">🌌 MakerSpace – Backend 🌌</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-18+-0aff0a?style=for-the-badge&logo=node.js&logoColor=black" />
  <img src="https://img.shields.io/badge/Express.js-Neon-8a00ff?style=for-the-badge" />
  <img src="https://img.shields.io/badge/JWT-Security-ff007f?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Build-On%20Going-00c3ff?style=for-the-badge" />
</p>

<p align="center"><i>Sistema backend responsável pela autenticação, gerenciamento de usuários e suporte inicial para a futura área de cursos. Desenvolvido em Node.js + Express. 🔥</i></p>


------------------------------------------------------------------------

<h1 align="center">📌 Funcionalidades 📌</h1>


Cadastro de usuários

Login e autenticação via token

Estrutura inicial para métricas (escolaridade e CEP)

Ponto de partida para futuras rotas de cursos

------------------------------------------------------------------------

<h1 align="center">🚦Fluxo de Rotas🚦</h1>


/cadastro

valida dados →

verifica email duplicado →

cria hash da senha →

salva usuário →

retorna dados básicos

/login

valida dados →

busca usuário pelo email →

compara senha →

gera token JWT →

retorna token + dados do usuário

/loginOk 

Passa por um verificação de jwt

Se passar pela verificação com token ok

Busca todos os usuários no banco

devolve em formato JSON



------------------------------------------------------------------------
<h1 align="center">🛠Tecnologias Utilizadas🛠</h1>



Node.js

Express

JWT

bcrypt

Mongo DB

------------------------------------------------------------------------

<h1 align="center">🚀 Como iniciar o projeto 🚀</h1>



npm install
npm run dev