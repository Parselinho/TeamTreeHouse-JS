    /*
  Create an array of 'pet' objects.
  Each object should have the following properties: 
  name, type, breed, age, and photo
*/
const pet = [
    {
        name: 'Poyo',
        type: 'pincher',
        breed: 'hum',
        age: 5,
        photo: 'img/aussie.jpg'
    },
    {
        name: 'Su',
        type: 'pincher',
        breed: 'hum',
        age: 5,
        photo: 'img/dachshund.jpg'
    },
    {
        name: 'Kalimero',
        type: 'pitbull',
        breed: 'amstaf',
        age: 7,
        photo: 'img/golden.jpg'
    },
    {
        name: 'Hachapuri',
        type: 'dogo argentino',
        breed: 'dogo',
        age: 11,
        photo: 'img/pug.jpg'
    },
    {
        name: 'Simba',
        type: 'shpitz yapani',
        breed: 'shpitz',
        age: 15,
        photo: 'img/tabby.jpg'
    },
];

const main = document.querySelector('main')
let html ='';
for (i=0; i < pet.length; i++) {
    html += `
    <h2>${pet[i].name}</h2>
    <h3>${pet[i].type} | ${pet[i].breed}</h3>
    <p>Age: ${pet[i].age}</p>
    <img src="${pet[i].photo}" alt="${pet[i].type}"</img>
    `;
}

main.innerHTML = html;

// document.querySelector('main').innerHTML = ;
