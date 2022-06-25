let instance;

export default class Singleton {
	// static instance
  constructor() {
    if (instance) {
      console.log("이미 존재")
      return instance;
    }
    console.log(this.instance)
    console.log(instance)
    console.log(this)
    this.id = 1;
    this.text = "hello";
    instance = this;
  }
}

