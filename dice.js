var randomPlayDiceOne = Math.floor(Math.random()*6)+1;
var randomPlayDiceTwo = Math.floor(Math.random()*6)+1;

if(randomPlayDiceOne === randomPlayDiceTwo){
    document.querySelector("h1").textContent = "Draw!";
}
else if(randomPlayDiceOne > randomPlayDiceTwo){
    document.querySelector("h1").textContent = "Player 1 Wins!";
}
else {
    document.querySelector("h1").textContent = "Player 2 Wins!";
}

document.querySelector(".img1").setAttribute("src","./images/dice"+randomPlayDiceOne+".png");
document.querySelector(".img2").setAttribute("src","./images/dice"+randomPlayDiceTwo+".png");