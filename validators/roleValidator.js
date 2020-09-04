const { body, param, query, header } = require('express-validator');
const adminRole = "admin";
const userRole = "users";

exports.roleAdminExist = header("role")
    .notEmpty()
    .equals(adminRole)
    .withMessage("Must have admin role");

exports.roleUsersExist = header("role")
    .notEmpty()
    .equals(userRole)
    .withMessage("Must have user role");


exports.roleUsersOrAdminExist = header("role")
    .notEmpty()
    .isIn([adminRole, userRole])
    .withMessage("Must have user role or admin role");