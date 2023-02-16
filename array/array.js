// const planets = [
//     'Mercury',
//     'Venus',
//     'Earth',
//     'Mars'
// ];
// const main = document.querySelector('main');
// const instruments = ['piano', 'guitar', 'darbooka'];
// instruments.push('drums', 'violin', 'triangle'); 
// instruments.unshift('cowbell', 'tuba');
// let lastItem = instruments.pop(); // will store the last item - in our case - triangle
// let firstItem = instruments.shift(); // will store the first item, in our case Cowbell, and after the code below, it will store what the user has chosen with the prompt.

// const testInstrument = prompt('Which instrument you would like to learn?');
// instruments.unshift(`${testInstrument}`);

// main.innerHTML = 
// `
// <h2>You would like to learn ${instruments[0]}</h2> <br>
// <p>while you already know ${instruments[1]}, ${instruments[2]}, ${instruments[3]}, ${instruments[4]}, ${instruments[5]}, ${instruments[6]}, ${instruments[7]}, ${instruments[8]}</p>
// `;

// const numbers = [100, 200, 300, 400, 500];

// const mathStudents = [
//     'Marty',
//     'Jennifer',
//     'Lorraine',
//     'Goldie'
// ];

// const scienceStudents = [
//     'Emmet',
//     'Clara',
//     'Needles',
//     'Strickland'
// ];

// const students = [

// ];

// const middle = ['lettuce', 'cheese', 'patty'];
// const burger = ['top bun', ...middle, 'bottom bun']; // if iwant to add the middle array to the middle of the burder array 

// const playlist = [
//     'So What',
//     'Respect',
//     'What a Wonderful World',
//     'At Last',
//     'Three Little Birds',
//     'The Way You Look Tonight'
//   ];

//   function createListItems(arr) {
//     let items = '';
//     for ( i = 0; i < arr.length; i++) {
//         items += `<li>${arr[i]}</li>`
//     }
//     return items;
//   }

//   document.querySelector('main').innerHTML = `
//     <ol>
//     ${createListItems(playlist)}
//     </ol>
//      `;

// let inStock = [
//     'pizza',
//     'cookies', 
//     'eggs', 
//     'apples', 
//     'milk', 
//     'cheese', 
//     'bread', 
//     'lettuce', 
//     'carrots', 
//     'broccoli', 
//     'potatoes', 
//     'crackers', 
//     'onions', 
//     'tofu', 
//     'limes', 
//     'cucumbers'];
 

//     let html = `<strong>In Stock:</strong> `;
//     for (i=0; i < inStock.length; i++) {
//         html += `${inStock[i]}, `;
//     }
//     document.querySelector('main').innerHTML = html;

// let inStock = [
//     'pizza',
//     'cookies', 
//     'eggs', 
//     'apples', 
//     'milk', 
//     'cheese', 
//     'bread', 
//     'lettuce', 
//     'carrots', 
//     'broccoli', 
//     'potatoes', 
//     'crackers', 
//     'onions', 
//     'tofu', 
//     'limes', 
//     'cucumbers'];

//     const search = prompt('Search for a product.').toLowerCase();
//     let message;
//     if (!search) {
//        message = `<strong>In Stock:</strong> ${inStock.join(', ')}`;
//     } else if (inStock.includes(search)) {
//         message = `Yes, we have <strong>${search}</strong>. its #${inStock.indexOf(search) + 1} on the list!`
//     } else {
//         message = `Sorry, we do not have the <strong>${search}</strong>`;
//     }

//     document.querySelector('main').innerHTML = `<p>${message}</p>`;

// const playlist = [
//     ['So What', 'Miles Davis', '9:04'],
//     ['Respect', 'Aretha Franklin', '2:45'],
//     ['What a Wonderful World', 'Louis Armstrong', '2:21'],
//     ['At Last', 'Ella Fitzgerald', '4:18'],
//     ['Three Little Birds', 'Bob Marley and the Wailers', '3:01'],
//     ['The Way You Look Tonight', 'Frank Sinatra', '3:21']
//   ];

//   function createListItems(arr) {
//     let items = '';
//     for (i=0; i < arr.length; i++) {
//         items += `<li>${arr[i][0]} by ${arr[i][1]} - ${arr[i][2]}</li>`
//     }
//     return items;
//   }

// document.querySelector('main').innerHTML = `<ol>${createListItems(playlist)}</ol>`;


const quesAnswer = [
    ['How many planets are in the Solar System?', 1],
    ['How many contients are there?', 7],
    ['How many legs does an insect have?', 4],
    ['What year was JavaScript created?', 1995]
];
const correctArray = [];
const wrongArray = [];

let correctAnswer = 0;;

for (i=0; i < quesAnswer.length; i++) {
  let question = prompt(quesAnswer[i][0]);
  if (!question) {
    alert('Please provide an Answer')
  }
   else if (+question === quesAnswer[i][1]) {
    correctAnswer ++
    correctArray.push(quesAnswer[i]);
  } else {
    wrongArray.push(quesAnswer[i]);
  }
}

function createListItems(arr) {
    let items = '';
    for (i=0; i < arr.length; i++) {
        items += `<li>${arr[i][0]}</li>`;
    }
    return items
}
document.querySelector('main').innerHTML =`
<h2><strong>You got ${correctAnswer} question(s) correct</strong></h2> <br>
<p>You got these questions right:
<ol>
${createListItems(correctArray)}
</ol>
<p>You got these questions wrong : 
<ol>
${createListItems(wrongArray)}
</ol>
`;