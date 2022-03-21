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

const num1 = 11;
const string1 = num1.toString();
console.log(string1);
console.log(typeof(string1));

// Write a JavaScript program to convert a string to the number.

const string2 = "12";
const num2 = parseInt(string2);
console.log(num2);
console.log(typeof(num2));


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  
function input(x) {
  console.log(typeof(x));
}

input(3);


// Write a JavaScript program that adds 2 numbers together.

function add(n1, n2) {
  const n3 = n1 + n2;
  return n3;
}

console.log(add (1,2));

// Write a JavaScript program that runs only when 2 things are true.

function checkIfBothTrue (n1, n2) {
  if (n1 == true && n2 == true){
    return "both are true"
  }
}

console.log(checkIfBothTrue(true,true));


// Write a JavaScript program that runs when 1 of 2 things are true.

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
