const path = require('path');

const express = require('express');

const allproducts=require('../controllers/products');
const { all } = require('./shop');

const router = express.Router();



// /admin/add-product => GET
router.get('/add-product',allproducts.addProductPage);

// /admin/add-product => POST
router.post('/add-product',allproducts.addproduct);

exports.routes = router;

