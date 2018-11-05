/** @module utils */

/**
 * 
 * This function filter list of repositories by <tt>updated_at</tt> field and maps fields
 * @param {Array} list array argument with repositories list from github
 * @param {string} updateDate string argument with date to filter <tt>list</tt> by updated_at field
 * @returns {Array} Returns list with repositories updated after <tt>updateDate</tt> and maped to fields: <tt>name</tt>, <tt>description</tt>, <tt>updated_at</tt> and <tt>url</tt>.
 * 
 */

prepareList = (list, updateDate) => {
    return list
        .filter(repo => new Date(repo.updated_at) > new Date(updateDate))
        .map(({name, description, updated_at, html_url}) => {
            return {name, description, updated_at, html_url};
        });
};

/**
 * 
 * This function checks the correct date pattern
 * @param {string} update string argument with date to check correctness 
 * @returns {boolean} If <tt>update</tt> is correct returns true, if not returns false
 * 
 */

validateDate = (update) => {
    const parts = update.split('-');
    const d = new Date(parts[0], parts[1] - 1, parts[2]);
    return d && (d.getMonth() + 1) === +parts[1];
};

/**
 * 
 * This function checks correctness of the dataset parameters
 * @param {string} user string argument with user name from github repository
 * @param {string} update string argument with date in pattern: 'YYYY-MM-DD'
 * @throws Throws errors when user or update is empty or update is not correct date
 * 
 */

validateParameters = (user, update) => {
    if (!user) {
        throw Error('Enter the user name.');
    } else if (!update) {
        throw Error('Enter the update date.');
    } else if (!validateDate(update)) {
        throw Error('Enter the correct update date (YYYY-MM-DD).');
    }
};

/**
 * 
 * This function creates row of list with repository data
 * @param {object} rowData object that contains name, description, updated_at and url properties
 * @returns {string} Returns HTML template with one row with repository data.
 * 
 */

createRow = ({ name, description, updated_at, html_url }) => {
    const [ update_date ] = new Date(updated_at).toLocaleDateString('pl-PL', { year: 'numeric', month: '2-digit', day: '2-digit' }).split(', ');
    const template = `
        <div class="row">
            <div class="cell cell-name">${name}</div>
            <div class="cell cell-description">${description ? description : '-'}</div>
            <div class="cell cell-updated-at">${update_date}</div>
            <div class="cell cell-url">
                <a href="${html_url}">${html_url}</a>
            </div>
        </div>
    `;
    return template;
};

/**
 * 
 * This function creates list of repositories
 * @param {Array} listData array that contains data about repositories
 * 
 */

createList = (listData, shadowRoot) => {

    listData.forEach(rowData => {           
        shadowRoot.querySelector('#content-list').innerHTML += createRow(rowData);
    });
};