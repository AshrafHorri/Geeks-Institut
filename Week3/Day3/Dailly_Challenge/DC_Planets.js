document.addEventListener('DOMContentLoaded', function() {
    const planets = [
        { name: 'Mercury', color: 'gray', moons: 0 },
        { name: 'Venus', color: 'goldenrod', moons: 0 },
        { name: 'Earth', color: 'royalblue', moons: 1 },
        { name: 'Mars', color: 'orangered', moons: 2 },
        { name: 'Jupiter', color: 'saddlebrown', moons: 79 },
        { name: 'Saturn', color: 'khaki', moons: 83 },
        { name: 'Uranus', color: 'lightseagreen', moons: 27 },
        { name: 'Neptune', color: 'deepskyblue', moons: 14 }
    ];

    const section = document.querySelector('.listPlanets');

    planets.forEach((planet, idx) => {
        const planetDiv = document.createElement('div');
        planetDiv.classList.add('planet');
        planetDiv.style.backgroundColor = planet.color;
        planetDiv.textContent = planet.name;
        planetDiv.style.margin = '20px';
        planetDiv.style.display = 'inline-block';
        planetDiv.style.verticalAlign = 'top';
        // Add moons
        for (let i = 0; i < planet.moons; i++) {
            const moon = document.createElement('div');
            moon.classList.add('moon');
            // Position moons in a circle around the planet
            const angle = (i / planet.moons) * 2 * Math.PI;
            const radius = 60 + (i % 2) * 10;
            moon.style.left = 50 + Math.cos(angle) * radius + 'px';
            moon.style.top = 50 + Math.sin(angle) * radius + 'px';
            planetDiv.appendChild(moon);
        }
        section.appendChild(planetDiv);
    });
});
