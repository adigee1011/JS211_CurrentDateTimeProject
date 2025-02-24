// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.

/**
 * this function converts number to a string
 * @param n1 
 * @returns string1 
 */

function convertToString (n1) {
  const string1 = n1.toString();
  return string1;
}

console.log(convertToString(5));

// without using function 

const num1 = 11;
const string1 = num1.toString();
console.log(string1);
console.log("new type is" + " " + typeof(string1));

//-------------------------
// Write a JavaScript program to convert a string to the number.

/**
 * this function converts a string to a number
 * @param  str 
 * @returns num1
 */
function convertToNumber(str) {
  const num1 = parseInt(str);
  return num1;
}

console.log(convertToNumber(50));

// without using function 

const string2 = "12";
const num2 = parseInt(string2);
console.log(num2);
console.log("new type is" + " " + typeof(num2));

//-------------------------
// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  
 /**
  * this function returns the data type of value passed
  * @param x 
  */ 
function input(x) {
  console.log(typeof(x));
}

input(true);
input(3);
input("hello");

//-------------------------
// Write a JavaScript program that adds 2 numbers together.

 /**
  * this function add two numbers
  * @param n1 n2
  * @returns n3
  */ 
function add(n1, n2) {
  const n3 = n1 + n2;
  return n3;
}

console.log(add (1,2));

//-------------------------
// Write a JavaScript program that runs only when 2 things are true.

 /**
  * this function checks if both parameters are true
  * @param n1 n2
  * @returns n3
  */ 
function checkIfBothTrue (n1, n2) {
  if (n1 == true && n2 == true){
    return "both are true"
  }
}

console.log(checkIfBothTrue(true,true));

//-------------------------
// Write a JavaScript program that runs when 1 of 2 things are true.

 /**
  * this function checks if one of the parameters are true
  * @param n1 n2
  * @returns n3
  */ 
function checkIfOneTrue (n1,n2) {
  if (n1 == true || n2 == true) {
    return "one of them is true"
  }
}

console.log(checkIfOneTrue(true,false));


// Write a JavaScript program that runs when both things are not true.  

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
