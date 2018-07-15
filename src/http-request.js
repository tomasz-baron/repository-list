/** @module http-request */

/**
 * 
 * This function runs http get request to GitHub API
 * @param {string} userName string argument with user name from github repository
 * @returns {Array} Returns array with repositories data.
 * 
 */

function getList(userName) {
    const url = `https://api.github.com/users/${userName}/repos`;
    return fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to fetch data from GitHub');
            }
        });
}

export { getList };
