const finalResult = document.getElementById("result");
const computerSelection = document.getElementById("computerChoice")
const userSelection= document.getElementById("userChoice")

const selection =document.querySelectorAll(".selection")


let userChoice;
let computerChoice;
let result; 
let number;

selection.forEach(selection => selection.addEventListener ("click", e =>
{
userChoice= e.target.id;
number=Math.floor(Math.random() *3) +1;
getComputerChoice()
compareSelections()
computerSelection.innerHTML=computerChoice;
userSelection.innerHTML=userChoice;
finalResult.innerHTML=result;

}))

function getComputerChoice () {
if(number == 1) { 
    computerChoice="Rock";
} if(number == 2) {
    computerChoice="Paper";
} if(number == 3) {
    computerChoice="Scissors";
}}

 
    function compareSelections()  {
     if(computerChoice == userChoice) 
        {
         result= "it's a draw!";
         } else if(computerChoice == "Scissors" && userChoice == "Rock" ) 
         {
             result = "You win!";
         }
        else if(computerChoice == "Paper" && userChoice == "Rock")
        {
            result = "You lose!";
        } else if(computerChoice == "Rock" && userChoice == "Paper") 
        {
        result="You win!";
        }
        else if(computerChoice == "Paper" && userChoice == "Scissors")
        {
            result="You win!";
        }
        else if(computerChoice == "Rock" && userChoice == "Scissors") 
        {
            result="You lose!";
        }
        else if(computerChoice == "Scissors" && userChoice == "Paper") 
        {
            result="you lose!";
    }}