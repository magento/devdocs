---
group: frontend-developer-guide
title: Use Sass preprocessor and Gulp task runner
functional_areas:
  - Frontend
  - Tools
---

By default, Magento uses [Less](http://lesscss.org/) for themes styling. But you can use other stylesheet languages that can be compiled (processed) to CSS. For example, Sass is a popular alternative.

If you decide not to use Less and the default [Magento UI library]({{ page.baseurl }}/frontend-dev-guide/css-topics/theme-ui-lib.html), you need to create your own theme from scratch and use an alternative preprocessor. This topic describes how to configure and use the [Gulp](http://gulpjs.com/) task runner and the gulp-sass package for the Sass preprocessor.

For details about adding a custom preprocessor, see [Add custom CSS preprocessor]({{ page.baseurl }}/frontend-dev-guide/css-topics/custom_preprocess.html).

## Install Gulp and its Sass preprocessor

1. In the root of the theme directory, create an empty `package.json` and copy-paste the following code:

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

1. Install Gulp by running the following command in a command prompt:

   `npm install --save gulp-install`

1. Add the gulp-sass package for the Sass preprocessor by running the following command:

   `npm install gulp-sass`

## Create a theme and add Sass styles

1. Create a theme, as described in [Create a new storefront theme]({{ page.baseurl }}/frontend-dev-guide/themes/theme-create.html).

1. Set up a Gulp task for Sass compilation by placing the file with the task code in the root of your theme directory (`app/design/frontend/<Vendor>/<theme>`). Create an empty `app/design/frontend/<Vendor>/<theme>/gulpfile.js` file and copy-paste this code into it (no changes needed):

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

   This task uses `styles.scss`, stored in the `app/design/frontend/<Vendor>/<theme>/web/css/` directory, as the source of Sass. It stores the generated CSS in `styles.css` in the `app/design/frontend/<Vendor>/<theme>` directory.

1. Put the source `styles.scss` file in the `app/design/frontend/<Vendor>/<theme>/web/css/` directory.

1. Declare the resulting CSS file in the `default_head_blocks.xml` file in the `app/design/frontend/<Vendor>/<theme/Magento_Theme/layout/` directory to enable your theme to use the generated CSS. You can create an empty `default_head_blocks.xml` file and copy the following code:

   ```xml
   <page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
       <head>
           <css src="css/styles.css"/>
       </head>
   </page>
   ```
1. To generate CSS, run
    `gulp styles`.

## Using the @import directive in Sass

In the source .`scss` files you can use the `@import` directive, to import other `.scss` files. You can put the module-related stylesheets in the module directories in the theme, and then include them in the main `.scss` file. For example, if you create a `_catalogstls.scss` file for styles of the `Magento_Catalog` module and put it in `app/design/frontend/<Vendor>/<theme>/Magento_Catalog/styles`, you can import it using the following notation:
```css
@import '../Magento_Theme/styles/module`
```
