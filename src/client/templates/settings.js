
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

// 策略王電視 Live
var HKSMEDIA = '07QcV06lOSE';

// AI Jazeera English
var AI_JAZEERA_ENGLISH ='jL8uDJJBjMA'

// CNA
var CNA = 'JvZVnBn6zEI';

// CCTV 中文国际频道
var CCTV = 'vCDDYb_M2B4';

// ABC_NEWS
var ABC_NEWS = 'kwxtkBcayK8';

// FRANCE 24 English
var FRANCE_24_English = '0fKyrdQ15gs';

// DW News
var DW_NEWS = 'NvqKZHpKs';

var video_list = [
    [ VIDEO_TYPE_RTHK31, RTHK31_M3U8, 'RTHK31' ],
    // [ VIDEO_TYPE_RTHK32, RTHK32_M3U8, 'RTHK32' ],
    [ VIDEO_TYPE_YOUTUBE, get_youtube_uri( TAIWAN_THREE_NAP_NEWS ), '三立LIVE新聞HD直播' ],
    [ VIDEO_TYPE_YOUTUBE, get_youtube_uri( HKO_YOUTUBE_VIDEO_ID ), '香港天文台' ],
    [ VIDEO_TYPE_YOUTUBE, get_youtube_uri( TAIWAN_NEWS_CH51 ), '年代新聞CH51' ],
    [ VIDEO_TYPE_YOUTUBE, get_youtube_uri( TAIWAN_NEWS_CTI ), 'CTI中天新聞' ],
    [ VIDEO_TYPE_YOUTUBE, get_youtube_uri( NASA ), 'NASA' ],
    [ VIDEO_TYPE_YOUTUBE, get_youtube_uri( DW_NEWS ), 'DW news' ],
    [ VIDEO_TYPE_RTHK32, VIUTV_M3U8, 'VIUTV' ],
    [ VIDEO_TYPE_RTHK32, CABLE_KAI_TV, 'CABLE_KAI_TV' ],
    [ VIDEO_TYPE_RTHK32, CHU_KONG_TV, 'CHU_KONG_TV' ],
    [ VIDEO_TYPE_RTHK32, CCTV, 'CCTV' ],
    [ VIDEO_TYPE_YOUTUBE, get_youtube_uri( ALGO_TRADE ), 'ALGO_TRADE' ],
    [ VIDEO_TYPE_YOUTUBE, get_youtube_uri( FRANCE_24_English ), 'FRANCE_24_English' ],
    [ VIDEO_TYPE_YOUTUBE, get_youtube_uri( SKYNEWS ), 'skynews' ],
    [ VIDEO_TYPE_YOUTUBE, get_youtube_uri( TVBS_NEWS ), 'tvbs' ],
    [ VIDEO_TYPE_YOUTUBE, get_youtube_uri( TTV_NEWS ), '台視新聞台' ],
    [ VIDEO_TYPE_YOUTUBE, get_youtube_uri( THE_SUN ), 'THE_SUN' ],
    [ VIDEO_TYPE_YOUTUBE, get_youtube_uri( BBC_NEWS ), 'BBC_NEWS' ],
    [ VIDEO_TYPE_YOUTUBE, get_youtube_uri( CNN_NEWS ), 'CNN_NEWS' ],
    [ VIDEO_TYPE_YOUTUBE, get_youtube_uri( MSNBC ), 'MSNBC' ],
    [ VIDEO_TYPE_YOUTUBE, get_youtube_uri( ABC_NEWS ), 'ABC_NEWS Live' ],
].map( p => {
    return {
        type: p[ 0 ],
        container_id: ID(),
        div_id: ID(),
        uri: p[ 1 ],
        caption: p[ 2 ]
    };
} );
