//The logic of the game | depends on word.js

//randomly selects a word and uses the 'word' constructor to store it 

//prompts the user for each guess and keeps track of the user's remaining guesses 

var Word = require('./word.js');
var inquirer = require("inquirer");

lives = 5;


word = ["Bartlet", "President", "Leo"];

start();

inquirer.prompt([
    {
        type: "confirm",
        name: "ready",
        message: "Are you ready to play?"
    },

]).then(function (user) {

    //if user says they are ready to play 
    if (user.ready === true) {
        choseWord()
    } else {
        console.log("Okay, come back later!")
    }
});

function start() {
    console.log("Welcome to the West Wing Word Guess");
}

//function to chose a random word
function choseWord() {
    randomWord = word[Math.floor(Math.random() * word.length)]
    new Word(randomWord);
}

function guess(){
    if(this.Letter.correctGuess < Word.letters.length){
        //get input from user using prompt 
        //check if correct 
    } else {
        //Win game function
    }
}
guess();

//if the letter is guessed correctly, put it in the word 
//else subtract from the lives function 

//once there are no lives left end the game, game is over

//function to actually guess the word 
//if then statement for guessing and points 
