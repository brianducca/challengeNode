var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const url = 'http://localhost:3000';


/** GET BY ID */
describe("Get user data filtered by user id: ", function() {
    it("With users role, should return the user data", function(done) {
        this.timeout(10000);
        chai.request(url)
            .get("/api/user/getById/a0ece5db-cd14-4f21-812f-966633e7be86")
            .set('role', 'users')
            .end(function(err, res) {
                if (err) done(err);
                expect(res.body).to.include.all.keys('id', 'email', 'role', 'name');
                done();
            });
    });

    it("With admin role, should return the user data", function(done) {
        this.timeout(10000);
        chai.request(url)
            .get("/api/user/getById/a0ece5db-cd14-4f21-812f-966633e7be86")
            .set('role', 'admin')
            .end(function(err, res) {
                if (err) done(err);
                expect(res.body).to.include.all.keys('id', 'email', 'role', 'name');
                done();
            });
    });

    it("With fake role, should return a message saying role validation failed", function(done) {
        this.timeout(10000);
        chai.request(url)
            .get("/api/user/getById/a0ece5db-cd14-4f21-812f-966633e7be86")
            .set('role', 'fake')
            .end(function(err, res) {
                if (err) done(err);
                expect(res.body).to.have.property('message');
                expect(res.body.message).to.be.a('string');
                console.log(res.body.message);
                done();
            });
    });

    it("With non-existing id, should return a message saying no users found", function(done) {
        this.timeout(10000);
        chai.request(url)
            .get("/api/user/getById/12")
            .set('role', 'admin')
            .end(function(err, res) {
                if (err) done(err);
                expect(res.body).to.have.property('message');
                expect(res.body.message).to.be.a('string');
                console.log(res.body.message);
                done();
            });
    });
});



/** GET BY NAME */
describe("Get user data filtered by Name: ", function() {
    it("With admin role, should return the user data", function(done) {
        this.timeout(10000);
        chai.request(url)
            .get("/api/user/getByName/Barnett")
            .set('role', 'admin')
            .end(function(err, res) {
                if (err) done(err);
                expect(res.body).to.include.all.keys('id', 'email', 'role', 'name');
                done();
            });
    });
    it("With users role, should return the user data", function(done) {
        this.timeout(10000);
        chai.request(url)
            .get("/api/user/getByName/Barnett")
            .set('role', 'users')
            .end(function(err, res) {
                if (err) done(err);
                expect(res.body).to.include.all.keys('id', 'email', 'role', 'name');
                done();
            });
    });
    it("With fake role, should return a message saying role validation failed", function(done) {
        this.timeout(10000);
        chai.request(url)
            .get("/api/user/getByName/Barnett")
            .set('role', 'fake')
            .end(function(err, res) {
                if (err) done(err);
                expect(res.body).to.have.property('message');
                expect(res.body.message).to.be.a('string');
                console.log(res.body.message);
                done();
            });
    });

    it("With non-existing name, should return a message saying no users found", function(done) {
        this.timeout(10000);
        chai.request(url)
            .get("/api/user/getByName/nonExistingName")
            .set('role', 'admin')
            .end(function(err, res) {
                if (err) done(err);
                expect(res.body).to.have.property('message');
                expect(res.body.message).to.be.a('string');
                console.log(res.body.message);
                done();
            });
    });
});

/** GET LIST OF POLICIES BY USER NAME */
describe("Get list of policies filtered by User Name: ", function() {
    it("With admin role, Should return the list of policies", function(done) {
        this.timeout(10000);
        chai.request(url)
            .get("/api/policie/getByUserName/Manning")
            .set('role', 'admin')
            .end(function(err, res) {
                if (err) done(err);
                expect(res.body).to.be.a('array');
                done();
            });
    });
    it("With users role, should return a message saying role validation failed", function(done) {
        this.timeout(10000);
        chai.request(url)
            .get("/api/policie/getByUserName/Barnett")
            .set('role', 'users')
            .end(function(err, res) {
                if (err) done(err);
                expect(res.body).to.have.property('message');
                expect(res.body.message).to.be.a('string');
                console.log(res.body.message);
                done();
            });
    });
    it("With fake role, should return a message saying role validation failed", function(done) {
        this.timeout(10000);
        chai.request(url)
            .get("/api/policie/getByUserName/Barnett")
            .set('role', 'fake')
            .end(function(err, res) {
                if (err) done(err);
                expect(res.body).to.have.property('message');
                expect(res.body.message).to.be.a('string');
                console.log(res.body.message);
                done();
            });
    });
    it("With non-existing name, should return a message saying no policies found", function(done) {
        this.timeout(10000);
        chai.request(url)
            .get("/api/policie/getByUserName/nonExistingName")
            .set('role', 'admin')
            .end(function(err, res) {
                if (err) done(err);
                expect(res.body).to.have.property('message');
                expect(res.body.message).to.be.a('string');
                console.log(res.body.message);
                done();
            });
    });
});


/** GET USER LINKED TO A POLICY NUMBER */
describe("Get user linked to a policy number: ", function() {
    it("With admin role, Should return the user data", function(done) {
        this.timeout(10000);
        chai.request(url)
            .get("/api/user/getByPolicieNumber/56b415d6-53ee-4481-994f-4bffa47b5239")
            .set('role', 'admin')
            .end(function(err, res) {
                if (err) done(err);
                expect(res.body).to.include.all.keys('id', 'email', 'role', 'name');
                done();
            });
    });
    it("With users role, should return a message saying role validation failed", function(done) {
        this.timeout(10000);
        chai.request(url)
            .get("/api/user/getByPolicieNumber/56b415d6-53ee-4481-994f-4bffa47b5239")
            .set('role', 'users')
            .end(function(err, res) {
                if (err) done(err);
                expect(res.body).to.have.property('message');
                expect(res.body.message).to.be.a('string');
                console.log(res.body.message);
                done();
            });
    });
    it("With fake role, should return a message saying role validation failed", function(done) {
        this.timeout(10000);
        chai.request(url)
            .get("/api/user/getByPolicieNumber/56b415d6-53ee-4481-994f-4bffa47b5239")
            .set('role', 'fake')
            .end(function(err, res) {
                if (err) done(err);
                expect(res.body).to.have.property('message');
                expect(res.body.message).to.be.a('string');
                console.log(res.body.message);
                done();
            });
    });
    it("With non-existing policie number, should return a message saying no user found", function(done) {
        this.timeout(10000);
        chai.request(url)
            .get("/api/user/getByPolicieNumber/523asd")
            .set('role', 'admin')
            .end(function(err, res) {
                if (err) done(err);
                expect(res.body).to.have.property('message');
                expect(res.body.message).to.be.a('string');
                console.log(res.body.message);
                done();
            });
    });
});