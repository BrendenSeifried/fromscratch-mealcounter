//import { statsFood, amountFood } from './utils.js';
// import functions and grab DOM elements REORGINIZE 
const supply = document.getElementById('supplies');
const listFood = document.getElementById('list-food');
const listMeal = document.getElementById('list-meal');

const save = document.getElementById('confirm');


// let state
let counters = [];
let meals = [];

// function statsFood() {
//     supply.textContent = '';
//     for (let meal of meals) {
//         const li = statsFood(meal);
//         supply.append(li);
//         console.log(statsfood);
//     }
//     console.log(statsfood);
// }

supply.addEventListener('submit', (e) => {
    e.preventDefault();
    const addSup = new FormData(supply);
    const userData = {
      

        ingredient: addSup.get('ingredient'),
        amount: Number(addSup.get('amount')),
     
    };
    console.log(userData);
});
//counters.push(userData);
//console.log();


// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
