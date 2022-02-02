
export function rendFood(meal) {
    const li = document.createElement('li');
    li.textContent = `${meal.ingredient} ${meal.amount} ${meal.type}`;
    return li;
}


export function rendName(name) {
    const div = document.createElement('div');
    div.textcontent = `${name}`;
    return div;
}