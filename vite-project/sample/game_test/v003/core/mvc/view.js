export default class HTMLView {
	_target;

	constructor(target, root_dom = document) {
    // 타겟 지정
		this._target = () => root_dom.querySelector(target);
	}

	template = (state) => {
		return `<div>template 오버라이팅 안됨 - ${state}</div>`
	}

	render = (state) => {
    // 교체 
		this._target().innerHTML = this.template(state);
	}
}