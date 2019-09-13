// rthk_m3u8.js

var rthk31_m3u8 = "https://rthklive1-lh.akamaihd.net/i/rthk31_1@167495/index_2052_av-b.m3u8?sd=10&rebase=on";

var rthk32_m3u8 = "https://rthklive2-lh.akamaihd.net/i/rthk32_1@168450/index_2052_av-p.m3u8?sd=10&rebase=on";





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
