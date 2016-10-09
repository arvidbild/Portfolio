// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//create random number 
var randomNumber = Math.round(Math.random() * quotes.length - 1);

// loop throug the objects in the array, use the template provivedd to print the qoutes 
function getRandomQuote() {
    
    for (var i = 0; i < quotes.length; i +=1) { 
        
        var displayQuote = quotes[randomNumber].quote;
        var displaySource = quotes[randomNumber].source;
        var displayCitation = quotes[randomNumber].citation;
        var displayYear = quotes[randomNumber].year;
        
    		document.getElementById("quote-box").innerHTML = '<p class="quote">' + displayQuote + '</p> <p class="source">' + displaySource + '<span class="citation">' + displayCitation + '</span> <span class="year">' + displayYear + '</span> </p>'; 
    }
}

//function which used when button pressed
function printQuote() {
    getRandomQuote() 
}
    

// I havent managed to get the code run several times after pushing the "button" - so what happens is that just one qoutes shows up.
