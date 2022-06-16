//youtube API 불러오는 부분
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//플레이어 변수 설정
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    //width&height를 설정할 수 있으나, 따로 css영역으로 뺐다.
    videoId: 'fgSXAKsq-Vo',
    playerVars:{
      'playsinline':1,
      'controls': 0,  // 동영상 컨트롤러 제거
      'autohide': 2,
      'modestbranding': 1,
      // 'disablekb': 1,  // 키보드로 동영상 제작 불가



    },

    events: {
      'onReady': onPlayerReady,//로딩중에 이벤트 실행한다
      'onStateChange': onPlayerStateChange//플레이어 상태 변화 시 이벤트를 실행한다.
    }
  });
}

function onPlayerReady(event) {
 //로딩된 후에 실행될 동작을 작성한다(소리 크기,동영상 속도를 미리 지정하는 것등등...)
  event.target.mute();
  event.target.setVolume(100);

  event.target.playVideo();//자동재생
  console.log('playVideo')  
  event.target.unMute();

 
}

var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    done = true;
    //플레이어가 재생중일 때 작성한 동작이 실행된다.
    // (원하는 시간만큼만 재생되고 멈추게 하는 것도 가능하다.)
  }
}