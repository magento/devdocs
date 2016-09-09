---
layout: default
group: fedg
subgroup: D_CSS
title: Using Grunt for Magento tasks
menu_order: 4
menu_title: Using Grunt for Magento tasks
version: 2.2
github_link: frontend-dev-guide/tools/using_grunt.md
---

## {{page.menu_title}}

## What's in this topic
{:.no_toc}
The topic describes how to install and configure [Grunt JavaScript task runner](http://gruntjs.com/). Out of the box Magento comes with pre-configured a

**Contents**

* TOC
{:toc}
## Overview 



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