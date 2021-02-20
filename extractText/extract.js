const puppeteer = require('puppeteer');  // import puppeteer lib

async function scrapeProduct(url, xPath) {
    // launch browser
    const browser = await puppeteer.launch();  

    const page = await browser.newPage();  // opens new blank page
    
    page.goto(url);  // go to specified url

    /* selects item on page from html using specified xPath,
    returns an array  */
    const [el] = await page.$x(xPath);

    // extracting the text
    const text = await el.getProperty('textContent');
    const rawText = await text.jsonValue();

    // print extracted text to console
    console.log("text: " + rawText);

    browser.close();
}

// url of website being web scraped
var url = 'https://developer.chrome.com/docs/extensions/reference/';  

/* you can get the xPath of a certain attribute on a webpage
by right clicking on chosen attribute (like a piece of text for instance)
and clicking "inspect element". Right click on the code and go to copy, 
then copy full x-path*/
var xPath = '/html/body/div/main/div[2]/article/div[2]/h2[1]'; 

scrapeProduct(url, xPath);