

// Create a class for the element
export class TestText {
  
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

  }
  handleClick({ target }) {
    console.log("속성이 뭔데  " + target.tagName);
    this.setKeyState('click'); // 상태변경
  }
}

