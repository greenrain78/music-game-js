
import Component from './mvc/Component';
import Model from './mvc/Model';
import aaaView from './AppView';


// App Component
export default class App extends Component {
	constructor(target) {
		super(target, new Model({ text : 'this is header' }), new aaaView(target));
	}

	onClickHeader = ({ target }) => { 
		const header = target.closest('.header');
		if(!header) return;
		console.log('Hello World!'); 
	}

	addEvents = () => {
		// 이벤트 위임
		this._target().addEventListener('click', onClickHeader);
	}

	initChildren = () => {
		this.$header = new Header('.header');
		this.$container = new Container('.container');
	}
}
