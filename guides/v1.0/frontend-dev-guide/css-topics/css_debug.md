---
layout: default
group: fedg
subgroup: D_CSS
title: Styles debugging
menu_order: 4
menu_title: Styles debugging
github_link: frontend-dev-guide/css-topics/styles_node.md
---

<h2>Overview</h2>
In the server-side LESS compilation mode, you can can use the <a href="http://gruntjs.com/" target="_blank">Grunt JavaScript task runner</a> to streamline the process of applying and debugging styles customizations.

<h2 id="css_debug">Styles debugging</h2>

The compilation mode and corresponding tools and approaches to debugging your styles customizations are completely your choice. Most of the customizations you do in stylesheets are displayed immediately after you reload a store page.

<span id="css_exception">But there are two types of customization, for which to be applied you need to clear the <code>pub/static/frontend/&lt;Vendor&gt;/&lt;theme&lt;/&lt;locale&lt;</code> directory and trigger the compilation and publication processes anew.
This is required in the following cases:
* if you change the main source files that contain the <code>@magento-import</code> directive, or the <code>@import</code> directive where the imported file is specified without the extension.
* if you rename, remove or add a <code>.less</code> file imported with a <code>@magento-import</code> or <code>@import</code> directive, having not corrected the directives accordingly.

In any compilation mode, you can clear the <code>pub/static/frontend/&lt;Vendor&gt;/&lt;theme&lt;/&lt;locale&lt;</code> directory by manually deleting the directory in the file system, and reload the store pages to trigger compilation and publication. In the server-side compilation, if used with <code>node.js</code>, the task of cleaning and triggering can be performed by running corresponding Grunt tasks. See the <a href="#server_with_node">Using node.js for server-side compilation</a> topic for details.

<h3 id="css_debug_client">Styles debugging in the client-side compilation mode</h3>

Client-side LESS compilation is implemented using the native `less.js` library. The default configuration is set in <code>lib/web/less/config.less.js</code>, you can change it as needed. 

You can find the detailed information about the configuration and other options of the <code>less.js</code> used in a browser at <a href="http://lesscss.org/usage/#using-less-in-the-browser" target="_blank">http://lesscss.org/usage/#using-less-in-the-browser</a>.

<h3 id="css_debug_server">Styles debugging in the server-side compilation mode</h3>

In the server-side LESS compilation mode, you can perform customizations and see your changes applied by simply reloading the store pages. In <a href="#css_exception">some cases</a>, you need to manually clear the <code>pub/static/frontend/&lt;Vendor&gt;/&lt;theme&lt;/&lt;locale&lt;</code> directory to apply the changes.

Alternatively, to streamline the process of applying and debugging styles customizations, you can use the <a href="http://gruntjs.com/" target="_blank">Grunt JavaScript task runner</a>.

<!--
The Styles debugging with Grunt topic (coming soon) describes in details how to install, configure and use Grunt for styles debugging. -->

<h2 id="grunt_prereq">Installing and configuring Grunt</h2>

Magento out of the box has built-in grunt tasks configured, but there are still several prerequisite steps you need to take to be able to use it:

<ol>
<li>
Install <a href="https://github.com/joyent/node/wiki/installing-node.js-via-package-manager)" target="_blank">node.js</a> to any location on your PC.
</li>
<li>Install Grunt CLI tool globally. To do this, run the following command in a command prompt:<br>
<pre>
npm install -g grunt-cli
</pre>
</li>
<li>
Install Grunt in your Magento directory. To do this, run the following commands in a command prompt:<br>
<pre>
cd &lt;your_Magento_instance_directory&gt;
npm install grunt --save-dev
</pre>
</li>

<li>
Install (or refresh) the `node.js` project dependency for your Magento instance. To do this, run the following commands in a command prompt:<br>

<pre>
cd &lt;your_Magento_instance_directory&gt;
npm install
npm update
</pre>
</li>

<li>
Add your theme to Grunt configuration. To do this, in the <code>dev/tools/grunt/configs/theme.js</code> file, add your theme to <code>module.exports</code> like following:
<pre>
module.exports = {
    &lt;theme&gt;: {
        area: 'frontend',
        name: '&lt;Vendor&gt;/&lt;theme&gt;',
        locale: '&lt;language&gt;', 
        files: [
            '&lt;path_to_file1&gt;', //path to main source file
            '&lt;path_to_file2&gt;'
        ],
    dsl: 'less'
    },
</pre>

</li>


Where the following notation is used:
<ul>
<li>
<code>&lt;theme&gt;</code>: your theme code, conventionally should correspond to the theme directory name.
</li>
<li>
<code>&lt;language&gt;</code>: specified in the 'code_subtag' format, for example 'en_US'. Only one locale can be specified here. To debug the theme with another locale, you need to create one more theme declaration, having specified another value for <code>language</code>
</li>
<li>
<code>&lt;path_to_file&gt;</code>: path to the main source file, relative to the <code>app/design/frontend/&lt;Vendor&gt;/&lt;theme/&gt;web</code> directory. You need to specify all main source files of the theme. 

</li> 

</ul>
<li id="livereload">
(optional) If you want to use Grunt for "watching" changes automatically, without necessity to reload pages in a browser each time, install the LiveReload extension for your browser. Extensions for different browsers can be downloaded at:
<ul>
<li>
Safari: Safari extension 2.0.9 --- 
<div class="bs-callout bs-callout-info" id="info">
<p><span class="glyphicon-class">
Due to Safari API limitations, browser extension does not work with file: URLs; if you're working with local files via file: URL, please use Chrome or insert the snippet.</span></p>
</div>

</li>
<li>
<a href="https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei" target="_blank">LiveReload for Google Chrome</a>. 
If you want to use it with local files, after installation, in Tools > Extensions > LiveReload, select the **Allow access to file URLs** checkbox.
</li>
<li>
LiveReload for Firefox
</li>
</ul>

</li>
</ol>



<h2 id="">Grunt commands</h2>

The following table describes the grunt commands you can use performing different customization tasks. All commands are run in a command prompt, having changed to the directory where the Magento instance is installed.

<table>
<tr>
<th>
Action
</th>
<th>
Grunt task
</th>
</tr>
<tr>
<td>
Customize the content of any <code>.less</code> file, except the main source files
</td>
<td>
<pre>
grunt less:&lt;theme&gt;
</pre>
For example, 
<pre>
grunt less:blank
</pre>

Reload page to see changes.
<p class="q">So do we need to do both, run the command and repoad the page?</q>
</td>
<tr>
<td>
Clear the <code>pub/static/frontend/&lt;Vendor&gt;/&lt;theme&lt;/&lt;locale&lt;</code> directory
</td>
<td>
<pre>
grunt clean:&lt;theme&gt;
</pre>
</td>
</tr>
<tr>
<td>
Recompile <code>.less</code> files
</td>
<td>
<pre>
grunt exec:&lt;theme&gt;
</pre>
</td>
</tr>
<tr>
<td>
Update the browser pages
(you need to have <a href="#livereload">LiveReload</a> installed for you browser)
</td>
<td>
<pre>
grunt watch:&lt;theme&gt;
</pre>
</td>
</tr>
</table>

<h2>Watching</h2>
<h2>Recommended Reading</h2>