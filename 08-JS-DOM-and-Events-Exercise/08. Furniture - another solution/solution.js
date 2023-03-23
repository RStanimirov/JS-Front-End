function solve() {

  const inputArea = Array.from(document.getElementsByTagName('textarea'))[0];
  const outputArea = Array.from(document.getElementsByTagName('textarea'))[1];
  const tableBody = document.querySelector('tbody');

  const generateBtn = Array.from(document.getElementsByTagName('button'))[0];
  const buyBtn = Array.from(document.getElementsByTagName('button'))[1];

  generateBtn.addEventListener('click', generate);

  function generate(event) {
    let parsedArray = JSON.parse(inputArea.value);

    for (let x of parsedArray) {
      // let tableRowElement = document.createElement('tr');

      // let tdImage = document.createElement('td');
      // let tdName = document.createElement('td');
      // let tdPrice = document.createElement('td');
      // let tdFactor = document.createElement('td');
      // let tdMark = document.createElement('td');

      // tableRowElement.appendChild(tdImage);
      // tableRowElement.appendChild(tdName);
      // tableRowElement.appendChild(tdPrice);
      // tableRowElement.appendChild(tdFactor);
      // tableRowElement.appendChild(tdMark);

      // let image = document.createElement('img');
      // image.src = x.img;
      // tdImage.appendChild(image);
      // tdName.innerText = x.name;
      // tdPrice.innerText = x.price;
      // tdFactor.innerText = x.decFactor;

      // let checkBox = document.createElement('input');
      // checkBox.type = 'checkbox';
      // tdMark.appendChild(checkBox);

      // tableBody.appendChild(tableRowElement);
      let img = x['img'];
      let name = x['name'];
      let price = Number(x['price']);
      let decFactor = Number(x['decFactor']);
      tableBody.innerHTML += `<tr><td><img src="${img}"></td><td><p>${name}</p></td><td><p>${price}</p></td><td><p>${decFactor}</p></td><td><input type="checkbox"/></tr>`;
    }

    let tempBasket = [];
    let totalCost = 0;
    let averageDecoFactor = 0;

    let checkBoxes = Array.from(document.getElementsByTagName('input'));
    
    for (let x of checkBoxes) {
      buyBtn.addEventListener('click', buyEvent);
      function buyEvent(event) {
        if (x.checked === true) {
          tempBasket.push(x.parentNode.parentNode.children[1].innerText);
          totalCost += Number(x.parentNode.parentNode.children[2].innerText);
          averageDecoFactor += Number(x.parentNode.parentNode.children[3].innerText);
          outputArea.value = `Bought furniture: ${tempBasket.join(', ')}` + '\n'
            + `Total price: ${totalCost.toFixed(2)}` + '\n'
            + `Average decoration factor: ${averageDecoFactor / tempBasket.length}`;
        }
      }
    }
  }
}