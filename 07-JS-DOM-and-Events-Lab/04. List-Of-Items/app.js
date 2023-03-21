function addItem() {
    let ulGroup = document.getElementsByTagName('ul')[0];
    let input = document.getElementById('newItemText');
    let newLiElement = document.createElement('li');
    newLiElement.textContent = input.value;
    ulGroup.appendChild(newLiElement);
    // clear the input text:
    input.value = '';
}