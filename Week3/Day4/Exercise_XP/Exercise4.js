document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('MyForm');
    const radiusInput = document.getElementById('radius');
    const volumeInput = document.getElementById('volume');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const r = parseFloat(radiusInput.value);
        if (!isNaN(r)) {
            const volume = (4/3) * Math.PI * Math.pow(r, 3);
            volumeInput.value = volume.toFixed(2);
        } else {
            volumeInput.value = '';
        }
    });
});
