function myMove() {
    const elem = document.getElementById('animate');
    const container = document.getElementById('container');
    let pos = 0;
    clearInterval(window.moveInterval);
    window.moveInterval = setInterval(frame, 1);
    function frame() {
        if (pos >= container.clientWidth - elem.clientWidth) {
            clearInterval(window.moveInterval);
        } else {
            pos++;
            elem.style.left = pos + 'px';
        }
    }
}
