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
  }
  createElement()  {
    const key_board_body = document.createElement('div');
    key_board_body.setAttribute("class", "base");
    
    const key_board_key = document.createElement('div');
    key_board_key.setAttribute("class", "line1");
    key_board_body.appendChild(key_board_key);

    const key_board_key_word = document.createElement('span');
    key_board_key_word.textContent = 'A';
    key_board_key.appendChild(key_board_key_word);

    const style = document.createElement('style');
    this.shadow.appendChild(style);
    this.shadow.appendChild(key_board_body);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log('Custom square element attributes changed.');
    console.log(name + " " + oldValue + " " + newValue);

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
