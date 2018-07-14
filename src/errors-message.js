function closeError() {
    const button = document.getElementById('close-button');
    button.removeEventListener('click', closeError);
    const modal = document.getElementById('error-modal');
    modal.remove();
}

function displayError(message) {
    const modalHtml = document.createElement('div');
    modalHtml.className = 'modal';
    modalHtml.id = 'error-modal';
    const template = `
        <header>
            <span class="title">Error</span>
        </header>
        <section>
            <span class="message">${message}</span>
        </section>
        <footer>
            <button id="close-button" class="close-button">Close</button>
        </footer>
    `;
    modalHtml.innerHTML = template;
    const body = document.getElementsByTagName("body")[0];
    body.appendChild(modalHtml);
    const button = document.getElementById('close-button');
    button.addEventListener('click', closeError);
}

export { displayError };
