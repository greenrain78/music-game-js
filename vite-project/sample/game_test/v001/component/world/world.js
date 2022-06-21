import { getState, subscribe } from "../../core/observer";
import { keyStateList } from "../../core/store/input_store";
import { NodeController } from "../music_node/node_controller";
import { TestBoard } from "./test_board";

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
    // 오브젝트 생성
    this.test_board = new TestBoard();
    this.node_controller = new NodeController();
    // 엘리먼트 생성
    this.shadow = this.attachShadow({mode: 'open'});
    this.createElement();
    // 스타일 생성
    this.setStyle();
    // 이벤트 등록
    this.eventAction();
  }
  eventAction(){
    for (var keyName of keyStateList) {
      subscribe(keyName, this.render.bind(this, keyName));
    }
   

  }
  render(keyName) {
    
    const keyState = getState(keyName); //Model의 상태를 가져와서 렌더링
    const text1 = this.game_world.getElementsByTagName('h1')[0];
    text1.textContent = `${keyName} => ${keyState}`;
    this.test_board.reaction(keyName, keyState)

  }



  
  createElement()  {

    this.game_world = document.createElement('div');
    this.game_world.setAttribute("class", "game_world");
    
    const text1 = document.createElement('h1');
    text1.textContent = "게임 화면";
    this.game_world.appendChild(text1)
    this.game_world.appendChild(this.test_board.elements)
    
    
    this.shadow.appendChild(this.game_world);
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
