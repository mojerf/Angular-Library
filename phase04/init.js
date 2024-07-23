async function fetchData() {
    const url = 'https://raw.githubusercontent.com/Star-Academy/codestar-documents/master/static/datasets/books.json';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch the JSON file:', error);
    }
}

async function renderBooks () {
    const data = await fetchData();
    const article = document.querySelector('article');
    data.forEach(element => {
        const book = document.createElement('div');
        const descriptionContainer = document.createElement('div')
        const bookName = document.createElement('h3');
        const author = document.createElement('span');
        const price = document.createElement('span');
        const genre = document.createElement('span');
        const publishDate = document.createElement('span');
        const image = document.createElement('img');
        const imageContainer = document.createElement('div');
        const infoContainer = document.createElement('div');
        const authorTitle = document.createElement('p')
        const priceTitle = document.createElement('p')
        const genreTitle = document.createElement('p')
        const dateTitle = document.createElement('p')
        
        bookName.textContent = element.name;
        author.textContent = element.author;
        price.textContent = `$${element.price}`;
        genre.textContent = element.genre;
        publishDate.textContent = element.publishData;
        image.src = element.image;
        authorTitle.textContent = 'Author :';
        priceTitle.textContent = 'Price :';
        genreTitle.textContent = 'Genre :';
        dateTitle.textContent = 'Publish Date :';

        descriptionContainer.className = 'info'
        bookName.className = 'title'
        author.className = 'author'
        price.className = 'price'
        genre.className = 'genre'
        publishDate.className = 'date'
        image.className = 'book-image'
        book.className = 'book'
        infoContainer.className = 'info-container'
        imageContainer.className = 'image-container'
        authorTitle.className = 'small-title';
        priceTitle.className = 'small-title';
        genreTitle.className = 'small-title';
        dateTitle.className = 'small-title';
        
        imageContainer.appendChild(image)
        book.appendChild(imageContainer);
        descriptionContainer.appendChild(bookName);
        descriptionContainer.appendChild(authorTitle);
        descriptionContainer.appendChild(author);
        descriptionContainer.appendChild(priceTitle);
        descriptionContainer.appendChild(price);
        descriptionContainer.appendChild(genreTitle);
        descriptionContainer.appendChild(genre);
        descriptionContainer.appendChild(dateTitle);
        descriptionContainer.appendChild(publishDate);
        infoContainer.appendChild(descriptionContainer);
        book.appendChild(infoContainer)

        article.appendChild(book);

    });
}

renderBooks ()