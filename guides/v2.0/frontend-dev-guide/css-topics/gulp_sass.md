---
layout: default
group: fedg
subgroup: D_CSS
title: Use Sass and Gulp preprocessor
menu_order: 8
menu_node: 
level3_menu_node: level3child
level3_subgroup: custom-preprocess
version: 2.0
github_link: frontend-dev-guide/css-topics/gulp_sass.md
---

By default Magento uses [Less](http://lesscss.org/) for themes styling. But you can use other stylesheets language that can be processed to CSS. For example, Sass is a popular alternative.

If you decide not to use Less and default [Magento UI library]({{page.baseurl}}frontend-dev-guide/css-topics/theme-ui-lib.html), you need to create your own theme from scratch and use an alternative preprocessor. You can write a custom pre-processor  or used an existing one. This topic describes how to configure and use [Gulp]((http://gulpjs.com/) preprocessor for Sass.

For details about adding a custom preprocessor see the [Add custom CSS preprocessor]({{page.baseurl}}frontend-dev-guide/css-topics/custom_preprocess.html) topic.

## Create a theme using Sass and start using Gulp Sass preprocessor

1. Create a theme as described in [Create a new storefront theme]({{page.baseurl}}frontend-dev-guide/themes/theme-create.html). 

2. Setup Gulp by running the following command:

`npm install --save gulp-install`

<p class="q">In which directory?</p>

3. Add Gulp Sass preprocessor by running the following command:

`npm install gulp-sass`

4. Set up a Gulp task for Sass compilation. For a quick start you can use Magento-developed `package.json`:
<p class="q">What is this package.json and gulpfile.js? is it smth distributed with Magento, or is ita a code sample we created for this doc?</p>

{%highlight json%}

{
  "author": "Magento Commerce Inc.",
  "description": "Magento node modules dependencies for local development",
  "version": "1.0.0",
  "main": "gulpfile.js",
  "dependencies": {
    "path": "^0.12.7"
  },
  "devDependencies": {
    "gulp": "^3.9.1",
    "gulp-notify": "^3.0.0",
    "gulp-plumber": "^1.1.0",
    "gulp-sass": "^3.1.0"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}

{% endhighlight %}

and `gulpfile.js`:

{%highlight js%}

var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    plumber      = require('gulp-plumber'),
    notify       = require('gulp-notify');

var config = {
    src           : './web/css/*.scss',
    dest          : './web/css/'
};

// Error message
var onError = function (err) {
    notify.onError({
        title   : 'Gulp',
        subtitle: 'Failure!',
        message : 'Error: <%= error.message %>',
        sound   : 'Beep'
    })(err);

    this.emit('end');
};

// Compile CSS
gulp.task('styles', function () {
    var stream = gulp
        .src([config.src])
        .pipe(plumber({errorHandler: onError}))
        .pipe(sass().on('error', sass.logError));

    return stream
        .pipe(gulp.dest('./web/css/'));
}); 

{% endhighlight %}

For our theme let’s use only 1 compiled css file `styles.css`. It should be declared in   `\app\design\frontend\<Your_Vendor>\<your_sass_theme\Magento_Theme\layout\default_head_blocks.xml`:

<p class="q">what does it mean "let's use one file", how do we setup this usage?</p>

{%highlight xml%}

<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <head>
        <css src="css/styles.css"/>
    </head>
</page>

{% endhighlight %}

5. Place the SCSS source file to `\app\design\frontend\Vendor\sass-theme\web\css\styles.scss`. Now we can add styles here and use it to import files with styles for modules:
`@import '../Magento_Theme/styles/module';`

<p class="q">what does it mean "place the file to ...styles.scss"? do we need to name file like this? And where we can add styles, in styles.scss</p>