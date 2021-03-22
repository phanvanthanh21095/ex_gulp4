const { src, dest } = require('gulp');
const concat = require('gulp-concat');

const cssBundle = () =>
  src([
    'src/css/bootstrap.css',
    'src/css/fontawesome.css',
    'src/css/brands.css',
    'src/css/solid.css',
    'src/css/carousel.css',
  ])
    .pipe(concat('styles.css'))
    .pipe(dest('dist/css'));

exports.cssBundle = cssBundle;
