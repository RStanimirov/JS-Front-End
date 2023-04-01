function getInfo() {
    const stopId = document.getElementById('stopId').value;
    const stopNameContainer = document.getElementById('stopName');
    const bussesContainer = document.getElementById('buses');
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/businfo/';

    bussesContainer.innerHTML = ''; // this clears the buses info (the li elements)
    fetch(`${BASE_URL}${stopId}`, {method: 'GET'})
        .then((response) => {
            if (!response.ok) throw Error(response.status)
            return response;
        })
        .then((response) => response.json())
        .then((data) => {
            // let {buses, name} = data;
            let busses = data.buses;
            let name = data.name;
            for (let key in busses) {
                let li = document.createElement('li');
                li.textContent = `Bus ${key} arrives in ${busses[key]} minutes`;
                bussesContainer.appendChild(li);
                stopNameContainer.textContent = name;
            }
        })
        .catch((err) => {
            stopNameContainer.textContent = 'Error';
        })
}