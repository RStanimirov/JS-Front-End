function solve() {

  // first of all, get the text areas and the buttons:
  let textAreas = Array.from(document.getElementsByTagName('textarea'));
  let parseJsonArea = textAreas[0];
  let outputArea = textAreas[1];
  // buttons:
  let buttons = Array.from(document.getElementsByTagName('button'));
  let generateBtn = buttons[0];
  let buyBtn = buttons[1];
  // then, get the tbody html element which will hold the new table row elements:
  let tableBody = document.querySelector('.table > tbody');
  // then, create the temp variables which will hold the info for the bought items:
  let tempBasket = [];
  let totalCost = 0;
  let averageDecoFactor = 0; 
  // then, attach a click event -> generate btn should take the JSON file and parse it:
  generateBtn.addEventListener('click', parseJson);

  function parseJson(event) {
    let data = JSON.parse(parseJsonArea.value);
    for (let x of data) {
      let image = x['img'];
      let name = x['name'];
      let price = Number(x['price']);
      let decoFactor = Number(x['decFactor']);
      // console.log(name, image, price, decoFactor);

      // total 11 elements are created via the helper createElement function:
      let rowElement = createElement('tr', '', tableBody);
      let tdFirstElement = createElement('td', '', rowElement);
      let tdSecondElement = createElement('td', '', rowElement);
      let tdThirdElement = createElement('td', '', rowElement);
      let tdFourthElement = createElement('td', '', rowElement);
      let tdFifthElement = createElement('td', '', rowElement);
      let imgEl = createElement('img', '', tdFirstElement, '', '', {src: image});
      let nameEl = createElement('p', name, tdSecondElement);
      let priceEl = createElement('p', price, tdThirdElement);
      let decoEl = createElement('p', decoFactor, tdFourthElement);
      let checkBox = createElement('input', '', tdFifthElement, '', '', {type: 'checkbox'});
    }

    let checkBoxes = Array.from(document.getElementsByTagName('input'));
    for (let x of checkBoxes) {
      buyBtn.addEventListener('click', buyEvent);
      function buyEvent(event) {
        if (x.checked === true) {
          tempBasket.push(x.parentNode.parentNode.childNodes[1].textContent);
          totalCost += Number(x.parentNode.parentNode.childNodes[2].textContent);
          averageDecoFactor += Number(x.parentNode.parentNode.childNodes[3].textContent);
          outputArea.value = `Bought furniture: ${tempBasket.join(', ')}`+ '\n' 
          + `Total price: ${totalCost.toFixed(2)}`+ '\n' 
          + `Average decoration factor: ${averageDecoFactor/tempBasket.length}`;
        }
      }
    }
  }

  // Below helper function assists to create various DOM elements. 
  // We may have as inputs some html elements, such as:
  // html type = string, e.g. 'p', 'div', 'p', etc.
  // html content = string, some text content. e.g. 'Clic here', 'My Blog', etc.
  // html parentNode = variable
  // html id = string
  // html classes = could come as array e.g. ['main-list', 'intro-div', etc.]
  // html attributes = we could have an object e.g. {src: 'link to image', or a href: 'link to site', etc. }

  function createElement(type, content, parentNode, id, classes, attributes) {
    let myHtmlElement = document.createElement(type);
    // beware the exam task might havetextArea !!!!!
    if (content && type !== 'input') {
      myHtmlElement.textContent = content;
    }
    if (content && type === 'input') {
      myHtmlElement.value = content;
    }
    if (parentNode) {
      parentNode.appendChild(myHtmlElement);
    }
    if (id) {
      myHtmlElement.id = id;
    }
    if (classes) {
      myHtmlElement.classList.add(...classes);
    }
    if (attributes) {
      for (let key in attributes) {
        myHtmlElement.setAttribute(key, attributes[key])
      }
    }
    return myHtmlElement;
  }
}