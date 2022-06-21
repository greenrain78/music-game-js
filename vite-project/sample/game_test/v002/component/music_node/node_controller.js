import { setState } from "../../core/observer";


// music node를 생성, 관리, 소멸을 담당하는 객체
export class NodeController {
  
  constructor() {
    // 변수 할당

    // 메인 엘리먼트 생성
    this.elements = document.createElement('div');
    this.elements.setAttribute("class", `node_controller`);
    // 하위 엘리먼트 생성
    this.createElement();

  }

  initValue(word){
    // 공유 변수값 초기화
    const keyStateName = `key_${this.word}`
    // 글로벌 state에 키state를 등록

    // 옵저버 키 설정
    this.setKeyState = setState(keyStateName);
  }

  createElement()  {
    // // 하위 엘리먼트 생성
    // const key_word = document.createElement('span');
    // key_word.textContent = this.word;
    // const style = document.createElement('style');

    // // 하위 엘레먼트 추가
    // this.elements.appendChild(style);
    // this.elements.appendChild(key_word);
  }
  create_node(key, start_time, end_time, click_time){
    const music_node = document.createElement('span');
    music_node.textContent = this.word;
    
    this.elements.appendChild(music_node);

  }
  
}

