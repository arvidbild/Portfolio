// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);



// loop throug the objects in the array, use the template provivedd to print the qoutes 
function getRandomQuote() {
    
    //Important this is in the function to get diffrent random numbers everytime the button is clicked. 
    var randomNumber = Math.floor(Math.random() * quotes.length);
    console.log(randomNumber);
    
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
    getRandomQuote(); 
}
    

