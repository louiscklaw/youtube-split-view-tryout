var ID = function () {
    return '_' + Math.random().toString( 36 ).substr( 2, 9 );
};



var child_player_config = {
    autoplay: true,
    clickToPlay: false,
    quality: {
        default: 240,
        options: [ 4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240 ]
    },
    autopause: false,
    // controls: ['mute', 'settings'],
    ratio: '16:9',
    youtube: {
        height: '240px'
    },
    muted: true
}

function get_youtube_uri( youtube_id ) {
    return 'https://www.youtube.com/embed/' + youtube_id;
}

const VIDEO_TYPE_YOUTUBE = 'youtube';
const VIDEO_TYPE_RTHK31 = 'rthk31';
const VIDEO_TYPE_RTHK32 = 'rthk32';
const VIDEO_TYPE_DUMMY = 'dummy';

const MAIN_VIDEO_CONTAINER = 'main-video-container';

var MAIN_VIDEO_CELL = '.main-video-container';
const DATA_VIDEO_POS = 'data-video-pos';
