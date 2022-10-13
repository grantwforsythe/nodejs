const path = require('path');

const express = require('express');

const router = express.Router();

// url: admin/product/add
router.get('/product/add', (request, response) => {
    response.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

// url: admin/product
router.post('/product', (request, response) => {
    const product = request.body.product;
    console.log(`Product: ${product}`);
    response.redirect('/');
});

module.exports = router;