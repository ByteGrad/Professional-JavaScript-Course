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



// console.log(5);
// console.log(floorOptions[0]);
// console.log(renovationJob.ownerName.name);
// console.log(renovationJob.maximumPrice);




// -- traditional functions vs arrow functions --
// --
// function calculatePrice(sqMeters) {
//     const price = 1000 + sqMeters
//   return price;
// }
// const result = calculatePrice(5000);
// console.log(result)

// --alternative Traditional Function.--
// --
// var calculatePrice = function(sqMeters) {
//     const price = 1000 + sqMeters;
//     return price;
// };
// console.log(calculatePrice(5000));

// --Arrow Function--.
// --
// const calculatePrice = (sqMeters) => {
//     const price = 1000 + sqMeters;
//     return price;
// };
// console.log(calculatePrice(10000));

// --Second way--
// const calculatePrice = sqMeters => {
//     const price = 1000 + sqMeters;
//     return price;
// };
// console.log(calculatePrice(10000));

// --Third way--
// const calculatePrice = sqMeters => {
//     return 1000 +sqMeters;
// };
// console.log(calculatePrice(10000));

// --Fourth way--
//  const calculatePrice = sqMeters => 1000 + sqMeters;
//   console.log(calculatePrice(2500));

// Chapter! Names of functions --
// -- string concatenation vs template literals --
// const price = 3500;
// // const result = 'The total cost will be: ' + price; // string concatenation!-old way
// const result = `The total cost will be: ${price}`;
// console.log(result);

// Chapter! if-else vs ternary operator --
// const price = 1998+1000*1.2/10;
// const weather = 'bad'
// console.log(price);
// if (price > 2000) {
//     console.log('Your are rich');
// } else {
//     console.log('You are poor ');
    
// }
// if (price == 1999) {
//     console.log("But not that bad");
// } else {
//     console.log("Not that good");
//      }

// if (price >= 1998) {
//     console.log("But not that bad");
// } else {
//     console.log("Not that good");
// }
     
// if (price != 1999) {
//     console.log("Correct Price");
// } else {
//     console.log("Not Correct Price");
// }
// if (price === 1999 && weather == 'bad') {
//     console.log("Correct Price and weather");
// } else {
//     console.log("Not Correct Price and weather");
// }
     
// if (price === 1999 || weather == 'bad') {
//     console.log("Price and/or weather is correct.");
// } else {
//     console.log("Not Correct Price and weather");
// }
     
// price > 2117 ? console.log('Const Price is Bigger than new price') : console.log('Const Price is Smaller than new price');

// if (5000) {
//     let hello = 5;
//     console.log(hello);
//     var Ahoj = 10
// } else {
//     let hi = 10;
//     var Dekuji = 20
// }
// console.log (Ahoj);

//Chapter!!! -- manipulating HTML and CSS --
// document.getElementById('')
// document.getElementsByClassName('')

// headingEl.textContent = 'Hello All!!';
// headingEl.innerHTML = 'Hello <span class="heading--big">All</span>!!';
// headingEl.insertAdjacentHTML('beforebegin','Hello <span class="heading--big">All</span>!!')
// headingEl.style.fontSize = '55px';
// headingEl.classList.add('heading--big');

const headingEl = document.querySelector('.heading');
// Chapter ---- Event Handler !!
const clickHandler = () => { 
    headingEl.style.color = 'blue';
    console.log('change color');
}


headingEl.addEventListener('click', clickHandler);

