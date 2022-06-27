import View from "../../core/mvc/view";


export default class BackGroundView extends View {
  
	template = (state) => {
		return `
<div class="box empty-line-box"></div>
<div class="box line-box">
  <div id="line"></div>
</div>

`
	}
  touch_render(touch_pos){
    // 터치하면 해당 판정선 빛나게 표현
    var line = this._target().querySelectorAll("#line")[0]
    console.log(touch_pos)
    console.log(touch_pos.clientX)
    line.innerHTML = `<div class="line-effect" style="left:${touch_pos.clientX}px;"></div>`;
    console.log(line)
  }
}
