
// Create a class for the element
export default class WebComponent extends HTMLElement {
  // Specify observed attributes so that
  // attributeChangedCallback will work

  constructor(project_path) {
    
    // Always call super first in constructor
    super();
    this.project_path = project_path
    this.createElement();
  }
  createElement()  {
    this.shadow = this.attachShadow({mode: 'open'});
    // body div 태그 구성
    const body = document.createElement('div');
    body.setAttribute("id", "root-body");

    console.log(this.project_path)
    // css 파일 로드 및 적용
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', `${this.project_path}/style.css`);

    // Attach the created elements to the shadow dom
    this.shadow.appendChild(body);
    this.shadow.appendChild(linkElem);
  }
  






  
  // html 속성 변경 관찰
  static get observedAttributes() {
    // return ['height', 'width'];
  }
  // html 속성 변경시 callback
  attributeChangedCallback(name, oldValue, newValue) {
    // console.log('Custom square element attributes changed.');
    // console.log(name + " " + oldValue + " " + newValue);
  }
  
}

// customElements.define('태그-', 클래스명);
