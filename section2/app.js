const http = require('http');
const fs = require('fs');

const UTF_8 = 'utf8';

const callback = (error) => {
    if (error) {
        console.error(error);
    } else {
        console.log('The file has been saved!');
    }
};

const server = http.createServer((request, response) => {
    const json = JSON.stringify(request.headers, null, 4);
    // timestamp in seconds
    let timestamp = Math.floor(Date.now() / 1000);

    fs.writeFile(`section2/data/request-${timestamp}.json`, json, UTF_8, callback);

    switch (request.url) {
        case '/':
            if (request.method === 'get')
            {
                response.setHeader('Content-Type', 'application/json');
            } else if (request.method === 'post') {
                console.log(request);
            }
            response.end(json);
            break;
        case '/form':
            response.writeHead(200);
            response.end(fs.readFileSync('section2/templates/form.html'));
            break;
        default:
            response.writeHead(404);
            response.end(fs.readFileSync('section2/templates/404.html'));
    }
});

server.listen(3000);