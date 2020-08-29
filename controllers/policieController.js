const validationHandler = require('../validators/validationHandler');
const users = require('../data/clients');
const policies = require('../data/policies');

exports.showByUserName = async(req, res, next) => {

    var logMessage = "Api: " + req.method + "(" + req.originalUrl + ") | Get Policies (userName=" + req.params.userName + ")";

    try { validationHandler(req); } catch (err) {
        console.log(logMessage + " -> " + err.message);
        next(err);
        return;
    }

    console.log(logMessage);

    var client = await users.filter((user) => { return user.name === req.params.userName })[0];
    console.log(client.id);
    var response = await policies.filter((item) => {
        return item.clientId == client.id;
    });
    if (!response.length) {
        next({ statusCode: 404, message: "No policies found" });
    } else {
        res.send(response);
    }
};