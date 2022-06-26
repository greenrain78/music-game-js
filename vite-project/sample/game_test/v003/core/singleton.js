let instance;

export default class Singleton {
	// static instance
  constructor() {
    if (instance) {
      console.log("이미 존재")
      return instance;
    }
    instance = this;
  }
}

