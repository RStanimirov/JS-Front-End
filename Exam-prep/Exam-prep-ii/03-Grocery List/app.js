function attachEvents() {

    const BASE_URL = 'http://localhost:3030/jsonstore/grocery/';

    // Form elements:
    const form = document.querySelector('.list');
    const formProduct = document.getElementById('product');
    const formCount = document.getElementById('count');
    const formPrice = document.getElementById('price');
    const formAddBtn = document.getElementById('add-product');
    const formUpdateBtn = document.getElementById('update-product');
    const formLoadBtn = document.getElementById('load-product');

    // Table container elements:
    let tableContainer = document.getElementById('table');
    let tableContainerContent = document.getElementById('tbl-content');
    let tableBody = document.getElementById('tbody');

    // Temp variables !!!!!!!!!!!!!!
    // let currentProducts = [];
    // let productToEdit = {};
    let tempId = null;

    
    // -------------------------LOAD(GET request)----------------------------
    formLoadBtn.addEventListener('click', onLoad);
    function onLoad(event) {
        if (event) {
            event.preventDefault();
        }
        tableBody.innerHTML = '';
        fetch(BASE_URL)
            .then((response) => {
                if (!response.ok) throw Error(response.status)
                return response;
            })
            .then((response) => response.json())
            .then((data) => {
                let values = Object.values(data);
                // console.log(values) // [{…}, {…}, {…}]
                for (let { product, count, price, _id } of values) {

                    let tr = document.createElement('tr');
                    tr.id = _id;

                    let tdName = document.createElement('td');
                    tdName.className = 'name';
                    tdName.textContent = `${product}`;

                    let tdCount = document.createElement('td');
                    tdCount.className = 'count-product';
                    tdCount.textContent = `${count}`;

                    let tdPrice = document.createElement('td');
                    tdPrice.className = 'product-price';
                    tdPrice.textContent = `${price}`;

                    let tdButtons = document.createElement('td');
                    tdButtons.className = 'btn';
                    let btnUpdate = document.createElement('button');
                    btnUpdate.className = 'update';
                    btnUpdate.textContent = 'Update';
                    let btnDelete = document.createElement('button');
                    btnDelete.className = 'delete';
                    btnDelete.textContent = 'Delete';

                    tdButtons.appendChild(btnUpdate);
                    tdButtons.appendChild(btnDelete);
                    tr.appendChild(tdName);
                    tr.appendChild(tdCount);
                    tr.appendChild(tdPrice);
                    tr.appendChild(tdButtons);
                    tableBody.appendChild(tr);

                    btnDelete.addEventListener('click', onDelete);
                    btnUpdate.addEventListener('click', onEdit);
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    // -------------------------ADD(POST request)-----------------------------
    formAddBtn.addEventListener('click', onAdd);
    function onAdd(event) {
        event.preventDefault();
        let product = formProduct.value;
        let count = formCount.value;
        let price = formPrice.value;
        let headers = {
            method: 'POST',
            body: JSON.stringify({ product, count, price })
        };
        fetch(BASE_URL, headers)
            .then((response) => {
                if (!response.ok) throw Error(response.status)
                return response;
            })
            .then((response) => response.json())
            .then((data) => {
                onLoad();
                form.reset();
            })
            .catch((err) => {
                console.error(err);
            })
    }

    // -------------------------EDIT(Loader prior to PATCH )------------------
    function onEdit(event) {
        tempId = event.currentTarget.parentElement.parentElement.id;
        formUpdateBtn.removeAttribute('disabled');
        // console.log(tempId);
        formProduct.value = this.parentElement.parentElement.children[0].textContent;
        formCount.value = this.parentElement.parentElement.children[1].textContent;
        formPrice.value = this.parentElement.parentElement.children[2].textContent;
        formUpdateBtn.addEventListener('click', patchRequestHandler)
    }
    // -------------------------EDIT(PATCH request)--------------------------
    function patchRequestHandler(event) {
        let product = formProduct.value;
        let count = formCount.value;
        let price = formPrice.value;

        let headers = {
            method: 'PATCH',
            body: JSON.stringify({ product, count, price })
        };
        fetch(BASE_URL + tempId, headers)
            .then((response) => {
                if (!response.ok) throw Error(response.status)
                return response;
            })
            .then((response) => response.json())
            .then((data) => {
                onLoad();
                form.reset();
                formUpdateBtn.setAttribute('disabled', true);
            })
            .catch((err) => {
                console.error(err);
            })
    }

    // --------------------------DELETE(DELETE request)------------------------
    function onDelete(event) {
        tempId = event.currentTarget.parentElement.parentElement.id;
        let headers = {
            method: 'DELETE',
        };
        fetch(BASE_URL + tempId, headers)
            .then((data) => {
                onLoad();
            })
    }

}

attachEvents();