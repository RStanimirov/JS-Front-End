function passwordValidator(myPassword) {

    let isValidLength = (myPassword) => myPassword.length >= 6 && myPassword.length <= 10;
    let hasLettersAndDigits = (myPassword) => /^\w+$/g.test(myPassword);
    let hasAtLeastTwoDigits = (myPassword) => [...myPassword.matchAll(/\d/g)].length >= 2;

    let isValidPass = true;

    if (!isValidLength(myPassword)) {
        console.log('Password must be between 6 and 10 characters');
        isValidPass = false;
    }

    if (!hasLettersAndDigits(myPassword)) {
        console.log('Password must consist only of letters and digits');
        isValidPass = false;
    }

    if (!hasAtLeastTwoDigits(myPassword)) {
        console.log('Password must have at least 2 digits');
        isValidPass = false;
    }

    if (isValidPass === true) {
        console.log('Password is valid')
    }

}

passwordValidator('Login123')
