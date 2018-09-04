
//array of adjectives
var adjectives = ["happy", "romantic", "sad", "fabulous"];

// Generic function for capturing the gif info from the data-attribute
function displayGif() {
  // Add your own API key between the ""
  var APIKey = "qJpvZJ0Hc1vfwfvut2JeN4VkhNWUPGQX";

  var searchValue = $(this).attr("data-name");
  
  console.log($(this));

  var queryURL =
    "https://api.giphy.com/v1/gifs/search?q=" +
    searchValue +
    "&limit=10&rating=" +
    "&api_key=" +
    APIKey;

    console.log(queryURL);

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);

    $("#display-gif").empty();

    for (var i=0; i < (response.data).length; i++) {

    var gifDiv = $("<div class='gif'>");

    //Gif: Rating 

    var gifRate = response.data[i].rating;
    console.log(gifRate);

    var itemOne = $("<p>").text("Rating: " + gifRate);

    gifDiv.append(itemOne); 


    //Gif : Images  

    var gifImgURL = response.data[i].images.fixed_height_still.url;

    var animatedImg = response.data[i].images.fixed_height.url;

    var image = $("<img>");

    var itemTwo = image.attr("src", gifImgURL);

    image.attr("data-animate", animatedImg);

    image.attr("data-state", "still");

    image.attr("data-still", gifImgURL);

    image.addClass("animatedImg");

    console.log(itemTwo);

    gifDiv.append(itemTwo); 

    //Display all the above to display-gif
    $("#display-gif").prepend(gifDiv);

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

//The submit button
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
    $("#retype-msg").text("");
    //fix syntax issue for retype-msg
  }

  renderButtons();
});

$(document).on("click", ".adjective", displayGif);

$(document).on("click", ".animatedImg", function(){

        var state = $(this).attr("data-state");

        var animatedImgURL = $(this).attr("data-animate");

        var stillImgURL = $(this).attr("data-still");
        
        console.log(randomValue);

        console.log($(this));

        console.log(state);

        console.log(animatedImgURL);

        
        if (state === "still") {

            $(this).attr("src", animatedImgURL);
            $(this).attr("data-state", "animate");
        }else {

            $(this).attr("src", stillImgURL);
            $(this).attr("data-state","still");
        }

});
