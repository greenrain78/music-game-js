export default class Controller {
	_target;  //선택자
	_model;  
	_view;

	constructor(target, model, view) {
		this._target = target;
		this._model = model;
		this._view = view;

		this.init();
		this.render(this._model.get());
		this.initEvents();
		this.initChildren(); // 자식 컴포넌트 생성 및 랜더
	}

  // 상태 변경후 render
	setState = (newState) => {
		this._model.setState(newState);
		this.render(this._model.get());
	}

  // render 명령 전달
	render = (state) => {
		this._view.render(state);
	}
	
	// component 렌더링 직전 처리할 비즈니스 로직
	init = () => {}
	
	// 이벤트 핸들러 부착
	initEvents = () => {
  // this.addEvent('click', '.addBtn', ({ target }) => {
  //     const { items } = this.$state;
  //     this.setState({ items: [ ...items, `item${items.length + 1}` ] });
  //   });
  }
  addEvent (eventType, selector, callback) {
    const children = [ ...this.$target.querySelectorAll(selector) ]; 
    // selector에 명시한 것 보다 더 하위 요소가 선택되는 경우가 있을 땐
    // closest를 이용하여 처리한다.
    const isTarget = (target) => children.includes(target)
                                 || target.closest(selector);
    this.$target.addEventListener(eventType, event => {
      if (!isTarget(event.target)) return false;
      callback(event);
    })
  }
	
	// 자식 컴포넌트 생성
	initChildren = () => {};
}