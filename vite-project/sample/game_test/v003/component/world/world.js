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
    this.node_controller = new NodeController();
    // 엘리먼트 생성
    this.shadow = this.attachShadow({mode: 'open'});
    this.createElement();
    // 스타일 생성
    this.setStyle();
  }
 
  createElement()  {

    this.game_world = document.createElement('div');
    this.game_world.setAttribute("class", "game_world");
    

    this.game_world.appendChild(this.node_controller.elements)
        
    this.shadow.appendChild(this.game_world);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log('Custom square element attributes changed.');
    console.log(name + " " + oldValue + " " + newValue);

  }
  setStyle(){
        // Apply external styles to the shadow dom
    const world_css = document.createElement('link');
    world_css.setAttribute('rel', 'stylesheet');
    world_css.setAttribute('href', 'component/world/world.css');

    const node_css = document.createElement('link');
    node_css.setAttribute('rel', 'stylesheet');
    node_css.setAttribute('href', 'component/music_node/node.css');

    // Attach the created elements to the shadow dom
    this.shadow.appendChild(world_css);
    this.shadow.appendChild(node_css);
  }
}

customElements.define('game-world', GameWorld);
