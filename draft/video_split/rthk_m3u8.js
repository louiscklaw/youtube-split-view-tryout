// rthk_m3u8.js

var rthk31_m3u8 = "https://rthklive1-lh.akamaihd.net/i/rthk31_1@167495/index_2052_av-b.m3u8?sd=10&rebase=on";

var rthk32_m3u8 = "https://rthklive2-lh.akamaihd.net/i/rthk32_1@168450/index_2052_av-p.m3u8?sd=10&rebase=on";




function setup_hls_player ( target_ele, m3u8_uri )
{
    console.log( target_ele );
    console.log( m3u8_uri );
    var hls = new Hls();
    hls.attachMedia( target_ele );
    hls.on( Hls.Events.MEDIA_ATTACHED, function () {
        hls.loadSource( m3u8_uri );
        hls.on( Hls.Events.MANIFEST_PARSED, function () {
            target_ele.muted = true;
            target_ele.play();
        } );
    } );

}

function create_video_tag (dest_ele, tag_name) {
    // <video width="100%" id="rthk31_video" controls></video>
    document.querySelector( dest_ele ).outerHTML = '<video width="100%" id="' + tag_name + '" controls></video>';
}


function setup_rthk31 (ele)
{
    create_video_tag(ele, 'rthk31_video');
    setup_hls_player(
        document.getElementById( 'rthk31_video' ),
        rthk31_m3u8
    );
}

function setup_rthk32 ( ele ) {
    create_video_tag(ele, 'rthk32_video');
    setup_hls_player(
        document.getElementById( 'rthk32_video' ),
        rthk32_m3u8
    );
}

function load_rthk () {
    setup_rthk31('#video_cell_main');
    setup_rthk32('#video_cell_1');

    console.log( "helloworld" );
}


function init_rthk_source(){
    load_rthk();
}

// window.onload = init_rthk_source;
