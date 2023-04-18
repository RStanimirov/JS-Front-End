window.addEventListener('load', solve);

function solve() {
    // RS 100/100:
    let formSection = document.getElementById('form-section');
    let tasksSection = document.getElementById('tasks-section');
    let totalPointsSection = document.getElementById('total-sprint-points');

    let form = document.getElementById('create-task-form');
    let hiddenInput = document.getElementById('task-id');

    let titleInput = document.getElementById('title');
    let descriptionInput = document.getElementById('description');
    let labelInput = document.getElementById('label');
    let pointsInput = document.getElementById('points');
    let assigneeInput = document.getElementById('assignee');

    let createBtn = document.getElementById('create-task-btn');
    let deleteBtn = document.getElementById('delete-task-btn')

    createBtn.addEventListener('click', onCreate);
    deleteBtn.addEventListener('click', onDelete);

    let counter = 1;
    let totalPoints = 0;
    let entriesCollection = {};

    // ===============================CREATE==================================
    function onCreate(event) {
        event.preventDefault();

        if (titleInput.value === '' 
            || descriptionInput.value === '' 
            || labelInput.value === '' 
            || pointsInput.value === '' 
            || assigneeInput.value === '') {
            return;
        }

        let taskId = `task-${counter}`;

        // Load the values for confirmDelete:
        let title = titleInput.value;
        let description = descriptionInput.value;
        let label = labelInput.value;
        let points = Number(pointsInput.value);
        let assignee = assigneeInput.value;

        entriesCollection[taskId] = {title, description, label, points, assignee};
        // console.log(entriesCollection)
        totalPoints += points;

        totalPointsSection.textContent = `Total Points ${totalPoints}pts`

        // DOM
        let article = document.createElement('article');
        article.className = 'task-card';
        article.id = taskId;

        let labelDiv = document.createElement('div');
        let labelInfo = '';
        if (labelInput.value === 'Feature') {
            labelInfo = 'feature';
            labelDiv.className = `task-card-label ${labelInfo}`;
            labelDiv.innerHTML = `Feature &#8865`;
        }
        else if (labelInput.value === 'Low Priority Bug') {
            labelInfo = 'low-priority';
            labelDiv.className = `task-card-label ${labelInfo}`;
            labelDiv.innerHTML = `Low Priority Bug &#9737`;
        }
        else if (labelInput.value === 'High Priority Bug') {
            labelInfo = 'high-priority';
            labelDiv.className = `task-card-label ${labelInfo}`;
            labelDiv.innerHTML = `High Priority Bug &#9888`;
        }
        
        let titleH3 = document.createElement('h3');
        titleH3.className = 'task-card-title';
        titleH3.textContent = titleInput.value;

        let descriptionP = document.createElement('p');
        descriptionP.className = 'task-card-description';
        descriptionP.textContent = descriptionInput.value;

        let pointsDiv = document.createElement('div');
        pointsDiv.className = 'task-card-points';
        pointsDiv.textContent = `Estimated at ${pointsInput.value} pts`

        let assigneeDiv = document.createElement('div');
        assigneeDiv.className = 'task-card-assignee';
        assigneeDiv.textContent = `Assigned to: ${assigneeInput.value}`

        let buttonsDiv = document.createElement('div');
        buttonsDiv.className = 'task-card-actions';
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        buttonsDiv.appendChild(deleteButton);

        article.appendChild(labelDiv);
        article.appendChild(titleH3);
        article.appendChild(descriptionP);
        article.appendChild(pointsDiv);
        article.appendChild(assigneeDiv);
        article.appendChild(buttonsDiv);

        tasksSection.appendChild(article);
        
        form.reset();

        counter ++;

        deleteButton.addEventListener('click', deleteLoader);

    }

    // ===========================DELETE-LOADER============================
    function deleteLoader() {
        let currentId = this.parentNode.parentNode.id;
        hiddenInput.value = currentId;

        let currentValues = entriesCollection[currentId];
        titleInput.value = currentValues.title;
        descriptionInput.value = currentValues.description;
        labelInput.value = currentValues.label;
        pointsInput.value = currentValues.points;
        assigneeInput.value = currentValues.assignee;

        createBtn.disabled = true;
        deleteBtn.disabled = false;

        titleInput.disabled = true;
        descriptionInput.disabled = true;
        labelInput.disabled = true;
        pointsInput.disabled = true;
        assigneeInput.disabled = true;

    }

    // ============================DELETE==================================
    function onDelete(event) {
        event.preventDefault();

        let currentId = hiddenInput.value;

        let elementForDeletion = document.getElementById(currentId);
        elementForDeletion.remove();
        
        totalPoints -= Number(pointsInput.value);
        totalPointsSection.textContent = `Total Points ${totalPoints}pts`

        createBtn.disabled = false;
        deleteBtn.disabled = true;

        form.reset();

        titleInput.disabled = false;
        descriptionInput.disabled = false;
        labelInput.disabled = false;
        pointsInput.disabled = false;
        assigneeInput.disabled = false;
    }
}