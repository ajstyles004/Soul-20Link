import http from 'http';

const postData = JSON.stringify({
    title: 'Test Post',
    content: 'This is a test post content',
    type: 'news',
    imageUrl: 'https://example.com/image.jpg'
});

const options = {
    hostname: 'localhost',
    port: 8080, // Default port from AGENTS.md/code
    path: '/api/posts',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
    }
};

const req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
    });
    res.on('end', () => {
        console.log('No more data in response.');

        // If POST successful, try GET
        if (res.statusCode === 201) {
            http.get('http://localhost:8080/api/posts', (res) => {
                console.log(`GET STATUS: ${res.statusCode}`);
                res.on('data', (chunk) => {
                    console.log(`GET BODY: ${chunk}`);
                });
            });
        }
    });
});

req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});

// Write data to request body
req.write(postData);
req.end();
