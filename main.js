const k = prompt("choose the limit of guess eg 1 to ___?");
const n = parseInt(k);

document.getElementById("limit").textContent = `Guess a number between 1-${n}`;

let chances = 20;
let score = 0;  
document.getElementById("chances").textContent = `Chances remaining: ${chances}`; 
document.getElementById("score").textContent = `Score: ${score}`;

function compareNumbers() {
    
    const userInputElement = document.getElementById("userInput");
    const userInputValue = parseInt(userInputElement.value);


    chances--;
    document.getElementById("chances").textContent = `Chances remaining: ${chances}`;

    const randomNumber = Math.floor(Math.random() * n) + 1;
    
    if (userInputValue === randomNumber) {
        document.getElementById("result").textContent = "Congratulations! You guessed correctly.";
        score += 10;
        
    } else {
        document.getElementById("result").textContent = `Sorry, the random number was ${randomNumber}`;
        score -= 2; 
    }
    document.getElementById("score").textContent = `Score: ${score}`;

    if (chances === 0) {
        document.getElementById("result").textContent = "Game over. You've used all your chances.";
        document.getElementById("userInput").disabled = true; 
        document.getElementById("button").disabled = true; 
    }
}


function clearInput() {
    
    document.getElementById("userInput").value = "";
    
   
    document.getElementById("result").textContent = "";

    chances = 20;
    score = 0;
    
    // Update and display the remaining chances and score
    document.getElementById("chances").textContent = `Chances remaining: ${chances}`;
    document.getElementById("score").textContent = `Score: ${score}`;
    document.getElementById("userInput").disabled = false; 
    document.getElementById("button").disabled = false; 

    
}
function reload(){
    location.reload();5
}
