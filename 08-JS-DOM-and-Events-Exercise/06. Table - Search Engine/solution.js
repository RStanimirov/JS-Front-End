function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let searchInput = document.getElementById('searchField');
   let rows = Array.from(document.querySelectorAll('tbody tr'));

   function onClick() {
      
      for (let x of rows) {
         let searchWord = searchInput.value;
         let trimmedContent = x.textContent.trim();

         // console.log(trimmedContent)
         if (x.classList.contains('select')) {
            x.classList.remove('select');
         } 
         if (trimmedContent.toLowerCase().includes(searchWord.toLowerCase())) {
            x.classList.add('select');
         } // optionally, use toLowerCase() / toUpperCase()
      }
      searchInput.value = '';
   }
}