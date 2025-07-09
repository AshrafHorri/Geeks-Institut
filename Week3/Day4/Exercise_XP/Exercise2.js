document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    console.log(form);
    const fnameInput = document.getElementById('fname');
    const lnameInput = document.getElementById('lname');
    console.log(fnameInput, lnameInput);
    const inputsByName = document.getElementsByName('firstname');
    const inputsByName2 = document.getElementsByName('lastname');
    console.log(inputsByName[0], inputsByName2[0]);
    const usersAnswer = document.querySelector('.usersAnswer');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        usersAnswer.innerHTML = '';
        const fname = fnameInput.value.trim();
        const lname = lnameInput.value.trim();
        if (fname && lname) {
            const li1 = document.createElement('li');
            li1.textContent = fname;
            const li2 = document.createElement('li');
            li2.textContent = lname;
            usersAnswer.appendChild(li1);
            usersAnswer.appendChild(li2);
        }
    });
});
