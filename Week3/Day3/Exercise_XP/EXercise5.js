document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('container');
    console.log(container);

    const lists = document.querySelectorAll('.list');
    const firstUl = lists[0];
    const secondUl = lists[1];

    [...firstUl.children].forEach(li => {
        if (li.textContent === 'Pete') {
            li.textContent = 'Richard';
            li.style.border = '2px solid black';
        }
    });

    if (secondUl.children.length > 1) {
        secondUl.removeChild(secondUl.children[1]);
    }

    const myName = 'Achraf';
    lists.forEach(ul => {
        if (ul.children.length > 0) {
            ul.children[0].textContent = myName;
        }
    });

    lists.forEach(ul => ul.classList.add('student_list'));
    firstUl.classList.add('university', 'attendance');

    container.style.backgroundColor = 'lightblue';
    container.style.padding = '10px';

    [...secondUl.children].forEach(li => {
        if (li.textContent === 'Dan') {
            li.style.display = 'none';
        }
    });

    document.body.style.fontSize = '20px';

    if (container.style.backgroundColor === 'lightblue') {
        const user1 = firstUl.children[0]?.textContent || '';
        const user2 = secondUl.children[0]?.textContent || '';
        alert(`Hello ${user1} and ${user2}`);
    }
});
