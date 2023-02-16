//const name = prompt('what is your name?');
//const message = 'Hello ' + name; // `Hello, ${name}`;
//console.log(message);

// test : 
/* const shout = prompt('What do you want to shout?')
const shoutUpper = shout.toUpperCase();
const message = `<h2>The message to shout is: ${shoutUpper}</h2>`;
console.log(message);

document.querySelector('main').innerHTML = message; */

/* Variables and Strings Challenge : 
const adjective = prompt('Please type an adjective.');
const verb = prompt('Please type a verb.');
const noun = prompt('Please type a noun.');
const message = `<h2>There once was a ${adjective} programmer who wanted to use JavaScript to ${verb} the ${noun}</h2>`;
document.querySelector('main').innerHTML = message; */

//Conditional javascript basics : 
/* 
const answer = prompt('Which planet is closest to the sun?');

if ( answer.toUpperCase() === 'MERCURY' ) {

} else {

}

let correctGuess = false;
const number = 6;
const guess = prompt('Guess a number between 1 and 10');

if (+guess === number) { // the + is for convert the string to a number
    correctGuess = true;
}

if (correctGuess) { // same as if (correctGuess === true)
    console.log ('you guessed the number');
} else {
    console.log ('you didnt guess the number')
}
*/ 
// else-if : 
/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
// */
// let correctGuess = 0;

// // 2. Store the rank of a player
//  let rank;

// // 3. Select the <main> HTML element
// const main = document.querySelector('main')

// /*
//   4. Ask at least 5 questions
//    - Store each answer in a variable
//    - Keep track of the number of correct answers
// */
// const ques1 = prompt('first winner worldcup');
// if (ques1.toLowerCase() === 'brazil') {
//   correctGuess += 1;
// }

// const ques2 = prompt('second winner worldcup');
// if (ques2.toLowerCase() === 'israel') {
//   correctGuess += 1;
// }

// const ques3 = prompt('third winner worldcup');
// if (ques3.toLowerCase() === 'spain') {
//   correctGuess += 1;
// }

// const ques4 = prompt('forth winner worldcup');
// if (ques4.toLowerCase() === 'italy') {
//   correctGuess += 1;
// }

// const ques5 = prompt('fifth winner worldcup');
// if (ques5.toLowerCase() === 'argentina') {
//   correctGuess += 1;
// }


// /*
//   5. Rank player based on number of correct answers
//    - 5 correct = Gold
//    - 3-4 correct = Silver
//    - 1-2 correct = Bronze
//    - 0 correct = No crown
// */
//  if ( correctGuess === 5 ) {
//    rank = 'Gold';
//  } else if ( correctGuess === 4 || correctGuess === 3 ) {
//    rank = 'Silver';
//  } else if ( correctGuess === 1 || correctGuess === 2 ) {
//    rank = 'Bronze';
//  } else {
//    rank = 'No Crown';
//  }

// // 6. Output results to the <main> element
// main.innerHTML = `<h2>${rank}</h2>`

// javascript numbers : 
// const secsPerMin = 60;
// const minsPerHour = 60;
// const hoursPerDay = 24;
// const daysPerWeek = 7;
// const weeksPerYear = 52;
// const yearsAlive = 32;
// const daysPerYear = 365;

// const secondsPerDay = secsPerMin * minsPerHour * hoursPerDay;
// const secondsPerLive = secsPerMin * minsPerHour * hoursPerDay * daysPerYear;
// console.log (`There are ${secondsPerDay} seconds in a day.`);
// console.log(`Ive been alive for ${secondsPerLive} Seconds.`);

// const htmlBagdes = prompt('How Many html badges do you have?');
// const cssBagdes = prompt('How Many css badges do you have?');

// const totalBadgel = parseInt(htmlBagdes) + parseInt(cssBagdes); // +htmlBadges + +cssBagdes; - better way
// console.log (totalBadgel);

// random numbers : 
// const dieRoll = Math.floor( Math.random() * 6 ) + 1 // bring back integer number between 1-6

// const input =  prompt('Choose a Number from 1-6');
// const inputNumber = +input;
// const secondNumber = prompt('Choose Number from 7-12')
// const secondNumberPlus = +secondNumber

// if (inputNumber && secondNumberPlus) {
//   const randomNumber = Math.floor(Math.random() * (secondNumberPlus - inputNumber + 1) ) + inputNumber;
//   console.log(randomNumber);
// } else {
//   console.log(`Please provide number`);
// }
// functions : 

// regular : 
// function getRandom() {
//   const randomNumber = Math.floor( Math.random() * 6 ) + 1;
//   return randomNumber;
// }
// getRandom();

//func with argument : 

// function getRandom(upper, lower) {
//   const randomNumber = Math.floor( Math.random() * upper ) + lower;
//   return randomNumber;
// }
// console.log(getRandom(6, 3));

// // alert( getRandom() );
// // console.log(getRandom());
// // const dieRoll = getRandom();
// document.querySelector('main').innerHTML = `<h2>${getRandom()}</h2>`;

// function isFieldEmpty() { -- check if input is empty, if so, return error.
//   const field = document.querySelector('#info');
//   if (field.value === '') { // same as if (!field.value)
//     return true;
//   } else {
//     return false;
//   }
// }

// const fieldTest = isFieldEmpty();

// if (fieldTest === true) { // same as if (fieldTest)
//   alert ('Please Provide you information');
// }


// function goToCoffeeShop(drink) {
//   alert(`Your ${drink} is on the way!`);
// }

// goToCoffeeShop('Espresso');

// function getArea(width, length, unit) {
//   const area = width * length;
//   return `${area} ${unit}`;
// }

// getArea(3, 10, 'sq feet');

// Arrow Functions : 
// const getRandomNumber = (upper, lower) => {
//   const randomNumber = Math.floor( Math.random() * upper ) + lower;
//   return randomNumber;
// }

// const getArea = (width, length, unit) => {
//   const area = width * length;
//   return `${area} ${unit}`;
// }

// function greetingFun(greeting = 'Good Morning', name = 'student') { // the default name will be student, but could be change if we call argument when we call the function
//   console.log(`${greeting} ${name}`);
// }
// greetingFun(undefined, 'Gal'); // undefined = greeting will be good morning, and then we can argument the second par.

// function getArea(width, length, unit = 'ft square') {
//   const area = width * length;
//   return `${area} ${unit}`;
// }
// getArea(10, 10);

// function getRandom(upper, lower) {
//   const randomNumber = Math.floor( Math.random() * upper ) + lower;
//   if (isNaN(upper) || isNaN(lower)) {
//     throw Error('Please Enter Number')
//   } else {
//   return randomNumber; // can write it like this : return Math.floor( Math.random() * upper ) + lower;
// }
// }
// console.log(getRandom(6, 3));


const userInput = prompt('Who are you?');

const userInput2 = prompt('How Old Are You?');

 const bothUserInputs = `${userInput.toUpperCase()} ${userInput2.toUpperCase()}`;
 console.log(bothUserInputs);
  const inputLength = bothUserInputs.length;
  alert(`The string ${bothUserInputs} is ${inputLength} Charcters long.`)
