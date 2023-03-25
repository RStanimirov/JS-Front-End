function loadCommits() {
    // Solution with Fetch API
    const BASE_URL = 'https://api.github.com/repos/';

    const username = document.getElementById('username');
    const repo = document.getElementById('repo');
    const commitsContainerUl = document.getElementById('commits');

    let usernameValue = username.value;
    let repoValue = repo.value;

    // it's not necessary to write methot get, as fetch will get it by default:
    fetch(`${BASE_URL}${usernameValue}/${repoValue}/commits`)
        .then((response) => {
            if (!response.ok) throw Error(response.status)
            return response;
        })
        .then((r) => r.json())
        .then((data) => {

            for (let { commit } of data) {
                let liElement = document.createElement('li');
                liElement.textContent = `${commit.author.name}: ${commit.message}`;
                commitsContainerUl.appendChild(liElement);
            }

        })
        .catch((err) => {
            let liElement = document.createElement('li');
            liElement.textContent = `${err} (Not Found)`;
            commitsContainerUl.appendChild(liElement);
        })
}