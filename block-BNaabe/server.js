// var path = require('path');

// console.log(__filename);

// console.log(__dirname + '/app.js');

// console.log('./index.html');

// var indexpath = path.join(__dirname ,'index.html')

var http = require('http');
var qs = require('quearyString')

var server = http.createServer(handleRequest);

function handleRequest(req,res){
    if(req.method === 'POST' && req.url === '/'){
        var store ="";
        req.on('data',(chunk)=>{
            store += chunk;
        }).on('end',()=>{
            res.statusCode =201;
            var parsedData = qs.parse(store);
            res.end(JSON.stringify(parsedData));
        })

    }

}

server.listen(3000,()=>{
    console.log('This server is 3000');
})