import { setState } from "../../core/observer";


// Create a class for the element
export class MusicNode {
  
  constructor(key_word, click_time) {
    // 변수 할당
    // this.start_time = ;  // 객체 
    
    // this.end_time = ;  // 해당 객체 소멸 시간
    this.initValue(key_word, click_time)
  
    // 메인 엘리먼트 생성
    this.elements = document.createElement('div');
    this.elements.setAttribute("class", `key_${this.key_word}`);
    // 하위 엘리먼트 생성
    this.createElement();

  }

  initValue(key_word, click_time){
    this.key_word = key_word;
    this.click_time = click_time; //객체 클릭 시간
    // 공유 변수값 초기화
    const keyStateName = `key_${this.key_word}`
    // 글로벌 state에 키state를 등록

    // 옵저버 키 설정
    this.setKeyState = setState(keyStateName);
  }

  createElement()  {
    // 하위 엘리먼트 생성
    const key_word = document.createElement('span');
    key_word.textContent = this.key_word;

    // 하위 엘레먼트 추가
    this.elements.appendChild(key_word);
  }

  deleteElement(){
    this.elements.remove();
  }
}

