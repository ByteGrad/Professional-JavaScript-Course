// -- variables (var/let/const) & data types/structures (strings/numbers/booleans/arrays/objects) --
// var description = 'We need a new floor.';
// var squareMeters = 100;
const description = 'We need a new floor.';
const squareMeters = 100;
const specialCoating = true;
const floorOptions = ['carpet', 'plastic', 99, true];
const renovationJob = {
    ownerName: {
        name: 'Rustam',
        age: 32,
        address: 'Prague, Czech',
    },
    maximumPrice: 25000,
    category: 'bathroom',
    newshower: true,
    colorOptions: ['blue', 'green', 'red']
};

const errior = {
    statusCode: 404,
    description: 'Page not found',
    retry: false
}



console.log(5);
console.log(floorOptions[0]);
console.log(renovationJob.ownerName.name);
console.log(renovationJob.maximumPrice);




// -- traditional functions vs arrow functions --
function calculatePrice() {
    const price = 1000 + 3000
    console.log(price);
    console.log('Hello from Rustam to the World')
}
calculatePrice();
;// function calculatePrice(sqMeters) {
//     return 1000 + sqMeters;
// }

// var calculatePrice = function(sqMeters) {
//     return 1000 + sqMeters;
// };

// const calculatePrice = (sqMeters) => {
//     return 1000 + sqMeters;
// };

// const calculatePrice = sqMeters => 1000 + sqMeters;


// -- string concatenation vs template literals --
// const price = 5000;
// const result = 'The total cost will be: ' + price;
// const result = `The total cost will be: ${price}`;


// -- if-else vs ternary operator --
// const price = 5000;

// if (price) {
//     console.log('hello');
// } else {
//     console.log('blabla');
// }

// price > 3000 ? console.log('expensive') : console.log('cheap');


// -- manipulating HTML and CSS --
// const headingEl = document.querySelector('.heading');

// headingEl.textContent = 'Hello <span class="heading--big">everyone</span>!';
// headingEl.innerHTML = 'Hello <span class="heading--big">everyone</span>!';
// headingEl.insertAdjacentHTML('beforebegin', 'Hello <span class="heading--big">everyone</span>!');

// headingEl.style.fontSize = '55px';
// headingEl.classList.add('heading--big');


// -- events and functions for handling events (also called "event handlers") --
// const headingEl = document.querySelector('.heading');

// const clickHandler = () => {
//     headingEl.style.color = 'red';
//     console.log('changed color');
// };

// headingEl.addEventListener('click', clickHandler);