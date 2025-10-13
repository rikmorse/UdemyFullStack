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

// Simplified more
var numberOfDrumButtons = document.querySelectorAll("#drumId").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll("#drumId")[i].addEventListener("click", function () { 
       //alert("I got clicked");
  document.querySelector("#drumId").setAttribute("src", "./sounds/tom" + audio + ".mp3");
        audio.play();  
});
}
