// RS solution 80/100, after using firstChild instead of children[0] 100/100:
function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';

    // Form elements:
    const input = document.getElementById('title');
    const loadBtn = document.getElementById('load-button');
    const addBtn = document.getElementById('add-button');

    // Todo ul list --> add li elements to it; each li will be a separate task: 
    const todoListUl = document.getElementById('todo-list');

    loadBtn.addEventListener('click', onLoad);
    addBtn.addEventListener('click', onAdd);

    // Temp variables !!!!!!!!!!!!!!!!
    // let allTasks = {};
    let editTaskId = null;

    // Load the entries from the server -> GET:
    function onLoad(event) {
        if (event) {
            event.preventDefault();
        }
        todoListUl.innerHTML = '';
        fetch(BASE_URL)
            .then((response) => {
                if (!response.ok) throw Error(response.status)
                return response;
            })
            .then((response) => response.json())
            .then((data) => {
                // allTasks = data;
                let values = Object.values(data);

                for (let { name, _id } of values) {
                    let li = document.createElement('li');
                    let span = document.createElement('span');
                    let removeBtn = document.createElement('button');
                    let editBtn = document.createElement('button');

                    li.id = _id;
                    span.textContent = name;
                    removeBtn.textContent = 'Remove';
                    editBtn.textContent = 'Edit';
                    li.append(span, removeBtn, editBtn);
                    todoListUl.appendChild(li);

                    removeBtn.addEventListener("click", onRemove);
                    editBtn.addEventListener("click", onEdit);
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    // Add an entry to the server -> POST:
    function onAdd(event) {
        event.preventDefault();
        let name = input.value;
        let headers = {
            method: 'POST',
            body: JSON.stringify({ name })
        };
        if (name !== '') {
            fetch(BASE_URL, headers)
            .then((response) => {
                if (!response.ok) throw Error(response.status)
                return response;
            })
            .then((response) => response.json())
            .then((data) => {
                onLoad();
                input.value = '';
            })
            .catch((err) => {
                console.error(err);
            })
        }
    }

    // Edit DOM element -> 1) create the elements:
    function onEdit(event) {
        // editTaskId = event.currentTarget.parentElement.id;
        // let parentEl = event.currentTarget.parentElement;
        // let [span, _removeBtn, editBtn] = Array.from(parentEl.children);
        
        // let input = document.createElement('input');
        // input.value = parentEl.firstChild.textContent;
        // parentEl.prepend(input);
        // span.remove();
        // editBtn.remove();

        // let submitBtn = document.createElement('button');
        // parentEl.appendChild(submitBtn);
        // submitBtn.textContent = 'Submit';
        // submitBtn.addEventListener('click', patchEditedEntry);

        editTaskId = this.id;
        let parentEl = event.currentTarget.parentElement;
        let input = document.createElement('input');
        input.value = parentEl.children[0].textContent;
        parentEl.children[0].remove();
        parentEl.prepend(input);
        parentEl.children[2].remove();
        let submitBtn = document.createElement('button');
        parentEl.appendChild(submitBtn);
        submitBtn.textContent = 'Submit';
        submitBtn.addEventListener('click', patchEditedEntry);
    }

    // Edit DOM element -> 2) fetch the PATCH request:
    function patchEditedEntry(event) {
        editTaskId = this.parentElement.id;
        // let [input] = Array.from(this.parentElement.children);
        let input = this.parentElement.firstChild;
        let name = input.value;
        let headers = {
            method: 'PATCH',
            body: JSON.stringify({ name })
        };
        fetch(BASE_URL + editTaskId, headers)
            .then((response) => {
                if (!response.ok) throw Error(response.status)
                return response;
            })
            .then((response) => response.json())
            .then((data) => {
                onLoad();
            })
            .catch((err) => {
                console.error(err);
            })
    }

    // Delete element -> DELETE request:
    function onRemove(event) {
        editTaskId = event.currentTarget.parentElement.id;
        let headers = {
            method: 'DELETE',
        };
        fetch(BASE_URL + editTaskId, headers)
            .then((data) => {
                onLoad();
            })
    }
}

attachEvents();


// // Lecturer solution 100/100:
// function attachEvents() {
//     const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';
//     const titleInput = document.getElementById('title')
//     const loadBtn = document.getElementById('load-button')
//     const addBtn = document.getElementById('add-button')
//     const todoListContainer = document.getElementById('todo-list')

//     loadBtn.addEventListener("click", loadTasksHandler)
//     addBtn.addEventListener("click", addTaskHandler)
   
//     function loadTasksHandler(event) {
//         if (event) {
//             event.preventDefault()
//         }

//         todoListContainer.innerHTML = ''
//         fetch(BASE_URL)
//             .then((data) => data.json())
//             .then((tasksRes) => {
//                 const tasks = Object.values(tasksRes)
//                 for (const { _id, name } of tasks) {
//                     const li = document.createElement('li')
//                     const span = document.createElement('span')
//                     const removeBtn = document.createElement('button')
//                     const editBtn = document.createElement('button')

//                     li.id = _id
//                     span.textContent = name
//                     removeBtn.textContent = 'Remove'
//                     editBtn.textContent = 'Edit'

//                     editBtn.addEventListener("click", loadEditFormHandler)
//                     removeBtn.addEventListener("click", removeTaskHandler)

//                     li.append(span, removeBtn, editBtn)
//                     todoListContainer.appendChild(li)
//                 }
//             })
//             .catch((err) => {
//                 console.error(err);
//             })
//     }

//     function loadEditFormHandler(event) {
//         const liParent = event.currentTarget.parentNode
//         const [span, _removeBtn, editBtn] = Array.from(liParent.children)
//         const editInput = document.createElement('input')
//         editInput.value = span.textContent
//         liParent.prepend(editInput)
//         const submitBtn = document.createElement('button')
//         submitBtn.textContent = 'Submit'
//         submitBtn.addEventListener("click", submitTaskHandler)
//         liParent.appendChild(submitBtn)
//         span.remove()
//         editBtn.remove()
//     }

//     function submitTaskHandler(event) {
//         const liParent = event.currentTarget.parentNode
//         const id = event.currentTarget.parentNode.id
//         const [input] = Array.from(liParent.children)
//         const httpHeaders = {
//             method: 'PATCH',
//             body: JSON.stringify({ name: input.value })
//         }

//         fetch(`${BASE_URL}${id}`, httpHeaders)
//             .then(() => loadTasksHandler())
//             .catch((err) => {
//                 console.error(err)
//             })
//     }

//     function addTaskHandler(event) {
//         event.preventDefault()
//         const name = titleInput.value
//         const httpHeaders = {
//             method: 'POST',
//             body: JSON.stringify({ name })
//         }
//         fetch(BASE_URL, httpHeaders)
//             .then(() => {
//                 loadTasksHandler()
//                 titleInput.value = ''
//             })
//             .catch((err) => {
//                 console.error(err)
//             })

//     }

//     function removeTaskHandler(event) {
//         const id = event.currentTarget.parentNode.id
//         const httpHeaders = {
//             method: "DELETE",
//         }
//         fetch(`${BASE_URL}${id}`, httpHeaders)
//             .then(() => loadTasksHandler())
//             .catch((err) => {
//                 console.error(err)
//             })
//     }
// }


// attachEvents();
