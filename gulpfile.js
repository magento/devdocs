//
//  Gulp
//  _____________________________________________

//
//  Requires
//  ---------------------------------------------

var gulp = require('gulp'),
   gutil = require('gulp-util'),
   shell = require('gulp-shell');
   concat = require('gulp-concat'),
   uglify = require('gulp-uglify'),
   sass = require('gulp-sass'),
   imagemin = require('gulp-imagemin'),
   sourcemaps = require('gulp-sourcemaps'),
   compass = require('gulp-compass'),
   autoprefixer = require('gulp-autoprefixer'),
   minifycss = require('gulp-minify-css'),
   rename = require('gulp-rename'),
   del = require('del'),
   include = require('gulp-include'),
   jekyll = require('gulp-jekyll'),
   spawn = require('child_process').spawn,
   exec = require('child_process').exec,
   consolidate = require('gulp-consolidate'),
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
         'css/**/*.css',
         '*.html'
		],
      styles: 'scss/**/*.scss',
      scripts: [
      	'js/**/*.js',
         '!js/vendor/**/*.js'
		],
   	images: 'i/**/*',
   	fonts: 'font/**/*',
   },
   destHtml = '_site/',
   destJS = 'js/',
   destImg = '_site/i/',
   destCSS = 'css/',
   destFonts = '_site/font/',
   destIcons = '_site/font/icons/',

	//  BrowserSync config

   bsconfig = {
		server: {
			baseDir: destHtml
   	},
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
   gulp.src('js/vendor/**/*')
   	.pipe(gulp.dest(destJS + 'vendor/'));

   return gulp.src(paths.scripts)
   	.pipe(sourcemaps.init())
   	.pipe(include())
		//.pipe(uglify())
		//.pipe(concat('app.min.js'))
		//.pipe(sourcemaps.write())
		.pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest(destJS))
      .on('error', gutil.log)
      .pipe(reload({stream: true}));
		//.pipe(livereload(server));
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
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(destCSS))
      .pipe(reload({stream: true}));

});

// Compile html files. Use _config.yml
gulp.task('jekyll', function (gulpCallBack) {

   var jekyll = spawn('bundle', ['exec','jekyll','build'], {stdio: 'inherit'});

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

// Rerun the task when a file changes
gulp.task('watch', function () {
   browsersync(bsconfig);
   gulp.watch(paths.html, ['jekyll']);
//   gulp.watch(paths.scripts, ['scripts']);
   gulp.watch(paths.images, ['images']);
   gulp.watch(paths.styles, ['styles']);
});


// The default task (called when you run `gulp` from cli)
gulp.task('default',
   [
	   'move',
   // 'scripts',
      'images',
      'styles',
      'watch'
   ]
);
