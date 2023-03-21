function addItem() {
    let itemsCollection = document.getElementById('items');
    let input = document.getElementById('newItemText');
    let newElement = document.createElement('li');

    newElement.textContent = input.value;
    newAnchor = document.createElement('a');
    // newAnchor.setAttribute('href', '#');
    newAnchor.href = '#';
    newAnchor.textContent = '[Delete]';
    newAnchor.addEventListener('click', deleter);
    newElement.appendChild(newAnchor);
    itemsCollection.appendChild(newElement);
    input.value = '';
    
    function deleter(event) {
        let currentElement = event.currentTarget.parentElement;
        // currentElement.parentElement.removeChild(currentElement);
        currentElement.remove();
    }
}