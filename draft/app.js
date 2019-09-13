window.onload = function () {
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
