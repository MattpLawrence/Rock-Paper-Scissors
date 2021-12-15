var wins = 0;
var losses = 0;
var ties = 0;

var choices = ["R","P","S"];

var playGame = function (){
  var userChoice = window.prompt( "Enter R, P, or S")

  // restart game if no value is entered but "okay is pressed"
  if (userChoice == ""){
    playGame()
  }
  // close function if cancel is selected
  if (!userChoice){
    return;
  } 
  
  userChoice = userChoice.toUpperCase(); //match cases to the choices matrix

// put if statement in to catch if the user inputs a variable other than r, p, or s
  if(!choices.includes(userChoice)){
    window.alert("Please choose a letter, R, P, or S");
    playGame();
    return; //run back to beginning
  }

  var index = Math.floor(Math.random() * choices.length);
  var computerChoice = choices[index];


// set computer and user choice to the corresponding word for better reading.
  var computerWord;

  if( computerChoice === "R"){
    computerWord = "Rock";
  }else if( computerChoice === "P"){
    computerWord = "Paper";
  }else{
    computerWord = "Scissors"
  }

  var userWord;

  if( userChoice === "R"){
    userWord = "Rock";
  }else if( userChoice === "P"){
    userWord = "Paper";
  }else{
    userWord = "Scissors"
  }

  // set a variable to help condense the results to fewer windows
  var choiceAlert = "You chose:  " + userWord + "\nComputer chose:  " + computerWord;

  if (userChoice === computerChoice){
    ties++; //remember to add one to ties count
    window.alert(choiceAlert +"\nIt's a tie! 😶"); //call choiceAlert to show choices and results on the same page.
  }else if(
    (userChoice === "R" && computerChoice === "P") || // || basically means or
    (userChoice === "P" && computerChoice === "S") ||
    (userChoice === "S" && computerChoice === "R")
  ){
    losses++;
    window.alert(choiceAlert +"\nYou lost! 😥");
  }else{
    wins++;
    window.alert(choiceAlert +"\nYou won! 😀");
  }

  // window.alert("The score so far:\n Wins: " + wins + "\n Loses: " + losses + "\n Ties: " + ties)


  if (window.confirm ("The score so far:\n Wins: " + wins + "\n Loses: " + losses + "\n Ties: " + ties +"\n\nWould you like to play again?")){
    playGame(); //if true play again
  }else{
    window.alert("You are a quitter.  😝");
    return; //if false, quit
  }
}
