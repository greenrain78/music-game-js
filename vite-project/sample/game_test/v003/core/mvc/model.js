export default class Model {
	_state;
	
	constructor(state) {
    // 초기값
		this._state = state;
	}

  // 값 추가 및 변경
	setState = (newState) => {
		this._state = { ...this._state, ...newState };
	}
  // 데이터 반환
	getState = (key) => this._state[key];

	get = () => this._state;
}
class Model2 {
// 모델은 상속 없이 직점 모두 구현하는 게 좋을 듯
  	
	constructor(state) {
    // 초기값
		this._state = state;
	}

  // 값 추가 및 변경
	setState = (newState) => {
		this._state = { ...this._state, ...newState };
	}
  // 데이터 반환
	getState = (key) => this._state[key];

	get = () => this._state;
}