const path = require('path');

const express = require('express');

const rootDir = require('../public/js/utils');

const router = express.Router();

router.get('/', (request, response) => {
    response.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

router.get('/redirect', (request, response) => {
    response.redirect('/');
});

module.exports = router;