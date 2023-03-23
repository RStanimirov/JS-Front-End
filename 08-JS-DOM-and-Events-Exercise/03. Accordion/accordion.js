function toggle() {
    let button = document.getElementsByClassName('button')[0];
    let hiddenText = document.getElementById('extra');

    if (hiddenText.style.display === 'block') {
        hiddenText.style.display = 'none';
        button.textContent = 'More'    
    } else {
        hiddenText.style.display = 'block';
        button.textContent = 'Less';    
    }
}
