import {KeyBoardKey} from "./key_board_key"

// Create a class for the element
class KeyBorad extends HTMLElement {
  // Specify observed attributes so that
  // attributeChangedCallback will work
  static get observedAttributes() {
    return ['height', 'width'];
  }

  constructor() {
    // Always call super first in constructor
    super();
    this.shadow = this.attachShadow({mode: 'open'});
    this.createElement();
    this.setStyle();
  }
  createElement()  {
    const key_board_body = document.createElement('div');
    key_board_body.setAttribute("class", "key_board");

    this.key_list = new KeyBoardKey('A');
    // 여기서 인자를 줬는데 안넘어감
    key_board_body.appendChild(this.key_list.elements);

    const style = document.createElement('style');
    this.shadow.appendChild(style);
    this.shadow.appendChild(key_board_body);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log('Custom square element attributes changed.');
    console.log(name + " " + oldValue + " " + newValue);

  }
  setStyle(){
        // Apply external styles to the shadow dom
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', 'style.css');

    // Attach the created elements to the shadow dom
    this.shadow.appendChild(linkElem);
  }
  updateStyle(elem) {
  this.shadow.querySelector('style').textContent = `
    div {
      width: ${elem.getAttribute('l')}px;
      height: ${elem.getAttribute('l')}px;
      background-color: ${elem.getAttribute('c')};
    }
  `;
}
}

customElements.define('key-board', KeyBorad);
