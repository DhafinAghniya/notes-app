class headBar extends HTMLElement{
    _shadowRoot = null;
    _style = null;

    constructor() {
        super();

        this._shadowRoot = this.attachShadow({ mode: 'open' }); 
        this._style = document.createElement('style');
}

_updateStyle() {
    this._style.textContent = `
        :host {
        display: block;
        woidth: 100%;
        
        color: white;
        
        box-shadow0 4px 4px 0 rgba(0, 0, 0, 0.2);
        }

        div{
        padding: 16px;
        }

        .appName {
        margin : 0;
        }

        font-size: 2em;
    }
        `;
}

_emptyContent() {
    this._shadowRoot.innerHTML = '';
}

conecctedCallback() {
    this.render();
}

    render(){
        this._emptyContent();
        this._updateStyle();

        this._shadowRoot.appendChild(this._style);
        this._shadowRoot.innerHTML+=`
        <div>
            <h1 class="appName">My Notes App</h1>
        </div>
        `;  
    }
}

customElements.define('head-bar', headBar);