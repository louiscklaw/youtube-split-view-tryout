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
