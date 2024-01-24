# DEVHOUSE

## Objetivo do Projeto

- Usuário:

Poderá fazer o **cadastro** na aplicação via email e também realizar o login via email.

O usuário dev poder **reservar** alguma coisa desde que não seja suas próprias casas ou reserva casas com status indisponível.

Poderá **cancelar** sua reserva há qualquer momento.

- Houses:

Usuário logado poderá

1- cadastrar nova casa

2- editar

3- excluir casa quando quiser

Ao cadastrar casa

1- conter foto

2- descrição

3- localização

4- preço da diária

5- status(disponivel e indisponivel)

## Passos do desenvolvimento

* Criando Padrão de Codigo - editorConfig
ESLint
Prettier (yarn add prettier eslint-config-prettier eslint-plugin-prettier -D)
** formatar o .editorconfig | .eslintrc.js

1 - Estruturando o servidor

2 - Configurando nodemon e sucrase

3 - Configurando MongoDB

4 - Cadastro e Login do Usuario - Criação das pasta Controller(tratativa dos dados) e Model(definição de dados na tabela)

5 - Cadastro de Casa - Criação das pastas Controller(tratativa dos dados), Model(definição de dados ma tabela) e criação das pasta config - upload.js.

6 - Criação de middleware responsavel pela criação de verificação de imagem por meio
de um link

7 - Criando a função de atualizar e deletar casas cadastradas

8 - Criação do controller dashboard e definição na rota

9 - Instalação da Lib Cors

10 - Fazer Reserva de House

11 - Criando Reserva de Casa

12 - Deletando Reserva

13 - Criando validação com a Lib Yup, para cadastro de Reserva e Sessão de Cadastro


## Libs

* Eslint - yarn add eslint -D | yarn eslint --init

1 - Express

2 - Nodemon

3 - Sucrase - yarn sucrase-node src/server.js | criar arquivo nodemon.json

4 - Criar Conexão com MongoDB Atlas | Em sequencia instal yarn add mongoose - Mogoose

5 - Multer

6 - Cors

7 - Yup - yarn add yup
