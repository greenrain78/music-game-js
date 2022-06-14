// Create a class for the element
export class KeyBoardKey {
  
  constructor(word) {
    this.word = word;
    this.createElement();

  }

  createElement()  {
    
    const key_word = document.createElement('span');
    key_word.textContent = this.word;
    const style = document.createElement('style');

    this.elements = document.createElement('div');
    this.elements.setAttribute("class", `key_${this.word}`);
    this.elements.appendChild(style);
    this.elements.appendChild(key_word);
  }
}

