import { WindowEvent } from "./core/window/event";

class App {
    constructor() {

        window.addEventListener('resize', this.resize.bind(this), false)
        this.resize();

        // 오브젝트 생성

        window.requestAnimationFrame(this.animate.bind(this));
        this.windowEvent();
    }
    init_element(){
        this.main_container = document.getElementById('main_container')
        this.text = document.createElement('h3');
        this.main_container.a
    }
    windowEvent() {
      this.window_evnet_controller = new WindowEvent();
    // // 키보드 누른 경우
    //     var player_key = ['w', 'a','s','d']
    //     window.addEventListener("keydown", (e) => {
    //         if (player_key.includes(e.key)) {
    //             this.player.move(e.key);
    //         };
    //         console.log(e.key);
    //     });
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

