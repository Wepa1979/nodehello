const http = require('http');
const axios = require("axios");
const cheerio = require("cheerio");
const port = process.env.PORT || 3000;


global.utm="";
global.baha="";


async function scrapeData() {
  try {
    
    const url2 = "https://www.lcwaikiki.com/tr-TR/TR/urun/LC-WAIKIKI/erkek/Kazak/5605326/2322591";
    
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


scrapeData();

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Node!\n'
  res.end(utm);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
