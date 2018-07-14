function getList(userName) {
    const url = `https://api.github.com/users/${userName}/repos`;
    return fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to fetch data about GitHub repositories');
            }
        });
}

export { getList };
