
        const params = new URLSearchParams(window.location.search);
        const name = params.get('name') || '';
        const lastname = params.get('lastname') || '';
    const form = document.getElementById('userForm');
    const section = document.getElementById('displaySection');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const lastname = document.getElementById('lastname').value;
        section.textContent = `Name: ${name}, Lastname: ${lastname}`;
    });