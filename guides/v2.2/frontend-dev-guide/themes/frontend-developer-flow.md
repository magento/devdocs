---
layout: default
group: fedg
title: Frontend Developer Guide
landing-page: Frontend Developer Guide
menu_title: Introduction
menu_order: 1
version: 2.2
github_link: frontend-dev-guide/frontend-developer-flow.md
---

# Theme creation workflow
#Preconditions
Magento2 is installed and running. The installation guide can be found [here]({{page.baseurl}}/install-gde/install-quick-ref.html). Or for setup [Magento2 on Docker]({{page.baseurl}}/install-gde/docker/docker-over.html)

# Creating a new theme – first steps

## Check the Magento mode

Before starting theme development, check the mode your Magento instance is running. It is recommended to use “developer” mode for theme development. 

To check the mode, use the following command in magento2ce folder:

`php bin/magento deploy:mode:show`

To change Magento mode to developer:

`php bin/magento deploy:mode:set developer`
 
More information about Magento mode can be found [here]({{page.baseurl}}/config-guide/bootstrap/magento-modes.html)

##Add basic files

Decide if the theme will inherit from any parent theme. Here we’ll create a theme named “Dark” that inherits from Magento Blank.

We’ll start creating a theme from directory structure: `magento2ce/app/design/frontend/Vendor/dark/`

To declare a theme as a system component, create a `magento2ce/app/design/frontend/Vendor/dark/theme.xml`, add theme name and a theme preview path if you have any.

Add `magento2ce/app/design/frontend/Vendor/dark/registration.php` to register your theme in the system. Add a path to your theme there. In our case, it is `frontend/Vendor/dark`.

Optionally: add `magento2ce/app/design/frontend/Vendor/dark/composer.json`. to describes the theme dependencies and some meta-information, if your theme is a Composer package.

##Choose .less files compilation mode

After you create a theme, before starting to change the styles, is deciding, which LESS compilation mode you will use.
In the Magento application, the following flows of compiling .less files to CSS can be used:
1. **Grunt compilation.**
This way is most recommended to use in a new theme development process.
2. **Server-side LESS compilation.**
This is the default compilation mode, and is the only option in production application mode. In this case the compilation is performed on the server, using the LESS PHP library. Compilation happens automatically in default and developer mode without any additional setup in case when requested styles file exist in .less format so it needs to be compiled to css.
3. **Client-side LESS compilation.**
When your application is not in the production mode, you can set Magento to compile `.less` files in a browser, using the []native less.js library](http://lesscss.org/usage/#using-less-in-the-browser). Client-side compilation can be very useful when you need to do a small quick fix in styles.

#Setup development processes with grunt

##Setup Grunt

Magento has built-in Grunt tasks configured, but there are still several prerequisite steps you need to take to be able to use it:
1. Install [node.js](https://nodejs.org/en/) to any location on your machine.
2. Install [Grunt CLI tool](https://gruntjs.com/getting-started#installing-the-cli) globally. To do this, run the following command in a command prompt:
`npm install -g grunt-cli`
3. Copy the following files in your Magento root directory:
a. `package.json.sample` to `package.json`
b. `Gruntfile.js.sample` to `Gruntfile.js`
4. Install (or refresh) the node.js project dependency, including Grunt, for your Magento instance. To do this, run the following commands in a command prompt:
<pre>
cd <your_Magento_instance_directory>
npm install
npm update
</pre>

So, we have npm and Grunt in our project. Now we should add a Grunt task for our new theme. There are 2 workflows for adding a Grunt task for a new theme. The workflow depends on Magento2 version.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
**Note:** if you are using docker environment, you should run nmp and all gulp commands in docker ssh environment.</span>
</div>

###Add a theme to Grunt configuration: **Magento 2.0 – Magento 2.1**

To add your theme to Grunt configuration, in the `/dev/tools/grunt/configs/themes.js` file, add your theme to `module.exports` like following:

{%highlight js%}

module.exports = {
    ...
    <theme>: {
        area: 'frontend',
        name: '<Vendor>/<theme>',
        locale: '<language>', 
        files: [
            '<path_to_file1>', //path to root source file
            '<path_to_file2>'
        ],
        dsl: 'less'
    ...
    },
{% endhighlight %}
 
Where the following notation is used:
- `<theme>`: your theme code, conventionally should correspond to the theme directory name.
- `<language>`: specified in the 'code_subtag' format, for example en_US. Only one locale can be specified here. To debug the theme with another locale, create one more theme declaration, having specified another value for language
- `<path_to_file>`: path to the root source file, relative to the `app/design/frontend/<Vendor>/<theme/>web` directory. You need to specify all root source files of the theme. If your theme inherits from a certain theme, and does not contain its own root source files, specify the root source files of the parent theme.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
Note: Grunt configuration in `/dev/tools/grunt/configs/themes.js` file can be overwritten on Magento updates via composer. To prevent this, follow this workaround:
- Copy `grunt-config.json.sample` to `grunt-config.json`.
- Copy `dev/tools/grunt/configs/themes.js` to `dev/tools/grunt/configs/local-themes.js`
- Specify your themes config in `dev/tools/grunt/configs/local-themes.js`
</span>
</div>

###Add a theme to Grunt configuration: **Magento 2.2+**, the file-router tool

File-router allows to use custom files in grunt tasks. For example, if out-of-the-box `themes.js` file is used in grunt tasks, the file-router can be configured to route these tasks to your custom `themes.js` which can be located anywhere. To configure the file-rooter for your theme, you should declare custom file:
1. Copy the following file in your Magento root directory: 
`grunt-config.json.sample` to `grunt-config.json`
2. Open `grunt-config.json` and set configurations object's key as alias to file and value as path to your custom file:
<pre>
{
    "themes": "dev/tools/grunt/configs/local-themes"
}
</pre>
3. Add `local-themes.js` file in `/dev/tools/grunt/configs/local-themes.js` and add a Grunt task for our “Dark” theme in it:

{%highlight js%}

module.exports = {
    dark: {
        area: 'frontend',
        name: 'Vendor/dark',
        locale: 'en_US',
        files: [
            'css/styles-m',
            'css/styles-l',
            'css/email',
            'css/email-inline'
        ],
        dsl: 'less'
    }
};

{% endhighlight %}

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
Note: you can use `/dev/tools/grunt/configs/themes.js` as an example for Grunt tasks.
</span>
</div>

So, we registered the task for the Dark theme, and now we can use Grunt in our theme development process.

##Grunt commands

The following table describes the grunt commands you can use performing different customization tasks. Run all commands from your Magento installation directory.
|Grunt task|Action|Command for the Dark theme|
| ------------- |:-------------:| -----:|
|`grunt clean:<theme>`|Removes the theme related static files in the `/pub/static` and `/var` directories.|`grunt clean:dark`|
|`grunt exec:<theme>`|Republishes symlinks to the source files to the `/pub/static/frontend/<Vendor>/<theme>/<locale>` directory|`grunt exec:dark`|
|`grunt less:<theme>`|Compiles `.css` files using the symlinks published in the `/pub/static/frontend/<Vendor>/<theme>/<locale>` directory|`grunt less:dark`|
|`grunt watch`|Tracks the changes in the source files, recompiles `.css` files. Also it can reload the page in the browser, if LiveReload plugin is installed and set up.| |
|`grunt refresh`|Alias for `exec:all`, `less:blank`, `less:luma`", `less:backend` tasks| |
|`grunt clean`|Clean files and folders (`/var`, `/pub`, etc)| |

For a quick start use:
<pre>
grunt exec: <your_theme>
grunt less: <your_theme>
grunt watch
</pre>


###What are symlinks in Magento2 for?

A symlink (also symbolic link or soft link) is the nickname for any file that contains a reference to another file or directory in the form of an absolute or relative path and that affects pathname resolution. 

In default or developer mode not preprocessed static resource are published as symlinks to the actual source so any change made to the source file will appear in the pub/static/* folder and it gives benefits
- No need to publish file again so changes will appear on browser refresh (images, js, knockout templates, .html, css)
- Possible to run grunt watch command on pub/static folder to track the changes in .less files and recompile on change
- Easier to debug: in developer browser toolbar (with sourcemaps enabled) it’s possible to find the path to the `.less` source file and then find out where the actual source is located by getting symlink info ([for Windows](https://superuser.com/questions/524669/checking-where-a-symbolic-link-points-at-in-windows-7), [for command line](http://stackoverflow.com/questions/16017500/how-to-see-full-symlink-path)) 

Some files that needs preprocessing will be copied i.e. 
- "root" `.less` files which contains magento_import directive or import without file extension mentioned (source/varibles)
- other `.less` or `.css` files with module notation in url (`Magento_Theme::path/to/file.img`) (so it’s better to use relative url to resources as it was already published in `pub/static/`

##Start to create styles

The simplest way to customize a theme is to override variables from a parent theme. To do this, add `\web\css\source\_theme.less` file to your theme. If you inherit from Blank theme, list of its variables can be found here: `\lib\web\css\source\lib\variables`. Complete list of variables can also be found in `<your Magento2 site>/pub/static/frontend/Magento/blank/en_Us/css/docs/index.html`

You can convert Blank theme to Dark theme using only variables:

{%highlight css%}

//  Color nesting
@page__background-color: @color-gray20;
@sidebar__background-color: @color-gray40;
@primary__color: @color-gray80;
@border-color__base: @color-gray76;

@link__color: @color-gray56;
@link__hover__color: @color-gray60;

//  Buttons
@button__color: @color-gray20;
@button__background: @color-gray80;
@button__border: 1px solid @border-color__base;

//  Primary button
@button-primary__background: @color-orange-red1;
@button-primary__border: 1px solid @color-orange-red2;
@button-primary__color: @color-white;
@button-primary__hover__background: darken(@color-orange-red1, 5%);
@button-primary__hover__border: 1px solid @color-orange-red2;
@button-primary__hover__color: @color-white;

//  Navigation
@navigation-level0-item__color: @color-gray80;
@submenu-item__color: @color-gray80;

@navigation__background: @color-gray40;
@navigation-desktop-level0-item__color: @color-gray80;
@navigation-desktop-level0-item__hover__color: @color-gray34;
@navigation-desktop-level0-item__active__color: @navigation-desktop-level0-item__color;

//  Tabs
@tab-control__background-color: @page__background-color;

//  Forms
@form-element-input__background: @color-gray89;
@form-element-input-placeholder__color: @color-gray60;

//  Header icons
@header-icons-color: @color-gray89;
@header-icons-color-hover: @color-gray60;

{% endhighlight %}

For more deep customizations use [this guide]({{page.baseurl}}/frontend-dev-guide/css-guide/css_quick_guide_approach.html) as a starting point.

##Theme development best practice

1. Override as less as possible. It’s better to create `_extend.less` file than to override a `.less` file from a parent theme for a minor customization like changing a line or two. (if you inherit)
2. Use `.xml` containers instead of overriding a template. If you need to create a new container, it is better to add an `.xml` file and create it there rather than override a template file. 
The reason is that layouts are merging so original file stays untouched.
3. Some customization can be performed using [layout instructions]({{page.baseurl}}/frontend-dev-guide/layouts/xml-instructions.html ) like 
  1. `move` when you need change position of block or container
  2. `remove` or `display` attribute on the `referenceBlock/Container` to remove block
  3. reorder with `before/after`
  4. change html tag or css class for existing container using `referenceContainer` element.
4. Try to find existing markup or design pattern in Magento2 and reuse it by referencing to the existing `.phtml` template if possible ([templates hints can help]({{page.baseurl}}/frontend-dev-guide/themes/debug-theme.html#debug-theme-templ)) or copy and paste html markup in your custom template.
5. Use `etc/view.xml` to change image types sizes or add your own types. Use this file also to [customize product gallery widget]({{page.baseurl}}/javascript-dev-guide/widgets/widget_gallery.html)
6. If the only reason to override a template is replacing a word with another one (e.g. "checkout" to "go to checkout") it’s better to use `i18n/en_US.csv` to replace the text than to override the whole template.

##Theme debugging

###How to find what you need

Templates, layouts and styles – all of them can require debugging on some stage of theme development. How to allocate the file you need to fix, described in [this article]({{page.baseurl}}/frontend-dev-guide/themes/debug-theme.html)

###CSS source maps

All our Dark storefront theme `.less` files (as well as Blank and Luma theme) are compiled into two big css files: `styles-m.css` and `styles-l.css`. When debugging a theme, it might be difficult to find the needed file to correct, as the browser shows “styles-m.css”.
**!! no-map.png !!**
To do the debugging more convenient, css source maps files are used. Css source map files help to find the `.less` file, where the style is specified. They are written into theme destination directory when grunt compilation is used:
**!! with-map.png !!**
To enable source maps display for Chrome go to Inspect -> Settings -> Preferences -> Enable CSS source maps:
**!! image here**
 
###Use livereload

If you want to use Grunt for "watching" changes automatically, without reloading pages in a browser each time, install the [LiveReload extension](http://livereload.com/extensions/) in your browser. 

#What is I want to use a different css preprocessor?

If you want to step away from Magento UI Library and Less and use SASS – that’s not a problem.

In this case, you’ll have to create your own theme from scratch and use your favorite preprocessor in your favorite way. Let’s create a theme named “sass-theme” using [SASS preprocessor](http://sass-lang.com/) and [Gulp task runner](http://gulpjs.com/).

First, add required theme files described in _[Add basic files section](add a link to Add basic files section)_ and setup Gulp:

`npm install --save gulp-install`

Then add Gulp sass compiler:

`npm install gulp-sass`

and set up a Gulp task for scss compilation.

For a quick start you can use our `package.json`:


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

For our theme let’s use only 1 compiled css file `styles.css` To show Magento2 where to find it, we should declare it in `\app\design\frontend\Vendor\sass-theme\Magento_Theme\layout\default_head_blocks.xml`:

{%highlight xml%}

<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <head>
        <css src="css/styles.css"/>
    </head>
</page>

{% endhighlight %}

Place the SCSS source file to `\app\design\frontend\Vendor\sass-theme\web\css\styles.scss`. Now we can add styles here and use it to import files with styles for modules:
`@import '../Magento_Theme/styles/module';`

#What are cache files? What caches we need to clean?

Caching one of the most effective way of improving performance of web applications of all kinds. Generally speaking there are two ways to cache: client-side (browser) and server-side. In addition, there are two types of content: public (available to multiple customers) and private (specific to one customer).
Magento page caching is synonymous with full-page caching; in other words, we cache the entire page. The Magento application gives you the following options:
- The default caching mechanism which stores cache files in any of the following:
  - On the file system. You don’t need to do anything to use file-based caching.
  - [Database]({{page.baseurl}}/config-guide/cache/caching-database.html)
  - [Redis]({{page.baseurl}}/config-guide/redis/redis-pg-cache.html)
  - [Varnish]({{page.baseurl}}/config-guide/varnish/config-varnish.html) (recommended)
  
_Cacheable_ and _uncacheable_ are terms we use to indicate whether or not a page should be cached at all. (By default, all pages are cacheable.) If any block in a layout is designated as uncacheable, the entire page is uncacheable.

To create an uncacheable page, mark any block on that page as uncacheable in the layout using `cacheable="false"`. Examples of uncacheable pages include the compare products, cart, checkout pages, and so on.

The following cache types mostly have impact on frontend development process:

|Cache type "friendly" name|Cache type code name|Description|
| ------------- |:-------------:| -----:|
|Layout|`layout`|Compiled page layouts (that is, the layout components from all components).
Clean or flush this cache type after modifying layout files.|
|Block HTML output|`block_html`|HTML page fragments per block.
Clean or flush this cache type after modifying the view layer.|
|Page cache|`full_page`|Generated HTML pages.
If necessary, Magento cleans up this cache automatically, but third-party developers can put any data in any segment of the cache.
Clean or flush this cache type after modifying code level that affects HTML output. It’s recommended to keep this cache enabled because caching HTML improves performance significantly.|
|Translations|`translate`|Merged translations from all modules.|
<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
Note: The full list of cache types can be found [here]({{page.baseurl}}/config-guide/cli/config-cli-subcommands-cache.html#config-cli-subcommands-cache-clean-over).
</span>
</div>

To view the status of the cache, enter 

`php bin/magento cache:status`

In theme development process developer rarely deals with these cache types. Mostly we need to clear static files, that are generated to pub/static and var directories. To clean them, run

`grunt clean`

# Static content deploy

The static view files deployment command enables you to write static files to the Magento file system when the Magento software is [set for production mode]({{page.baseurl}}/config-guide/bootstrap/magento-modes.html#mode-production).

The term static view file refers to the following:
- “Static” means it can be cached for a site (that is, the file is not dynamically generated). Examples include images and CSS generated from LESS.
- “View” refers to presentation layer (from MVC).

Static view files are located in the `<your Magento install dir>/pub/static directory`, and some are cached in the `<your Magento install dir>/var/view_preprocessed` directory as well.

Static view files deployment is affected by Magento modes as follows:
- [Developer mode]({{page.baseurl}}/config-guide/bootstrap/magento-modes.html#mode-developer): Magento generates them on demand, but the rest are cached in a file for speed of access.
- [Default]({{page.baseurl}}/config-guide/bootstrap/magento-modes.html#mode-default) and [production]({{page.baseurl}}/config-guide/bootstrap/magento-modes.html#mode-production) modes: Static files are not generated or cached.

To deploy static view files:
1. Log in to the Magento server as, or switch to, the Magento file system owner.
2. Delete the contents of `<your Magento install dir>/pub/static`.
3. Run the static view files deployment tool `<your Magento install dir>/bin/magento setup:static-content:deploy`.

More information about static view files can be found [here]({{page.baseurl}}/config-guide/cli/config-cli-subcommands-static-view.html). 

#Magento2 upgrade and extensions

While developing a theme, it is important to consider that Magento2 can be updated to a new version or different [extensions can be installed]({{page.baseurl}}/cloud/howtos/install-components.html) . That’s why it is preferable to use `_extends.less` file for minor styles customization rather than overload the whole `.less` file for a one-two corrections. Also, it is preferable to use `.xml` files for re-arranging blocks and creating new containers rather than override templates files. Please pay attention, that after an upgrade something in `templates/layouts/styles` could change, so it’s recommended to check if the changes affected overridden templates in your theme and copy changes to your `templates/layouts/styles` if any.
Customization that can lead to breaking theme

# Customizations, that can break your theme:

- Removing containers with needed blocks via xml without moving these blocks to others via xml
- Risky customizations
- Any overridden source file. The source file can change after update. So, it is important to pay attention to the overridden and move critical updates from initial file if needed.

#PHP and grunt compilations give different results – what to do and why?

PHP and Grunt compilation can give different results because of difference in compiler settings. But the difference is in rounding of numbers, so for css it can be neglected.

# How to make sure that the same styles are delivered to production

When you finished developing and your styles are ready to go to production, you can configure your grunt/gulp less compiler to minify compiled code, disable source maps generation and then copy the compiled files to `/app/design/frontend/Vendor/dark/web/css` folder next to “root” source files. So, they will be used in static content deploy instead of running backend compilation (and static content deployment process will run faster).

#Luma theme: Why we don’t recommend to inherit from it?

Luma theme was developed for demonstration purpose only, to show how commercial Magento2 theme may look like. It has some design-only features like buttons, hidden by means of css. Luma theme was intended to be a presentation-only theme. Blank theme was designed to be as simple as possible to be a starting point for new theme development. So, we highly recommend to inherit from the Blank theme and not to use Luma theme as a base.
