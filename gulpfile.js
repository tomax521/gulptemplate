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
const del = require('del');

function requireUncached( $module ) {
    delete require.cache[require.resolve( $module )];
    return require( $module );
}

function clean() {
    return del([ 'app' ]);
}

function buildHtml(){
    return gulp.src("src/html/**/*.html")
        .pipe( data(function(file){
            return requireUncached('./src/html/templates/data.json');
        }))
        .pipe(nunjucks({ path: ['./src/html/templates'] }))
        .pipe(gulp.dest('app'));
}

function html(){
    return gulp.src("src/html/**/*.html")
        .pipe( data(function(file){
            return requireUncached('./src/html/templates/data.json');
        }))
        .pipe(nunjucks({ path: ['./src/html/templates'] }))
        .pipe(gulp.dest('app'))
        .pipe(browserSync.stream());
}

function fonts(){
    return gulp.src(["src/asset/fonts/**/*", './node_modules/bootstrap-sass/assets/fonts/**/*'])
        .pipe(gulp.dest('app/assets/css/fonts'));
}


function img(){
    return gulp.src("src/asset/img/**/*")
        .pipe(gulp.dest('app/assets/images'))
        .pipe(browserSync.stream());
}

function favicon(){
    return gulp.src('src/favicon.png')
        .pipe(favicons({
            pipeHTML: false
        }))
        .pipe(gulp.dest('app'));
}

function js(){
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
}

function compileSass() {
    var sassOpts = {
        outputStyle: 'nested',
        precison: 3,
        errLogToConsole: true,
        includePaths: ['./node_modules/bootstrap-sass/assets/stylesheets']
    };

    return gulp.src("./src/asset/css/main.scss")
        .pipe(sourcemaps.init())
        .pipe(sass(sassOpts).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('app/assets/css'))
        .pipe(browserSync.stream());
};

function minifyCss() {
    return gulp.src("app/assets/css/main.css")
        .pipe(cssmin())
        .pipe(rename('bundle.min.css'))
        .pipe(gulp.dest('app/assets/css'));
};

function serve(){
    browserSync.init({
        server: "app"
    });

    gulp.watch('src/asset/js/**/*.js', js);
    gulp.watch('src/html/**/*.html', html);
    gulp.watch('src/html/templates/*', html);
    gulp.watch('src/asset/css/**/*.scss', compileSass);
}

var start = gulp.series( gulp.parallel(js, html, fonts, img, compileSass, serve));
var build = gulp.series( gulp.parallel(js, html, fonts, img, compileSass, minifyCss));

gulp.task('default', start);

gulp.task('build', build);