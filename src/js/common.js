function helloworld_common() {
    var new_node_div = document.createElement( "div" );
    new_node_div.innerHTML = "<h1>helloworld</h1>";
}


function get_youtube_div( video_uri ) {
    return `<div class="plyr__video-embed" id="player3">
            <iframe src="` + video_uri + `"></iframe>
        </div>`;
}

function get_rthk( video_id) {
    return `<video id=`+video_id+` controls crossorigin playsinline poster="https://bitdash-a.akamaihd.net/content/sintel/poster.png"></video>`;
}

function attach_rthk_script( video_uri, video_id ) {
    document.addEventListener( 'DOMContentLoaded', () => {
        const source = video_uri;
        const video = document.querySelector( '#'+video_id );

        // For more options see: https://github.com/sampotts/plyr/#options
        // captions.update is required for captions to work with hls.js
        const player = new Plyr( video, child_player_config );

        if ( !Hls.isSupported() ) {
            video.src = source;
        } else {
            // For more Hls.js options, see https://github.com/dailymotion/hls.js
            const hls = new Hls();
            hls.loadSource( source );
            hls.attachMedia( video );
            window.hls = hls;

            // Handle changing captions
            player.on( 'languagechange', () => {
                // Caption support is still flaky. See: https://github.com/sampotts/plyr/issues/994
                setTimeout( () => hls.subtitleTrack = player.currentTrack, 50 );
            } );
        }

        // Expose player so it can be used from the console
        window.player = player;
    } );
}

function get_cover_text ( caption_in ) {
    return '<div class="cover">' + caption_in + '</div>';
}

function attach_to_body( video_in ) {
    temp_div = document.createElement( 'div' );
    temp_div.classList.add( 'player' );

    temp_div.setAttribute( 'onclick', 'swap(this);' );

    switch ( video_in[ 'type' ] ) {
        case VIDEO_TYPE_YOUTUBE:
            temp_div.id = video_in[ 'div_id' ];
            temp_div.innerHTML = get_youtube_div( video_in[ 'uri' ] )+get_cover_text(video_in['caption']);
            break;
        case VIDEO_TYPE_RTHK31:
            temp_div.innerHTML = get_rthk( video_in['div_id'] );
            attach_rthk_script( video_in[ 'uri' ], video_in['div_id'] )+get_cover_text(video_in['caption']);
            break;
        case VIDEO_TYPE_RTHK32:
            temp_div.innerHTML = get_rthk( video_in['div_id'] );
            attach_rthk_script( video_in[ 'uri' ], video_in['div_id'] )+get_cover_text(video_in['caption']);
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
            alert( "Double-click disabled!" );
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

function swap ( child_in ) {
    // alert( 'swap' );
    if ( get_data_video_pos( child_in ) == 'main-video-container' ) {
        console.log( 'ignore' );
    } else {
        target_child_node = get_data_video_pos( child_in );
        get_current_main_node()
            .then( res => {
                console.log( 'update data-video-pos' );
                assign_data_video_pos( res, target_child_node );
                assign_data_video_pos( child_in, '.main-video-container' );
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
}

function get_parent_node ( ele_in ) {
    return ele_in.parentNode;
}
