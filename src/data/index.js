import $ from 'jquery'

// get a random integer
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
// get a random index position to pull the first quote and set that as the object

  
let quotes = [
    {
        quote: "Life isn’t about getting and having, it’s about giving and being.",
        author: "Kevin Kruse"
    },
    {
        quote: "Strive not to be a success, but rather to be of value.",
        author: "Albert Einstein"
    },
    {
        quote: "Whatever the mind of man can conceive and believe, it can achieve.",
        author: "Napoleon Hill"
    },

];

let quoteData = {
    counter: 0,
    quotes,
}

function getQuotesFromURL () { 
    return $.ajax(
        {
            headers: {
                Accept: 'applications/json'
            },
            url: 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
            success: function(jsonQuotes) {
                if(typeof jsonQuotes === 'string') {
                    quotes = JSON.parse(jsonQuotes);
                } else {
                    quotes = jsonQuotes.quotes;
                }
            }
        }
    )
}

// typical ajax function
// function ajaxcall(url, data, callback) {
//     $.ajax({
//         url: url, // server url
//         type: 'POST', //POST or GET 
//         data: data, // data to send in ajax format or querystring format
//         datatype: 'json',
//         beforeSend: function() {
//             alert('sending data');
//             // do some loading options
//         },
//         success: function(data) {
//             callback(data); // return data in callback
//         },
 
//         complete: function() {
//             alert('ajax call complete');
//             // success alerts
//         },
 
//         error: function(xhr, status, error) {
//             alert(xhr.responseText); // error occur 
//         }
 
//     });
// }

getQuotesFromURL().then(() => {
        quoteData.quotes = quotes.quotes;
        quoteData.counter = getRandomInt(quotes.quotes.length);
        console.log(quoteData.counter);
    }
);

let dadJokesData = {
    counter: 0,
    dadJokes:[
    {
        quote: "Life isn’t about getting and having, it’s about giving and being.",
        quoteMaster: "Kevin Kruse"
    },
    {
        quote: "Strive not to be a success, but rather to be of value.",
        quoteMaster: "Albert Einstein"
    },
    {
        quote: "Whatever the mind of man can conceive and believe, it can achieve.",
        quoteMaster: "Napoleon Hill"
    },

]}

export { quoteData };