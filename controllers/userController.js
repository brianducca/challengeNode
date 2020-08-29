const validationHandler = require('../validators/validationHandler');
const users = require('../data/clients');
const policies = require('../data/policies');

exports.showById = async(req, res, next) => {

    var logMessage = "Api: " + req.method + "(" + req.originalUrl + ") | Get User Data (userId=" + req.params.userId + ")";

    try { validationHandler(req); } catch (err) {
        console.log(logMessage + " -> " + err.message);
        next(err);
        return;
    }
    console.log(logMessage);

    var response = await users.filter((item) => {
        return item.id === req.params.userId;
    });
    if (!response.length) {
        next({ statusCode: 404, message: "No users found" });
    } else {
        res.send(response[0]);
    }

};


exports.showByName = async(req, res, next) => {

    var logMessage = "Api: " + req.method + "(" + req.originalUrl + ") | Get User Data (name=" + req.params.name + ")";

    try { validationHandler(req); } catch (err) {
        console.log(logMessage + " -> " + err.message);
        next(err);
        return;
    }
    console.log(logMessage);

    var response = await users.filter((item) => {
        return item.name === req.params.name;
    });
    if (!response.length) {
        next({ statusCode: 404, message: "No users found" });
    } else {
        res.send(response[0]);
    }

};



exports.showByPolicieNumber = async(req, res, next) => {

    var logMessage = "Api: " + req.method + "(" + req.originalUrl + ") | Get User Data (PolicieNumber=" + req.params.policieN + ")";

    try { validationHandler(req); } catch (err) {
        console.log(logMessage + " -> " + err.message);
        next(err);
        return;
    }
    console.log(logMessage);

    var policie = policies.filter((policie) => { policie.id === req.params.policieN });

    var response = users.filter((item) => {
        return item.id === policie.clientId;
    });
    if (!response.length) {
        next({ statusCode: 404, message: "No users found" });
    } else {
        res.send(response[0]);
    }
};