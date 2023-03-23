function create(words) {

   let content = document.getElementById('content');

   for (let x of words) {
      let newDiv = document.createElement('div');
      let newP = document.createElement('p');

      newP.textContent = x;
      newP.style.display = 'none';

      newDiv.addEventListener('click', colorise);
      newDiv.appendChild(newP);
      content.appendChild(newDiv);

      function colorise (event) {
         // event.target.firstChild.style.display = 'block';
         newP.style.display = 'block';
      }
   }

   // console.log(content);

}