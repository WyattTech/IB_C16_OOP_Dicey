document.addEventListener("DOMContentLoaded", function () {
  //Buttons in HTML
  const diceMakerBtn = document.querySelector(".generate-die"); //Make Dice--> DOM Created Div
  const rollDiceBtn = document.querySelector(".roll-dice");
  const diceSumBtn = document.querySelector(".dice-sum");
  const resetBtn = document.querySelector(".restart");

  //Containers in HTML
  const sumContainer = document.querySelector(".sum-container");
  const diceContainer = document.querySelector("#dice-container");

  //Empty Arr for capturing the die
  let arr = [];

  //Reload page to clear
  resetBtn.addEventListener("click", function () {
    window.location.reload();
  });

//DOM Manipulations
  diceMakerBtn.addEventListener("click", function () {
    //Click to add dice
    // creates a new Die object from the Die class
    new Die();
  });

  diceSumBtn.addEventListener("click", function () {
    let sum = 0;

    arr.forEach(function (die) {
      sum += die.value;
    });

    this.sum = document.createElement("div");
    this.sum.textContent = `The total is ${sum}`;

    sumContainer.appendChild(this.sum);
    diceSumBtn.addEventListener("click", function () {
      sumContainer.reset();
      
    });
  });

//OOP Section 
  class Die {
    constructor() {
      this.element = document.createElement("div");
      this.element.className = "die";
      arr.push(this);
      console.log(arr);
      // this.element.textContent = btnCounter;
      this.roll();
      this.element.style.cursor = "pointer";
      diceContainer.appendChild(this.element);
      rollDiceBtn.addEventListener("click", () => this.roll());

    }

    roll() {
      this.value = Math.floor(Math.random() * 6) + 1; //Random formula
      this.element.textContent = this.value; //Puts the number on the dice
    }
  }
});

// roll() {
//   // set a this.value property to a random number between 1 and 6
//   this.value = " ";
//   for (var i = 0; i < string.length ; i++) {
//     this.value +=  String.fromCharCode(9856 + Math.round(Math.random() * 6)) + " ";
//   }
//   return this.value;
// }


