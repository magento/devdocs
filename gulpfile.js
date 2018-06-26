//
//  Gulp
//  _____________________________________________

//
//  Requires
//  ---------------------------------------------

var gulp = require('gulp'),
   gutil = require('gulp-util'),
   concat = require('gulp-concat'),
   uglify = require('gulp-uglify'),
   sass = require('gulp-sass'),
   imagemin = require('gulp-imagemin'),
   sourcemaps = require('gulp-sourcemaps'),
   autoprefixer = require('gulp-autoprefixer'),
   rename = require('gulp-rename'),
   del = require('del'),
   include = require('gulp-include'),
   jekyll = require('gulp-jekyll'),
   spawn = require('child_process').spawn,
   exec = require('child_process').exec,
   browsersync = require('browser-sync'),
   reload = browsersync.reload,


//
//  Paths
//  ---------------------------------------------

   paths = {
      icons: 'icons/*.svg',
      html: [
      	'guides/**/*.{html,md}',
        '_includes/**/*.html',
			  '_layouts/**/*.html',
        '_videos/**/*',
  //      'css/**/*.css',
        '*.html'
		],
      styles: 'scss/**/*.scss',
      scripts: [
      	'js/**/*.js',
        '!js/_vendor/**/*.js',
        '!js/_includes/**/*.js'
		],
   	images: 'i/**/*',
   	fonts: 'font/**/*',
   },
   destHtml = '_site/',
   destJS = 'common/js/',
   destImg = '_site/i/',
   destCSS = 'common/css/',
   destCSS2 = '_site/common/css'
   destFonts = '_site/font/',
   destIcons = '_site/font/icons/',

	//  BrowserSync config

   bsconfig = {
		server: {
			baseDir: destHtml
   	},
    notify: false,
   	port: 9999,
   	files: [
      paths.scripts,
      paths.images
		]
	};

//
//  Tasks
//  ---------------------------------------------
//  Not all tasks need to use streams
//  A gulpfile is just another node program and you can use all packages available on npm

//  Delete
gulp.task('clean', function (cb) {
    // You can use multiple globbing patterns as you would with `gulp.src`
    del(['build'], cb);
});

// Move some static files

gulp.task('move', function() {
	gulp.src(paths.fonts)
		.pipe( gulp.dest(destFonts) );
});

//  Scripts
gulp.task('scripts', function () {
   // Minify and copy all JavaScript (except vendor scripts)
   // with sourcemaps all the way down
   //gulp.src('js/vendor/**/*').pipe(gulp.dest(destJS + 'vendor/'));

  return gulp.src(paths.scripts)
   	.pipe(sourcemaps.init())
   	.pipe(include())
		.pipe(uglify())
    .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
    //.pipe(sourcemaps.write())
		//.pipe(concat('app.min.js'))
		.pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(destJS))
    .pipe(gulp.dest( destHtml + 'common/js/' ))
    .on('error', gutil.log)
    .pipe(reload({stream: true}));
});




//  Images
gulp.task('images', ['clean'], function () {
   return gulp.src(paths.images)
   	.pipe(imagemin({optimizationLevel: 5}))
      .pipe(gulp.dest(destImg))
      .on('error', gutil.log);
	//.pipe(livereload(server));
});

// Styles
gulp.task('styles', function () {
   gulp.src(paths.styles)
    .pipe(sourcemaps.init())
   	.pipe(sass({
         outputStyle: 'compressed'
   	}))
   	.on('error', gutil.log)
   	.pipe(autoprefixer({
      	browsers: ['last 3 versions'],
         cascade: false
      }))
      .on('error', gutil.log)
      //.pipe(sourcemaps.write())
      .pipe(gulp.dest(destCSS))
      .pipe(gulp.dest(destCSS2))
      .pipe(reload({stream: true}));

});

// Compile html files. Use _config.yml and _config.local.yml.
gulp.task('jekyll', function (gulpCallBack) {

   var jekyll = spawn('bundle', ['exec','jekyll','build', '--config', '_config.yml,_config.local.yml'], {stdio: 'inherit'});

   jekyll.on('error', function (error) {
      console.log(error.toString());
      this.emit('end');
   });

   jekyll.on('close', function () {
   	browsersync.reload();
      gulpCallBack();
   });
});

gulp.task('browser-sync', function () {
   browsersync(bsconfig);
});

/*
* Rerun the task and reload the browser when changing, adding, or removing a file. Uses the gulp.watch API.
*/
gulp.task('watch', function () {
  browsersync(bsconfig);
  var watcher =
    gulp.watch(paths.html, { interval: 500 }, ['jekyll'] );
    gulp.watch(paths.scripts, { interval: 500 }, ['scripts']);
    gulp.watch(paths.images, { interval: 500 }, ['images']);
    gulp.watch(paths.styles, { interval: 500 }, ['styles']);
    watcher.on('change', function(event) {
      gutil.log(gutil.colors.bgYellow.black('File: ' + event.path + ' was ' + event.type + ', running tasks...'));
  });
});

// The default task (called when you run `gulp` from cli)
gulp.task('default',
  [
	  'move',
    'scripts',
    'images',
    'styles',
    'watch'
  ]
);

/*
*********************
* Local development *
*********************

/*
* Use `gulp dev` to run local development tasks (e.g., compile HTML, watch source files for changes, recompile HTML, start local web server, and auto reload page after recompiling HTML).
*/
gulp.task('dev', ['jekyll', 'watch']);
