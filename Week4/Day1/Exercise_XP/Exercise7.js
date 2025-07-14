(function(username) {
    const addUserToNavbar = (name) => {
        const navbar = document.getElementById('navbar');

        const userInfoDiv = document.createElement('div');
        userInfoDiv.className = 'user-info';

        const profilePic = document.createElement('img');
        profilePic.src = 'https://via.placeholder.com/40';
        profilePic.alt = `${name}'s profile picture`;

        const usernameSpan = document.createElement('span');
        usernameSpan.textContent = `Welcome, ${name}!`;

        userInfoDiv.appendChild(profilePic);
        userInfoDiv.appendChild(usernameSpan);

        navbar.appendChild(userInfoDiv);
    };

    document.addEventListener('DOMContentLoaded', function() {
        addUserToNavbar(username);
    });
})('John');
