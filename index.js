const http = require('http');
const fs = require("fs");
const axios = require("axios");
const cheerio = require("cheerio");
const port = process.env.PORT || 3000;






const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const utm = 'Hello Node!\n'
  res.end(utm);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
