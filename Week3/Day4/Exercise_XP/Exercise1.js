document.addEventListener('DOMContentLoaded', function() {
    const h1 = document.querySelector('h1');
    console.log(h1);
    const article = document.querySelector('article');
    const paragraphs = article.querySelectorAll('p');
    const h2 = article.querySelector('h2');
    const h3 = article.querySelector('h3');
    const boldBtn = document.getElementById('boldBtn');
    if (paragraphs.length > 0) {
        article.removeChild(paragraphs[paragraphs.length - 1]);
    }
    h2.addEventListener('click', function() {
        h2.style.backgroundColor = 'red';
    });
    h3.addEventListener('click', function() {
        h3.style.display = 'none';
    });
    boldBtn.addEventListener('click', function() {
        article.querySelectorAll('p').forEach(p => {
            p.style.fontWeight = 'bold';
        });
    });
    h1.addEventListener('mouseenter', function() {
        h1.style.fontSize = Math.floor(Math.random() * 101) + 'px';
    });
    h1.addEventListener('mouseleave', function() {
        h1.style.fontSize = '';
    });
    if (paragraphs[1]) {
        paragraphs[1].addEventListener('mouseenter', function() {
            paragraphs[1].classList.add('fade-out');
        });
        paragraphs[1].addEventListener('mouseleave', function() {
            paragraphs[1].classList.remove('fade-out');
        });
    }
});
