//import { statsFood, amountFood } from './utils.js';
// import functions and grab DOM elements REORGINIZE 
import { rendFood } from './utils.js';
import { rendName } from './utils.js';
//import { rendEverything } from './utils.js';

const supply = document.getElementById('supplies'); 
const listFood = document.getElementById('list-food'); 

const nameIt = document.getElementById('name-it');
const listNames = document.getElementById('list-names');

// const allTogether = document.getElementById('totals');
// const listAll = document.getElementById('main-section');


const clear = document.getElementById('undo');
const saveMeal = document.getElementById('save');


// let state
let counters = [];
let meals = [];
let names = [];

// function statsFood() {
//     supply.textContent = '';
//     for (let meal of meals) {
//         const li = statsFood(meal);
//         supply.append(li);
//         console.log(statsfood);
//     }
//     console.log(statsfood);
// }




function rendFoods() {
    listFood.textContent = '';
    for (let meal of meals) {
        const li = rendFood(meal);
        //listFood.appendChild(li);
        listFood.append(li);
    }
    //console.log(meal);
}


function rendNames() {
    listNames.textContent = '';
    for (let name of names) {
        const li = rendName(name);
        listNames.append(li);
        //console.log(name);
    }
   
}

// function rendEverythings() {
//     listAll.textContent = '';
//     for (let count of counters) {
//         const li = rendFood(count);
        
//         listAll.append(li);
//         //console.log(count);
//     }
//    //console.log(count);
// }

supply.addEventListener('submit', (e) => {
    e.preventDefault();
    const addSup = new FormData(supply);
    const userData = {
        ingredient: addSup.get('ingredient'),
        amount: Number(addSup.get('amount')),
        type: addSup.get('type'),
    };
   // console.log(userData);
    meals.push(userData);
    rendFoods();
    
});

// saveMeal.addEventListener('click', (e) => {    //NEW CODE
//     e.preventDefault();
//     const addName = new FormData(nameIt);
//     const addSup = new FormData(supply);
//     const userName = {
//         name: addName.get('name'),
        
//     };
//     const userData = {
//         ingredient: addSup.get('ingredient'),
//         amount: Number(addSup.get('amount')),
//         type: addSup.get('type'),
//     };
    
//     //console.log(userName);
//     names.push(userName, userData);
//     //names.push(userData);
//     rendNames();
  
// });

saveMeal.addEventListener('click', (e) => {        //WORKING CODE
    e.preventDefault();
    const addName = new FormData(nameIt);
    const userName = {
        name: addName.get('name'),
        ingredients: meals,
    };
    //console.log(userName);
    names.push(userName);
    rendNames();
  
});

// allTogether.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const addAll = new FormData(allTogether);
//     const userAll = {
//         ingredient: addAll.get('ingredient'),
//         amount: Number(addAll.get('amount')),
//         type: addAll.get('type'),
//         name: addAll.get('name'),
//     };
//     console.log(userAll);
//     counters.push(userAll);
//     rendEverythings();
    
// });

//counters.push(userData);
//console.log();

// function enterName() {
//     nameIt.textContent = '';
//     for (let meal of meals) {
//         const li = enterName(meal);
//         nameIt.append(li);
//     }
// }

// function clearMeals() {
//     meals = [];
//     listFood.textContent = '';
// }


clear.addEventListener('click', () => {
  // Step 2 -- add code to allow users to remove the most recent stat
    listFood.textContent = '';
    meals.pop();
    rendFoods();
    
    //rendFood();
    //clearMeals();
    //console.log(meals);
  // Hint -- how do you remove an element from an array?
  // Hint -- how can we rerender the stats using a function above?
});



  
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
