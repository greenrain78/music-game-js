import View from "../../core/mvc/view";


export default class BackGroundView extends View {
	template = (state) => {
		return `
<div id="stars"></div>
<div id="stars2"></div>
<div id="stars3"></div>
<div id="title">
  <span>${state.text}</span>
</div>`
	}
}
