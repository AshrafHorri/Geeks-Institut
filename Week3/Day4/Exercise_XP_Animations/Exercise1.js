// Part I
setTimeout(function() {
    alert('Hello World');
}, 2000);

// Part II
setTimeout(function() {
    const container = document.getElementById('container');
    const p = document.createElement('p');
    p.textContent = 'Hello World';
    container.appendChild(p);
}, 2000);

// Part III
let intervalId;
let count = 0;
function addParagraph() {
    const container = document.getElementById('container');
    const p = document.createElement('p');
    p.textContent = 'Hello World';
    container.appendChild(p);
    count++;
    if (count >= 5) {
        clearInterval(intervalId);
    }
}
intervalId = setInterval(addParagraph, 2000);

document.getElementById('clear').addEventListener('click', function() {
    clearInterval(intervalId);
});
