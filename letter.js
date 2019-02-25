
//create the "Letter" constructor. Display _ _ _ _ as a placeholder  depending on
//whether or not the user has guessed the letter. 

//a string value to store _ for the letter 

//a flag (boolean) to store whether that letter has been guessed 

//a function that returns the underlying character if it has been guessed or the _ if
//it has not been guessed 

//a function that takes a character as the argument and checks it against the underlying character, 
//updating the flag to true if it was guessed correctly 

var Letter = function (character) {
    //set this character 
    this.character = character;

    //set this.letterGuessed to false 
    this.characterGuessed = false;

    //guessed function 
    this.guessed = function () {
        if (this.characterGuessed === true) {
            return this.character 
        } else {
            return "_"
        };
        //special characters    
        // " ' "
        // " "   
        // " - "
    }

    this.correctGuess = function(characterGuessed){
        if (this.characterGuessed === this.character){
            this.characterGuessed = true;
        }
    }
}

module.exports = Letter;
    