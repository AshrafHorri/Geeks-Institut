document.addEventListener('DOMContentLoaded', function() {
    const allBooks = [
        {
            title: 'The Hobbit',
            author: 'J.R.R. Tolkien',
            image: 'https://covers.openlibrary.org/b/id/6979861-L.jpg',
            alreadyRead: true
        },
        {
            title: '1984',
            author: 'George Orwell',
            image: 'https://covers.openlibrary.org/b/id/7222246-L.jpg',
            alreadyRead: false
        }
    ];

    const section = document.querySelector('.listBooks');

    allBooks.forEach(book => {
        const bookDiv = document.createElement('div');
        const details = document.createElement('p');
        details.textContent = `${book.title} written by ${book.author}`;
        if (book.alreadyRead) {
            details.style.color = 'red';
        }
        const img = document.createElement('img');
        img.src = book.image;
        img.style.width = '100px';
        bookDiv.appendChild(details);
        bookDiv.appendChild(img);
        section.appendChild(bookDiv);
    });
});
