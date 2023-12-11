
    let library = [];

    function addBook() {
      const bookTitleInput = document.getElementById('bookTitle');
      const authorInput = document.getElementById('author');
      
      const bookTitle = bookTitleInput.value;
      const author = authorInput.value;

      if (!bookTitle || !author) {
        alert('Please enter both book title and author.');
        return;
      }

      const newBook = {
        id: library.length + 1,
        title: bookTitle,
        author: author
      };

      library.push(newBook);

      // Display the updated library
      displayLibrary();

      // Clear input fields
      bookTitleInput.value = '';
      authorInput.value = '';
    }

    function removeBook(id) {
      library = library.filter(book => book.id !== id);
      displayLibrary();
    }

    function displayLibrary() {
      const bookTable = document.getElementById('bookTable');
      bookTable.innerHTML = `
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Author</th>
          <th>Action</th>
        </tr>
      `;

      library.forEach(book => {
        const newRow = bookTable.insertRow(-1);

        const cellId = newRow.insertCell(0);
        const cellTitle = newRow.insertCell(1);
        const cellAuthor = newRow.insertCell(2);
        const cellAction = newRow.insertCell(3);

        cellId.innerText = book.id;
        cellTitle.innerText = book.title;
        cellAuthor.innerText = book.author;
        cellAction.innerHTML = `<button onclick="removeBook(${book.id})">Remove</button>`;
      });
    }
  
