import ChangeTextBtn from "./ChangeTextBtn.js";
import TextView from "./TextView.js";

const app = document.querySelector("#app");

const textView = new TextView();
const changeTextBtn = new ChangeTextBtn();

app.appendChild(textView.$target);
app.appendChild(changeTextBtn.$target);
