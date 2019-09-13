// hls_util.js

function setup_hls_player ( target_ele, m3u8_uri )
{
    console.log( target_ele );
    console.log( m3u8_uri );
    hls_play( target_ele, m3u8_uri );
}

function create_video_tag (dest_ele, tag_name) {
    // <video width="100%" id="rthk31_video" controls></video>
    document.querySelector( dest_ele ).innerHTML = '<video width="100%" id="' + tag_name + '" controls></video>';
}

function hls_play ( target_ele, m3u8_uri ) {
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
