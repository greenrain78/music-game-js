import {KeyBoardKey} from "./key_board_key"
import { keyList } from "../../core/store/input_store";


// Create a class for the element
class KeyBorad extends HTMLElement {
  // Specify observed attributes so that
  // attributeChangedCallback will work
  key_list = keyList
  static get observedAttributes() {
    return ['height', 'width'];
  }

  constructor() {
    // Always call super first in constructor
    super();
    this.shadow = this.attachShadow({mode: 'open'});

    this.key_components = this.key_list.map(key => new KeyBoardKey(key))

    this.createElement();
    this.setStyle();
  }
  createElement()  {
    const key_board_body = document.createElement('div');
    key_board_body.setAttribute("class", "board");
    

    // key_board_body.appendChild(this.key_components.elements);
    for (var key_ele of this.key_components.map(key => key.elements)) {
      key_board_body.appendChild(key_ele);
    }
   
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
    linkElem.setAttribute('href', 'component/keyboard/keyboard.css');

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
