var request = require("./keys.js");
var Twitter = require('twitter');

var stream = client.stream('statuses/filter', {track: 'javascript'});
stream.on('data', function(event) {
  console.log(event && event.text);
});
 
stream.on('error', function(error) {
  throw error;
});
 
// You can also get the stream in a callback if you prefer. 
client.stream('statuses/filter', {track: 'javascript'}, function(stream) {
  stream.on('data', function(event) {
    console.log(event && event.text);
  });
 
  stream.on('error', function(error) {
    throw error;
  });
});

// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
var request = require("request");

// Then run a request to the OMDB API with the movie specified
request("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=40e9cece", function(error, response, body) {

  // If the request is successful (i.e. if the response status code is 200)
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
  }
});

// fs is a core Node package for reading and writing files
var fs = require("fs");

// This block of code will read from the "movies.txt" file.
// It's important to include the "utf8" parameter or the code will provide stream data (garbage)
// The code will store the contents of the reading inside the variable "data"
fs.readFile("random.txt", "utf8", function(error, data) {

  // If the code experiences any errors it will log the error to the console.
  if (error) {
    return console.log(error);
  }

  // We will then print the contents of data
  console.log(data);

  // Then split it by commas (to make it more readable)
  var dataArr = data.split(",");

  // We will then re-display the content as an array for later use.
  console.log(dataArr);

});

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: <e2eb888cdd8f488aba67a753da303502>,
  secret: <57f6c0866af84c44b9eaf1fd20fff754>
});
 
spotify
  .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  .then(function(data) {
    console.log(data); 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });
