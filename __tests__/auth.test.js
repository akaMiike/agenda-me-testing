const app = require('../index.js') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)

describe("Test log in with credentials", () => {
    it("Log in with valid credentials" , (done) =>{
        const admin = {
            "email": "admin@admin.com",
            "password": "admin"
        };

        request.post('/auth')
        .send(admin)
        .expect('Location','/')
        .expect(302)
        .end(done)
    })

    it("Log in with invalid email" , (done) =>{
        const admin = {
            "email": "notadmin@notadmin.com",
            "password": "admin"
        };

        request.post('/auth')
        .send(admin)
        .expect('Location','/auth')
        .expect(302)
        .end(done)
    })

    it("Log in with invalid password" , (done) =>{
        const admin = {
            "email": "admin@admin.com",
            "password": "notadmin"
        };

        request.post('/auth')
        .send(admin)
        .expect('Location','/auth')
        .expect(302)
        .end(done)
    })
})