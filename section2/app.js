const http = require('http');
const fs = require('fs');
const path = require('path');

const UTF_8 = 'utf8';
const BASE_PATH = path.parse('section2/');

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
    const timestamp = Math.floor(Date.now() / 1000);
    
    fs.writeFile(
        path.join(BASE_PATH, 'data', `request-${timestamp}.json`),
        json, UTF_8, callback
    );

    switch (request.url) {
        case '/':
            if (request.method === 'GET')
            {
                response.setHeader('Content-Type', 'application/json');
                response.end(json);
            } else if (request.method === 'POST') {
                // The on method allows you to listen to certain events
                // The event will trigger when a new buffer is ready to be read
                const body = [];
                request.on('data', (chuck) => {
                    body.push(chuck);
                });

                // After all the chucks have been read in
                request.on('end', () => {
                    const parsedBody = Buffer.concat(body).toString();
                    const username = parsedBody.split('&')[0].split('=')[1];
                    const password = parsedBody.split('&')[1].split('=')[1];
                    console.log(`Username: ${username}, Password: ${password}`);
                });
                response.write('<html><body><h1>Post Request</h1></body></html>')
                response.end();
            }
            break;
        case '/login':
            response.writeHead(200);
            response.end(fs.readFileSync(path.join(BASE_PATH, 'templates', 'form.html')));
            break;
        default:
            response.writeHead(404);
            response.end(fs.readFileSync(path.join(BASE_PATH, 'templates', '404.html')));
    }
});

server.listen(3000);