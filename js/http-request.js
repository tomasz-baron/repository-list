/** @module http-request */

/**
 * 
 * This function runs http get request to GitHub API
 * @param {string} userName string argument with user name from github repository
 * @returns {Array} Returns array with repositories data.
 * 
 */

getList = (userName) => {
    let auth = btoa( "tomasz-baron:" );
    const url = `https://api.github.com/users/${userName}/repos`;
    return fetch(url, {headers: { Authorization: "Basic " + auth }})
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to fetch data from GitHub');
            }
        });
};
