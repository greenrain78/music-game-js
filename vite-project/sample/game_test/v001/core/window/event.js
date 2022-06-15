import { keyList } from "../../core/store/input_store";
import { setState } from "../../core/observer";

export class WindowEvent {
    constructor() {
      // 이벤트시 반응할 함수 초기화
      this.initEvent();
      // 이벤트 설정
      this.windowEvent();
    }
    initEvent(){
      this.keyAction = new Map();
      for (var keyName of keyList) {
        this.keyAction[keyName] = setState(`key_${keyName}`);
      }
    
    }
    windowEvent() {
    // 키보드 누른 경우
      window.addEventListener("keydown", (e) => {
        // 왜 false만 뜨냐
        // if (this.keyAction.has(e.key)) {
          this.keyAction[e.key]('keydown');
        // }
      });
      window.addEventListener("keyup", (e) => {
        // if (this.keyAction.has(e.key)) {
          this.keyAction[e.key]('keyup');
        // }
      });
      window.addEventListener("keypress", (e) => {
        // if (this.keyAction.has(e.key)) {
          this.keyAction[e.key]('keypress');
        // }
      });
    }
}



