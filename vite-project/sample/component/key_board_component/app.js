
class App {
    constructor() {

        window.addEventListener('resize', this.resize.bind(this), false)
        this.resize();

        // 오브젝트 생성

        window.requestAnimationFrame(this.animate.bind(this));
    }
    init_element(){
        this.main_container = document.getElementById('main_container')
        this.text = document.createElement('h3');
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

    }
    animate(t) {
        window.requestAnimationFrame(this.animate.bind(this));

    }
}

window.onload = () => {
    new App();

}
