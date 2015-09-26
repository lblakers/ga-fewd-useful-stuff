function playVideo(e) {
    'use strict';

    var v = document.getElementById('bkng');

    if (e.target.id === 'play') {
        v.play();
    } else {
        v.pause();
    }
}

document.getElementById('play').addEventListener('click', playVideo);
document.getElementById('stop').addEventListener('click', playVideo);