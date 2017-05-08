var gulp = require('gulp'),
  concat = require('gulp-concat'),
  annotate = require('gulp-ng-annotate'),
  sass = require('gulp-sass'),
  babel = require('gulp-babel'),
  delpoy = require('gulp-gh-pages');


var paths = {
  jsSource: ['public/app/**/*.js'],
  cssSource: ['public/app/**/*.sass'],
  viewsSource: ['public/**/*.html']
};

gulp.task('js',function() {
  gulp.src(paths.jsSource)
    .pipe(annotate())
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./dist'))
});

gulp.task('css', function() {
  gulp.src(paths.cssSource)
    .pipe(sass())
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('./dist'))
})

gulp.task('views', function() {
  gulp.src(paths.viewsSource)
    .pipe(gulp.dest('./'))
})

gulp.task('watch', function() {
  gulp.watch(paths.jsSource, ['js']);
  gulp.watch(paths.cssSource, ['css']);
  gulp.watch(paths.viewsSource, ['views']);
})

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(deploy())
})

gulp.task('default', ['js', 'css', 'views','watch'])
