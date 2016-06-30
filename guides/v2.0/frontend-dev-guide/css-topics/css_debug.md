---
layout: default
group: fedg
subgroup: D_CSS
title: Styles debugging
menu_order: 4
menu_title: Styles debugging
version: 2.0
github_link: frontend-dev-guide/css-topics/css_debug.md
redirect_from: /guides/v1.0/frontend-dev-guide/css-topics/css_debug.html
---

<h2>What's in this topic</h2>

<p>
The topic describes how the changes you make in stylesheets are applied in the client-side and server-side LESS <a href="{{page.baseurl}}frontend-dev-guide/css-topics/css-preprocess.html" target="_blank">compilation modes</a>, and suggests the approaches and tools you can use to streamline the process of applying and debugging customizations. </p>

**Contents**

* TOC
{:toc}

## Prerequisites 
Make sure that you [set]({{page.baseurl}}config-guide/cli/config-cli-subcommands-mode.html) your Magento application to the developer or default [mode]({{page.baseurl}}config-guide/bootstrap/magento-modes.html).

## Styles debugging in client-side compilation mode {#css_debug_client}

Client-side LESS compilation is implemented using the native `less.js` library. The default configuration is set in <code>lib/web/less/config.less.js</code>; you can change it as needed. 

You can find the detailed information about the configuration and other options of the <code>less.js</code> used in a browser at <a href="http://lesscss.org/usage/#using-less-in-the-browser" target="_blank">http://lesscss.org/usage/#using-less-in-the-browser</a>.

In client-side compilation mode, most of the stylesheet customizations display immediately after you reload a page in a browser. 

<span id="css_exception">There are certain types of changes</span>, that require you to clear the <code>pub/static/frontend/&lt;Vendor&gt;/&lt;theme&gt;/&lt;locale&gt;</code> directory and trigger the compilation and <a href="{{page.baseurl}}architecture/view/static-process.html#publish-static-view-files" target="_blank">publication</a> processes anew.

This is required in the following cases:
<ul>
<li>If you change the <a href="{{page.baseurl}}frontend-dev-guide/css-topics/css-preprocess.html#css_preprocess_terms" target="_blank">root source files</a> that contain the <code>@magento_import</code> directive, or the <code>@import</code> directive where the imported file is specified without extension.</li>
<li>If you rename, remove, or add a <code>.less</code> file imported with a <code>@magento_import</code> or <code>@import</code> directive but you did not correct the directives accordingly.</li>

</ul>

To clear the <code>pub/static/frontend/&lt;Vendor&gt;/&lt;theme&gt;/&lt;locale&gt;</code> directory, delete the directory in the file system, and reload the store pages in a browser to trigger compilation and publication.

## Styles debugging in server-side compilation mode {#css_debug_server}

In server-side LESS compilation mode, to have your changes applied, clear <code>pub/static/frontend/&lt;Vendor&gt;/&lt;theme&gt;/&lt;locale&gt;</code> by deleting the directory in the file system, and reload the store pages to trigger compilation and publication. 

<div class="bs-callout bs-callout-info" id="info">
  <p>You might also need to clear the <code>var/cache</code> and <code>var/view_preprocessing</code> directories.</p>
</div>

Alternatively, to streamline the process of applying and debugging styles customizations, in server-side compilation mode, you can use the <a href="http://gruntjs.com/" target="_blank">Grunt JavaScript task runner</a>.

The following section describes in details how to install, configure and use Grunt for styles debugging.

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
