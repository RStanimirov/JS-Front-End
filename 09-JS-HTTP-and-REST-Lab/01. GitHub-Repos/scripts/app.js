function loadRepos() {
   let resultDiv = document.getElementById('res');

   BASE_URL = 'https://api.github.com/users/testnakov/repos';

   fetch(BASE_URL, {method: 'GET'})
   .then((r) => r.text())
   .then((data) => {resultDiv.textContent = data})
   .catch((err) => {console.log(err)});

}