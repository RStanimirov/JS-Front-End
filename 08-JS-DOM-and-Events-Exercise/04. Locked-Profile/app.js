// function lockedProfile() {
//     // Based on lecturer's solution:
//     let buttons = Array.from(document.getElementsByTagName('button'));
    
//     for (let x of buttons) {

//         x.addEventListener('click', toggleInfo);

//         function toggleInfo(event) {
//             let currentBtn = event.currentTarget;
//             let currentProfile = currentBtn.parentElement;
//             let children = Array.from(currentProfile.children);
//             // console.log(children);
//             let radioLockBtn = children[2];
//             let radioUnLockBtn = children[4];

//             let hiddenInfo = children[9];

//             if (radioUnLockBtn.checked) {
//                 if (currentBtn.textContent === 'Show more') {
//                     hiddenInfo.style.display = 'block';
//                     currentBtn.textContent = 'Hide it';
//                 } else {
//                     hiddenInfo.style.display = 'none';
//                     currentBtn.textContent = 'Show more';
//                 }
//             }
//         }
//     }
// }


// Another solution:
function lockedProfile() {
    const btns = [...document.getElementsByTagName('button')];
    btns.forEach(btn => btn.addEventListener('click', showHide));
 
    function showHide(event) {
        const button = event.target;
        const profile = button.parentNode;
        const moreInformation = profile.getElementsByTagName('div')[0];
        const lockStatus = profile.querySelector('input[type="radio"]:checked').value;
 
        if (lockStatus === 'unlock') {
            if (button.textContent === 'Show more') {
                moreInformation.style.display = 'inline-block';
                button.textContent = 'Hide it';
            } else if (button.textContent === 'Hide it') {
                moreInformation.style.display = 'none';
                button.textContent = 'Show more';
            }
        }
    }
}