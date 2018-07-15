import { createList } from './repos-list.js';
import { createEmptyListMessage } from './empty-list.js';
import { getList } from './http-request.js';
import { displayError } from './error-message.js';
import { validateParameters } from './validation.js';
import { createContent, prepareList } from './utils.js';

let repos = document.getElementsByTagName('repos')[0];

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
