import View from "../../core/mvc/view";


export default class BackGroundView extends View {
	template = (state) => {
		return `

<div class="box"></div>
<div class="box"></div>
<div class="box"></div>
<div class="box"></div>
<div class="box"></div>
<div class="box"></div>
<div class="box"></div>
<div class="box line-box">
  <div id="line"></div>
</div>

`
	}
}
