/** @module empty-list */

/**
 * 
 * This function displays message that list of repositories is empty
 * 
 */

createEmptyListMessage = (shadowRoot) => {
    const template = `<div class="empty-list"><span class="message">No records</span></div>`;
    shadowRoot.querySelector('#content').innerHTML = (template);
};
