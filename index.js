var http = require('http');
var fs = require('fs');

var server = http.createServer();
server.on('request', function (request, response) {
    if (request.method === 'GET' && request.url === '/flex') {
        response.setHeader("Content-Type", "text/html; charset=utf-8");
    	fs.readFile('index.html', function(err, data){
    		if (err) throw err;
        	response.write(data);
        	response.end();
        });

    } else {
        // response.statusCode = 404;
        // response.write('<h1>404: Zła ścieżka!</h1>');
        // response.end();
        response.setHeader("Content-Type", "image/jpeg");
        fs.readFile('pic.jpeg', function(err, data){
            if (err) throw err;
            response.write(data);
            response.end();
        });
    }
});
server.listen(9000);;