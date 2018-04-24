const path = require('path');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const plumber = require('gulp-plumber');
const uglify = require('gulp-uglify');
const browserify = require('browserify');
const babel = require('babelify');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const moduleImporter = require('sass-module-importer');
const favicons = require('gulp-favicons');
const data = require('gulp-data');
const nunjucks = require('gulp-nunjucks-render');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const ga = require('gulp-ga');

function requireUncached( $module ) {
    delete require.cache[require.resolve( $module )];
    return require( $module );
}

gulp.task('default', ['js', 'html', 'fonts', 'img', 'compileSass', 'minifyCss', 'serve']); //

gulp.task('serve', () => {
    browserSync.init({
        server: "app"
    });

    gulp.watch('src/asset/js/**/*.js', ['js']);
    gulp.watch('src/html/**/*.html', ['html']);
    gulp.watch('src/html/templates/*', ['html']);
    gulp.watch('src/asset/css/**/*.scss', ['compileSass']);
});

gulp.task('build', ['js', 'buildHtml', 'fonts', 'favicon', 'img', 'compileSass', 'minifyCss']); //

gulp.task('buildHtml', () => {
    return gulp.src("src/html/**/*.html")
        .pipe( data(function(file){
            return requireUncached('./src/html/templates/data.json');
        }))
        .pipe(nunjucks({ path: ['./src/html/templates'] }))
        .pipe(ga({url: 'mydomain.com', uid: 'UA-12345678-1', sendPageView: true, require: 'linkid', minify: true}))
        .pipe(gulp.dest('app'));
});

gulp.task('html', () => {
    return gulp.src("src/html/**/*.html")
        .pipe( data(function(file){
            return requireUncached('./src/html/templates/data.json');
        }))
        .pipe(nunjucks({ path: ['./src/html/templates'] }))
        .pipe(gulp.dest('app'))
        .pipe(browserSync.stream());
});

gulp.task('fonts', () => {
    return gulp.src("src/asset/fonts/**/*")
        .pipe(gulp.dest('app/assets/css/fonts'));
});

gulp.task('img', () => {
    return gulp.src("src/asset/img/**/*")
        .pipe(gulp.dest('app/assets/images'))
        .pipe(browserSync.stream());
});

gulp.task('favicon', () => {
    return gulp.src('src/favicon.png')
        .pipe(favicons({
            pipeHTML: false
        }))
        .pipe(gulp.dest('app'));
});

gulp.task('js', () => {
    var b = browserify({
        entries: 'src/asset/js/main.js',
        debug: true
    }).transform(babel);

    return b.bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('app/assets/js'))
        .pipe(browserSync.stream());
});

gulp.task('compileSass', function() {
  return gulp.src("./src/asset/css/main.scss")
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('app/assets/css'))
      .pipe(browserSync.stream());
});

gulp.task("minifyCss", ["compileSass"], function() {
  return gulp.src("app/assets/css/main.css")
    .pipe(cssmin())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('app/assets/css'));
});