import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import webpack from 'webpack-stream';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

gulp.task('default', () => {
  return gulp.src('src/grid/App.js')
    .pipe(webpack(require('./webpack.config.js')))
    .on('error', handleError)
    .pipe(gulp.dest('dist/'));
});

gulp.task('scripts', () => {
  return gulp.src('src/grid/App.js')
    .pipe(webpack(require('./webpack.config.js')))
    .on('error', handleError)
    .pipe(gulp.dest('dist/'))
    .pipe(reload({stream: true}));
});

gulp.task('styles', () => {
    return gulp.src('assets/less/*.less')
        .pipe($.less())
        .on('error', handleError)
        .pipe(gulp.dest('dist/'))
        .pipe(reload({stream: true}));
});

gulp.task('serve', [ 'scripts'], () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      routes: {
        '/bower_components': 'bower_components'
      }
    },
    online:true
  });

  gulp.watch([
    'index.html'
  ]).on('change', reload);

  gulp.watch('src/**/*.js', ['scripts']);
  gulp.watch('assets/less/*.less', ['styles']);
});

function handleError (error) {
  console.log(error.toString())

  this.emit('end')
}
