function attachEvents() {
    // Lecturer solution 100/100:
    const phoneBookContainer = document.getElementById('phonebook');
    const loadBtn = document.getElementById('btnLoad');
    const personInput = document.getElementById('person');
    const phoneInput = document.getElementById('phone');
    const createBtn  = document.getElementById('btnCreate');
    const BASE_URL = 'http://localhost:3030/jsonstore/phonebook/';

    loadBtn.addEventListener('click', loadPhoneBookHandler);
    createBtn.addEventListener('click', createPhoneBookHandler);

    async function loadPhoneBookHandler() {
        try {
            const phoneBookRes = await fetch(BASE_URL);
            let phoneBookData = await phoneBookRes.json();
            phoneBookData = Object.values(phoneBookData);
            phoneBookContainer.innerHTML = '';
            for (let {person, phone, _id} of phoneBookData) {
                let li = document.createElement('li');
                let button = document.createElement('button');
                button.textContent = 'Delete';
                button.id = _id;
                button.addEventListener('click', deletePhoneBookHandler);
                li.innerHTML = `${person}: ${phone}`;
                li.appendChild(button);
                phoneBookContainer.appendChild(li);
            } 
        } catch (error) {
            console.error(error);
            
        }
    }

    function createPhoneBookHandler() {
        const person = personInput.value;
        const phone = phoneInput.value;
        fetch(BASE_URL, {method: 'POST', body: JSON.stringify({ person, phone})})
        .then((res) => res.json())
        .then(() =>  {
            loadPhoneBookHandler();
            personInput.value = '';
            phoneInput.value = '';
        })
        .catch((err) => {
            console.error(err);
        });
    }

    function deletePhoneBookHandler(event) {
        let id = this.id;
        fetch(`${BASE_URL}${id}`, {method: 'DELETE'})
        .then((res) => res.json())
        .then(loadPhoneBookHandler)
        .catch((err) => {
            console.error(err);
        })
    }
}
attachEvents();

//     // RS solution 66/100 - because RS used Object.entries(data) and Lecturer used Object.values(data) 
//     // and then destrutured it (let {person, phone, _id} of values). Rewritten thus, RS gets 100/100 :
//     const phoneContainer = document.getElementById('phonebook');
//     const btnLoad = document.getElementById('btnLoad');
//     const personIn = document.getElementById('person');
//     const phoneIn = document.getElementById('phone');
//     const btnCreate = document.getElementById('btnCreate');
//     const BASE_URL = 'http://localhost:3030/jsonstore/phonebook/';

//     btnLoad.addEventListener('click', loadData);
//     btnCreate.addEventListener('click', createEntry);
    
//     // Load data from api server:
//     function loadData() {
//         fetch(BASE_URL)
//             .then((response) => {
//                 if (!response.ok) throw Error(response.status)
//                 return response;
//             })
//             .then((response) => response.json())
//             .then((data) => {
//                 phoneContainer.innerHTML = '';

//                 let tuple = Object.entries(data);
//                 for (let [k, v] of tuple) {
//                     let personName = v.person;
//                     let phoneNumber = v.phone;

//                     let deleteBtn = document.createElement('button');
//                     deleteBtn.textContent = 'Delete';
//                     deleteBtn.id = k;

//                     let li = document.createElement('li');
//                     li.textContent = `${personName}: ${phoneNumber}`;

//                     li.appendChild(deleteBtn);
//                     phoneContainer.appendChild(li);

//                     deleteBtn.addEventListener('click', deleteEntry);
//                 }
//             })
//             .catch((err) => {
//                 console.log(err);
//             })
//     }

//     // Create entry to api srver:
//     function createEntry() {
//         let person = personIn.value;
//         let phone = phoneIn.value;
//         let headers = {
//             method: 'POST',
//             body: JSON.stringify({ person, phone })
//         };
//         fetch(BASE_URL, headers)
//             .then((response) => {
//                 if (!response.ok) throw Error(response.status)
//                 return response;
//             })
//             .then((response) => response.json())
//             .then((data) => {
//                 loadData();
//                 personIn.value = '';
//                 phoneIn.value = '';
//             })
//             .catch((err) => {
//                 console.error(err);
//             })
//     }
//     // Delete entry:
//     function deleteEntry(event) {
//         let id = event.currentTarget.id;
//         let headers = {
//             method: 'DELETE'
//         };
//         fetch(`${BASE_URL}${id}`, headers)
//         .then((response) => {
//             if (!response.ok) throw Error(response.status)
//             return response;
//         })
//         .then((response) => response.json())
//         .then((data) => {
//             loadData();
//         })
//         .catch((err) => {
//             console.error(err);
//         });
//     }
// }
// attachEvents();