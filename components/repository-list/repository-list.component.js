(() => {
    const ownerDocument = document.currentScript.ownerDocument;

    class RepositoryList extends HTMLElement {
        constructor() {
            super();
            const root = this.attachShadow({mode: 'open'});
        }

        static get observedAttributes() {
            return ['user', 'update'];
        }

        attributeChangedCallback(attr, oldVal, newVal) {
            if (attr === 'user') {
                this.user = newVal;
            } else if (attr === 'update') {
                this.update = newVal;
            }
        }

        async connectedCallback() {
            const { content } = ownerDocument.querySelector('#rl-tpl');
            const tpl = content.cloneNode(true);
            this.shadowRoot.appendChild(tpl);
            this.shadowRoot.querySelector('#userName').innerHTML = this.user;

            try {
                validateParameters(this.user, this.update);
                const response = await getList(this.user);
                const list = prepareList(response, this.update);
                if (list.length) {
                    createList(list, this.shadowRoot);
                } else {
                    createEmptyListMessage(this.shadowRoot);
                }  
            } catch(error) {
                displayError(error.message);
            }
        }
    }

    customElements.define('repository-list', RepositoryList);
})();