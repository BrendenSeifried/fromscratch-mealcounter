export function statsFood(item) {
    const li = document.createElement('li');
    li.textContent = `${item.ingredient} (${item.amount} Amount)`;
    return li;
}

