function addItem() {
    let newText = document.getElementById('newItemText').value;
    let newValue = document.getElementById('newItemValue').value;
    let selectContainer = document.getElementById('menu');

    let newElement = document.createElement('option');
    
    selectContainer.appendChild(newElement);
    newElement.textContent = newText;
    newElement.value = newValue;
    
    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}
