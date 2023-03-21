function focused() {
    let inputs = document.getElementsByTagName('input');
    let arrayFromInputs = Array.from(inputs);

    for (let x of arrayFromInputs) {
        x.addEventListener('focus', colorise);
        x.addEventListener('blur', fade);
    }

    function colorise(event) {
        event.target.parentNode.className = 'focused';
    }

    function fade(event) {
        event.target.parentNode.className = '';
    }

    // Array.from(inputs).forEach(i => {
    //     i.addEventListener('focus', (event) => {
    //         event.target.parentNode.className = 'focused';
    //     });

    //     i.addEventListener('blur', (event) => {
    //         event.target.parentNode.removeAttribute('class');
    //     });
    // });
}