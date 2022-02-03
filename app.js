//import { statsFood, amountFood } from './utils.js';
// import functions and grab DOM elements REORGINIZE 
import { rendFood } from './utils.js';
import { rendName } from './utils.js';
//import { rendEverything } from './utils.js';

const supply = document.getElementById('supplies'); 
const listFood = document.getElementById('list-food'); 

const nameIt = document.getElementById('name-it');
const listNames = document.getElementById('list-names');

const clear = document.getElementById('undo');
const saveMeal = document.getElementById('save');


// let state
//let counters = [];
let meals = [];
let names = [];

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


clear.addEventListener('click', () => {
    listFood.textContent = '';
    meals.pop();
    rendFoods();
});