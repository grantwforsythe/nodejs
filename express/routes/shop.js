const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

router.get('/redirect', (request, response) => {
    response.redirect('/');
});

module.exports = router;