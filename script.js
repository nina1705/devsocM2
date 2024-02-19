function fetchdata() {
    const username = document.getElementById('username').value;
    const userInfo = document.getElementById('UserInformation');

    fetch(`https://api.github.com/users/${username}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            return response.json();
        })
.then(data => {
            const userHtml = `
            <div id="user-info">
                
                <p>Username: ${data.login}</p>
                <p>Repositories: ${data.public_repos}</p>
                <p>Followers: ${data.followers}</p>
                <p>Following: ${data.following}</p>
                
            `;
            userInfo.innerHTML = userHtml;
        })
        .catch(error => {
            console.error('Error fetching data:', error.message);
            userInfo.innerHTML = `<p>Error. Please check the username and try again.</p>`;
        });
}
