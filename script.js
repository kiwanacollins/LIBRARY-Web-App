window.onload = function () {
  // Your JavaScript code

  let addNewBook = document.getElementById('btn-add-book');
  let newBookForm = document.getElementById('newBookForm');
  let form = document.getElementById('form');

  let check = document.getElementById('check');

  // Declare myLibrary in the global scope
  const myLibrary = [];

  function Book(author, title, numberOfPages, check) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.check = check;
  }

  function addBookToLibrary() {
    let arrayValues = [];
    for (let i = 0; i < myLibrary.length; i++) {
      let realValues = [];
      realValues.push(Object.values(myLibrary[i]));
      arrayValues.push(realValues);
    }
  
    // Remove the old bookDisplay div if it exists
    let oldBookDisplay = document.querySelector('.book-display');
    if (oldBookDisplay) {
      oldBookDisplay.remove();
    }
  
    let bookDisplay = document.createElement('div');
  // bookDisplay.className = 'book-display';
    bookDisplay.classList.add('book-display');
    for (let i = 0; i < arrayValues.length; i++) {
      let book = document.createElement('div');
          book.classList.add('book');
          book.innerHTML = `
            <p>Title: ${arrayValues[i][0][0]}</p>
            <p>Author: ${arrayValues[i][0][1]}</p>
            <p>Pages: ${arrayValues[i][0][2]}</p>
            <p>Read: ${arrayValues[i][0][3]}</p>
           
          `;

          
      // Create a new button element
     /* let button = document.createElement('button');
      button.className = 'button-00';

      // Set the button's text
      button.textContent = 'Delete';

      // Add the event listener to the delete button
      button.addEventListener('click', function () {
        // Get the index of the book in the array
        let index = arrayValues.findIndex((value) => value[0][0] === arrayValues[i][0][0]);

        // Remove the book from the myLibrary array
        myLibrary.splice(index, 1);

        // Remove the book element from the DOM
        book.remove();

        // Call the addBookToLibrary function to update the display
        addBookToLibrary();
      });

      // Add the button to the book element
      book.appendChild(button);
      bookDisplay.appendChild(book);*/
      // Add the bookDisplay div to the body
      document.body.appendChild(bookDisplay);

//  button.addEventListener('click', function () {
    // Implement the delete logic here
    // remove the book from myLibrary array
    // and update the display accordingly
    // You can access the book data using arrayValues[i][0]

    // Example:
    // myLibrary.splice(i, 1); // Remove the book at index i
    // Update the book display or re-render the library
   /* for (let i = 0; i < arrayValues.length; i++) {
      // ... rest of your code ...
    
      button.addEventListener('click', function () {
        // Remove the book from the myLibrary array
        myLibrary.splice(i, 1);

    
        // Remove the book element from the DOM
        book.remove();
    
        // Call the addBookToLibrary function to update the display
        addBookToLibrary();
      });
    
    
    }*/

 // });
 bookDisplay.appendChild(book);
    }
  
    let form = document.getElementById('display');
    form.appendChild(bookDisplay);
    document.body.appendChild(form);
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
  
    newBookForm.style.display = 'none';
  
    const author = document.getElementById('author');
    const title = document.getElementById('title');
    const pages = document.getElementById('pages');
  
    // Check if a book with the same title and author already exists
    const existingBookIndex = myLibrary.findIndex(
      (book) => book.title === title.value && book.author === author.value
    );
  
    if (existingBookIndex !== -1) {
      // If the book already exists, update the number of pages and read status
      myLibrary[existingBookIndex].numberOfPages = pages.value;
      myLibrary[existingBookIndex].check = check.checked;
    } else {
      // If the book does not exist, add it to the library
      const newBook = new Book(author.value, title.value, pages.value, check.checked);
      myLibrary.push(newBook);
    }
  
    // Clear the input fields
    author.value = '';
    title.value = '';
    pages.value = '';
    check.checked = false;
  
    addBookToLibrary();
  });
  
  addNewBook.addEventListener('click', () => {
    newBookForm.style.display = 'block';
  });

  addNewBook.addEventListener('click', () => {
    newBookForm.style.display = 'block';
  });
};
