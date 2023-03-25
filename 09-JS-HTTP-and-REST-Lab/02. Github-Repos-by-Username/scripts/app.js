function loadRepos() {
	const inputUsername = document.getElementById('username').value;
	const outputUL = document.getElementById('repos');
	const URL = `https://api.github.com/users/${inputUsername}/repos`

	fetch(URL, { method: 'GET' })
		.then((response) => checkError(response))
		.then((response) => response.json())
		.then((data) => parseData(data))
		.catch((err) => {
			outputUL.textContent = err;
		})

	function checkError(response) {
		if (response.status >= 200 && response.status < 300) {
			return response;
		} else {
			throw Error(response.status);
		}
	}

	function createLi(input) {
		const li = document.createElement('li');
		const a = document.createElement('a');
		a.href = input;
		a.textContent = input;
		li.appendChild(a);
		outputUL.appendChild(li);
	}

	function parseData(data) {
		outputUL.textContent = '';
		data.forEach(d => {
			createLi(d["full_name"])
		});
	}
}


// Below is a solution with async function:

// async function loadRepos () {
// 	const html = {
// 		nameField: document.getElementById(`username`),
// 		resultE: document.getElementById(`repos`),
// 	}

// 	const data = await fetch(`https://api.github.com/users/${html.nameField.value}/repos`)
// 	const deserilized = await data.json()

// 	html.resultE.innerHTML = ''

// 	deserilized.forEach(({ full_name, html_url }) => {
// 		const li = document.createElement('li')
// 		const a = document.createElement('a')
// 		a.innerHTML = full_name
// 		a.href = html_url

// 		li.appendChild(a)
// 		html.resultE.appendChild(li)
// 	})
// }


// async function loadRepos() {

// 	const inputField = document.getElementById('username');
// 	const username = inputField.value;

// 	const ulRepos = document.getElementById('repos');
// 	ulRepos.innerHTML = '';

// 	const endpoint = `https://api.github.com/users/${username}/repos`;

// 	let errorHandle = '';

// 	try {
		
// 		const repos = await fetch(endpoint);
// 		errorHandle = `Status code: ${repos.status} ${repos.statusText}`;
// 		const reposData = await repos.json();
// 		reposData.forEach(repo => {
			
// 			const fullName = repo.full_name;
// 			const url = repo.html_url;
	
// 			const liElement = document.createElement('li');
// 			ulRepos.appendChild(liElement);
	
// 			const aHyperLinkRepo = document.createElement('a');
// 			aHyperLinkRepo.href = `${url}`;
// 			aHyperLinkRepo.textContent = `${fullName}`;
// 			liElement.appendChild(aHyperLinkRepo);
	
// 		});

// 	} catch {
		
// 		const liElement = document.createElement('li');
// 		ulRepos.appendChild(liElement);
// 		liElement.textContent = errorHandle;

// 	}

// }