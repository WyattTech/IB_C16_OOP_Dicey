document.addEventListener("DOMContentLoaded", function () {
  const diceMaker = document.querySelector(".generate-die"); //Link to make dice
  const rollDiceBtn = document.querySelector(".roll-dice");
  const diceContainer = document.querySelector("#dice-container");
  const diceSumBtn = document.querySelector(".dice-sum");
  const sumContainer = document.querySelector(".sum-container");
  const resetBtn = document.querySelector(".restart")

  let arr = [];

  resetBtn.addEventListener("click", function(){
    window.location.reload();
 })

  diceMaker.addEventListener("click", function () {//Click to add dice
    new Die(); // creates a new Die object from the Die class

  });

  diceSumBtn.addEventListener("click", function() {
     let sum = 0;

     arr.forEach(function(die) {
       sum += die.value;
     });
     this.sum = document.createElement("div");
     this.sum.textContent = `The total is ${sum}`;
     
     sumContainer.appendChild(this.sum);
     diceSumBtn.addEventListener("click", function(){
        sumContainer.reset();
        move
     });
     


    // alert(sum);

      // document.createElement("div"); //?? I want it to appear screen 
      // this.sum.textContent = "The total is " + this.value;
      // sumContainer.appendChild(this.sum);
      
  })

  

  class Die {
    constructor() {
      this.element = document.createElement("div");
      this.element.className = "die";
      arr.push(this);
      console.log(arr)
      // this.element.textContent = btnCounter;
      this.roll();
      this.element.style.cursor = "pointer";
      diceContainer.appendChild(this.element);
      rollDiceBtn.addEventListener("click", () => this.roll());
    }

    roll() {
      this.value = Math.floor(Math.random() * 100) + 1; //Random formula
      this.element.textContent = this.value;//Puts the number on the dice

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



// }
