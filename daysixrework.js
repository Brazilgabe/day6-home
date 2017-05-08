
// number comparison where the greater number is returned
function greaterNum(num1,num2) {
  if (num1>num2) {
    return num1;
  }  else {
      return num2;
    }
}
console.log(greaterNum (10,444));


// language translator

function helloWorld (language){
  if (language=='en'){
    return "Hello world";
  }else if (language=='es'){
    return "Hola mundo";
  }else if (language=='de'){
    return "Hallo Wereld";
  }
}
  console.log(helloWorld('en'));
  console.log(helloWorld('de'));
  console.log(helloWorld('es'));

// assigning numbers to grades

function assignGrade(num) {
  if (num >= 90){
    return "A"
  }
  else if (num <90 && num >=80) {
    return "B"
  }
  else if (num <80 && num>=70) {
    return "C"
  }
  else if (num <70 && num>=60) {
    return "D"
  }
  else if (num<60) {
    return "F"
  }
}

//The Pluralizer
// for words that do not have a plural form another else if
// statement must be written to declare it


function pluralize (noun, number){
  if (number === 1)   {
    return number + noun
 }
 else if (noun === "sheep") {
   return number+ " " + "sheep"
 }
 else if (noun === "geese") {
   return number+ " " + "geese"
 }
 else if (noun === "children") {
   return number+ " " + "children"
 }
 else if (noun === "people") {
   return number+ " " + "people"
 }
 else if (noun === "species") {
   return number+ " " + "species"
 }
  else if(number >1){
    return number + " " + noun+"s"
  }
}

//The Odd and Even (2 ways to write it...)
// simple for loop that will list out the command without having to call inspect
// and the second one does the same except you must call the function
for (var i = 0; i <=15; i++) {
 if (i===0){
  console.log(i + "is even");
}
  else if (i%2===0) {
    console.log(i + "is even")
  }
  else {
    console.log(i+ "is odd");
  }
/////////////
function count(){
  for (var count=0; count<=15; count++) {
    if (count===0 || count%2 == 0) {
      console.log (count + " is even")
    } else {
      console.log (count+ " is odd" )
    }
  }
}
// the fizzzzzz buzzzz

for (var i = 1; i <= 100; i++) {

  if (i%3==0 && i%5==0) {
    console.log("FizzBuzz");
  }
  else if (i%3==0){
    console.log("Fizz");
  }
  else if (i%5==0) {
    console.log("Buzz");
  }
  else {
    console.log(i);
  }
}
// high low game

// start function
  function guess(){
    // declare variables
    var name = prompt ("What's your name?");
    var computer = Math.floor((Math.random()*100)+1);
    var player = prompt("Hello" + " " + name + " " + "guess a number between 1 and 100...");
    var count = 0;
      while (parseInt(player) !== computer && count <=7){
        while (isNaN(parseInt(player))) {
          var player = prompt("Only numbers!")
        }
        if ((player > computer) && count < 7) {
          count++;
          var player = prompt("Too high, try again...")
        }
        else if ((player < computer) && count <7) {
          count++
          var player = prompt("Too low, try again...")
        }
        else {
          count++;
          alert("Game Over!")
        }
      }
      if ((player == computer) && count < 7) {
        alert ("congrats, you did it" + name)
      }
      function combine (){
        getName();
        guess();
      }
  }
