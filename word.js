//contains a word constructor. Is dependant on the letter constructor.
//This is used to create an object representing the current word the user is guessing

//an array of new letter objects representing the letters of the underlying word 

//a function that returns a string representing the word calls the function on each letter 
//object (the first function defined in letter.js) that displays the character or an underscore
//and concatenate those together 

//a function that takes a character as an argument and calls the guess function on each letter object 
//(the second function defined in letter.js)

var Letter = require('./letter.js');

var Word = function(word){
    this.letters = word.split("").map(function(element){
        return new Letter(element);
    });

    this.toString = this.letters.map(function(ltrObj){
        return ltrObj.guessed()
    
    }).join(" ");

    }

    module.exports = Word;