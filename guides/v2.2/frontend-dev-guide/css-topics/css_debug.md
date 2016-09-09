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

## {{page.menu_title}}

## What's in this topic
{:.no_toc}

The topic describes how to install, configure and use [Grunt JavaScript task runner](http://gruntjs.com/) for compiling `.less` files in Magento 2. 

**Contents**

* TOC
{:toc}

## Prerequisites 
Make sure that you [set]({{page.baseurl}}config-guide/cli/config-cli-subcommands-mode.html) your Magento application to the developer or default [mode]({{page.baseurl}}config-guide/bootstrap/magento-modes.html).

## Installing and configuring Grunt {#grunt_prereq}
Magento has built-in Grunt tasks configured, but there are still several steps you need to take to be able to use it:

<ol>
<li>
Install <a href="https://github.com/joyent/node/wiki/installing-node.js-via-package-manager)" target="_blank">node.js</a> to any location on your machine.
</li>
<li>Install Grunt CLI tool globally. To do this, run the following command in a command prompt:<br>
<pre>
npm install -g grunt-cli
</pre>
</li>
<li>
Rename the following files in your Magento root directory:
<ul>
<li><code>package.json.sample</code> to <code>package.json</code></li>
<li><code>Gruntfile.js.sample</code> to <code>Gruntfile.js</code></li>
</ul>
</li>
<li>
Install (or refresh) the <code>node.js</code> project dependency, including Grunt, for your Magento instance. To do this, run the following commands in a command prompt:<br>

<pre>
cd &lt;your_Magento_instance_directory&gt;
npm install
npm update
</pre>
</li>
<li id="livereload">
(Optional) If you want to use Grunt for "watching" changes automatically, without reloading pages in a browser each time, install the <a href="http://livereload.com/extensions/" target="_blank">LiveReload extension</a> in your browser. 

</li>
</ol>

## Adding themes to Grunt configuration

To be able to perform `.less` files compilation, you need to add your theme(s) to Grunt configuration. 
There are two ways to do add them:

- Add the theme(s) to the default `dev/tools/grunt/configs/themes.js` configuration file. This approach is easier, but there's a risk that the configuration theme.js file will be overwritten when you update Magento code base. 
- Add the theme(s) in your custom configuration file. This approach requires more efforts, but guarantees that your configuration will not be overwritten.

Both approaches are described further:

### Adding themes in the default Grunt configuration file
To do this, in the `dev/tools/grunt/configs/themes.js` 
file, add your theme to `module.exports` like following:

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

Where the following notation is used:

* `%theme%`: your theme code, conventionally should correspond to the theme directory name.
* `%language%`: specified in the 'code_subtag' format, for example `en_US`. Only one locale can be specified here. To debug the theme with another locale, create one more theme declaration, having specified another value for `%language%`.
* `%path_to_file%`: path to the root source file, relative to the `app/design/frontend/%Vendor%/%theme%/web` directory. You need to specify all [root source files of the theme]({{page.baseurl}}frontend-dev-guide/css-topics/css-preprocess.html#css_preprocess_terms). If your theme [inherits]({{page.baseurl}}frontend-dev-guide/themes/theme-inherit.html) from a certain theme, and does not contain its own root source files, specify the root source files of the parent theme.

### Adding themes in the custom Grunt configuration file

To use a custom file for Grunt configuration:

1. Add a custom Grunt configuration file.
2. In this file, copy all the configuration from the default  
1. Open the `grunt-config.json` file and set configurations object as follows
	* key: alias to file
	* value: path to your custom file

Example:

If your custom configuration file `themes.js` is located in the  custom `<magento_root>/OrangeVendor/OrangeModule/tools/grunt/` directory, add the following to `grunt-config.json`:

{%highlight js%}
{
    "themes": "OrangeVendor/OrangeModule/tools/grunt/"
}
{%endhighligth%}

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
