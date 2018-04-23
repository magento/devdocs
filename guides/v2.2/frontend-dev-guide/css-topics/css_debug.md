---
layout: default
group: fedg
subgroup: D_CSS
title: Compile LESS using Grunt
menu_order: 4
menu_title: Compile LESS using Grunt
version: 2.2
github_link: frontend-dev-guide/css-topics/css_debug.md
functional_areas:
  - Frontend
---

The topic describes how to install, configure and use [Grunt JavaScript task runner](http://gruntjs.com/) for compiling `.less` files in Magento 2.

## Prerequisites


- Make sure that you [set]({{page.baseurl}}/config-guide/cli/config-cli-subcommands-mode.html) your Magento application to the developer or default [mode]({{page.baseurl}}/config-guide/bootstrap/magento-modes.html).
- Install and configure Grunt as described in [Using Grunt for Magento tasks]({{page.baseurl}}/frontend-dev-guide/tools/using_grunt.html)


## Adding themes to Grunt configuration {#add_theme}

To be able to perform `.less` files compilation, you need to add your them to Grunt configuration. To do this, in the default `dev/tools/grunt/configs/themes.js` or in the [custom configuration file]({{page.baseurl}}/frontend-dev-guide/tools/using_grunt.html#grunt_config), add your theme to `module.exports` like following:

{%highlight js%}
module.exports = {
    ...
    %theme%: {
        area: 'frontend',
        name: '%Vendor%/%theme%',
        locale: '%language%',
        files: [
            '%path_to_file1%', //path to root source file
            '%path_to_file2%'
        ],
        dsl: 'less'
    ...
    },

{%endhighlight%}

where the following notation is used:

* `%theme%`: your {% glossarytooltip d2093e4a-2b71-48a3-99b7-b32af7158019 %}theme{% endglossarytooltip %} code, conventionally should correspond to the theme directory name.
* `%language%`: specified in the 'code_subtag' format, for example `en_US`. Only one locale can be specified here. To debug the theme with another locale, create one more theme declaration, having specified another value for `%language%`.
* `%path_to_file%`: path to the root source file, relative to the `app/design/frontend/%Vendor%/%theme%/web` directory. You need to specify all [root source files of the theme]({{page.baseurl}}/frontend-dev-guide/css-topics/css-preprocess.html#css_preprocess_terms). If your theme [inherits]({{page.baseurl}}/frontend-dev-guide/themes/theme-inherit.html) from a certain theme, and does not contain its own root source files, specify the root source files of the parent theme.

## Grunt commands {#grunt_commands}

The following table describes the grunt commands you can use performing different customization tasks. Run all commands from your Magento installation directory.

<table>
<tr>
<th>
Grunt task
</th>
<th>
Action
</th>
</tr>
<tr>
<td>
<pre>
grunt clean:&lt;theme&gt;
</pre>
For example:
<pre>
grunt clean:blank
</pre>
</td>
<td>
Removes the theme related {% glossarytooltip 363662cb-73f1-4347-a15e-2d2adabeb0c2 %}static files{% endglossarytooltip %} in the <code>pub/static</code> and <code>var</code> directories.
</td>
</tr>
<tr>
<td>
<pre>
grunt exec:&lt;theme&gt;
</pre>
</td>
<td>
Republishes symlinks to the source files to the <code>pub/static/frontend/&lt;Vendor&gt;/&lt;theme&gt;/&lt;locale&gt;</code> directory.
</td>
</tr>
<tr>
<td>
<pre>
grunt less:&lt;theme&gt;
</pre>
</td>
<td>
Compiles <code>.css</code> files using the symlinks published in the <code>pub/static/frontend/&lt;Vendor&gt;/&lt;theme&gt;/&lt;locale&gt;</code> directory
</td>
</tr>
<tr>
<td>
<pre>
grunt watch
</pre>
</td>
<td>
Tracks the changes in the source files, recompiles <code>.css</code> files, and reloads the page in the browser pages
(you need to have installed for you browser)
</td>
</tr>
</table>

## Use cases of tracking changes using Grunt {#use_cases}

The following shows which Grunt tasks to use for debugging:

<ul>
<li>After you switch the compilation mode from client-side to server-side, run the <code>exec</code> command.</li>
<li>
After you customize the content of any <code>.less</code> file, except the root source files, run the <code>less</code> task and reload the page. </li>
<li>After you <a href="http://devdocs.magento.com/guides/v2.2/frontend-dev-guide/css-topics/css-preprocess.html#css_exception">customize the root source files or move the files included to the root files</a>, run the <code>exec</code> command and reload the page.</li>
</ul>

If you have LiveReload installed, run the <code>grunt watch</code> command, and the flow is even simpler:
<ul>
<li>
After you customize the content of any <code>.less</code> file, changes are applied and the page reloads automatically. No additional changes are required.</li>

<li>After you <a href="http://devdocs.magento.com/guides/v2.2/frontend-dev-guide/css-topics/css-preprocess.html#css_exception">customize the root source files or move the files included to the root files</a>, run the <code>clean</code> and <code>exec</code> commands, and the browser page reloads automatically.</li>

</ul>

## CSS source maps {#source_maps}

When using Grunt for styles preprocessing, you can enable the CSS source maps generation in your browser. It will make the theme styles debugging easier.

For each theme, Magento compliles all theme `.less` files into two CSS files: `styles-m.css` and `styles-l.css`. So when you debug a theme, you browser only sees `styles-m.css` and it might be difficult to define which exactly `.css` or `.less` file requires corrections. For example:

![node declaration autocomplete]({{site.baseurl}}/common/images/fdg/no-map.png){:width="610px"}

CSS source maps solve this issue. They help to find the `.less` file, where the style is specified. For example:

![node declaration autocomplete]({{site.baseurl}}/common/images/fdg/with-map.png){:width="610px"}

CSS source maps are generated automatically when you compile CSS for your theme using the `grunt less: <theme>` command. To use them, you need to enable source maps displaying in your browser.

The path to the CSS source maps configuration differs, depending on the browser.

In Google Chrome, to enable source maps generation, go to **Inspect** > **Settings** > **Preferences** > **Enable CSS source maps**.   
