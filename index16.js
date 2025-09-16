// alert("Hello this is an alert!!!");
// document.querySelector("h1").innerText = "Hello, from JS file!";

// This will change the third li element text in dev tools console.
// document.firstElementChild.lastElementChild.querySelector("ul").lastElementChild.innerHTML = "Richard";/*  */

// This change will modify the color of the third li after selecting all li elements.
/* document.getElementsByTagName("li"); */ //Find all li elements.
/* document.getElementsByTagName("li")[2].style.color = "purple"; */ //Change the color of the third li element.

/* This will show you the length of all items under said tag */
// document.getElementsByTagName("li").length;

/* Class name dev tools */
/* document.getElementsByClassName("btn");
document.getElementsByClassName("btn")[0].style.color = "green"; */

/* Get by ID */
/* document.getElementById("checkBox"); */
/* document.getElementById("checkBox").checked = true; */  //This will check the checkbox.


/* querySelector can pick any as long as the . # or tag is referenced correctly */
/* document.querySelector(".list");
<li class=​"list">​…​</li>​

document.querySelector("#checkBox");
<input id=​"checkBox" type=​"checkbox">​

document.querySelector("button");
<button class=​"dropbtn">​…​</button>​ 

document.querySelector("li a");*/
// multiple elements can be selected this way. This will select the first li a element.

/* selector and class */
//document.querySelector("li.list");
/* tag and id */
//document.querySelector("input#checkBox");
/* class and tag */
//document.querySelector(".list a");
/* query selector all using id and class below selectorAll for any id / class etc*/
/* document.querySelectorAll("#myList .list"); */

/* innerHTML is everything between Tag textContent is only the text between not other tags inside the innerHTML tag selected. */

// Change the attribute of an element
/* document.querySelector("a").getAttribute("href"); */
/* document.querySelector("a").setAttribute("href", "https://www.bing.com"); */