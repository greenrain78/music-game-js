
// Create a class for the element
class GameWorld extends HTMLElement {
  // Specify observed attributes so that
  // attributeChangedCallback will work
  key_list = ['a', 's', 'd', 'j', 'k', 'l']
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

    const game_world = document.createElement('div');
    game_world.setAttribute("class", "game_world");
    game_world.appendChild(text1)
    
    const text1 = document.createElement('h1');
    text1.textContent = "게임 화면";

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
    linkElem.setAttribute('href', 'component/world/world.css');

    // Attach the created elements to the shadow dom
    this.shadow.appendChild(linkElem);
  }
}

customElements.define('game-world', GameWorld);
