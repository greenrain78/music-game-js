import { setState } from "./observer";
import { textState } from "./store";

export default class ChangeTextBtn {
  constructor() {
    this.$target = document.createElement("div");
    this.setText = setState(textState);
    this.render();
    this.$target.addEventListener("click", this.handleClick.bind(this));
  }
  render() {
    this.$target.innerHTML = `
      <input tpye='text' />
      <button>text 변경!</button>
    `;
  }
  handleClick({ target }) {
    if (target.tagName !== "BUTTON") return;
    const input = this.$target.querySelector("input");
    this.setText(input.value); // 상태변경
    input.value = "";
  }
}
