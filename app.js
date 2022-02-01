//import { statsFood, amountFood } from './utils.js';
// import functions and grab DOM elements REORGINIZE 
const supply = document.getElementById('supplies');
const listFood = document.getElementById('list-food');
//const listMeal = document.getElementById('list-meal');
const nameIt = document.getElementById('name-it');

const clear = document.getElementById('undo');
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

function remFood() {
    listFood.textContent = '';
    for (let count of counters) {
        const li = remFood(count);
        listFood.appendChild(li);
    }
}

supply.addEventListener('submit', (e) => {
    e.preventDefault();
    const addSup = new FormData(supply);
    const userData = {
      

        ingredient: addSup.get('ingredient'),
        amount: Number(addSup.get('amount')),
     
    };
    //console.log(userData);
});
//counters.push(userData);
//console.log();


nameIt.addEventListener('click', (e) => {
    e.preventDefault();
    const addName = new FormData(nameIt);
    const userData = {
        name: addName.get('name'),
    };
    //console.log(userData);
});


clear.addEventListener('click', () => {
  // Step 2 -- add code to allow users to remove the most recent stat
    counters.pop();
    remFood();
    
  // Hint -- how do you remove an element from an array?
  // Hint -- how can we rerender the stats using a function above?
});
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
