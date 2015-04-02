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

This topic describes how the changes in stylesheets are applied in different LESS compilation modes, and suggests the approaches and tools you can use to streamline the process of applying and debugging customizations. 

<h2 id="general_debug">How changes are applied</h2>

Irrespective of the compilation mode, most of the customizations you do in stylesheets are displayed immediately after you reload a store page. 

<span id="css_exception">But there are certian customizations, for which to be applied you need to clear the <code>pub/static/frontend/&lt;Vendor&gt;/&lt;theme&lt;/&lt;locale&lt;</code> directory and trigger the compilation and publication processes anew.

This is required in the following cases:
<ul>
<li>if you change the root source files that contain the <code>@magento-import</code> directive, or the <code>@import</code> directive where the imported file is specified without the extension.</li>
<li>if you rename, remove or add a <code>.less</code> file imported with a <code>@magento-import</code> or <code>@import</code> directive, having not corrected the directives accordingly.</li>

</ul>

In any compilation mode, you can clear the <code>pub/static/frontend/&lt;Vendor&gt;/&lt;theme&gt;/&lt;locale&gt;</code> directory by manually deleting the directory in the file system, and reload the store pages to trigger compilation and publication. In the server-side compilation, if used with <code>node.js</code>, the task of cleaning and triggering can be performed by running corresponding Grunt tasks. See the <a href="#server_with_node">Using node.js for server-side compilation</a> section for details.

<h2 id="css_debug_client">Styles debugging in the client-side compilation mode</h2>

Client-side LESS compilation is implemented using the native `less.js` library. The default configuration is set in <code>lib/web/less/config.less.js</code>, you can change it as needed. 

You can find the detailed information about the configuration and other options of the <code>less.js</code> used in a browser at <a href="http://lesscss.org/usage/#using-less-in-the-browser" target="_blank">http://lesscss.org/usage/#using-less-in-the-browser</a>.

<h2 id="css_debug_server">Styles debugging in the server-side compilation mode</h2>

In the server-side LESS compilation mode, you can perform customizations and see your changes applied by simply reloading the store pages. In <a href="#css_exception">some cases</a>, you need to manually clear the <code>pub/static/frontend/&lt;Vendor&gt;/&lt;theme&lt;/&lt;locale&lt;</code> directory to apply the changes.

Alternatively, to streamline the process of applying and debugging styles customizations, you can use the <a href="http://gruntjs.com/" target="_blank">Grunt JavaScript task runner</a>.

<!--
The Styles debugging with Grunt topic (coming soon) describes in details how to install, configure and use Grunt for styles debugging. -->

<h3 id="grunt_prereq">Installing and configuring Grunt</h3>

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
Install (or refresh) the <code>node.js</code> project dependency for your Magento instance. To do this, run the following commands in a command prompt:<br>

<pre>
cd &lt;your_Magento_instance_directory&gt;
npm install
npm update
</pre>
</li>

<li>
Add your theme to Grunt configuration. To do this, in the <code>dev/tools/grunt/configs/theme.js</code> file, add your theme to <code>module.exports</code> like following:l
<pre>
module.exports = {
    &lt;theme&gt;: {
        area: 'frontend',
        name: '&lt;Vendor&gt;/&lt;theme&gt;',
        locale: '&lt;language&gt;', 
        files: [
            '&lt;path_to_file1&gt;', //path to root source file
            '&lt;path_to_file2&gt;'
        ],
    dsl: 'less'
    },
</pre>

</li>
<p class="q">What if a custom theme does not have own root source files (it inherits from Blank for example)</p>

Where the following notation is used:
<ul>
<li>
<code>&lt;theme&gt;</code>: your theme code, conventionally should correspond to the theme directory name.
</li>
<li>
<code>&lt;language&gt;</code>: specified in the 'code_subtag' format, for example 'en_US'. Only one locale can be specified here. To debug the theme with another locale, you need to create one more theme declaration, having specified another value for <code>language</code>
</li>
<li>
<code>&lt;path_to_file&gt;</code>: path to the root source file, relative to the <code>app/design/frontend/&lt;Vendor&gt;/&lt;theme/&gt;web</code> directory. You need to specify all root source files of the theme. If your theme <a href="{{site.gdeurl}}frontend-dev-guide/themes/theme-inherit.html" target="_blank">inherits</a> from a certain theme, and does not contain own root source files, specify the root source files of the parent theme.

</li> 

</ul>
<li id="livereload">
(optional) If you want to use Grunt for "watching" changes automatically, without necessity to reload pages in a browser each time, install the <a href="http://livereload.com/" target="_blank">LiveReload extension</a> for your browser. 

</li>
</ol>



<h2 id="grunt_commands">Grunt commands</h2>

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
Customize the content of any <code>.less</code> file, except the root source files
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
<p class="q">So do we need to do both, run the command and reload the page?</q>
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

<h2>Recommended Reading</h2>