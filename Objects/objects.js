// const person = {
//     name:  'Gal',
//     city: 'Jerusalem',
//     age: 37,
//     isStudent: false,
//     skills: ['JavaScript', 'HTML', 'CSS']
// };
// //  for (let key in person) {
// //    // console.log(person[key]); // will show all the prop + value
// //    console.log(`${key}: ${person[key]}`); // if i want to acces 1 value for all the keys,
// //    //instead of key I will write - ${person['name']};
// //  }

//  const personProps = Object.keys(person); // if you want to check the length of the keys,
//  // so Object.keys(person).length // 4
// console.log(personProps) //(if i do [2] it retuurn the word age)

// const personVals = Object.values(person);
// console.log(personVals);

//convert to object : 
// const quesAnswer = [
//     ['How many planets are in the Solar System?', 1],
//     ['How many contients are there?', 7],
//     ['How many legs does an insect have?', 4],
//     ['What year was JavaScript created?', 1995]
// ];

const quesAnswer = [
  { question: 'How many planets are in the Solar System?', answer: '8' },
  { question: 'How many continents are there?', answer: '7' },
  { question: 'How many legs does an insect have?', answer: '6' },
  { question: 'What year was JavaScript created?', answer: '1995' }
];

const correctArray = [];
const wrongArray = [];

let correctAnswer = 0;;

for (i=0; i < quesAnswer.length; i++) {
  let question = prompt(quesAnswer[i].question);
  if (!question) {
    alert('Please provide an Answer')
  }
   else if (question === quesAnswer[i].answer) {
    correctAnswer ++
    correctArray.push(quesAnswer[i]);
  } else {
    wrongArray.push(quesAnswer[i]);
  }
}

function createListItems(arr) {
    let items = '';
    for (i=0; i < arr.length; i++) {
        items += `<li>${arr[i].question}</li>`;
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