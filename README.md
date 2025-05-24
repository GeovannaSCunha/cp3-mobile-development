# Usando API do DummyJson

A proposta deste projeto é mostrar posts contidos de história e ficção contidos no DummyJson.
A navegação deve utilizar Drawer(Gaveta) ou Abas.

Os posts de história são obtidos atráves de um `GET` no endpoint:
`https://dummyjson.com/posts/tag/history`

Os posts de ficção são obtidos atráves de um `GET` no endpoint:
`https://dummyjson.com/posts/tag/fiction`

Em ambas as abas são exibidos numa lista os seguintes dados:
- `title`
- `reactions.likes`
- `reactions.dislikes`
- `views`


Este projeto é feito com [Expo](https://expo.dev/)
Os ícones são cortesia do [`FontAwesome`](https://fontawesome.com/icons)

# Configurando o projeto
Após clonar o repositório, rode o comando para instalar os pacotes:

`npm install`

# Rodando o projeto
Para rodar o projeto num dispositivo Android:

`npm run android`

Para rodar o projeto num dispositivo iOS:

`npm run ios`

Para rodar o projeto num dispositivo Web:

`npm run web`