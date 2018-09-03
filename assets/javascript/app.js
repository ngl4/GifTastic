// Add your own API key between the ""
//var APIKey = "qJpvZJ0Hc1vfwfvut2JeN4VkhNWUPGQX";
//var searchValue = $("#adj-value").val().trim();
// URL to query the database
//var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchValue +"&limit=10&rating="+"&api_key=" + APIKey;
//
// $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function(response) {
//
//   });

//There will be some buttons on the page around 4.
//Once the page is done loading
//The user is able to see the 4 buttons
//once the user clicks on the button, 10 gifs will display
//when you click on the gif, it will move and
//when you click again, it will stop moving

//And the submit button is clicked
//a new button is added to the gif-wordlist after the forth button
//when you click on the new button, it will display 10 gifs in regards to the button

//array of adjectives
var adjectives = ["happy", "romantic", "sad", "fabulous"];

//renderButtons function is to create a button for each item in the array 
function renderButtons() {
  $("#gif-wordlist").empty();

  for (var i = 0; i < adjectives.length; i++) {
    var newButton = $("<button>");
    newButton.addClass("adjective");
    newButton.attr("data-name", adjectives[i]);
    newButton.text(adjectives[i]);
    $("#gif-wordlist").append(newButton);
  }
}

renderButtons();

$("#add-adj").on("click", function(event) {
  //user can either click on this button or press enter key
  event.preventDefault();

  var searchValue = $("#adj-value")
    .val()
    .trim();

  if (adjectives.indexOf(searchValue) > -1) {
    $("#adj-value").empty();
    $("#retype-msg").text("You have already entered this adjective!");
  } else {
    
    adjectives.push(searchValue);
    //$("#reytype-msg").hide();
    $("#reytype-msg").text("");
    //TODO: Get rid of the reytpe message when a new adjective is pushed up 
    
  }

  renderButtons();
});
