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

By default, Magento uses [Less](http://lesscss.org/) for themes styling. But you can use other stylesheet languages that can be compiled (processed) to CSS. For example, Sass is a popular alternative.

If you decide not to use Less and default [Magento UI library]({{page.baseurl}}frontend-dev-guide/css-topics/theme-ui-lib.html), you need to create your own theme from scratch and use an alternative preprocessor. You can write a custom pre-processor  or used an existing one. This topic describes how to configure and use [Gulp](http://gulpjs.com/) preprocessor for Sass.

For details about adding a custom preprocessor, see the [Add custom CSS preprocessor]({{page.baseurl}}frontend-dev-guide/css-topics/custom_preprocess.html) topic.

## Install Gulp and its Sass preprocessor

2. In the root of theme directory, create an empty `package.json` and copy-paste the following code:

   ```json
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
   ```

2. Install Gulp by running the following command in a command prompt:

   `npm install --save gulp-install`

3. Add Gulp Sass preprocessor by running the following command:

   `npm install gulp-sass`

## Create a theme and add Sass styles

1. Create a theme as described in [Create a new storefront theme]({{page.baseurl}}frontend-dev-guide/themes/theme-create.html). 

4. Set up a Gulp task for Sass compilation. For this, put the file with the task code   to the root of your theme directory (`app/code/frontend/<Vendor>/<theme>`). You can use the following code sample (no changes needed, create an empty `app/code/frontend/<Vendor>/<theme>/gulp.js` and copy-paste this code): 
 `package.json`:

   ```js

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
   ```
   This task uses `styles.scss` stored in `app/design/frontend/<Vendor>/<theme>/web/css/` as source of SASS. And it stores the generated CSS in `styles.css` in the `app/code/frontend/<Vendor>/<theme>` directory.

5. Put the source `styles.scss` file to the `app/design/frontend/<Vendor>/<theme>/web/css/` directory. 

5. For your theme to start using the generated CSS, declare the resulting CSS file in the `default_head_blocks.xml` in the `app/design/frontend/<Vendor>/<theme/Magento_Theme/layout/` directory. You can create an empty `default_head_blocks.xml` file and copy the following code:

   ```xml
	<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    	<head>
    	    <css src="css/styles.css"/>
    	</head>
	</page>
   ```
6. To generate CSS, run
    `gulp styles`

## Using the @import directive in Sass

In the source .`scss` files you can use the `@import` directive, to import other `.scss` files. You can put the module-related stylesheets in the module directories in the theme, and then include them in the main `.scss` file. For example, if you create a `_catalogstls.scss` file for styles of the `Magento_Catalog` module and put it in `app/design/frontend/<Vendor>/<theme>/Magento_Catalog/styles `, you can import it using the following notation:

    @import '../Magento_Theme/styles/module


