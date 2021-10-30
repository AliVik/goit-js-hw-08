import Player from '@vimeo/player';
import _ from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


player.on('timeupdate', _.throttle((evt) => {
    
    localStorage.setItem("videoplayer-current-time", `${evt.seconds}`);
    console.log(localStorage['videoplayer-current-time'])
  }, 1000))

player.setCurrentTime(localStorage['videoplayer-current-time']);