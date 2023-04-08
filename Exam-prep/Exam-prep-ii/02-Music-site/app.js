window.addEventListener('load', solve);

function solve() {
    //TODO
    // let contentWrapper = document.getElementById('wrapper');
    // let inputFormSection = document.getElementById('append-song');
    // let likesSection = document.getElementById('total-likes');    

    let addedSongsSection = document.getElementById('all-hits');
    let savedSongSection = document.getElementById('saved-hits');
    let addedSongsDiv = addedSongsSection.firstElementChild;
    let savedSongsDiv = savedSongSection.firstElementChild;

    let tempLikes = document.querySelector('#total-likes > div > p');
    // let totalLikesParagraph = document.querySelector('#total-likes > div > p');

    let genreInput = document.getElementById('genre');
    let songNameInput = document.getElementById('name');
    let authorInput = document.getElementById('author');
    let dateInput = document.getElementById('date');

    let addButton = document.getElementById('add-btn');

    // Click the ADD button -> if any of the inputs is empty, the function won't run:
    addButton.addEventListener('click', onPublish);
    function onPublish(e) {
        e.preventDefault();
        if (genreInput.value == ''
            || songNameInput.value == ''
            || authorInput.value == ''
            || dateInput.value == '') {
            return;
        }

        // Create the DOM elements for visualising the info in the preview area:
        let infoDiv = document.createElement('div');
        infoDiv.setAttribute('class', 'hits-info');
        let image = document.createElement('img');
        image.src = './static/img/img.png';
        let genreH2Element = document.createElement('h2');
        genreH2Element.textContent = `Genre: ${genreInput.value}`;
        let songNameH2Element = document.createElement('h2');
        songNameH2Element.textContent = `Name: ${songNameInput.value}`;
        let authorH2Element = document.createElement('h2');
        authorH2Element.textContent = `Author: ${authorInput.value}`;
        let dateH2Element = document.createElement('h3');
        dateH2Element.textContent = `Date: ${dateInput.value}`;

        let saveBtn = document.createElement('button');
        saveBtn.className = 'save-btn';
        saveBtn.textContent = 'Save song';
        let likeBtn = document.createElement('button');
        likeBtn.className = 'like-btn';
        likeBtn.textContent = 'Like song';
        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';

        infoDiv.appendChild(image);
        infoDiv.appendChild(genreH2Element);
        infoDiv.appendChild(songNameH2Element);
        infoDiv.appendChild(authorH2Element);
        infoDiv.appendChild(dateH2Element);
        infoDiv.appendChild(saveBtn);
        infoDiv.appendChild(likeBtn);
        infoDiv.appendChild(deleteBtn);

        addedSongsDiv.appendChild(infoDiv);

        // Empty the inputs: 
        // document.querySelector('form').reset();
        genreInput.value = '';
        songNameInput.value = '';
        authorInput.value = '';
        dateInput.value = '';

        likeBtn.addEventListener('click', onLike);
        saveBtn.addEventListener('click', onSave);
        deleteBtn.addEventListener('click', onDelete);

        // Like btn handler:
        function onLike() {
            let value = Number(tempLikes.textContent.split(': ')[1]);
            let text = tempLikes.textContent.split(': ')[0];
            value += 1;
            let newLikeStatus = `${text}: ${value}`;
            tempLikes.textContent = newLikeStatus;
            // e.currentTarget.disabled = true;
            likeBtn.disabled = true;
        }

        // Save btn handler:
        function onSave() {
            savedSongsDiv.appendChild(infoDiv);
            infoDiv.children[5].remove();
            infoDiv.children[5].remove();
            // let child = document.getElementsByClassName('hits-info');
            // child.innerHTML = '';
        }

        // Delete btn handler:
        function onDelete() {
            deleteBtn.parentNode.remove();
        }

    }
    // end of onPublish event

}
// end of solve