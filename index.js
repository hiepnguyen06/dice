
// document.querySelectorAll("")

function roll() {
    let rand1 = Math.floor((Math.random() * 6) + 1);
    let rand2 = Math.floor((Math.random() * 6) + 1);
    let imgSrc1 = "./images/dice" + rand1 + ".png";
    let imgSrc2 = "./images/dice" + rand2 + ".png";
    document.querySelector(".dice .img1").setAttribute("src", imgSrc1);
    document.querySelector(".dice .img2").setAttribute("src", imgSrc2);

    displayWinner(rand1, rand2);
}


function displayWinner(player1, player2) {
    let output = "";
    if (player1 === player2) {
        output = "Tie"
    } else if (player1 < player2) {
        output = "Player 2 won!";
    } else {
        output = "Player 1 won!";
    }
    
    document.querySelector(".winner").textContent = output;
}