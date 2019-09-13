// rthk_m3u8.js

var video = document.getElementById( 'video' );
var hls = new Hls();

var rthk31_m3u8 = "https://rthklive1-lh.akamaihd.net/i/rthk31_1@167495/index_2052_av-b.m3u8?sd=10&rebase=on";

var rthk32_m3u8 = "https://rthklive2-lh.akamaihd.net/i/rthk32_1@168450/index_2052_av-p.m3u8?sd=10&rebase=on";


function setup_hls_player ( target_ele, m3u8_uri )
{
    console.log( target_ele );
    console.log( m3u8_uri );
    hls.attachMedia( target_ele );
    hls.on( Hls.Events.MEDIA_ATTACHED, function () {
        hls.loadSource( m3u8_uri );
        hls.on( Hls.Events.MANIFEST_PARSED, function () {
            target_ele.muted = true;
            target_ele.play();
        } );
    } );

}

function setup_rthk31 ()
{
    setup_hls_player(
        document.getElementById( 'rthk31_video' ),
        rthk31_m3u8
    );
}

function setup_rthk32 () {
    setup_hls_player(
        document.getElementById( 'rthk32_video' ),
        rthk32_m3u8
    );
}

function helloworld () {
    console.log( 'setup rthk32' );
    load_inlineHTML('video_cell_main');
    setup_rthk32();
}

function load_inlineHTML (id_ele) {
    console.log( 'load_HTML' );

    document.querySelector( '#'+id_ele ).outerHTML = '<video height="100%" width="100%" id="rthk32_video" controls></video>';
}

window.onload = helloworld;
