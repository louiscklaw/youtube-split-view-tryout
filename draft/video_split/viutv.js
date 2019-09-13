// viutv.js




function setup_viutv_331(video_cell) {
    console.log( 'setup viutv_331' );
    create_video_tag( video_cell, 'viutv331_video' );

    $.post( "https://hkt-mobile-api.nowtv.now.com/09/1/getLiveURL", '{"channelno":"331","format":"HLS"}', function ( data ) {
        setup_hls_player(
            document.getElementById( 'viutv331_video' ),
            data.asset.hls.adaptive[ 0 ]
        );
    }, "json" );
}

function setup_viutv_332 ( video_cell ) {
    console.log( 'setup viutv_332' );
    create_video_tag( video_cell, 'viutv332_video' );

    $.post( "https://hkt-mobile-api.nowtv.now.com/09/1/getLiveURL", '{"channelno":"332","format":"HLS"}', function ( data ) {
        console.log( data.asset.hls.adaptive[0] );
        setup_hls_player(
            document.getElementById( 'viutv332_video' ),
            data.asset.hls.adaptive[ 0 ]
        );
    }, "json" );
}


function init_viutv_source() {
    setup_viutv_331( '#video_cell_2' );
    setup_viutv_332( '#video_cell_4' );
}
