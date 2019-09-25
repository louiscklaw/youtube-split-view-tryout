


var VIDEO_CONFIG = {
    '.child8': get_youtube_html_from_id(BLOOMBERG_GLOBAL_NEWS),
    '.child7': get_youtube_html_from_id(NET_CONF),
    '.child6': get_youtube_html_from_id(NASA),
    '.child5': get_youtube_html_from_id(TAIWAN_NEWS_CTI),
    '.child4': get_youtube_html_from_id(TAIWAN_NEWS_CH51),
    '.child3': get_youtube_html_from_id( TAIWAN_THREE_NAP_NEWS ),
    '.main-video-container': get_youtube_html_from_id( HKO_YOUTUBE_VIDEO_ID )
}


function get_rthk_html ( ele_video_id ) {

    return '<video height="100%" id="'+ele_video_id.substring(1)+'" controls></video>';
}

async function paste_rthk_html_into_cell ( ele_cell_class, ele_cell_id ) {
    return document.querySelector( ele_cell_class ).innerHTML = get_rthk_html(ele_cell_id);
}

function rthk_load_video (ele_id, video_uri) {
    if ( Hls.isSupported() ) {
        console.log( 'hls supported' );
        console.log( ele_id );

        var video = document.querySelector( ele_id );
        var hls = new Hls();
        hls.loadSource( video_uri );
        hls.attachMedia( video );
        console.log( "attach media done" );

        hls.on( Hls.Events.MANIFEST_PARSED, function () {
            video.play();
        } );
    }
    // hls.js is not supported on platforms that do not have Media Source Extensions (MSE) enabled.
    // When the browser has built-in HLS support (check using `canPlayType`), we can provide an HLS manifest (i.e. .m3u8 URL) directly to the video element throught the `src` property.
    // This is using the built-in support of the plain video element, without using hls.js.
    else if ( video.canPlayType( 'application/vnd.apple.mpegurl' ) ) {
        video.src = video_uri;
        video.addEventListener( 'canplay', function () {
            video.play();
        } );
    }
}

function init_rthk () {
    console.log( 'rthk_helloworld' );
    cell_rthk31_id = '#child-video-rthk31';
    cell_rthk31_class = '.child-video-rthk31';
    cell_rthk32_id = '#child-video-rthk32';
    cell_rthk32_class = '.child-video-rthk32';

    paste_rthk_html_into_cell( cell_rthk31_class, cell_rthk31_id )
        .then( rthk_load_video( cell_rthk31_id, RTHK31_M3U8 ) );

    paste_rthk_html_into_cell( cell_rthk32_class, cell_rthk32_id )
        .then( rthk_load_video( cell_rthk32_id, RTHK32_M3U8 ) );

    return false;
}

function get_youtube_html_from_id( youtube_id ) {
    return '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + youtube_id + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function load_html_to_child( ele_class, html_to_load ) {
    document.querySelector( ele_class ).innerHTML = html_to_load;
}

function load_html_to_main() {
    document.querySelector( '.main-video-container' ).innerHTML = get_hko_html();
}

function helloworld() {
    console.log( "helloworld" );
}

window.onload = function () {
    // load_html_to_main();
    Object.keys( VIDEO_CONFIG ).forEach( key => {

        load_html_to_child( key, VIDEO_CONFIG[key] );
    } );

    init_rthk();
}
