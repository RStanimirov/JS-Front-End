// RS solution 100/100:
function attachEvents() {
  const BASE_URL = 'http://localhost:3030/jsonstore/collections/books/';
  // Load btn ab table body:
  const loadBooksBtn = document.getElementById('loadBooks');
  const tableBody = document.querySelector('tbody');
  // Form elements:
  const formTitle = document.querySelector('div > h3');
  const formInputs = Array.from(document.getElementsByTagName('input'));
  let formInputTitle = formInputs[0];
  let formInputAuthor = formInputs[1];
  const formButtonSubmit = document.querySelector('#form > button')

  loadBooksBtn.addEventListener('click', loadBooksFunction);
  formButtonSubmit.addEventListener('click', createBookFunction);

  // Temp variables !!!!!!!!!!!!!!!!
  let allBooks = {};
  let editBooksId = null;

  // LOAD the books from the api server and create the DOM elements:
  function loadBooksFunction() {
    fetch(BASE_URL)
      .then((response) => {
        if (!response.ok) throw Error(response.status)
        return response;
      })
      .then((response) => response.json())
      .then((data) => {
        allBooks = data;
        tableBody.innerHTML = '';
        let tuples = Object.entries(data);
        for (let [k, v] of tuples) {
          // console.log(`${v.author}, ${v.title}`);
          let idNumber = k;
          tableBody.innerHTML +=`<tr>
                                    <td>${v.title}</td>
                                    <td>${v.author}</td>
                                    <td>
                                      <button id="${idNumber}">Edit</button>
                                      <button id="${idNumber}">Delete</button>
                                    </td>
                                  </tr>`
        }
        
        let buttons = Array.from(document.getElementsByTagName('button'));
        buttons.shift();
        buttons.pop();
        // console.log(buttons);
        for (let i = 0; i < buttons.length; i++) {
          let x = buttons[i];
          if (i % 2 === 0) {
            x.addEventListener('click', editEventFunction);
          } else {
            x.addEventListener('click', deleteEventFunction);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  // CREATE / UPDATE toggler:
  function createBookFunction(event) {
    let title = formInputTitle.value;
    let author = formInputAuthor.value;

    if (title !== '' && author !== '') {
      if (formTitle.textContent === 'Edit FORM') {
        let headers = {
          method: 'PUT',
          body: JSON.stringify({ title, author })
        };
        fetch(`${BASE_URL}${editBooksId}`, headers)
          .then((response) => {
            if (!response.ok) throw Error(response.status)
            return response;
          })
          .then((response) => response.json())
          .then((data) => {
            loadBooksFunction();
            formInputTitle.value = '';
            formInputAuthor.value = '';
            formTitle.textContent = 'FORM';
            formButtonSubmit.textContent = 'Submit';
          })
          .catch((err) => {
            console.error(err);
          });

      } else {
        let headers = {
          method: 'POST',
          body: JSON.stringify({ title, author })
        };
        fetch(BASE_URL, headers)
          .then((response) => {
            if (!response.ok) throw Error(response.status)
            return response;
          })
          .then((response) => response.json())
          .then((data) => {
            loadBooksFunction();
            formInputTitle.value = '';
            formInputAuthor.value = '';
          })
          .catch((err) => {
            console.error(err);
          })
      }
    }
  }

  // EDIT button loader:
  function editEventFunction(event) {
    formButtonSubmit.textContent = 'Save';
    formTitle.textContent = 'Edit FORM';
    editBooksId = this.id;
    let bookById = allBooks[editBooksId]
    formInputTitle.value = bookById.title;
    formInputAuthor.value = bookById.author;
  }

  // DELETE button functionality:
  function deleteEventFunction(event) {
    let id = this.id;
    let headers = {
      method: 'DELETE'
    };
    fetch(BASE_URL + id, headers)
      .then((data) => {
        loadBooksFunction();
      })
  }
}
attachEvents();
//====================================END=====================================
