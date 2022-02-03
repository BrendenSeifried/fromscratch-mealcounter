
export function rendFood(meal) {
    const li = document.createElement('li');
    li.textContent = `${meal.ingredient} ${meal.amount} ${meal.type}`;
    return li;
}


// export function rendName(name) {
//     const li = document.createElement('li');
//     li.textContent = `${name.name}`;
//     return li;
// }

// export function rendEverything(every) {
//     const li = document.createElement('li');
//     li.textContent = ` ${every.name} : ${every.ingredient} ${every.amount} ${every.type} `;
//     return li;
// }


export function rendName(name) {
    const li = document.createElement('li');
    const ul = document.createElement('ul');
    const p = document.createElement('p');

    p.textContent = `${name.name} :`;


    for (let meal of name.ingredients) {
        const li = rendFood(meal);
        ul.append(li);
        //console.log(name);
    }
   // console.log(name);
    li.append(p, ul);
    return li;
}
