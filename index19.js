// testing connectivity uncomment below alert
// alert("Hello its working!");

// if script is in head, use document ready function to ensure DOM is loaded before jQuery runs
/* $("document").ready(function() {
$("h1").css("color", "red");
}); */

//if script is at end just above body, no need for document ready function
$("h1").css("color", "red");

// selecting the buttons and changing color on click
$("button").click(function() {
  $("h1").css("color", "purple");
});

// .css method can be used to find info too
console.log($("h1").css("font-size"));

// Changing h1 to big-title class on button
// $("h1").addClass("big-title right-align"); // can add multiple classes separated by space

// removing class
// $("h1").removeClass("big-title");

// checking if h1 has class big-title
// console.log($("h1").hasClass("big-title"));

// changing text of h1
// $("h1").text("Goodbye!");

// changing html of h1
// $("h1").html("<em>Goodbye!</em>");

// changing all button text
// $("button").html("<em>Don't Click Me!</em>");

// changing one button text
// $(".btn4").html("<em>Don't Click Me!</em>");

// changing attributes
$("img").attr("src", "./images/QfavIcon.png");

// changing link href
// $("a").attr("href", "https://www.yahoo.com");

// adding event listener click to change h1 color
$("h1").click(function() {
  $("h1").css("color", "green");
});

// adding event listener to all buttons to change h1 color
$(".btn1").click(function() {
  $("h1").css("color", "blue");
});
$(".btn2").click(function() {
  $("h1").css("color", "green");
});
$(".btn3").click(function() {
  $("h1").css("color", "yellow");
});
$(".btn4").click(function() {
  $("h1").css("color", "orange");
});
$(".btn5").click(function() {
  $("h1").css("color", "purple");
});

// adding keypress event to change h1 text to key pressed
$("input").keypress(function(event) {
  $("h1").text(event.key);
});

// adding on for .click or .keypress
$("h1").on("mouseover", function() {
  $("h1").css("color", "red");
});

// adding and removing elements
// $("h1").before("<button>New</button>");
// $("h1").after("<button>New</button>");
// $("h1").prepend("<button>New</button>");
// $("h1").append("<button>New</button>");

// jQuery animations
// $("h1").hide();
// $("h1").show();
// $("h1").toggle();
// $("h1").fadeOut();
// $("h1").fadeIn();
// $("h1").fadeToggle();
// $("h1").slideUp();
// $("h1").slideDown();
// $("h1").slideToggle();

// custom animation
/* $("button").click(function() {
  $("h1").animate({opacity: 0.5});
}); */

// can chain animations
$("button").click(function() {
  $("h1").slideUp().slideDown().animate({opacity: 0.5});
});
$("h1").slideUp().slideDown().animate({opacity: 0.5});