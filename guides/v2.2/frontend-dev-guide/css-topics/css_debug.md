---
group: frontend-developer-guide
title: Compile LESS using Grunt
functional_areas:
  - Frontend
---

The topic describes how to install, configure, and use [Grunt JavaScript task runner](http://gruntjs.com/) to compile `.less` files in Magento 2.

## Prerequisites

- Make sure you [set]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-mode.html) your Magento application to the developer or default [mode]({{ page.baseurl }}/config-guide/bootstrap/magento-modes.html).
- Install and configure Grunt as described in [Using Grunt for Magento tasks]({{ page.baseurl }}/frontend-dev-guide/tools/using_grunt.html)

## Adding themes to Grunt configuration {#add_theme}

To compile `.less` files, add your theme to `module.exports` in the Grunt configuration, either in the default `dev/tools/grunt/configs/themes.js` or in the [custom configuration file]({{ page.baseurl }}/frontend-dev-guide/tools/using_grunt.html#grunt_config). For example:

1. Install [node.js] to any location on your machine.

2. Install the Grunt CLI globally:
    ```bash
    npm install -g grunt-cli
    ```
3. Rename the following files in your Magento root directory:
    -   `package.json.sample` to `package.json`
    -   `Gruntfile.js.sample` to `Gruntfile.js`

4. Install (or refresh) the `node.js` project dependency, including Grunt, for your Magento instance. To do this, run the following commands in a command prompt:
    ```
    cd <your_Magento_instance_directory>
    npm install
    npm update
    ```
5. Add your {% glossarytooltip d2093e4a-2b71-48a3-99b7-b32af7158019 %}theme{% endglossarytooltip %} to Grunt configuration. To do this, in the `dev/tools/grunt/configs/themes.js` file, add your theme to `module.exports` like following:
    ```javascript
    module.exports = {

        <theme>: {
            area: 'frontend',
            name: '<Vendor>/<theme>',
            locale: '<language>',
            files: [
                '<path_to_file1>', //path to root source file
                '<path_to_file2>'
            ],
            dsl: 'less'
        },
    ```

    Where the following notation is used:
    - `<theme>`: your theme code, conventionally should correspond to the theme directory name.
    - `<language>`: specified in the `code_subtag` format, for example `en_US`. Only one locale can be specified here. To debug the theme with another locale, create one more theme declaration, having specified another value for `language`
    - `<path_to_file>`: path to the root source file, relative to the `app/design/frontend/<Vendor>/<theme>/web` directory. You need to specify all [root source files of the theme]({{ page.baseurl }}/frontend-dev-guide/css-topics/css-preprocess.html#css_preprocess_terms). If your theme [inherits] from a certain theme, and does not contain its own root source files, specify the root source files of the parent theme.

6. (Optional) If you want to use Grunt for "watching" changes automatically, without reloading pages in a browser each time, install the [LiveReload extension] in your browser.


## Grunt commands {#grunt_commands}

The following table describes the grunt commands you can use to perform different customization tasks. Run all commands from your Magento installation directory.

Grunt task | Action 
---------- | ------- 
grunt clean | Removes the theme related static files in the `pub/static` and `var` directories.
grunt exec | Republishes symlinks to the source files to the `pub/static/frontend///` directory.
grunt less | Compiles `.css` files using the symlinks published in the `pub/static/frontend///` directory.
grunt watch | Tracks the changes in the source files, recompiles `.css` files, and reloads the page in the browser.
{:style="table-layout:auto"}

## Use cases of tracking changes using Grunt {#use_cases}

The following shows which Grunt tasks to use for debugging:
-   After you switch the compilation mode from client-side to server-side, run the `exec` command.
-   After you customize the content of any `.less` file, except the root source files, run the `less` task and reload the page.
-   After you \[customize the root source files or move the files included to the root files\], run the `exec` command and reload the page.

If you have LiveReload installed, run the `grunt watch` command, and the flow is even simpler:

-   After you customize the content of any `.less` file, changes are applied and the page reloads automatically. No additional changes 
-   After you \[customize the root source files or move the files included to the root files\], run the `clean` and `exec` commands, which reloads the page in the browser.


## CSS source maps {#source_maps}

When using Grunt for styles preprocessing, you can enable the CSS source maps generation in your browser. It will make the theme styles debugging easier.

For each theme, Magento compiles all theme `.less` files into two CSS files: `styles-m.css` and `styles-l.css`. So when you debug a theme, your browser only sees `styles-m.css` and it might be difficult to define which `.css` or `.less` file requires corrections. For example:

![node declaration autocomplete]({{ site.baseurl }}/common/images/fdg/no-map.png){:width="610px"}

CSS source maps solve this issue. They help to find the `.less` file, where the style is specified. For example:

![node declaration autocomplete]({{ site.baseurl }}/common/images/fdg/with-map.png){:width="610px"}

CSS source maps are generated automatically when you compile CSS for your theme using the `grunt less: <theme>` command. To use them, you need to enable the display of source maps in your browser. For example, in Chrome, you would open the Developer Tools, go to the **Settings** panel, select **Preferences**, then check the **Enable CSS source maps** checkbox. 


[customize the root source files or move the files included to the root files]: {{site.baseurl}}/guides/v2.2/frontend-dev-guide/css-topics/css-preprocess.html#css_exception
[customize the root source files or move the files included to the root files]: {{site.baseurl}}/guides/v2.2/frontend-dev-guide/css-topics/css-preprocess.html#css_exception