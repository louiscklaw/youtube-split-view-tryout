var ID = function () {
    return '_' + Math.random().toString( 36 ).substr( 2, 9 );
};


var RTHK31_M3U8 = "https://rthklive1-lh.akamaihd.net/i/rthk31_1@167495/index_432_av-b.m3u8";
var RTHK32_M3U8 = "https://rthklive2-lh.akamaihd.net/i/rthk32_1@168450/index_2052_av-p.m3u8";

// VIUTV
var VIUTV_M3U8 = "http://viutv99-i.akamaihd.net/hls/live/265284/live1/master.m3u8";

// 開電視／奇妙電視
var CABLE_KAI_TV = "http://media.fantv.hk/m3u8/archive/channel2_stream1.m3u8";

// 珠江台
var CHU_KONG_TV = "http://nclive.grtn.cn/zjpd/playlist.m3u8";

// 南方卫视
var SOUTH_TV = "http://nclive.grtn.cn/tvs2/playlist.m3u8";

var HKO_YOUTUBE_VIDEO_ID = 'biDqqmWpJAw';

// 三立LIVE新聞HD直播
var TAIWAN_THREE_NAP_NEWS = '4ZVUmEUFwaY';

// 年代新聞CH51
var TAIWAN_NEWS_CH51 = 'RaIJ767Bj_M'

// CTI中天新聞
var TAIWAN_NEWS_CTI = 'wUPPkSANpyo';

// NASA
var NASA = '21X5lGlDOfg';

// net conf
var NET_CONF = 'W8yL8vRnUnA';

// bloomberg global news
var BLOOMBERG_GLOBAL_NEWS = 'dp8PhLsUcFE';


// Algo HK Trade 直播串流
var ALGO_TRADE = 'w94Xsr4mIIg';

// apple_live
var APPLE_LIVE = 'tNbOBSDzkEI';

// skynews
var SKYNEWS = 'zg_YUu2JzEA';

// tvbs
var TVBS_NEWS = 'Hu1FkdAOws0';

// 台視新聞台
var TTV_NEWS = 'NbjI0cARzjQ';

var THE_SUN = '7_VKQrWPJMk';

var BBC_NEWS = '_r_w8vMF0So';

var CNN_NEWS = '8Pand7w04fo';

var MSNBC = 'qh5279cq2K0';

var FOXNEWS = '-49g22m6nxI';

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

var video_list = [
    [ VIDEO_TYPE_RTHK31, RTHK31_M3U8, 'RTHK31' ],
    // [ VIDEO_TYPE_RTHK32, RTHK32_M3U8, 'RTHK32' ],
    [ VIDEO_TYPE_YOUTUBE, get_youtube_uri( TAIWAN_THREE_NAP_NEWS ), '三立LIVE新聞HD直播' ],
    [ VIDEO_TYPE_YOUTUBE, get_youtube_uri( HKO_YOUTUBE_VIDEO_ID ), '香港天文台' ],
    [ VIDEO_TYPE_YOUTUBE, get_youtube_uri( TAIWAN_NEWS_CH51 ), '年代新聞CH51' ],
    [ VIDEO_TYPE_YOUTUBE, get_youtube_uri( TAIWAN_NEWS_CTI ), 'CTI中天新聞' ],
    [ VIDEO_TYPE_YOUTUBE, get_youtube_uri( NASA ), 'NASA' ],
    [ VIDEO_TYPE_YOUTUBE, get_youtube_uri( BLOOMBERG_GLOBAL_NEWS ), 'BLOOMBERG_GLOBAL_NEWS' ],
    [ VIDEO_TYPE_RTHK32, VIUTV_M3U8, 'VIUTV' ],
    [ VIDEO_TYPE_RTHK32, CABLE_KAI_TV, 'CABLE_KAI_TV' ],
    [ VIDEO_TYPE_RTHK32, CHU_KONG_TV, 'CHU_KONG_TV' ],
    [ VIDEO_TYPE_RTHK32, SOUTH_TV, 'SOUTH_TV' ],
    [ VIDEO_TYPE_YOUTUBE, get_youtube_uri( ALGO_TRADE ), 'ALGO_TRADE' ],
    [ VIDEO_TYPE_YOUTUBE, get_youtube_uri( APPLE_LIVE ), 'apple_live' ],
    [ VIDEO_TYPE_YOUTUBE, get_youtube_uri( SKYNEWS ), 'skynews' ],
    [ VIDEO_TYPE_YOUTUBE, get_youtube_uri( TVBS_NEWS ), 'tvbs' ],
    [ VIDEO_TYPE_YOUTUBE, get_youtube_uri( TTV_NEWS ), '台視新聞台' ],
    [ VIDEO_TYPE_YOUTUBE, get_youtube_uri( THE_SUN ), 'THE_SUN' ],
    [ VIDEO_TYPE_YOUTUBE, get_youtube_uri( BBC_NEWS ), 'BBC_NEWS' ],
    [ VIDEO_TYPE_YOUTUBE, get_youtube_uri( CNN_NEWS ), 'CNN_NEWS' ],
    [ VIDEO_TYPE_YOUTUBE, get_youtube_uri( MSNBC ), 'MSNBC' ],
    [ VIDEO_TYPE_YOUTUBE, get_youtube_uri( FOXNEWS ), 'FOXNEWS' ],
    // [VIDEO_TYPE_DUMMY, '','test caption'],
    // [VIDEO_TYPE_DUMMY, '','test caption'],
    // [VIDEO_TYPE_DUMMY, '','test caption'],
    // [VIDEO_TYPE_DUMMY, '','test caption'],
    // [VIDEO_TYPE_DUMMY, '','test caption'],
].map( p => {
    return {
        type: p[ 0 ],
        container_id: ID(),
        div_id: ID(),
        uri: p[ 1 ],
        caption: p[ 2 ]
    };
} );

var MAIN_VIDEO_CELL = '.main-video-container';
const DATA_VIDEO_POS = 'data-video-pos';
