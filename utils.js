export function statsFood(item) {
    const li = document.createElement('li');
    li.textContent = `${item.player} (${item.points} Points)`;
    return li;
}

