import http from 'http'
import fs from 'fs'

const port = 3000;

const server = http.createServer((req, res) => {
    fs.readFile('index.html', (error, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        if (error) {
            res.writeHead(404)
            res.write("Error getting content" + error);
        } else {
            res.write(data);
        }
        res.end();
    });
});


server.listen(port, (error) => {
    if (error) {
        console.log('Errror listening for port '+ error)
    } else {
        console.log('LISTENING ON PORT ' + port)
    }
})





























/*import http from "http";
import fs from "fs";
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("index.html", function (error, data) {
    if (error) {
      res.writeHead(404);
      res.write("Error:File not found");
    } else {
      res.write(data);
    }
    res.end();
  });
});

server.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("server is listening on port " + port);
  }
});*/
