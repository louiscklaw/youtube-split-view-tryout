
var tag = document.createElement( 'script' );
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName( 'script' )[ 0 ];
firstScriptTag.parentNode.insertBefore( tag, firstScriptTag );

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var player;

function onYouTubePlayerAPIReady() {
    player = new YT.Player( 'ytplayer', {
        height: '100%',
        width: '100%',
        videoId: 'TKcHRVwTYAQ'
    } );
}


window.onload = function () {
    onYouTubePlayerAPIReady();

    color_list = [ '#FFC312', '#C4E538', '#12CBC4', '#FDA7DF', '#ED4C67', '#F79F1F', '#A3CB38', '#1289A7',
        '#D980FA', '#B53471', '#EE5A24', '#009432', '#0652DD', '#9980FA', '#833471', '#EA2027',
        '#006266', '#1B1464', '#5758BB', '#6F1E51'
    ];
    for ( i = 1; i < 99 + 1; i++ ) {
        target = i;
        if ( target < 10 ) {
            target = '0' + target;
        }
        try {
            target = '.rnd_color' + target;
            color_idx = Math.floor( Math.random() * color_list.length );
            document.querySelectorAll( target );
            document.querySelectorAll(target).forEach(box => {
                box.style.setProperty( 'background-color', color_list[ color_idx ] );
            });

        } catch (e) {

        }
    }
}
