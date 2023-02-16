//while loop : 
// function getRandomNumber(upper) {
//     return Math.floor(Math.random() * upper) + 1;
// }
// // lets call this fucntion 10 times : 
// let counter = 0;
// while ( counter < 10 ) {
//     console.log(`The random number is ${getRandomNumber(10)}`);
//     counter += 1;
// }

// do-whilte loop : 
// function getRandomNumber(upper) {
//     return Math.floor(Math.random() * upper) + 1;
// }

// let counter = 0;
// do {
//     console.log(`The random number is ${getRandomNumber(10)}`);
//     counter += 1;
// } while ( counter < 10 );

// for loops : 
const main = document.querySelector('main');
let html = '';

// for (i = 1; i < 11; i++) {
//     main.innerHTML += `<div>${html}${i}</div>`;
// }
// teacher solution : 
for (i = 1; i <= 10; i++) {
    html += `<div>${i}</div>`; // can do i=0 and then ${i + 1};
}
// if i want the loop the be 5 10 15 20... = for (i = 5; i <= 100; i +=5) (20 divs...)

main.innerHTML = html;