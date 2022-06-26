import WebComponent from "../../core/web_component";
import Controller from "../../core/mvc/controller";
import View from "./view";
import Model from "./model";



// Create a class for the element
class JudgmentLine extends WebComponent {
  constructor() {
		super('component/judgment_line');
    this.init()
	}
  
 	init = () => {
    this.model = new Model({ value : 'this is header'});
    this.view = new View('#root-body', this.shadow);
    this.component = new Controller('#root-body', this.model, this.view)
  }

}

customElements.define('judgment-line', JudgmentLine);
