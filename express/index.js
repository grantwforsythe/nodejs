const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();
const port = 3000

// Middleware that allows responses to be parsed
app.use(bodyParser.urlencoded({extended: false}));

// Add the routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((request, response, next) => {
    response.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});