const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

router.post('/adduser',userController.postAddUser);
router.get('/allusers',userController.getAllusers);
router.post('/users/delete',userController.Deleteuser);
router.get('/users/delete/:id',userController.Delete)

module.exports = router;