"use strict";
// alert("Hello! I am an alert box!!");

//fetching data from JSON file
const quotes = await fetch('/random-quotes-vanillajs-json/data/quotes.json') // Call the fetch function passing the url of the API as a parameter
.then(response => response.json())    
.then(responseJSON => console.log(responseJSON));

//convert JSON data to an array with the quotes
// const quotes = JSON.parse(request);
// console.log(quotes);

//function to access random quote from array and inject it together with author on HTML
function injectQuote() {
  //access random quote from quote array
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  //inject random quote on HTML
   document.getElementById('text').innerHTML = randomQuote.quoteText;
  let quoteTextElem = randomQuote.quoteText
  //inject author on HTML
  document.getElementById('author').innerHTML = "- " + randomQuote.quoteAuthor;
  let quoteAuthorElem = " - " + randomQuote.quoteAuthor;
  //truncating quote text in case full tweet gets to be over 280 characters
  let contentQuote = quoteTextElem + quoteAuthorElem;
  if (contentQuote.length > 280) {
    let charCountAuthor = quoteAuthorElem.length;
    const extraStylingChar = "..." + '"';
    let extraCharCount = extraStylingChar.length;
    let subString = quoteTextElem.substring(0, 280 - extraCharCount - charCountAuthor) + extraStylingChar + quoteAuthorElem;
    //generate url available for Twitter intent and inject url on HTML
  document.getElementById('tweet-quote').href = "https://twitter.com/intent/tweet?text=" + subString;
  } else {
   //generate url available for Twitter intent and inject url on HTML
  document.getElementById('tweet-quote').href = "https://twitter.com/intent/tweet?text=" + contentQuote;
  } 
};

// inject a quote on screen when app loads
injectQuote();

//inject a quote on screen when "Get New Quote" button is clicked
document.getElementById('new-quote').addEventListener('click', function() {injectQuote();});