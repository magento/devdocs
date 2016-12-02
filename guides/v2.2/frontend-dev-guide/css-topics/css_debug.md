---
layout: default
group: fedg
subgroup: D_CSS
title: Compile LESS using Grunt
menu_order: 4
menu_title: Compile LESS using Grunt
version: 2.2
github_link: frontend-dev-guide/css-topics/css_debug.md
---

The topic describes how to install, configure and use [Grunt JavaScript task runner](http://gruntjs.com/) for compiling `.less` files in Magento 2.

## Prerequisites


- Make sure that you [set]({{page.baseurl}}config-guide/cli/config-cli-subcommands-mode.html) your Magento application to the developer or default [mode]({{page.baseurl}}config-guide/bootstrap/magento-modes.html).
- Install and configure Grunt as described in [Using Grunt for Magento tasks]({{page.baseurl}}frontend-dev-guide/tools/using_grunt.html)


## Adding themes to Grunt configuration

To be able to perform `.less` files compilation, you need to add your them to Grunt configuration. To do this, in the default `dev/tools/grunt/configs/themes.js` or in the [custom configuration file]({{page.baseurl}}frontend-dev-guide/tools/using_grunt.html#grunt_config), add your theme to `module.exports` like following:

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

* `%theme%`: your theme code, conventionally should correspond to the theme directory name.
* `%language%`: specified in the 'code_subtag' format, for example `en_US`. Only one locale can be specified here. To debug the theme with another locale, create one more theme declaration, having specified another value for `%language%`.
* `%path_to_file%`: path to the root source file, relative to the `app/design/frontend/%Vendor%/%theme%/web` directory. You need to specify all [root source files of the theme]({{page.baseurl}}frontend-dev-guide/css-topics/css-preprocess.html#css_preprocess_terms). If your theme [inherits]({{page.baseurl}}frontend-dev-guide/themes/theme-inherit.html) from a certain theme, and does not contain its own root source files, specify the root source files of the parent theme.

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
Removes the theme related static files in the <code>pub/static</code> and <code>var</code> directories.
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
(you need to have <a href="#livereload">LiveReload</a> installed for you browser)
</td>
</tr>
</table>

## Use cases of tracking changes using Grunt {#use_cases}

The following shows which Grunt tasks to use for debugging:

<ul>
<li>After you switch the compilation mode from client-side to server-side, run the <code>exec</code> command.</li>
<li>
After you customize the content of any <code>.less</code> file, except the root source files, run the <code>less</code> task and reload the page. </li>
<li>After you <a href="#css_exception">customize the root source files or move the files included to the root files</a>, run the <code>exec</code> command and reload the page.</li>
</ul>

If you have LiveReload installed, run the <code>grunt watch</code> command, and the flow is even simpler:
<ul>
<li>
After you customize the content of any <code>.less</code> file, changes are applied and the page reloads automatically. No additional changes are required.</li>

<li>After you <a href="#css_exception">customize the root source files or move the files included to the root files</a>, run the <code>clean</code> and <code>exec</code> commands, and the browser page reloads automatically.</li>

</ul>
