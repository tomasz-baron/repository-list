import { createList } from './repos-list.js';
import { createEmptyListMessage } from './empty-list.js';
import { getList } from './http-request.js';
import { displayError } from './errors-message.js';
import { validateParameters } from './validation.js';

let repos = document.getElementsByTagName('repos')[0];

function createContent(user) {
    const template = `
        <div id="header">
            <span class="user-name">${user}</span>
        </div>
        <div id="content"></div>
    `;
    const contentHtml = document.createElement('div');
    contentHtml.innerHTML = template;
    repos.parentNode.replaceChild(contentHtml, repos);
}

function prepareList(list, updateDate) {
    return list
        .filter(repo => new Date(repo.updated_at) > new Date(updateDate))
        .map(repo => {
            return {
                name: repo.name,
                description: repo.description,
                updated_at: repo.updated_at,
                url: repo.url
            };
        });
}

(function (dataset) {
    try {
        const { user, update } = dataset;
        validateParameters(user, update);
        getList(user)
            .then(repositories => {
                createContent(user); 
                const list = prepareList(repositories, update);
                if (list.length > 0) {
                    createList(list);
                } else {
                    createEmptyListMessage();
                }
            })
            .catch(error => displayError(error.message));
    } catch(error) {
        displayError(error.message);
    }
    
})(repos.dataset);
