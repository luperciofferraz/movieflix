# movieflix 

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/luperciofferraz/movieflix/blob/main/LICENSE)

# Sobre o Projeto

https://lff-movieflix.netlify.app/

Sistema de um catálogo de Filmes e seus respectivos Gêneros, onde usuários podem consultar o catálogo e, dependendo do perfil de acesso desse usuário, o mesmo pode, também, avaliar os Filmes do catálogo.

O projeto está subdividido da seguinte forma:

## Web : corresponde ao Front-End da aplicação, desenvolvido em React.
![Web1](https://github.com/luperciofferraz/Assets/blob/main/MFtelaCatalogo.png) 
![Web2](https://github.com/luperciofferraz/Assets/blob/main/MFtelaDetalhes.png)

### Tecnologias / Bibliotecas utilizadas

- React Router Dom
- React Select
- React Hook Form
- React Paginate
- React Toastify
- Axios

## Mobile : Versão Mobile do App MovieFlix, cujo código fonte da Aplicação está localizado no respositório https://github.com/luperciofferraz/movieflixapp 

### Tecnologias / Bibliotecas utilizadas

- Expo
- React Native Async Storage
- React Navigation
- React Hook Form
- React Native Gesture Handler
- React Native Safe Area Context
- React Native Svg Transform
- React Native Tiny Toast

## Back End:

https://lff-movieflix.herokuapp.com/

### Tecnologias Utilizadas

- Spŕing Boot
- Mockito
- JUnit
- Repository

### Detalhes do Back End:

Desenvolvido utilizando Spring Boot, o Back-End do projeto está sendo concebido utilizando as melhores práticas em arquitetura de API java, sendo dividido nas seguintes camadas:

- Resource: Classes de Endpoints, onde são recebidas as requisições dos usuários.
- DTO: Classes que montam o conteúdo e o formato das informações que serão trafegadas entre o Cliente e o Servidor, trazendo os seguintes benefícios.
    - Recebimento e envio somente da informação necessária.
    - Evitando o contato direto à camada de acesso ao Banco de Dados e seu contexto de persistência.
    - Enviando respostas ao cliente em um formato padronizado e amigável.
- Repository: Camada de Acesso aos dados, padrão Repository do Spring Boot.
- Entity: Classes de Entidades do Banco de Dados
- Service: Classes de Serviços quem fazem o 'meio-de-campo' entre as Classes Resource e Repository.
