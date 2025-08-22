/* var dogAge = prompt("Please enter the age of your dog to find their human age!");
var humanAge = ((dogAge - 2) * 4 + 21);
alert ("You dog is " + humanAge + " human years old!"); */

// Revisit to understand better ***********************************************
/* function getMilk(money, costPerBottle) {
   console.log("buy " + calcBottles(money, costPerBottle) + " bottles of milk");
    return calcChange(money, costPerBottle);
}

function calcBottles(startingMoney, costPerBottle) {
    var numberOfBottles = Math.floor(startingMoney / costPerBottle);
    return numberOfBottles;
}

function calcChange(startingAmount, costPerBottle) {
    var change = startingAmount % costPerBottle;
    return change;
}

console.log("Hello Father, here is your " + getMilk(7, 3) + " change!");
 */

// BMI calculator
// If my weight is 65kg and my height is 1.8m, I should be able to call your function like this:
// var bmi = bmiCalculator(65, 1.8);
// bmi should equal around 20 in this case

/* function bmiCalculator(weight, height) {
    var bmiCalc = weight / Math.pow(height, 2);
    console.log(Math.floor(bmiCalc));
}

var bmi = bmiCalculator(65, 1.8); */

// BMI Calculator Advanced (If/Else) *******************************************
/*
Previously, we've created a function that is able to calculate the BMI. But once we get a result, we will want to tell the user what the number means.
Write a function that outputs (returns) a different message depending on the BMI.

BMI <18.5, the output should be: "Your BMI is <bmi>, so you are underweight."
BMI 18.5-24.9, the output should be "Your BMI is <bmi>, so you have a normal weight."
BMI >24.9, the output should be "Your BMI is <bmi>, so you are overweight."

The message MUST be returned as an output from your function. You should NOT NEED to use alert, prompt or console.log in this challenge.
IMPORTANT the message wording has to match precisely for the code to pass the validation. Including punctuation and capitalisation. 
*/

/* function bmiCalculator(weight, height) {
    var bmi = weight / Math.pow(height, 2);
    var interpretation = Math.floor(bmi);

    if (interpretation < 18.5) {
        return "Your BMI is " + interpretation + ", so you are underweight.";        
    }
    if (interpretation >= 18.5 && interpretation <= 24.9){
        return "Your BMI is " + interpretation + ", so you have normal weight.";        
    }
    if(interpretation > 24.9 && interpretation < 30){
        return "Your BMI is " + interpretation + ", so you are overweight.";
    }
    else {
        return "You are obese, seek help!!!";
    }
}
bmiCalculator(65, 1.8); */

// LEAP YEAR CHALLENGE *********************************************************
/* Leap Year Challenge Exercise
💪This is a Difficult Challenge 💪
Write a program that works out whether if a given year is a leap year. A normal year has 365 days, leap years have 366, with an extra day in February. The reason why we have leap years is really fascinating, this video goes into more detail.
This is how to work out whether if a particular year is a leap year:
A year is a leap year if it is evenly divisible by 4 ;
except if that year is also evenly divisible by 100;
unless that year is also evenly divisible by 400.

e.g. Is the year 2000 a leap year?:
2000 ÷ 4 = 500 (Leap)
2000 ÷ 100 = 20 (Not Leap)
2000 ÷ 400 = 5 (Leap!)

So the year 2000 is a leap year.
But the year 2100 is not a leap year because:
2100 ÷ 4 = 525 (Leap)
2100 ÷ 100 = 21 (Not Leap)
2100 ÷ 400 = 5.25 (Not Leap)

Warning your output should match the Example Output format exactly, even the positions of the commas and full stops.

Example Input 1
2400
Example Output 1
Leap year.

Example Input 2
1989

Example Output 2
Not leap year.

Hint
Remember that the modulo (%) operator gives you the remainder of a division. We covered this in this lesson.
Try to visualise the rules by creating a flow chart on www.draw.io.
If you really get stuck, you can see the flow chart I created.
Try to run your code in this Repl.it playground and check it against the known leap years.
*/

/* function isLeap(year) { */
    
    /**************Don't change the code above****************/    
        
        //Write your code here.    
    
/*         var remainingFour = year % 4;
        var remainingOneHun = year % 100;
        var remainingFourHun = year % 400;
    
        if (remainingFour != 0 ) {
            return "Not leap year."
    }
        else if(remainingOneHun === 0 ) {
            return"Not leap year."
        }
        else if (remainingFourHun != 0) {
            return"Leap year."
        }
        else {
            console.warn("Something Broke!!!!!!")
        } */
        
    
    /**************Don't change the code below****************/    
    
  /*   }
    isLeap(2012); */

    /* Solution instructors code */

/*     function isLeap(year) {
    
        // **************Don't change the code above****************
            
            //Write your code here.
        if (year % 4 === 0) {
            if (year % 100 === 0) {
                if (year % 400 === 0) {
                    return "Leap year.";
                } else {
                    return "Not leap year."; 
                }
            } else {
                return "Leap year.";
            }
        } else {
            return "Not leap year.";
        }
                // *************Don't change the code below****************
    }
    isLeap(2011); */


    /* Array ********************************************************* */

    /* Guest List check and add name */
/*     let guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
    let newName = prompt("What is your name?")
        if (!guestList.includes(newName)) {
            guestList.push(newName);
            alert("Welcome " + newName + " have a ball!");
        } else  {
            let newName = prompt("Please renenter name if you have not registered already.  The name entered is already on the guest list.")
            !guestList.includes(newName);
            guestList.push(newName);
            alert("Welcome " + newName + " have a great time at the ball!")
        } 
    console.log(guestList);
    console.log(guestList.length); */


    /* fizzBuzz */
/*     let output = [];
    let count = 1;
    while (count <= 100) {
        fizzBuzz();
        count++;
    }
    function fizzBuzz() {
        if (count % 3 === 0 && count % 5 === 0) {
            output.push("FizzBuzz");
        } else if (count % 3 === 0) {
            output.push("Fizz");
        } else if (count % 5 === 0){
            output.push("Buzz");
        } else {
            output.push(count);
        }
        
        console.log(output);
    } */
/* FizzBuzz from devtools source */
    // fizzBuzz 
/*     let output = [];
    let count = 1;
    while (count <= 100) {
        fizzBuzz();
        count++;
    }
    function fizzBuzz() {
        if (count % 3 === 0 && count % 5 === 0) {
            output.push("FizzBuzz");
        } else if (count % 3 === 0) {
            output.push("Fizz");
        } else if (count % 5 === 0){
            output.push("Buzz");
        } else {
            output.push(count);
        }
        
        console.log(output);
    }  */

    
        /* Who's buying lunch? Code Challenge. */

/*         let names = ["Rick", "Leanna", "Ron", "Cindy", "Richard", "Elly", "Cameron", "Shayla", "Tim"];

        function whosPaying(names) {
                
                let randomPersonChosen = Math.floor(Math.random() * names.length);
                let randomPerson = names[randomPersonChosen];
                return randomPerson + " is going to buy lunch today!";
                
        }
        console.log(whosPaying(names)); */

        /* Source Dev Tool Whos's buying lunch */
/*         let names = ["Rick", "Leanna", "Ron", "Cindy", "Richard", "Elly", "Cameron", "Shayla", "Tim"];

        function whosPaying(names) {
                
                let randomPersonChosen = Math.floor(Math.random() * names.length);
                let randomPerson = names[randomPersonChosen];
                return randomPerson + " is going to buy lunch today!";
                
        }
        console.log(whosPaying(names)); */

        /* 99 Bottles on the wall Challenge */

/*         var numberOfBottles = 99
        while (numberOfBottles >= 2) {
            var bottleWord = "bottles";
            if (numberOfBottles === 1) {
                bottleWord = "bottle";
            } else {
            console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
            console.log(numberOfBottles + " " + bottleWord + " of beer, Take one down, pass it around,");
            numberOfBottles--;
            console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
            
            } */
            
//var numberOfBottles = 99;
/* var bottleWord = "bottles";
for (numberOfBottles = 99; numberOfBottles = 0; numberOfBottles--); {
    if (numberOfBottles === 1) {
        bottleWord = "bottle";
    } else {
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer, Take one down, pass it around,");
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
} 
} */

/* Fibonacci challenge */

/* function fibonacciGenerator(n) {
    // Handle edge cases for n = 0 and n = 1
    var output = [];
    if (n === 1) {
      return [0];
    } else if (n === 2) {
        output = [0, 1,];
    } else {
        output = [0, 1];
        for (var i = 2; i < n; i++){
        output.push(output[output.length - 2] + output[output.length - 1]);
    }
    }
    return output;
}
  output = fibonacciGenerator(10);
  console.log(output); */
       
  alert ('Hello Everyone');











        /* From Dev Tools Source */
        // var dogAge = prompt("Please enter the age of your dog to find their human age!");
// var humanAge = ((dogAge - 2) * 4 + 21);
// console.log ("You dog is " + humanAge + " human years old!");


// function getMilk(money) {
//     console.log("Leave house");
//     console.log("Move right");
//     console.log("Move right");
//     console.log("Move right");
//     console.log("Buy Milk");
//     console.log("Move left");
//     console.log("Move left");
//     console.log("Move left");
    
//     var bottles = Math.floor(money / 2.5);
    
//     console.log("Return home with " + bottles + " bottles of milk please.");
// }
// getMilk(10);

// function lifeInWeeks(age) {
    
// /************Don't change the code above************/    
    
//     //Write your code here.
//     var years = 90 - age;
//     var months = years * 12;
//     var weeks = years * 52;
//     var days = years * 365
        
//     console.log("You have " + days + " days, " + weeks + " weeks, " + "and " + months + " months left.");
// }
// lifeInWeeks(54);




// function getMilk(money) {
// var numberOfBottles = Math.floor(money / 1.5);

// console.log("You bought " + numberOfBottles + " bottles of milk!" + " And, your change is " + change);

// return money % 1.5;
    
// }

// var change = getMilk(prompt("How many bottles of milk would you like?"));
// console.log(change);



// function getMilk(money) {

// console.log("buy " + calcBottles(money, 1.5) + " bottles of milk and your change is " + change);

// return calcChange(money, 1.5);
// }


// function calcBottles (startingMoney, costPerBottle) {
//     var numberOfBottles = Math.floor(startingMoney / costPerBottle);
//     return numberOfBottles;
// }

// function calcChange (startingAmount, costPerBottle) {
//     var change = startingAmount % costPerBottle;
// }

// getMilk(prompt("How many bottles of milke would you like?"));

// BMI = weight(kg) / height squared(m squared)
// 65kg and 1.8m



//Create your function below this line.
//The first parameter should be the weight and the second should be the height.
// function bmiCalculator(weight, height) {
//     var bmi = weight / Math.pow(1.8,2); //Math.pow(x,y) | x = base y = exponent
//     console.log("Your BMI is " + Math.round(bmi)); // Math.round will correctly round answer if .5 then it goes up, if .49 then it goes down.
//     return Math.round(bmi);
// }
// var bmi = bmiCalculator(65, 1.8);


/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/
// var woman = prompt("What is your name Mrs?");
// var man = prompt("What is your name Sir?");
// var loveScore = Math.random() * 100;
// loveScore = Math.floor(loveScore) + 1;
// if (loveScore === 100) {
//     alert("Mrs. " + woman + " & Mr. " + man + " You are a great match, perfect score " + loveScore + " %")    
// } else if (loveScore >= 75){
//     alert("Mrs. " + woman + " & Mr. " + man + " You are a match, with a score of " + loveScore + " %")
// } else if (loveScore > 25 && loveScore < 75){
//     alert("Mrs. " + woman + " & Mr. " + man + " Your love score is " + loveScore + " %. Not to Shabby" );
// } else if (loveScore >= 10 && loveScore <= 25){
//     alert("Mrs. " + woman + " & Mr. " + man + " Your love score is " + loveScore + " %, Time to move on!");
// } else if (loveScore) {
    
// }
//     alert("Go home and start over!!! " + loveScore + " % Boooooooooo")

/* ** Love Calculator **

var woman = prompt("What is your name Mrs?");
var man = prompt("What is your name Sir?");
var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
if (loveScore === 100) {
    alert("Mrs. " + woman + " & Mr. " + man + " You are a great match, perfect score " + loveScore + " %")   <br> 
} else if (loveScore >= 75){
    alert("Mrs. " + woman + " & Mr. " + man + " You are a match, with a score of " + loveScore + " %")<br>
} else if (loveScore > 25 && loveScore < 75){
    alert("Mrs. " + woman + " & Mr. " + man + " Your love score is " + loveScore + " %. Not to Shabby" );
} else if (loveScore >= 10 && loveScore <= 25){
    alert("Mrs. " + woman + " & Mr. " + man + " Your love score is " + loveScore + " %, Time to move on!");
} else 
    alert("Go home and start over!!! " + loveScore + " % Boooooooooo") */

// function bmiCalculator (weight, height) {
//     var weight = Math.random() * 250;
//     var height = Math.random() * 76;
//     var height = Math.pow(height,2);
//     var bmi = weight / height;
//     var interpretation = bmi;
    
//     if (bmi < 18.5) {
//         console.log('Your BMI is ' + bmi + ', so you are underweight.');        
//     }
//     else if (bmi >= 18.5 || bmi <= 24.9){
//         console.log("Your BMI is " + bmi + ", so you have normal weight.");        
//     }
//     else if(bmi > 24.9){
//         console.log("Your BMI is " + bmi + ", so you are overwieght.");
//     }
//     else {
//         console.log("Test failed!");
//     }
    
//     return interpretation();
// }