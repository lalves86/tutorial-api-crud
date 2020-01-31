# Tutorial API CRUD

API para testar as operações de CRUD utilizando node.js.

O tutorial está disponível no meu perfil do [medium](https://medium.com/@lalves86/criando-uma-api-que-realiza-as-principais-requisi%C3%A7%C3%B5es-http-usando-node-js-e-express-62547b653727)

## Rotas

Foram criadas rotas para os projetos e tarefas, usando os seguintes métodos:

* GET /projects - Retorna todos os projetos
* GET /projects/id - Retorna o projeto com id específico
* POST /projects - Permite criar um novo projeto
* POST /projects/id/tasks - Permite criar uma nova tarefa dentro do projeto
* PUT /projects/id - Permite alterar o nome do projeto
* DELETE /projects/id - Permite remover um projeto

## Uso

Para usar o repositório, basta cloná-lo através do terminal ou prompt através dos seguintes comandos:

```
> git clone https://github.com/lalves86/tutorial-api-crud.git
> yarn
> yarn dev
```

Acessar url local: http://localhost:3002
