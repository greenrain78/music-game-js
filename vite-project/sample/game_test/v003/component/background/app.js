import WebComponent from "../../core/web_component";
import Controller from "../../core/mvc/controller";
import View from "./view";
import Model from "./model";



// Create a class for the element
class BackGround extends WebComponent {
  constructor() {
		super('component/background');
    this.init()
	}
  
 	init = () => {
    this.model = new Model({ text : '배경 샘플'});
    this.view = new View('#root-body', this.shadow);
    this.component = new Controller('#root-body', this.model, this.view)
  }

}

customElements.define('back-ground', BackGround);
