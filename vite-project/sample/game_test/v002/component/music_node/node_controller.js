import { setState } from "../../core/observer";
// import { anime } from "../../lib/anime";
import { MusicNode } from "./music_node";


// music node를 생성, 관리, 소멸을 담당하는 객체
export class NodeController {
  
  constructor() {
    // 변수 할당
    this.node_list = [];
    // 메인 엘리먼트 생성
    this.elements = document.createElement('div');
    this.elements.setAttribute("class", `node_controller`);
    // 하위 엘리먼트 생성
    this.createElement();
    this.create_node('a', 1, 5, 3);

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
    // 초기 설정
    const music_node_info = {};
    music_node_info['node'] = new MusicNode(key, click_time);
    music_node_info['start_time'] = start_time;
    music_node_info['end_time'] = end_time * 1000;

    // 객체 추가
    this.elements.appendChild(music_node_info.node.elements);
    // 에니메이션 동작
    anime({
      targets: music_node_info['node'].elements,
      translateY: [ '0%', '200%' ],
      scale: 2,
      duration: end_time * 1000,
      easing: 'easeInCirc',

      // 종료시 에니메이션 설정
      complete: function(anim) {
        
        console.log(anim);
        music_node_info.node.deleteElement();
        delete music_node_info.node   // 객체 제거
      },
    });
  }
  
}

