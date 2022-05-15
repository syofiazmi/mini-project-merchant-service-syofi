const router = require('express').Router();
const { product } = require('../controllers');

// GET localhost:8080/product => Ambil data semua product
router.get('/product', product.getDataProduct);

// GET localhost:8080/product/2 => Ambil data semua product berdasarkan id = 2
router.get('/product/:id', product.getDataProductByID);

// POST localhost:8080/product/add => Tambah data product ke database
router.post('/product/add', product.addDataProduct);

// POST localhost:8080/product/2 => Edit data product
router.post('/product/edit', product.editDataProduct);

// POST localhost:8080/product/delete => Delete data product
router.post('/product/delete/', product.deleteDataProduct);

module.exports = router;