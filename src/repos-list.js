/** @module repos-list */

/**
 * 
 * This function creates row of list with repository data
 * @param {object} rowData object that contains name, description, updated_at and url properties
 * @returns {string} Returns HTML template with one row with repository data.
 * 
 */

function createRow(rowData) {
    const { name, description, updated_at, url } = rowData;
    const [ update_date ] = new Date(updated_at).toLocaleString('pl-PL').split(', ');
    const template = `
        <div class="row">
            <div class="cell cell-name">${name}</div>
            <div class="cell cell-description">${description ? description : '-'}</div>
            <div class="cell cell-updated-at">${update_date}</div>
            <div class="cell cell-url">
                <a href="${url}">${url}</a>
            </div>
        </div>
    `;
    return template;
}

/**
 * 
 * This function creates header for lift os repositories
 * @returns {string} Returns HTML template with header
 * 
 */

function createHeader() {
    const template = `
        <div class="header">
            <div class="row">
                <div class="cell cell-name">Name</div>
                <div class="cell cell-description">Description</div>
                <div class="cell cell-updated-at">Update date</div>
                <div class="cell cell-link">Link</div>
            </div>
        </div>
    `;
    return template;  
}

/**
 * 
 * This function creates list of repositories
 * @param {Array} listData array that contains data about repositories
 * 
 */

function createList(listData) {
    let listHtml = document.createElement('div');
    listHtml.className = 'repos-list';
    listHtml.innerHTML = createHeader();

    listData.forEach(rowData => {           
        listHtml.innerHTML += createRow(rowData);
    });

    let content = document.getElementById('content');
    content.appendChild(listHtml);
}

export { createList };
