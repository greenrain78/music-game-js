// import {App} from './AppK';
import App from "./AppK"
import singleton from './Singleton';


const component = new App('#app');

const singleton1 = new singleton();
const singleton2 = new singleton();

console.log("Singleton class", singleton1 === singleton2);