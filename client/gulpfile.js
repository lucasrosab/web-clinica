const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const bs = require("browser-sync").create();

// Mini servidor que sincroniza conforme alterações
function browserSync() {
   bs.init({
      server: { baseDir: './' }
   })
};

// Concatena os arquivos em um só
function jsConcat() {
    return gulp.src(['./node_modules/jquery/dist/jquery.min.js',
        './node_modules/jquery-mask-plugin/dist/jquery.mask.min.js',
        './node_modules/materialize-css/dist/js/materialize.min.js',
        './node_modules/angular/angular.min.js',
        './node_modules/angular-route/angular-route.min.js'])
        .pipe(concat('dependencies.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./js/', { sourcemaps: true }))
};
exports.jsConcat = jsConcat

// Concatena os arquivos css
function cssConcat() {
    return gulp.src(['./node_modules/materialize-css/dist/css/materialize.min.css',
        './node_modules/@fortawesome/fontawesome-free/css/all.min.css'])
        .pipe(concat('materialize.css'))
        .pipe(gulp.dest('./styles/css/'))
}
exports.cssConcat = cssConcat

// Transfere os arquivos de fontawesome para ./styles/webfonts
function fontAwesome() {
    return gulp.src('./node_modules/@fortawesome/fontawesome-free/webfonts/*.*')
        .pipe(gulp.dest('./styles/webfonts/'));
}
exports.fontAwesome = fontAwesome

// Fica ouvindo por alterações
function watch() {
    browserSync();
    gulp.watch(['./*.html', './styles/css/*.css', './js/*.js', './views/*.html', './controllers/*.js'])
        .on('change', bs.reload);
}
exports.watch = watch

// Default task
exports.default = gulp.series(gulp.parallel(jsConcat, fontAwesome, cssConcat), watch);