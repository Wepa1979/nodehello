var express = require('express');
const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");



var app = express();

global.utm="";
global.baha="";


// URL of the page we want to scrape
const url = "https://www.lcwaikiki.com/tr-TR/TR/urun/LC-WAIKIKI/erkek/Kazak/5605326/2322591";

// Async function which scrapes the data
async function scrapeData(url2) {
  try {
    // Fetch HTML of the page we want to scrape
    const { data } = await axios.get(url2);
    // Load HTML we fetched in the previous line
    const $ = cheerio.load(data);
    // Select all the list items in plainlist class
    const listItems = $(".product-title").first().text();
	
	const bahasy = $(".price").first().text();
	
	
utm=listItems;
//baha=bahasy;
	

} catch (err) {
    console.error(err);
  }
  
  
 
  

}



app.get('/:id', function(req, res) {
	scrapeData(req.param("id"))
	
  res.send(utm+"");    
});

app.listen(3333);
