var http = require('http');
var fs = require('fs');
var csv = require('csvtojson');

http.createServer(function (req, res) {
  fs.readFile('Book1.csv', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/csv'});
    console.log(data)
    csv().fromString(data)
        .then((jsonObj)=>{
          res.write(jsonObj);
        })
    return res.end();
  });
}).listen(8080);