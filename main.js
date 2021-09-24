var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = []; //game pattern generated
var userPattern = []; //user pattern generated

var started = false;
var level = 0; //


function nextSequence() {

    var randomNumber = Math.floor(Math.random()*3)+1;

    var randomChosenColor = buttonColours[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  }
