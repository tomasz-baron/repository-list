/** @module errors-message */

/**
 * 
 * This function removes click event for close button and removes modal from DOM
 * 
 */

closeError = () => {
    const button = document.getElementById('close-button');
    button.removeEventListener('click', closeError);
    const modal = document.getElementById('error-overlay');
    modal.remove();
};

/**
 * 
 * This function shows modal with error message
 * @param {string} message string argument with error message
 * 
 */

displayError = (message) => {

    const modalHtml = document.createElement('div');
    modalHtml.className = 'error-overlay';
    modalHtml.id = 'error-overlay';
    const template = `
        <div class="error-dialog">
            <header>
                <span class="title">Error</span>
            </header>
            <section>${message}</section>
            <footer>
                <button id="close-button" class="close-button">Close</button>
            </footer>
        </div>
    `;
    modalHtml.innerHTML = template;
    const body = document.getElementsByTagName("body")[0];
    body.appendChild(modalHtml);
    const button = document.getElementById('close-button');
    button.addEventListener('click', closeError);
};
