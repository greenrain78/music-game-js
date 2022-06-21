import { setState } from "../../core/observer";


// Create a class for the element
export class KeyBoardKey {
  
  constructor(word) {
    // 변수 할당
    this.word = word;
    this.initValue(word)
  
    // 메인 엘리먼트 생성
    this.elements = document.createElement('div');
    this.elements.setAttribute("class", `key_${this.word}`);
    // 하위 엘리먼트 생성
    this.createElement();
    // 이벤트 추가
    this.eventListener();
  }

  initValue(word){
    // 공유 변수값 초기화
    const keyStateName = `key_${this.word}`
    // 글로벌 state에 키state를 등록

    // 옵저버 키 설정
    this.setKeyState = setState(keyStateName);
  }

  createElement()  {
    // 하위 엘리먼트 생성
    const key_word = document.createElement('span');
    key_word.textContent = this.word;
    const style = document.createElement('style');

    // 하위 엘레먼트 추가
    this.elements.appendChild(style);
    this.elements.appendChild(key_word);
  }
  eventListener()  {
    this.elements.addEventListener("click", this.handleClick.bind(this));
    this.elements.addEventListener("touchstart", this.handleTouchstart.bind(this));
    // this.elements.addEventListener("touchmove", this.handleTouchmove.bind(this));
    this.elements.addEventListener("touchend", this.handleTouchend.bind(this));

  }
  handleClick({ target }) {
    this.setKeyState('click'); // 상태변경
  }
  handleTouchstart({ target }) {
    this.setKeyState('touchstart'); // 상태변경
  }
  handleTouchmove({ target }) {
    // 버튼 밖으로 드래그해도 계속 발생
    // 드래그 시작점이 버튼 안이면 발생
    this.setKeyState('touchmove'); // 상태변경
  }
  handleTouchend({ target }) {
    this.setKeyState('touchend'); // 상태변경
  }
  
}

