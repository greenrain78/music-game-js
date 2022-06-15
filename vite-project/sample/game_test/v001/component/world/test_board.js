

// Create a class for the element
export class TestBoard {
  
  constructor(word) {
  
    // 메인 엘리먼트 생성
    this.elements = document.createElement('ul');
    // 하위 엘리먼트 생성
    // this.createElement();
  }

  createElement()  {
    // 하위 엘리먼트 생성

    const style = document.createElement('style');

    // 하위 엘레먼트 추가
    this.elements.appendChild(style);
    this.elements.appendChild(key_word);
  }
  reaction(keyName, keyEvent)  {
    console.log('reaction ' + keyName + ' ' + keyEvent)
    if (keyEvent == 'keydown' || keyEvent == 'touchstart') {
      this.createElement(keyName, keyEvent);
    }
    if (keyEvent == 'keypress' || keyEvent == 'touchmove') {
      this.changeElement(keyName, keyEvent);
    }
    if (keyEvent == 'keyup' || keyEvent == 'touchend') {
      this.removeElement(keyName, keyEvent);
    }
  }
  
  createElement(keyName, event){
    if (!(this.elements.getElementsByClassName(`test_${keyName}`)[0])) {
      const key_ele = document.createElement('li');
      key_ele.setAttribute("class", `test_${keyName}`);
      key_ele.textContent = `${keyName}  => ${event}`;
      this.elements.appendChild(key_ele);
    }
  }
  changeElement(keyName, event){
    const key_ele = this.elements.getElementsByClassName(`test_${keyName}`)[0]
    console.log(key_ele)
    key_ele.textContent = `${keyName}  => ${event}`;
    
  }
  removeElement(keyName, event){
    const key_ele = this.elements.getElementsByClassName(`test_${keyName}`)[0]
    key_ele.remove()
  }

}

