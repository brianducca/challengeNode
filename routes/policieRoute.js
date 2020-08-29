const express = require('express');
const router = express.Router();
const policieController = require('../controllers/policieController');
const { roleAdminExist } = require('../validators/roleValidator');

router.get(
    '/getByUserName/:userName', [roleAdminExist],
    policieController.showByUserName
);



module.exports = router;