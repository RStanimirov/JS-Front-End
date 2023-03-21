function deleteByEmail() {
    let tableEntries = Array.from(document.querySelectorAll('tr'));
    // tableEntries.shift();
    let input = document.getElementsByName('email').item(0);
    let result = document.getElementById('result');

    for (let x of tableEntries) {
        let email = x.children[1];
        if (email.textContent === input.value) {
            // x.parentNode.removeChild(x);
            x.remove();
            result.textContent = "Deleted."
        } else {
            result.textContent = "Not found."
        }
    }
}