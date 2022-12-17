
# :soccer: API de Blogs

Neste projeto desenvolvi uma API e um banco de dados para a produção de conteúdo para um blog!

## ⚙️ Funcionalidades

✅ Validação com JWT;

✅ ORM - Interface da aplicação com o banco de dados;

✅ Arquiterura MSC - Model, Service e Controller;

✅ Associação 1:N e N:N;



## :hammer_and_wrench: Ferramentas 
### 🍮 BackEnd
- DOCKER;
- MySQL com Sequelize;
- NodeJS com Express;
- JWT;
- Joi
# Orientações

- *Clonar o repositório:*

```
$ git clone git@github.com:Brayan-23/Blogs-API.git
```

- *Acessar o blogsApi:*

```
$ cd blogsApi
```


- *Instale as depências:*
```
$ npm install
```

<details>
  <summary><strong>🐋 Rodando no Docker vs Localmente</strong></summary><br />
  
  ## Com Docker

  > Rode o serviço `node` com o comando `docker-compose up -d`.
  - Esse serviço irá inicializar um container para o `NODE` e um para o Banco de Dados `MySQL`.
  - A partir daqui você pode acessar o qualquer container via CLI ou abri-lo no VS Code.

  > Use o comando `docker exec -it blogs-api` para acessar a CLI do container.

  > Instale as dependências com `npm install`
  
  ⚠ Atenção ⚠ Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 

<img src="images/remote-container.png" width="800px" >  

---
  
  ## Sem Docker
  
  > Instale as dependências com `npm install`
 
  - Para rodar o projeto desta forma, obrigatoriamente você deve ter o `NODE` instalado em seu computador, como também o `MySQL`.

  <br/>
</details>
