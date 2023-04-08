window.addEventListener("load", solve);

// function solve() {
//   //TODO ....
  
//   // ================================PART-ONE====================================
//   // This is a temp object into which we shall pour the info entered in the form inputs:
//   const storyState = {
//     firstName: null,
//     lastName: null,
//     age: null,
//     title: null,
//     genre: null,
//     story: null,
//   };

//   // Get the info entered in the form inputs (DOM):
//   const inputDOMSelectors = {
//     firstName: document.getElementById('first-name'),
//     lastName: document.getElementById('last-name'),
//     age: document.getElementById('age'),
//     title: document.getElementById('story-title'),
//     genre: document.getElementById('genre'),
//     story: document.getElementById('story'),
//   };
//   const otherDOMSelectors = {
//     publishBtn: document.getElementById('form-btn'),
//     previewList: document.getElementById('preview-list'),
//     mainContainer: document.getElementById('main'),
//   };

//   // Click the PUBLISH button:
//   otherDOMSelectors.publishBtn.addEventListener('click', publishStoryHandler);

//   function publishStoryHandler() {
//     // Check if any of the inputs is empty by means of Object.entries (which returns array) :
//     const allFieldsHaveValue = Object.values(inputDOMSelectors)
//       .every((input) => input.value !== '');
//     if(!allFieldsHaveValue) {
//       return;
//     }

//     // Create the DOM elements by means of the helper createCustomElement function:
//     const { firstName, lastName, age, title, genre, story } = inputDOMSelectors;
//     const li = createCustomElement('li', otherDOMSelectors.previewList, null, ['story-info']);
//     const article = createCustomElement('article', li);
//     createCustomElement('h4', article, `Name: ${firstName.value} ${lastName.value}`);
//     createCustomElement('p', article, `Age: ${age.value}`);
//     createCustomElement('p', article, `Title: ${title.value}`);
//     createCustomElement('p', article, `Genre: ${genre.value}`);
//     createCustomElement('p', article, story.value);
//     const saveBtn = createCustomElement('button', li, 'Save Story', ['save-btn']);
//     const editBtn = createCustomElement('button', li, 'Edit Story', ['edit-btn']);
//     const delBtn = createCustomElement('button', li, 'Delete Story', ['delete-btn']);

//     editBtn.addEventListener('click', editStoryHandler);
//     delBtn.addEventListener('click', deleteStoryHandler);
//     saveBtn.addEventListener('click', saveStoryHandler);

//     // Take all entered input info and pour it into the temp storyState object:
//     for (const key in inputDOMSelectors) {
//       storyState[key] = inputDOMSelectors[key].value;
//     }

//     // Let's clear the inputs once we have clicked the publish button:
//     Object.values(inputDOMSelectors)
//       .forEach((input) => {
//         input.value = '';
//       })
    
//     // Finally, disable the PUBLISH button:
//     otherDOMSelectors.publishBtn.setAttribute('disabled', true);
//   }  

//   // ===============================PART-TWO===================================

//   function editStoryHandler() {
//     for (const key in inputDOMSelectors) {
//       inputDOMSelectors[key].value = storyState[key];
//     }
//     otherDOMSelectors.publishBtn.removeAttribute('disabled');
//     otherDOMSelectors.previewList.innerHTML = '';
//     createCustomElement('h3', otherDOMSelectors.previewList, 'Preview');
//   }

//   function deleteStoryHandler() {
//     const liItem = this.parentNode;
//     liItem.remove();
//     otherDOMSelectors.publishBtn.removeAttribute('disabled');
//   }

//   function saveStoryHandler() {
//     otherDOMSelectors.mainContainer.innerHTML = '';
//     createCustomElement('h1', otherDOMSelectors.mainContainer, 'Your scary story is saved!');
//   }


//   // We'll use below helper function in order to bild the DOM elements:
//   // let sampleParagraph = createCustomElement(
//   //   'p', document.getElementById('preview-list'), 'Sample paragraph text..', ['sample-p'], 'my-id', { src: 'link', href: 'http' });
//   // let sampleImage = createCustomElement(
//   //   'img', document.getElementById('preview-list'), null, ['sample-img'], 'my-id', { src: './woman-with-scythe-concept.jpg', href: 'http' });
  
//     function createCustomElement(type, parentNode, content, classes, id, attributes, useInnerHtml) {
//     const htmlElement = document.createElement(type);
//     if (content && useInnerHtml) {
//       htmlElement.innerHTML = content;
//     } else {
//       if (content && type !== 'input') {
//         htmlElement.textContent = content;
//       }
//       if (content && type === 'input') {
//         htmlElement.value = content;
//       }
//     }
//     if (classes && classes.length > 0) {
//       htmlElement.classList.add(...classes);
//     }
//     if (id) {
//       htmlElement.id = id;
//     }
//     // { src: 'link', href: 'http' }
//     if (attributes) {
//       for (const key in attributes) {
//         htmlElement.setAttribute(key, attributes[key])
//       }
//     }
//     if (parentNode) {
//       parentNode.appendChild(htmlElement);
//     }
//     return htmlElement;
//   }
// }


// Author's solution:
function solve() {
	
  let mainElement = document.getElementById("main");
  let bodyElement = document.querySelector(".body");
  
  let firstNameElement = document.getElementById("first-name");
  let lastNameElement = document.getElementById("last-name");
  let ageElement = document.getElementById("age");
  let storyTitleElement = document.getElementById("story-title");
  let genreElement = document.getElementById("genre");
  let storyElement = document.getElementById("story");
  let publishBtnElement = document.getElementById("form-btn");
  
  let previewUlElement = document.getElementById("preview-list");
  
  // Click the PUBLISH button -> if any of the inputs is empty, the function won't run:
  publishBtnElement.addEventListener('click', onPublish);
  function onPublish(e) {
    e.preventDefault();
    if (firstNameElement.value == ''
      || lastNameElement.value == ''
      || ageElement.value == ''
      || storyTitleElement.value == ''
      || storyElement.value == '') {
      return;
    }
	
	  // Create the DOM elements for visualising the info in the preview area:
    let liElement = document.createElement("li");
    liElement.setAttribute('class', 'story-info');
	  let articleElement = document.createElement("article");
    let fullName = document.createElement("h4");
    fullName.textContent = `Name: ${firstNameElement.value} ${lastNameElement.value}`;
    let Age = document.createElement("p");
    Age.textContent = `Age: ${ageElement.value}`;
    let StoryTitle = document.createElement("p");
    StoryTitle.textContent = `Title: ${storyTitleElement.value}`;
    let Genre = document.createElement("p");
    Genre.textContent = `Genre: ${genreElement.value}`;
    let StoryText = document.createElement("p");
    StoryText.textContent = `${storyElement.value}`;
    
	  let saveBtn = document.createElement("button");
    saveBtn.className = 'save-btn';
    saveBtn.textContent = 'Save Story';
    let editBtn = document.createElement("button");
    editBtn.setAttribute('class', 'edit-btn');
    editBtn.textContent = 'Edit Story';
    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute('class', 'delete-btn');
    deleteBtn.textContent = 'Delete Story';

    articleElement.appendChild(fullName);
    articleElement.appendChild(Age);
    articleElement.appendChild(StoryTitle);
    articleElement.appendChild(Genre);
    articleElement.appendChild(StoryText);

    liElement.appendChild(articleElement);
    liElement.appendChild(saveBtn);
    liElement.appendChild(editBtn);
    liElement.appendChild(deleteBtn);

    previewUlElement.appendChild(liElement);
	
	  // Get the values of the inputs before emptying them, so that they can be editted:
    let editFirstName = firstNameElement.value;
    let editLastName = lastNameElement.value;
    let editAge = ageElement.value;
    let editTitle = storyTitleElement.value;
    let editStory = storyElement.value;
	
	  // Empty the inputs:
    firstNameElement.value = "";
    lastNameElement.value = "";
    ageElement.value = "";
    storyTitleElement.value = "";
    storyElement.value = "";
	
	  // Disable the PUBLISH button:
    publishBtnElement.disabled = true;

    editBtn.addEventListener("click", onEdit);
    function onEdit() {
      firstNameElement.value = editFirstName;
      lastNameElement.value = editLastName;
      ageElement.value = editAge;
      storyTitleElement.value = editTitle;
      storyElement.value = editStory;
      liElement.remove();
      publishBtnElement.disabled = false;
    }
	
	  saveBtn.addEventListener("click", onSave);
    function onSave() {
      mainElement.remove();
      let h1Saved = document.createElement("h1");
      h1Saved.textContent = "Your scary story is saved!";
      let bodyElement2 = document.createElement("div");
      bodyElement2.setAttribute('id', 'main');
      bodyElement.appendChild(bodyElement2);
      bodyElement2.appendChild(h1Saved);
    }
	
    deleteBtn.addEventListener("click", onDelete);
    function onDelete() {
      liElement.remove();
      publishBtnElement.disabled = false;
    }
  }
  // End publish

}
// End solve