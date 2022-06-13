export class KeyBoard {
    constructor() {
        this.key_list=key_list;

        // 키보드 값을 해당 객체에 저장
        // 키보드 뿐만 아니라 버튼을 터치했을 경우도 동일한 값이 들어가도록 class를 만들어서 구현
        // window.keydown
        // div.click
        init_window_event()
    }
    init_window_event(){
        var player_key = ['w', 'a','s','d']
        window.addEventListener("keydown", (e) => {
            if (player_key.includes(e.key)) {
                this.player.move(e.key);
            };
            console.log(e.key);
        });
    }
}