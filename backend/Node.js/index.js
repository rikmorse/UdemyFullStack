/* Testing node functionality */
//console.log("Hello World from Node.js!");

/* Write and Reading a file with fs file */
/* import fs from "fs";
  
fs.writeFile('message.txt', "Hello Richard Morse", (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });

fs.readFile("message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
}); */


//var generateName = require("sillyname");
/* import fs from "fs";
import generateName from "sillyName";

var sillyName = generateName();
console.log(`My name is ${sillyName}.`); */



/* QR Code generator */
/* import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Type in your URL: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
     }
  }); */
/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/