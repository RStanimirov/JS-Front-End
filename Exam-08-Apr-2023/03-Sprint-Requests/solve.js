// RS 83/100:
function attachEvents() {

    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';

    let form = document.querySelector('#form-section > form');
    let loadBtn = document.getElementById('load-board-btn');
    let titleInput = document.getElementById('title');
    let descriptionInput = document.getElementById('description');
    let createBtn = document.getElementById('create-task-btn');

    let todoContainer = document.getElementById('todo-section');
    let inprogressContainer = document.getElementById('in-progress-section');
    let codereviewContainer = document.getElementById('code-review-section');
    let doneContainer = document.getElementById('done-section');

    loadBtn.addEventListener('click', onLoad);
    createBtn.addEventListener('click', onCreate);

    // -------------------------LOAD(GET-request)----------------------------
    function onLoad(event) {
        if (event) {
            event.preventDefault();
        }

        todoContainer.querySelector('.task-list').innerHTML = '';
        inprogressContainer.querySelector('.task-list').innerHTML = '';
        codereviewContainer.querySelector('.task-list').innerHTML = '';
        doneContainer.querySelector('.task-list').innerHTML = '';

        fetch(BASE_URL)
            .then((response) => {
                if (!response.ok) throw Error(response.status)
                return response;
            })
            .then((response) => response.json())
            .then((data) => {
                let values = Object.values(data);
                // console.log(values) // [{…}, {…}, {…}]
                for (let { title, description, status, _id } of values) {

                    let li = document.createElement('li');
                    li.className = 'task';

                    let h3 = document.createElement('h3');
                    h3.textContent = `${title}`;

                    let p = document.createElement('p');
                    p.textContent = `${description}`;

                    let button = document.createElement('button');
                    button.id = _id;

                    li.appendChild(h3);
                    li.appendChild(p);
                    li.appendChild(button);

                    if (status === 'ToDo') {
                        let container = todoContainer.querySelector('.task-list');
                        container.appendChild(li);
                        let newStatus = 'In Progress';
                        button.textContent = `Move to ${newStatus}`;
                    }
                    else if (status === 'In Progress') {
                        let container = inprogressContainer.querySelector('.task-list');
                        container.appendChild(li);
                        let newStatus = 'Code Review';
                        button.textContent = `Move to ${newStatus}`;
                    }
                    else if (status === 'Code Review') {
                        let container = codereviewContainer.querySelector('.task-list');
                        container.appendChild(li);
                        let newStatus = 'Done';
                        button.textContent = `Move to ${newStatus}`;
                    }
                    else if (status === 'Done') {
                        let container = doneContainer.querySelector('.task-list');
                        container.appendChild(li);
                        let newStatus = 'Close';
                        button.textContent = `${newStatus}`;
                    }

                    if (button.textContent !== 'Close') {
                        button.addEventListener('click', onMove);
                    } else {
                        button.addEventListener('click', onClose);
                    }
                }
                titleInput.value = '';
                descriptionInput.value = '';
            })
            .catch((err) => {
                console.error(err);
            })

    }

    // -------------------------CREATE(POST request)----------------------------
    function onCreate(event) {
        event.preventDefault();
        let title = titleInput.value;
        let description = descriptionInput.value;
        let status = 'ToDo';
        let headers = {
            method: 'POST',
            body: JSON.stringify({ title, description, status })
        }

        if (title === '' || description === '' || status === '' ) {
            return;
        } 

        fetch(BASE_URL, headers)
            .then((response) => {
                if (!response.ok) throw Error(response.status)
                return response;
            })
            .then((response) => response.json())
            .then((data) => {
                onLoad();
                // form.reset();
                
            })
            .catch((err) => {
                console.error(err);
            })
    }

    // -------------------------MOVE(PATCH request)----------------------------
    function onMove(event) {
        // let taskContainer = this.parentNode;
        let newStatus = '';
        let currentId = this.id;

        // console.log(this.innerText);

        if (this.innerText === 'Move to Done') {
            newStatus = 'Done';
        } 
        else if (this.innerText === 'Move to Code Review') {
            newStatus = 'Code Review';
        } 
        else if (this.innerText === 'Move to In Progress') {
            newStatus = 'In Progress';
        }
        else if (this.innerText === 'Close') {
            let headers = {
                method: 'DELETE'
            };
            fetch(BASE_URL + currentId, headers)
                .then(() => onLoad())
                .catch((err) => console.error(err))
        } 

        let headers = {
            method: 'PATCH',
            body: JSON.stringify({
                "status": newStatus
            })
        }
        
        fetch(BASE_URL + currentId, headers)
            .then(() => {
                onLoad();
            })
            .catch((err) => console.error(err))

    }

    // -------------------------DELETE(DELETE request)----------------------------

    function onClose(event) {
        let currentId = this.id;
        let headers = {
            method: 'DELETE',
        };
        fetch(BASE_URL + currentId, headers)
            .then((data) => {
                onLoad();
            })
            .catch((err) => console.error(err))
    }
}

attachEvents()