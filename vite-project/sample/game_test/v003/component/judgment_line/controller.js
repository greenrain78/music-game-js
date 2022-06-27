import Controller from "../../core/mvc/controller";

export default class BackGroundController extends Controller {

  constructor(target, model, view) {
		super(target, model, view)
    this.initEvents()
	}
  
	initEvents = () => {
    this.addEvent('click', '#root-body', this.handleClick.bind(this));
    this.addEvent('touchstart', '#root-body', this.handleTouchstart.bind(this));
    this.addEvent('touchend', '#root-body', this.handleTouchend.bind(this));
    this.addEvent('touchmove', '#root-body', this.handleTouchmove.bind(this));
    

  }
  handleClick( event ) {
    // console.log("click", event)
  }
  
  handleTouchstart(event) {
    event.preventDefault();

    console.log('touchstart', event.changedTouches); // 상태변경
    for (var touch of event.changedTouches) {
      this._view.touch_render(touch)
    }
  }
  
  handleTouchmove(event) {
    // 버튼 밖으로 드래그해도 계속 발생
    // 드래그 시작점이 버튼 안이면 발생

    console.log('touchmove', event); // 상태변경
    for (var touch of event.changedTouches) {
      this._view.touch_render(touch)
    }
  }
  handleTouchend(event) {
    console.log('touchend', event.changedTouches); // 상태변경
  }
}
