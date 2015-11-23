/**
 * Created by 1205765 on 23/11/2015.
 */

var http = require ('http')
var port = process.evn.PORT || 1337;

http.createServer(function(request,responce)){
    responce.writeHead(200,{'Content-Type' : 'text/plain'});
    responce.end('hello m8\n');
}.listen(port);