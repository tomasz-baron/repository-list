/** @module empty-list */

/**
 * 
 * This function displays message that list of repositories is empty
 * 
 */

function createEmptyListMessage() {
    const emptyListHtml = document.createElement('div');
    emptyListHtml.className = 'empty-list';

    const template = `<span class="message">Empty list of repositories</span>`;
    emptyListHtml.innerHTML = template;

    const content = document.getElementById('content');
    content.appendChild(emptyListHtml);
}

export { createEmptyListMessage };
