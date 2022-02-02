
export function rendFood(meal) {
    const li = document.createElement('li');
    li.textContent = `${meal.ingredient} ${meal.amount}`;
    return li;
}


