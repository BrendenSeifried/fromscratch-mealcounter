// import functions and grab DOM elements REORGINIZE 
const supply = document.getElementById('supplies');
const listFood = document.getElementById('list-food');
const listMeal = document.getElementById('list-meal');


// let state
let counters = [];
let meals = [];

function statsFood() {
    supply.textContent = '';
    for (let meal of meals) {
        const li = statsFood(meal);
        supply.append(li);
        console.log(statsfood);
    }
    console.log(statsfood);
}

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
