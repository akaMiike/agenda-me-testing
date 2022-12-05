const clientController = require('../ClientController.js') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)
const mockAuth = {}

describe("Create new client", () => {

    //Antes de cada teste fazemos uma autenticação para poder realizar os testes
    beforeEach("Authenticate", () => {
        const admin = {
            "email": "admin@admin.com",
            "password": "admin"
        };

        request.post('/auth')
            .send(admin)
            .expect('Location', '/')
            .expect(302)
            .end(done)
    })

    it("Create a cliente with valid data", (done) => {
        //Criando um novo cliente com informacoes validas
        const new_client = {
            "name": "Joao Silva",
            "email": "joao.silva@gmail.com",
            "cpf": "123.456.789-12"
        };

        //Fazendo a requisição e a verificação que o resultado é o esperado
        request.post('/client/new')
            .send(new_client)
            .expect('Location', '/client/new')
            .expect(201)
            .end(done)
        
    })

    it("Create a cliente with invalid name", (done) => {
        //Criando um novo cliente com nome com carctere especial
        const new_client = {
            "name": "%$!",
            "email": "mjose@gmail.com",
            "cpf": "123.456.789-12"
        };

        //Fazendo a requisição e a verificação que o resultado é o esperado
        request.post('/client/new')
            .send(new_client)
            .expect('Location', '/client/new')
            .expect(500)
            .end(done)
    })
    it("Create a cliente with empty name", (done) => {
        //Criando um novo cliente com nome vazio
        const new_client = {
            "name": "",
            "email": "mjose@gmail.com",
            "cpf": "123.456.789-12"
        };

        //Fazendo a requisição e a verificação que o resultado é o esperado
        request.post('/client/new')
            .send(new_client)
            .expect('Location', '/client/new')
            .expect(500)
            .end(done)
    })
    it("Create a cliente with invalid email", (done) => {
        //Criando um novo cliente com email invalido
        const new_client = {
            "name": "gabriel",
            "email": "gabriel@aaa",
            "cpf": "123.456.789-12"
        };

        //Fazendo a requisição e a verificação que o resultado é o esperado
        request.post('/client/new')
            .send(new_client)
            .expect('Location', '/client/new')
            .expect(500)
            .end(done)
    })
    it("Create a cliente with empty email", (done) => {
        //Criando um novo cliente com email vazio
        const new_client = {
            "name": "gabriel",
            "email": "",
            "cpf": "123.456.789-12"
        };

        //Fazendo a requisição e a verificação que o resultado é o esperado
        request.post('/client/new')
            .send(new_client)
            .expect('Location', '/client/new')
            .expect(500)
            .end(done)
    })
    it("Create a cliente with invalid cpf", (done) => {
        //Criando um novo cliente com cpf invalido
        const new_client = {
            "name": "gabriel",
            "email": "gabriel@gmail.com",
            "cpf": "123"
        };

        //Fazendo a requisição e a verificação que o resultado é o esperado
        request.post('/client/new')
            .send(new_client)
            .expect('Location', '/client/new')
            .expect(500)
    })
    it("Create a cliente with empty cpf", (done) => {
        //Criando um novo cliente com cpf vazio
        const new_client = {
            "name": "gabriel",
            "email": "gabriel@gmail.com",
            "cpf": ""
        };

        //Fazendo a requisição e a verificação que o resultado é o esperado
        request.post('/client/new')
            .send(new_client)
            .expect('Location', '/client/new')
            .expect(500)
    })
})
