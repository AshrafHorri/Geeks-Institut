function makeJuice(size) {
    const ingredients = [];

    function addIngredients(ingredient1, ingredient2, ingredient3) {
        ingredients.push(ingredient1, ingredient2, ingredient3);
    }

    function displayJuice() {
        const outputDiv = document.getElementById('output');
        const message = `The client wants a ${size} juice, containing ${ingredients.join(', ')}.`;
        outputDiv.innerHTML = message;
    }

    addIngredients('apple', 'orange', 'carrot');
    addIngredients('banana', 'strawberry', 'kiwi');

    displayJuice();
}

makeJuice('large');
