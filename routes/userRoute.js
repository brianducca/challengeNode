const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { roleAdminExist, roleUsersOrAdminExist } = require('../validators/roleValidator');

router.get(
    '/getById/:userId', [roleUsersOrAdminExist],
    userController.showById
);


router.get(
    '/getByName/:name', [roleUsersOrAdminExist],
    userController.showByName
);

router.get(
    '/getByPolicieNumber/:policieN', [roleAdminExist],
    userController.showByPolicieNumber
);

module.exports = router;