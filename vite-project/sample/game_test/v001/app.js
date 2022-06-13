
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
    // 키보드 누른 경우
        var player_key = ['w', 'a','s','d']
        window.addEventListener("keydown", (e) => {
            if (player_key.includes(e.key)) {
                this.player.move(e.key);
            };
            console.log(e.key);
        });
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2, 2);
    }
    animate(t) {
        window.requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        this.block.draw(this.ctx);
        this.ball.draw(this.ctx, this.stageWidth, this.stageHeight, this.block);
        this.player.draw(this.ctx, this.stageWidth, this.stageHeight, this.block);

    }
}

window.onload = () => {
    new App();

}

// 키보드에서 땐 경우
window.addEventListener("keyup", (e) => {
  const key = document.getElementById(e.key);
  if (key) key.classList.remove("pressed");
});
