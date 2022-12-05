const app = require('../index.js') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)

//Criando suite de testes
describe("Test log in with credentials", () => {

    //Caso de teste - CT01
    it("Log in with valid credentials", (done) => {
        //Criando os dados do adm validos
        const admin = {
            "email": "admin@admin.com",
            "password": "admin"
        };

        //Fazendo a requisicao e analisando se o resultado é o esperado
        request.post('/auth')
        .send(admin)
        .expect('Location','/')
        .expect(302)
        .end(done)
    })
    //Caso de teste - CT02
    it("Log in with invalid email", (done) => {
        //Criando os dados do adm com email nao cadastrado
        const admin = {
            "email": "notadmin@notadmin.com",
            "password": "admin"
        };

        //Fazendo a requisicao e analisando se o resultado é o esperado
        request.post('/auth')
        .send(admin)
        .expect('Location','/auth')
        .expect(302)
        .end(done)
    })
    //Caso de teste - CT02
    it("Log in with invalid password", (done) => {
        //Criando os dados do adm com senha invalida





        const admin = {
            "email": "admin@admin.com",
            "password": "notadmin"
        };

        //Fazendo a requisicao e analisando se o resultado é o esperado
        request.post('/auth')
        .send(admin)
        .expect('Location','/auth')
        .expect(302)
        .end(done)
    })
})