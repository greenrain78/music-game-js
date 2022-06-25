/* AppView.js */
import View from './mvc/View';

export default class AppView extends View {
	constructor(target) {
		super(target);
	}
	
	// override template()
	template = (state) => {
		// const { text } = state;
    // <div class="header">${text}</div>
		return `
			<div class="container">this is container</div>
		`
	}
}