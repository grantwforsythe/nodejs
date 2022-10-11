const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const { request } = require('http');

const app = express();
const port = 3000

// TODO: See if the below line actually allows the static files to be accessed
// app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (request, response) => {
    response.send('Hello World!');
});

app.get('/name', (request, response) => {
    response.send(`
        <form action="/" method="POST">
            <input type="text" name="name">
            <button type="submit">Submit</button>
        </form>
    `);
});

app.post('/', (request, response) => {
    const name = request.body.name;
    console.log(`Name: ${name}`);
    response.redirect('/');
});

app.get('/redirect', (request, response) => {
    response.redirect('/');
});

app.listen(3000, () => {
    console.log(`App listening on port ${port}`);
});