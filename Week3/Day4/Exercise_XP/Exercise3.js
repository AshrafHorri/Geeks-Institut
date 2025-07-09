let allBoldItems;

function getBoldItems() {
    allBoldItems = document.querySelectorAll('#sentence strong');
}

function highlight() {
    allBoldItems.forEach(item => {
        item.style.color = 'blue';
    });
}

function returnItemsToDefault() {
    allBoldItems.forEach(item => {
        item.style.color = 'black';
    });
}

document.addEventListener('DOMContentLoaded', function() {
    getBoldItems();
    const p = document.getElementById('sentence');
    p.addEventListener('mouseover', highlight);
    p.addEventListener('mouseout', returnItemsToDefault);
});
