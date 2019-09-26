// npm install gulp gulp-pug gulp-less gulp-csso gulp-concat gulp-javascript-obfuscator gulp-rename --save -D
const {
  src,
  dest,
  parallel,
  series
} = require( 'gulp' );
const pug = require( 'gulp-pug' );
const less = require( 'gulp-less' );
const minifyCSS = require( 'gulp-csso' );
const concat = require( 'gulp-concat' );

const rename = require( 'gulp-rename' );
const javascriptObfuscator = require( 'gulp-javascript-obfuscator' );

const exec = require( 'child_process' ).exec;

function html() {
  return src( './src/client/templates/index.pug' )
      .pipe( pug() )
      .pipe( dest( 'build' ) )
}

function css() {
  return src( './src/client/templates/*.less' )
      .pipe( less() )
      .pipe( concat( 'style.css' ) )
      .pipe( minifyCSS() )
      .pipe( dest( 'build/css' ) )
}

function js() {
  return src( [
      './src/client/templates/const.js',
      './src/client/templates/settings.js',
      './src/client/templates/common.js',
      './src/client/templates/app.js',
  ], {
          // sourcemaps: true
      } )
      .pipe( concat( 'app.js' ) )
      .pipe( dest( 'build/js', {
          // sourcemaps: true
      } ) )
}

function js_compress() {
  return src( './build/js/app.js' )
      .pipe( javascriptObfuscator( {
          compact: true
      } ) )
      .pipe( rename( 'app.min.js' ) )
      // .pipe( sourcemaps.write() )
      .pipe( dest( 'build/js', ) )
}

function deploy () {
  return exec( 'rm -rf docs && cp -r ./src/build docs', (err, stdout, stderr) => {
      console.log(stdout);
  })
}

exports.js = js;
exports.css = css;
exports.html = html;
exports.default = parallel( css, series(js, js_compress),html );
exports.deploy = deploy;
