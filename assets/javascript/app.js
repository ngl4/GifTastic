//TODO: 
//when you click on the gif, it will move and
//when you click again, it will stop moving
//when you click on the new button, page refresh and it will display 10 gifs in regards to the button

//array of adjectives
var adjectives = ["happy", "romantic", "sad", "fabulous"];

// Generic function for capturing the gif info from the data-attribute
function displayGif() {
  // Add your own API key between the ""
  var APIKey = "qJpvZJ0Hc1vfwfvut2JeN4VkhNWUPGQX";
  var searchValue = $(this).attr("data-name");
  var queryURL =
    "https://api.giphy.com/v1/gifs/search?q=" +
    searchValue +
    "&limit=10&rating=" +
    "&api_key=" +
    APIKey;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);

    for (var i=0; i < (response.data).length; i++) {

    var gifDiv = $("<div class='gif'>");

    //Gif: Rating 

    var gifRate = response.data[i].rating;
    console.log(gifRate);

    var itemOne = $("<p>").text("Rating: " + gifRate);

    gifDiv.append(itemOne); 


    //Gif : Images  //TODO: Not sure why it is not able to display!!!!*

    var gifImgURL = response.data[i].url;

    var itemTwo = $("<img>").attr("src", gifImgURL);

    gifDiv.append(itemTwo); 

    //Display all the above to display-gif
    $("#display-gif").append(gifDiv);

    }
  });
}

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
    //TODO: Get rid of the reytpe message when a new adjective is pushed up*
  }

  renderButtons();
});

$(document).on("click", ".adjective", displayGif);
//TODO: Refresh the page to the new adjective and remove all the old images*
