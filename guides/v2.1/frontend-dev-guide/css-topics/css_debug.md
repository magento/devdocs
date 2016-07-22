---
layout: default
group: fedg
subgroup: D_CSS
title: Using Grunt for compiling .less files
menu_order: 4
menu_title: Using Grunt for compiling .less files
version: 2.1
github_link: frontend-dev-guide/css-topics/css_debug.md
---

<h2>What's in this topic</h2>

<p>
The topic describes how to install, configure and use <a href="http://gruntjs.com/" target="_blank">Grunt JavaScript task runner</a> for compiling <code>.less</code> files in Magento 2. </p>


**Contents**

* TOC
{:toc}

## Prerequisites 
Make sure that you [set]({{page.baseurl}}config-guide/cli/config-cli-subcommands-mode.html) your Magento application to the developer or default [mode]({{page.baseurl}}config-guide/bootstrap/magento-modes.html).

### Installing and configuring Grunt {#grunt_prereq}

Magento has built-in Grunt tasks configured, but there are still several prerequisite steps you need to take to be able to use it:

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

<li>
Add your theme to Grunt configuration. To do this, in the <code>dev/tools/grunt/configs/themes.js</code> file, add your theme to <code>module.exports</code> like following:
<pre>
module.exports = {
    ...
    &lt;theme&gt;: {
        area: 'frontend',
        name: '&lt;Vendor&gt;/&lt;theme&gt;',
        locale: '&lt;language&gt;', 
        files: [
            '&lt;path_to_file1&gt;', //path to root source file
            '&lt;path_to_file2&gt;'
        ],
        dsl: 'less'
    ...
    },
</pre>

Where the following notation is used:
<ul>
<li>
<code>&lt;theme&gt;</code>: your theme code, conventionally should correspond to the theme directory name.
</li>
<li>
<code>&lt;language&gt;</code>: specified in the 'code_subtag' format, for example <code>en_US</code>. Only one locale can be specified here. To debug the theme with another locale, create one more theme declaration, having specified another value for <code>language</code>
</li>
<li>
<code>&lt;path_to_file&gt;</code>: path to the root source file, relative to the <code>app/design/frontend/&lt;Vendor&gt;/&lt;theme/&gt;web</code> directory. You need to specify all <a href="{{page.baseurl}}frontend-dev-guide/css-topics/css-preprocess.html#css_preprocess_terms" target="_blank">root source files of the theme</a>. If your theme <a href="{{page.baseurl}}frontend-dev-guide/themes/theme-inherit.html" target="_blank">inherits</a> from a certain theme, and does not contain its own root source files, specify the root source files of the parent theme.

</li> 

</ul>
</li>
<li id="livereload">
(Optional) If you want to use Grunt for "watching" changes automatically, without reloading pages in a browser each time, install the <a href="http://livereload.com/extensions/" target="_blank">LiveReload extension</a> in your browser. 

</li>
</ol>


### Grunt commands {#grunt_commands}

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

### Use cases of tracking changes using Grunt {#use_cases}

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
