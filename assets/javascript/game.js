var alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

var wins = 0;
var losses = 0;
var guessLeft = 9;
var guesses = [];

var randomLetter = randomLetter;

document.getElementById("wins").innerHTML = "Coreect Guesses: " + wins;
document.getElementById("losses").innerHTML = "Times Lost: " + losses;
document.getElementById("guessleft").innerHTML = "Lives Left: " + guessLeft;
document.getElementById("guesses").innerHTML = "Guesses So far: " + guesses;

function randomL() {
  randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
  console.log(randomLetter);
}

randomL();

// Poking fun at my buddy
console.log("Robert sux!");

document.onkeypress = function userKey(event) {
  var userGuess = event.key;

  if (userGuess === randomLetter) {
    wins++;
    guessLeft = 9;
    guesses = [];
    randomL();
  }

  if (userGuess !== randomLetter) {
    guessLeft--;
    guesses.push(userGuess);
  }

  if (guessLeft == 0) {
    losses++;
    guessLeft = 9;
    guesses = [];
  }

  console.log("Wins: " + wins);
  console.log("Losses: " + losses);
  console.log("Guesses Left: " + guessLeft);
  

  document.getElementById("wins").innerHTML = "Correct Guesses: " + wins;
  document.getElementById("losses").innerHTML = "Times Lost: " + losses;
  document.getElementById("guessleft").innerHTML = "Lives Left: " + guessLeft;
  document.getElementById("guesses").innerHTML = "Guesses So far: " + guesses;
};
