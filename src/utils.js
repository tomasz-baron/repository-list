/** @module utils */

/**
 * 
 * This function replaces repos tag by div with header and content divs
 * @param {string} user string argument with user name from github repository
 * 
 */

function createContent(user) {
    const template = `
        <div id="header">
            <span class="user-name">Repositories list for username: ${user}</span>
        </div>
        <div id="content"></div>
    `;
    const contentHtml = document.createElement('div');
    contentHtml.className = 'container';
    contentHtml.innerHTML = template;
    const repos = document.getElementsByTagName('repos')[0];
    repos.parentNode.replaceChild(contentHtml, repos);
}

/**
 * 
 * This function filter list of repositories by <tt>updated_at</tt> field and maps fields
 * @param {Array} list array argument with repositories list from github
 * @param {string} updateDate string argument with date to filter <tt>list</tt> by updated_at field
 * @returns {Array} Returns list with repositories updated after <tt>updateDate</tt> and maped to fields: <tt>name</tt>, <tt>description</tt>, <tt>updated_at</tt> and <tt>url</tt>.
 * 
 */

function prepareList(list, updateDate) {
    return list
        .filter(repo => new Date(repo.updated_at) > new Date(updateDate))
        .map(repo => {
            return {
                name: repo.name,
                description: repo.description,
                updated_at: repo.updated_at,
                url: repo.html_url
            };
        });
}

export { createContent, prepareList };
