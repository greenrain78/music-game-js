import { getState, subscribe } from "./observer";
import { textState } from "./store";

export default class TextView {
  constructor() {
    this.$target = document.createElement("div");
    subscribe(textState, this.render.bind(this)); //Model에 구독
    this.render();
  }
  render() {
    const text = getState(textState); //Model의 상태를 가져와서 렌더링
    this.$target.innerHTML = `
      <div>${text}</div>
    `;
  }
}
