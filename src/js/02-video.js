import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const videoCurrentTime = 'videoplayer-current-time';

const video = document.querySelector('#vimeo-player');
const player = new Player(video, {
  loop: true,
  fullscreen: true,
  quality: '1080p',
});

const getCurrentTime = function (currentTime) {
  const seconds = currentTime.seconds;
  localStorage.setItem(videoCurrentTime, JSON.stringify(seconds));
};

player.on('timeupdate', throttle(getCurrentTime, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem(videoCurrentTime)) || 0);

// player
//   .setColor('#d8e0ff')
//   .then(function (color) {
//     console.log('The new color value: #D8E0FF');
//   })
//   .catch(function (error) {
//     console.log('An error occurred while setting the color');
//   });
