/*added function to define what happens when Yes or No clicked */
function answerYes() {
  document.querySelector("#response").innerText = "Player, choose your option";
}
    
document.querySelector("#yes").addEventListener("click", answerYes);
    
function answerNo() {
  document.querySelector("#response").innerText = "Wrong. You are ready. Go click Yes";
}
    
document.querySelector("#no").addEventListener("click", answerNo);
    
    /* We use const as there are only 3 options to this game and we use array to list the elements out. We assign the index positon to a variable name. When we "call them" we refer to them as gameOption[Paper] etc as it's easier to understand */
    const gameOptions = ["paper", "scissors", "rock"];
    const Paper = 0;
    const Scissors = 1;
    const Rock = 2;
    
    /* to display player choice and then to display results.
    As playerChoice is a local variable- we call the compareChoices function here instead */
    
    function playerChose() {
      const playerChoice = document.querySelector("#your-choice").value.toLowerCase();
      if (
        playerChoice !== "rock" &&
        playerChoice !== "scissors" &&
        playerChoice !== "paper"
      ) {
        alert("Please type options exactly: rock, paper, scissors");
      } else {
        console.log(playerChoice);
        compareChoices(playerChoice, computerChoice);
      }
    }
    
    document.querySelector("#submit-choice").addEventListener("click", playerChose);
    
    /* adding a function to define formula of what computer chooses
    Telling the computer to randomly choose between the three options each time the game is played:
    We want numbers to represent the index positions of the objects in the array- which are 0, 1, 2
    - The math object of math random selects a number from 0 to up to 1- this is then mutliplied by 3. The math.floor rounds it down so we will only get 0,1,2 for the answer.
    */
    
    function computerChooses() {
      return gameOptions[Math.floor(Math.random() * 3)];
    }
    const computerChoice = computerChooses();
    console.log(computerChoice); // this line to test my function is working
    
    /* adding a function to compare  the choices and what would display */
    function compareChoices(playerChoice, computerChoice) {
      if (
        (computerChoice === gameOptions[Paper] &&
          playerChoice === gameOptions[Rock]) ||
        (computerChoice === gameOptions[Scissors] &&
          playerChoice === gameOptions[Paper]) ||
        (computerChoice === gameOptions[Rock] &&
          playerChoice === gameOptions[Scissors])
      ) {
        displayResult(
          "The computer wins! The computer chose " +
            computerChoice +
            " and the player chose " +
            playerChoice
        );
      } else if (
        (computerChoice === gameOptions[Paper] &&
          playerChoice === gameOptions[Scissors]) ||
        (computerChoice === gameOptions[Scissors] &&
          playerChoice === gameOptions[Rock]) ||
        (computerChoice === gameOptions[Rock] &&
          playerChoice === gameOptions[Paper])
      ) {
        displayResult(
          "The player wins! The computer chose " +
            computerChoice +
            " and the player chose " +
            playerChoice
        );
      } else if (computerChoice === playerChoice) {
        displayResult(
          "It's a tie. The computer chose " +
            computerChoice +
            " and the player chose " +
            playerChoice
        );
      }
    }
    
    function displayResult(result) {
      const resultText = document.createElement("p");
      resultText.innerText = result;
      document.querySelector("#result").appendChild(resultText);
    }
    