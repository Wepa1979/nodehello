const http = require('http');
const port = process.env.PORT || 3000;
var express = require('express');
const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Node!\n'
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
