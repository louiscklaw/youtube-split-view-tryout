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
    [ VIDEO_TYPE_RTHK32, AI_JAZEERA_ENGLISH, 'AI_JAZEERA_ENGLISH' ],
    [ VIDEO_TYPE_YOUTUBE, get_youtube_uri( ALGO_TRADE ), 'ALGO_TRADE' ],
    [ VIDEO_TYPE_YOUTUBE, get_youtube_uri( APPLE_LIVE ), 'apple_live' ],
    [ VIDEO_TYPE_YOUTUBE, get_youtube_uri( SKYNEWS ), 'skynews' ],
    [ VIDEO_TYPE_YOUTUBE, get_youtube_uri( TVBS_NEWS ), 'tvbs' ],
    [ VIDEO_TYPE_YOUTUBE, get_youtube_uri( TTV_NEWS ), '台視新聞台' ],
    [ VIDEO_TYPE_YOUTUBE, get_youtube_uri( THE_SUN ), 'THE_SUN' ],
    [ VIDEO_TYPE_YOUTUBE, get_youtube_uri( BBC_NEWS ), 'BBC_NEWS' ],
    [ VIDEO_TYPE_YOUTUBE, get_youtube_uri( CNN_NEWS ), 'CNN_NEWS' ],
    [ VIDEO_TYPE_YOUTUBE, get_youtube_uri( MSNBC ), 'MSNBC' ],
    [ VIDEO_TYPE_YOUTUBE, get_youtube_uri( HKSMEDIA ), '策略王電視 Live' ],
].map( p => {
    return {
        type: p[ 0 ],
        container_id: ID(),
        div_id: ID(),
        uri: p[ 1 ],
        caption: p[ 2 ]
    };
} );

function helloworld_common() {
    var new_node_div = document.createElement( "div" );
    new_node_div.innerHTML = "<h1>helloworld</h1>";
}


function get_youtube_div( video_uri ) {
    return `<div class="plyr__video-embed"><iframe src="` + video_uri + `"></iframe></div>`;
}

function get_rthk( video_id ) {
    return `<video id=` + video_id + ` controls crossorigin playsinline poster="https://bitdash-a.akamaihd.net/content/sintel/poster.png"></video>`;
}

function attach_rthk_script( video_uri, video_id, container_id ) {
    document.addEventListener( 'DOMContentLoaded', () => {
        players[ container_id ] = init_RTHK_player( video_uri, video_id );
    } );
}

// TODO: using a common handler to handle all init request
function init_RTHK_player( video_uri, video_id ) {
    const source = video_uri;
    const video = document.querySelector( '#' + video_id );

    // For more options see: https://github.com/sampotts/plyr/#options
    // captions.update is required for captions to work with hls.js
    const player = new Plyr( video, child_player_config );

    // For more Hls.js options, see https://github.com/dailymotion/hls.js
    const hls = new Hls();
    hls.loadSource( source );
    hls.attachMedia( video );
    window.hls = hls;

    // Expose player so it can be used from the console
    window.player = player;
    return player;
}

function get_cover_text( caption_in ) {
    return '<div class="cover"><span>' + caption_in + '</span></div>';
}

function attach_to_body( video_in ) {
    temp_div = document.createElement( 'div' );
    temp_div.classList.add( 'player' );
    temp_div.id = video_in[ 'container_id' ];

    temp_div.setAttribute( 'onclick', 'swap(this);' );

    switch ( video_in[ 'type' ] ) {
        case VIDEO_TYPE_YOUTUBE:
            temp_div.id = video_in[ 'div_id' ];
            temp_div.innerHTML = get_youtube_div( video_in[ 'uri' ] ) + get_cover_text( video_in[ 'caption' ] );
            break;
        case VIDEO_TYPE_RTHK31:
            temp_div.innerHTML = get_rthk( video_in[ 'div_id' ] ) + get_cover_text( video_in[ 'caption' ] );
            attach_rthk_script( video_in[ 'uri' ], video_in[ 'div_id' ], video_in[ 'container_id' ] );
            break;
        case VIDEO_TYPE_RTHK32:
            temp_div.innerHTML = get_rthk( video_in[ 'div_id' ] ) + get_cover_text( video_in[ 'caption' ] );
            attach_rthk_script( video_in[ 'uri' ], video_in[ 'div_id' ], video_in[ 'container_id' ] );
            break;

        case VIDEO_TYPE_DUMMY:
            // temp_div.innerHTML = '<div>player</div><div class="cover" onclick="helloworld(this);">cover</div>';
            temp_div.innerHTML = get_youtube_div( video_in[ 'uri' ] );
            break;

        default:
    }

    document.querySelector( '.container' ).appendChild( temp_div );
}

function get_data_video_pos( ele_in ) {
    return ele_in.getAttribute( DATA_VIDEO_POS );
}

function assign_data_video_pos( ele_in, video_pos_in ) {
    return ele_in.setAttribute( DATA_VIDEO_POS, video_pos_in );
}

function start_child_player( p ) {
    return new Plyr( p, child_player_config );
}

function disable_double_click() {
    document.addEventListener( 'dblclick', function ( event ) {
            event.preventDefault();
            event.stopPropagation();
        }, true //capturing phase!!
    );
}

function get_current_pos( ele_in ) {
    console.log( ele_in );
    return ele_in.parentNode.getAttribute( DATA_VIDEO_POS );
}

function pos_refresh() {
    console.log( 'refresh' );
    get_eles( '.player' ).forEach( ele => {
        move_to_cell( ele, get_data_video_pos( ele ) );
    } );
}

function swap_to_child( ele_in, target_child ) {
    assign_data_video_pos( ele_in, target_child );

}

function swap_to_main( ele_in ) {
    assign_data_video_pos( ele_in, '.' + MAIN_VIDEO_CONTAINER );

}

function swap( child_in ) {
    // alert( 'swap' );
    if ( get_data_video_pos( child_in ) == 'main-video-container' ) {
        console.log( 'ignore' );
    } else {
        target_child_node = get_data_video_pos( child_in );
        get_current_main_node()
            .then( main_ele => {
                console.log( 'update data-video-pos' );

                // assign_data_video_pos( main_ele, target_child_node );
                swap_to_child( main_ele, target_child_node );


                // assign_data_video_pos( child_in, '.main-video-container' );
                swap_to_main( child_in );
                return false;
            } )
            .then( _ => {
                console.log( 'refresh location' );
                pos_refresh();
            } );
        // move_to_cell( child_in, '.main-video-container' );
    }
}

function move_to_main( child_in ) {
    get_eles( '.main-video-container' )[ 0 ].appendChild(
        child_in
    )
}

async function get_current_main_node() {
    output = '';
    get_eles( '.player' ).forEach( _ => {
        console.log( _.getAttribute( DATA_VIDEO_POS ) );
        if ( _.getAttribute( DATA_VIDEO_POS ) == '.main-video-container' ) {
            output = _
        }
    } );

    return output;
}

function get_player_cell( ele_in ) {
    console.log( ele_in );
    return ele_in.getBoundingClientRect();
}

function get_main_player_cell() {
    return get_player_cell( get_eles( '.main-video-container' )[ 0 ] );
}



function move_to_main_player_cell( ele_in ) {
    ele_in.style.positin = 'absolute';
    ele_in.style.top = '0px';
    ele_in.style.left = '0px;';
}

function get_eles( selector ) {
    return document.querySelectorAll( selector );
}

function move_to_cell( ele_in, dest_node ) {
    child_ele = get_player_cell( get_eles( dest_node )[ 0 ] );

    console.log( child_ele[ 'top' ] );

    ele_in.style.position = 'absolute';
    ele_in.style.top = child_ele[ 'top' ] + 'px';
    ele_in.style.left = child_ele[ 'left' ] + 'px';

    ele_in.style.width = child_ele[ 'width' ] + 'px';
    ele_in.style.height = child_ele[ 'height' ] + 'px';

    ele_in.setAttribute( DATA_VIDEO_POS, dest_node );

    if ( dest_node == '.' + MAIN_VIDEO_CONTAINER ) {
        ele_in.classList.add( 'main-video' );
        console.log( ele_in.id + '--> move to main' );
        players[ ele_in.id ].increaseVolume( 100 );
        console.log( 'helloworld1' );

    } else {
        ele_in.classList.remove( 'main-video' );
        console.log( ele_in.id + '--> move out from main' );
        players[ ele_in.id ].decreaseVolume( 100 );
        console.log( 'helloworld2' );
    }
}

function get_parent_node( ele_in ) {
    return ele_in.parentNode;
}


async function init_youtube_players() {
    document.querySelectorAll( '.plyr__video-embed' ).forEach( p => {
        players[ p.parentNode.id ] = start_child_player( p );
        // players[p.parentNode.id].increaseVolume(100);
    } );
}

function init_arrange_cell() {
    move_to_cell( get_eles( '.player' )[ 0 ], '.main-video-container' );
    for ( i = 1; i < get_eles( '.player' ).length; i++ ) {
        move_to_cell( get_eles( '.player' )[ i ], '.child' + i );
    }
}

video_list.forEach( video => {
    attach_to_body( video );
} )

var players = {};

document.addEventListener( 'DOMContentLoaded', () => {
    init_youtube_players()
        .then( init_arrange_cell() );

} );

function helloworld( ele_in ) {
    // alert(get_parent_node(ele_in).id);
    swap( get_eles( '#' + get_parent_node( ele_in ).id )[ 0 ] );
}

disable_double_click();
