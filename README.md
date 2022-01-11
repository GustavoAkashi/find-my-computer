# Trabalho da materia de Banco de Dados I EACH USP


## Como configurar

-Instalar docker

-Instalar docker compose

-Instalar uma IDE

-Instalar o pacote npm ou yarn, caso não saiba se possui basta dar npm --version ou yarn --version

-Alterar no arquivo docker-compose.yml, o caminho de onde se encontra o programa


## Como Rodar
Existem duas opções:

- Entrar via terminal na pasta postgres e digitar o comando Docker compose up
ou
- Basta navegar até a pasta client com cd client e rodar o comando npm start ou yarn start

Por fim, deverá abrir um navegador com o endereço localhost:3000


### Onde estão as queries
- As queries para instanciar o banco de dados estão em `postgres/queries/`
- As queries para busca no banco estão em `server/index.js`
- A exibição do resultado das queries estão em `client/src/pages/Results.js`
