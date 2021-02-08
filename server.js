const http = require('http');

// A basic NodeJS server
const requestListener = function (req, res) {

    // Set CORS headers - To handle Cross Origin Resource Sharing
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');

    let scoopsData = [
        { name: 'Chocolate', imagePath: 'https://filedn.com/l13ooYU9K2Gpw3sDppRnBAy/Sundae-on-demand-Project/chocolate.jpg' },
        { name: 'Vanilla', imagePath: 'https://filedn.com/l13ooYU9K2Gpw3sDppRnBAy/Sundae-on-demand-Project/vanilla.png' },
    ];

    let toppingsData = [
        { name: 'Cherries', imagePath: 'https://filedn.com/l13ooYU9K2Gpw3sDppRnBAy/Sundae-on-demand-Project/cherris.jpg' },
        { name: 'M&Ms', imagePath: 'https://filedn.com/l13ooYU9K2Gpw3sDppRnBAy/Sundae-on-demand-Project/MnM.jpg' },
        { name: 'Hot fudge', imagePath: 'https://filedn.com/l13ooYU9K2Gpw3sDppRnBAy/Sundae-on-demand-Project/hotgudge.jpg' },
    ];

    if (req.url === '/scoops') {
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.write(JSON.stringify(scoopsData));
        res.end();
    } else if (req.url === '/toppings') {
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.write(JSON.stringify(toppingsData));
        res.end();
    } else {
        res.writeHead(404);
        res.end();
    }
    //res.end('Hello, World!' + req.url);
}

const server = http.createServer(requestListener);
server.listen(3030);