/* document.querySelector("button.w").addEventListener("click", handleClick);

 function handleClick() {
  //alert("I got clicked");
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
} */

// Or we can do it this way:

/* document.querySelector("button.w").addEventListener("click", function () {
  // alert("I got clicked");
  var audio = new Audio("sounds/tom-1.mp3");
  audio.play();
}); */

// Simplified more : this adds the same sound tom-1 to all buttons
/* var numberOfDrumButtons = document.querySelectorAll("#drumId").length;
var audio = new Audio("sounds/tom-1.mp3");

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll("#drumId")[i].addEventListener("click", function () { 
       //alert("I got clicked");
  document.querySelector("#drumId").setAttribute("src", "./sounds/tom" + audio + ".mp3");
        audio.play();  
});
} */

// finished sounds for each button with switch statement with this and switch

// Detecting button press
var numberOfDrumButtons = document.querySelectorAll("#drumId").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll("#drumId")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    // added to complete new function below for keydown event listener
    makeSound(buttonInnerHTML);
    // Added switch statement to play different sound for each button
/*     switch (this.innerHTML) {
      case "w":
        var tom1 = new Audio("./sounds/crash.mp3");
        tom1.play();
        break;
      case "a":
        var kickBass = new Audio("./sounds/kick-bass.mp3");
        kickBass.play();
        break;
      case "s":
        var snare = new Audio("./sounds/snare.mp3");
        snare.play();
        break;
      case "d":
        var tom2 = new Audio("./sounds/tom-1.mp3");
        tom2.play();
        break;
      case "j":
        var tom3 = new Audio("./sounds/tom-2.mp3");
        tom3.play();
        break;
      case "k":
        var tom4 = new Audio("./sounds/tom-3.mp3");
        tom4.play();
        break;
      case "l":
        var crash = new Audio("./sounds/tom-4.mp3");
        crash.play();
        break;
        default: console.log(buttonInnerHTML); */
    // this.style.color = "white"; // changes the button text color to white when clicked
    //console.log(this.innerHTML); // Logs the button inner html to console
    
    //Add a constructor function to play audio when button is clicked
/*       function Audio(fileLocation) {
        this.fileLocation = fileLocation;
        this.play = function() {
        var audio = new Audio(fileLocation);
        audio.play();
      } */
  //}
});
}
// Keydown event listener to play sound when key is pressed
document.addEventListener("keydown", function(event) {
  //console.log(event);
  makeSound(event.key);
});

function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("./sounds/crash.mp3");
      tom1.play();
      break;
    case "a":
      var kickBass = new Audio("./sounds/kick-bass.mp3");
      kickBass.play();
      break;
    case "s":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var tom2 = new Audio("./sounds/tom-1.mp3");
      tom2.play();
      break;
    case "j":
      var tom3 = new Audio("./sounds/tom-2.mp3");
      tom3.play();
      break;
    case "k":
      var tom4 = new Audio("./sounds/tom-3.mp3");
      tom4.play();
      break;
    case "l":
      var crash = new Audio("./sounds/tom-4.mp3");
      crash.play();
      break;
      default: console.log(buttonInnerHTML);
  }
}

// removed for adding actual sound to each button
/* var audio = new Audio("./sounds/tom-1.mp3");
audio.play();  */


// Calculator function with inputs and a function in the function
/* function add(num1, num2) {
  return num1 + num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
function calculator(num1, num2, operator) {  *///here we have the inputs num1, num2 and a function operator all in one.
/*   return operator(num1, num2);
}
console.log(calculator(3, 4, add));
console.log(calculator(3, 4, multiply));
console.log(calculator(3, 4, subtract));
console.log(calculator(3, 4, divide));
*/

/* var bellBoy = {
  name: ["Timmy", "Jimmy", "Bitty",],
  age: [19, 21, 18],
  hasWorkPermit: [true, false, true],
  languages: ["French & English", "English & German", "English"],
  moveSuitcase: function() {
    alert("May I take your suitcase?");
  } 
}
alert("My name is " + bellBoy.name[0] + ", I am " + bellBoy.age[0] + " years old and I speak " + bellBoy.languages[0]);
alert("My name is " + bellBoy.name[1] + ", I am " + bellBoy.age[1] + " years old and I speak " + bellBoy.languages[1]);
alert("My name is " + bellBoy.name[2] + ", I am " + bellBoy.age[2] + " years old and I speak " + bellBoy.languages[2]); */

/* var houseKeeper1 = {
  yearsOfExperience: 12,
  name: "Jane",
  cleaningRepertoire: ["bathroom", "lobby", "bedroom"]
};

var houseKeeper2 = {
  yearsOfExperience: 8,
  name: "Mary",
  cleaningRepertoire: ["bathroom", "lobby", "bedroom"]
};

var houseKeeper3 = {
  yearsOfExperience: 10,
  name: "Lilly",
  cleaningRepertoire: ["bathroom", "lobby", "bedroom"]
};
alert("The housekeeper's name is " + houseKeeper1.name + ", she has " + houseKeeper1.yearsOfExperience + " years of experience and she cleans the " + houseKeeper1.cleaningRepertoire);
alert("The housekeeper's name is " + houseKeeper2.name + ", she has " + houseKeeper2.yearsOfExperience + " years of experience and she cleans the " + houseKeeper2.cleaningRepertoire);
alert("The housekeeper's name is " + houseKeeper3.name + ", she has " + houseKeeper3.yearsOfExperience + " years of experience and she cleans the " + houseKeeper3.cleaningRepertoire); */

// Constructor function to create multiple bellboys
/* function BellBoy(name, age, hasWorkPermit, languages) {
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages;
}
var bellBoy1 = new BellBoy("Timmy", 19, true, ["French", "English"]);
var bellBoy2 = new BellBoy("Jimmy", 21, false, ["English", "German"]);
var bellBoy3 = new BellBoy("Bitty", 18, true, ["English"]);

console.log(bellBoy1);
console.log(bellBoy2);
console.log(bellBoy3); */

// Constructor function to create multiple housekeepers
/* function HouseKeeper(yearsOfExperience, name, cleaningRepertoire) {
  this.yearsOfExperience = yearsOfExperience;
  this.name = name;
  this.cleaningRepertoire = cleaningRepertoire;
};
var houseKeeper1 = new HouseKeeper(12, "Jane", ["bathroom", "lobby", "bedroom"]);
var houseKeeper2 = new HouseKeeper(8, "Mary", ["bathroom", "lobby", "bedroom"]);
var houseKeeper3 = new HouseKeeper(10, "Lilly", ["bathroom", "lobby", "bedroom"]);

console.log(houseKeeper1);
console.log(houseKeeper2);
console.log(houseKeeper3); */

// Methods 
// This is a function
/* function moveSuitcase() {
  alert("May I take your suitcase?");
  pickUpSuitcase();
  move();
} */
// A method is a function associated with an object
/* var bellBoy1 = {
  name: "Timmy",
  age: 19,
  hasWorkPermit: true,
  languages: ["French", "English"],
  moveSuitcase: function() {
    alert("May I take your suitcase?");
    pickUpSuitcase();
    move();
  }
} */
// Move function inside Constructor making it a Constructor Function
/* function BellBoy(name, age, hasWorkPermit, languages) {
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages;
  this.moveSuitcase = function() {
    alert("May I take your suitcase?");
    pickUpSuitcase();
    move();
  }
} */
// HouseKeeper Constructor Function with a method
/* function HouseKeeper(yearsOfExperience, name, cleaningRepertoire) {
  this.yearsOfExperience = yearsOfExperience;
  this.name = name;
  this.cleaningRepertoire = cleaningRepertoire;
  this.clean = function() {
    alert("May I clean your room?");
    collectTrash();
    vacuum();
    makeBed();
  }
};
}); */
