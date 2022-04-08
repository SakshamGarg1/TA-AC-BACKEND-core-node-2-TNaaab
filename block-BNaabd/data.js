var http = require('http');

var qs = require('queryString');

var server = http.createServer(handleRequest);

function handleRequest(req,res){
    var store = '';  
    req.on('data',(chunk)=>{
        store =+ chunk;
    })
    
    req.on('end',()=>{
        if(req.method === 'POST' && req.url === '/json'){
            console.log(store); 
            res.setHeader('Content-Type',)
            res.end(store);

        }
        if(req.method === 'POST' && req.uel ==='/form'){
            console.log(store);
            var formData = qs.parse(store);
            res.end(JSON.stringify(formData));
        }
    })
} 

server.listen(7000,()=>{
    console.log('this is server 7000')
})