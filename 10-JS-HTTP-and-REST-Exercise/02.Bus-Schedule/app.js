function solve() {

    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    const span = document.getElementsByClassName('info')[0];

    let nextStop = 'depot';
    let currentStop = '';

    //===================================DEPART====================================
    function depart() {
        fetch(`http://localhost:3030/jsonstore/bus/schedule/${nextStop}.json`)
            .then(res => {
                if (res.ok === false) {
                    throw new Error(`${res.status} - ${res.statusText}`);
                }
                return res;
            })
            .then(res => res.json())
            .then(data => {
                let { name, next } = data;
                nextStop = next;
                currentStop = name;
                span.textContent = `Next stop ${name}`;
                departBtn.disabled = true;
                arriveBtn.disabled = false;
            })
            .catch(err => {
                span.textContent = 'Error';
                departBtn.disabled = true;
                arriveBtn.disabled = true;
                console.error(err);
            })

    }
    //===========================ARRIVE===============================
    function arrive() {
        span.textContent = `Arriving at ${currentStop}`;
        currentStop = nextStop;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }
    return {
        depart,
        arrive
    };
}

let result = solve();