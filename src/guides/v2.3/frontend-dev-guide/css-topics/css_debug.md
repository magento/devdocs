---
group: frontend-developer-guide
title: Compile LESS using Grunt
functional_areas:
  - Frontend
---

The topic describes how to install, configure, and use [Grunt JavaScript task runner](http://gruntjs.com/) to compile `.less` files in Magento 2.

## Prerequisites

-  Make sure that you [set]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-mode.html) your Magento application to the developer or default [mode]({{ page.baseurl }}/config-guide/bootstrap/magento-modes.html). The default mode sets the Less compilation mode to Server-side Less compilation.
-  Install and configure Grunt as described in [Using Grunt for Magento tasks]({{ page.baseurl }}/frontend-dev-guide/tools/using_grunt.html)

## Adding themes to Grunt configuration {#add_theme}

To compile `.less` files, add your theme to `module.exports` in the Grunt configuration, either in the default `dev/tools/grunt/configs/themes.js` or in the [custom configuration file]({{ page.baseurl }}/frontend-dev-guide/tools/using_grunt.html#grunt_config). For example:

1. Install [node.js] to any location on your machine.

1. Install the Grunt CLI globally. To do this, run the following command in a command prompt:

   ```bash
   npm install -g grunt-cli
   ```

1. From the `<Magento_root>` directory, copy and paste the contents of the following files:

   -  `package.json.sample` to `package.json`
   -  `Gruntfile.js.sample` to `Gruntfile.js`
   -  `grunt-config.json.sample` into `grunt-config.json`

1. Install (or refresh) the `node.js` project dependency, including Grunt, for your Magento instance. To do this, run the following commands in a command prompt:

   ```bash
   cd <your_Magento_instance_directory>
   ```

   ```bash
   npm install
   ```

   ```bash
   npm update
   ```

1. Add your [theme](https://glossary.magento.com/theme) to Grunt configuration. To do this, in the `dev/tools/grunt/configs/themes.js` file, add your theme to `module.exports` like following:

   ```javascript
   <theme>: {
       area: '<area>',
       name: '<Vendor>/<theme>',
       locale: '<language>',
       files: [
           '<path_to_file1>', //path to root source file
           '<path_to_file2>'
       ],
       dsl: 'less'
   }
   ```

   Where the following notation is used:

   -  `<Vendor>`: vendor name.
   -  `<theme>`: your theme code, conventionally should correspond to the theme directory name.
   -  `<language>`: specified in the `code_subtag` format, for example `en_US`. Only one locale can be specified here. To debug the theme with another locale, create one more theme declaration, having specified another value for `language`.
   -  `<area>`: area code, can be either `frontend` or `adminhtml`.
   -  `<path_to_file>`: path to the root source file, relative to the `app/design/frontend/<Vendor>/<theme>/web` directory. You need to specify all [root source files of the theme]({{ page.baseurl }}/frontend-dev-guide/css-topics/css-preprocess.html#css_preprocess_terms). If your theme [inherits] from a certain theme, and does not contain its own root source files, specify the root source files of the parent theme.

   **IMPORTANT NOTE** : If grunt gives the error "Error: Cannot find module ....", check the path in your `grunt-config.json` file and correct as necessary.

1. (Optional) If you want to use Grunt for "watching" changes automatically, without reloading pages in a browser each time, install the [LiveReload extension] in your browser.

## Grunt commands {#grunt_commands}

The following table describes the grunt commands you can use to perform different customization tasks. Run all commands from your Magento installation directory.

Grunt task | Action
---------- | -------
grunt clean | Removes the theme related static files in the `pub/static` and `var` directories.
grunt exec | Republishes symlinks to the source files to the `pub/static/frontend/` directory. Use `grunt exec:<theme>` to republish symlinks for a specific theme.
grunt less | Compiles CSS files using the symlinks published in the `pub/static/frontend/` directory. Use `grunt less:<theme>` to use the symlinks published for a specific theme.
grunt watch | Tracks the changes in the source files, recompiles `.css` files, and reloads the page in the browser.

## Use cases of tracking changes using Grunt {#use_cases}

The following shows which Grunt tasks to use for debugging:

-  After you switch the compilation mode from client-side to server-side, run the `exec` command.
-  After you customize the content of any `.less` file, except the root source files, run the `less` task and reload the page.
-  After you [customize the root source files or move the files included to the root files]({{ page.baseurl }}/frontend-dev-guide/css-topics/css-preprocess.html#css_exception), run the `exec` command and reload the page.
-  After you run `php bin/magento setup:upgrade`, run `exec` command.
-  After you run the `exec` command, run the `clear` command to `clear` the Magento cache, then run the `watch` command. Running the commands in this order will ensure that any custom jQuery attributes like product sliders, banners, etc are loaded correctly.

If you have LiveReload installed, run the `grunt watch` command, and the flow is even simpler:

-  After you customize the content of any `.less` file, changes are applied and the page reloads automatically. No additional changes
-  After you [customize the root source files or move the files included to the root files]({{ page.baseurl }}/frontend-dev-guide/css-topics/css-preprocess.html#css_exception), run the `clean` and `exec` commands, which reloads the page in the browser.

## CSS source maps {#source_maps}

When using Grunt for styles preprocessing, you can enable the CSS source maps generation in your browser. It will make the theme styles debugging easier.

For each theme, Magento compiles all theme `.less` files into two CSS files: `styles-m.css` and `styles-l.css`. So when you debug a theme, your browser only sees `styles-m.css` and it might be difficult to define which `.css` or `.less` file requires corrections. For example:

![node declaration autocomplete]({{ site.baseurl }}/common/images/fdg/no-map.png){:width="610px"}

CSS source maps solve this issue. They help to find the `.less` file, where the style is specified. For example:

![node declaration autocomplete]({{ site.baseurl }}/common/images/fdg/with-map.png){:width="610px"}

CSS source maps are generated automatically when you compile CSS for your theme using the `grunt less: <theme>` command. To use them, you need to enable the display of source maps in your browser. For example, in Chrome, you would open the Developer Tools, go to the **Settings** panel, select **Preferences**, then check the **Enable CSS source maps** checkbox.

Magento has a base set of variables that define commonly used aspects of a theme; such as colors, fonts, style of page titles, and so on.

The `<magento-root>/lib/web/css/source/lib/variables` directory contains LESS files that define values assigned to variables for many of the common elements in Magento.

To change or override any of these variables, simply create a file in `<theme-dir>/web/css/source/_theme.less` For example:

![node declaration autocomplete]({{ site.baseurl }}/common/images/fdg/lib-map.png){:width="610px"}

```css
@navigation__background: @secondary__color__light;
@font-family__sans-serif: 'Helvetica Neue', Helvetica, Arial, sans-serif;
```

[inherits]: {{page.baseurl}}/frontend-dev-guide/themes/theme-inherit.html
[LiveReload extension]: http://livereload.com/extensions/
[node.js]: https://nodejs.org/en/download/package-manager/
