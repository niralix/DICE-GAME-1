document.addEventListener('DOMContentLoaded', function () {
    const rollBtn = document.getElementById('rollBtn');
    const player1Dice = document.getElementById('player1Dice');
    const player2Dice = document.getElementById('player2Dice');
    const resultDisplay = document.getElementById('result');
  
    rollBtn.addEventListener('click', rollDice);
  
    function rollDice() {
      const randomNumber1 = getRandomNumber();
      const randomNumber2 = getRandomNumber();
  
      const diceImage1 = "dice" + randomNumber1 + ".png";
      const diceImage2 = "dice" + randomNumber2 + ".png";
  
      player1Dice.src = diceImage1;
      player2Dice.src = diceImage2;
  
      displayResult(randomNumber1, randomNumber2);
    }
  
    function getRandomNumber() {
      return Math.floor(Math.random() * 6) + 1;
    }
  
    function displayResult(num1, num2) {
      if (num1 > num2) {
        resultDisplay.textContent = "Player One Wins!";
      } else if (num2 > num1) {
        resultDisplay.textContent = "Player Two Wins!";
      } else {
        resultDisplay.textContent = "It's a Draw!";
      }
    }
  });
  