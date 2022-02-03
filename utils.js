
export function rendFood(meal) {
    const li = document.createElement('li');
    li.textContent = `${meal.ingredient} ${meal.amount} ${meal.type}`;
    return li;
}


export function rendName(name) {
    const li = document.createElement('li');
    li.textContent = `${name.name}`;
    return li;
}