/**
 * Created by 1205765 on 23/11/2015.
 */

var http = require('http')
var port = process.env.PORT || 1337;
response.write('Connecting \n');
var server = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});

    MongoClient.connect(url, function (err, db) {
        response.write('Connection Made \n');
        if (err) {
            response.write('Unable to connect to the mongoDB server. Error:' + err + "\n");
            //Error so close connection
            db.close();
        } else {
            //HURRAY!! We are connected. :)
            response.write('Connection established to' + url +"\n");

            // do some work here with the database.

            //Done Close connection
            db.close();
        }
        response.end('Finished, Connection closed \n');
    });

});
server.listen(port);
console.log("Server is listening");
