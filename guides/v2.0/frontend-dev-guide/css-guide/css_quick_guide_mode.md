---
layout: default
group: fedg
subgroup: D_CSS_G
title: Client-side compilation vs server-side
menu_title: Client-side compilation vs server-side
menu_order: 2
github_link: frontend-dev-guide/css-guide/css_quick_guide_mode.md
---
<h2> Overview </h2>

One of the pre-steps you need to take before starting to change your theme styles is deciding, which LESS compilation mode you will use. There are <a href="{{site.gdeurl}}frontend-dev-guide/css-topics/css-preprocess.html#LESS compilation modes" target="_blank">two modes available in Magento</a>: server-side compilation mode (the default one, recommended for production) and client-side (recommended for theme development). 
This topic demonstrates on a practical example how the choice of the mode influences the styles development.

The first step, creating and applying a theme is done before the compilation mode is chosen, so it is described only once, but is required whatever compilation mode you will further use.

For making changes in theme styles when illustrating the different modes, the simplest approach is used: changes are done in the `_extend.less` of the new theme. Learn more about possible approaches in <a href="{{site.gdeurl}}frontend-dev-guide/css-guide/css_quick_guide_approach.md">Simple ways to customize a theme's styles</a>.

<h2>First step: Create and apply a theme</h2>

1. Create a new theme as described in the <a href="{{site.gdeurl}}frontend-dev-guide/themes/theme-create.html" target="_blank">Create a theme</a> topic. In your `theme.xml` specify Magento Luma or Magento Blank as a parent theme.
2. <a href="{{site.gdeurl}}frontend-dev-guide/themes/theme-apply.html#theme-apply-apply">Apply your theme</a> in the Magento Admin.

Server-side is the default mode for LESS compilation, so if you do not change this, your Magento instance is using server-side compilation mode. 

<h2>Making simple style changes in Server-side compilation</h2>

The following is an illustration of how the process of making simple changes looks like with the server-side mode:
<ol>
<li>Create and apply a theme.</li>
<li>In your theme directory, add <code>web/css/source/_extend.less</code>.</li>
<li>Change the color of the buttons by adding the following code in <code>_extend.less</code>:
<p class="q">code from Bogdan goes here</p></li>
<li>Delete all files in the following directories:
	- <code>pub/static/frontend/&lt;Your_Vendor&gt;/&lt;your_theme&gt;</code>
	- <code>var/view_preprocessed/less</code>
</li>
<li>Refresh the page, and view the changes applied. 
<p class="q">screenshot from Bogdan goes here</p></li>
<li>Change the font of the buttons by adding the following code in <code>_extend.less</code>:
<p class="q">code from Bogdan goes here</p></li>
<li>Delete all files in the following directories:
	- <code>pub/static/frontend/&lt;Your_Vendor&gt;/&lt;your_theme&gt;</code>
	- <code>var/view_preprocessed/less</code> </li>
<li>Refresh the page, and view the changes applied. 
<p class="q">code from Bogdan goes here</p></li>
</ol>
If your Magento instance uses the server-side compilation mode, you need to manually clean sub-directories in <code>pub/static</code> and <code>var/view_preprocessed/less</code> to make your changes apply. You can automate this process by additionally installing Grunt, and using the built-in Grunt commands to watch the changes and clean the directories. The flow of making changes using Grunt is described in the following section.

<h2>Making simple style changes in server-side compilation mode using Grunt</h2>

<ol>
<li>Create and apply a theme. </li>
<li>In your theme directory, add <code>web/css/source/_extend.less</code>.</li>
<li>Install Grunt as described in <a href="{{site.gdeurl}}frontend-dev-guide/css-topics/css_debug.html#grunt_prereq" target="_blank">Installing and configuring Grunt</a>, steps 1-4.</li>
<li>Register your theme in Grunt as described in <a href="{{site.gdeurl}}frontend-dev-guide/css-topics/css_debug.html#grunt_prereq" target="_blank">Installing and configuring Grunt</a>, step 5.</li>
<li>Run <code>grunt refresh</code> from your Magento installation directory.</li>
<li>Run <code>grunt watch</code> from your Magento installation directory.</li>
<li>Change the color of the buttons by adding the following code in <code>_extend.less</code>:
<p class="q">code from Bogdan goes here</p></li>
<li>Refresh the page and view your changes applied:
<p class="q">screenshot from Bogdan goes here</p></li>
<li>Change the font of the buttons by adding the following code in <code>_extend.less</code>:
<p class="q">code from Bogdan goes here</p></li>
<li>Refresh the page and view your changes applied:
<p class="q">screenshot from Bogdan goes here</p></li>
</ol>

<h2>Making simple style changes in client-side compilation mode</h2>

<ol>
<li>Create and apply a theme.</li>
<li>In your theme directory, add <code>web/css/source/_extend.less</code>.</li>
<li>Change the LESS compilation mode to client-side under Stores > Configuration > ADVANCED > Developer > Front-end development workflow > Workflow type. For detailed description see the <a href="{{site.gdeurl}}frontend-dev-guide/css-topics/css-preprocess.html#less_modes">CSS preprocessing</a> topic.</li>
<li>Delete all files in the following directories:
	- <code>pub/static/frontend/&lt;Your_Vendor&gt;/&lt;your_theme&gt;</code>
	- <code>var/view_preprocessed/less</code> </li>
<li>Change the color of the buttons by adding the following code in <code>_extend.less</code>:
<p class="q">code from Bogdan goes here</p></li>
<li>Refresh the page and view your changes applied:
<p class="q">screenshot from Bogdan goes here</p></li>
<li>Change the font of the buttons by adding the following code in <code>_extend.less</code>:
<p class="q">code from Bogdan goes here</p></li>
<li>Refresh the page and view your changes applied:
<p class="q">screenshot from Bogdan goes here</p></li>
</ol>

If your Magento instance uses the client-side compilation mode, simple changes are applied at once. In case of more sophisticated changes, you might need to manually clean the theme sub-directory in the <code>pub/static/frontend</code> directory. There are more details about these types of changes and about the client-side mode implementation in the <a href="{{site.gdeurl}}frontend-dev-guide/css-topics/css_debug.html#css_debug_client" target="_blank">Styles debugging</a> topic.

<h2>Recommended reading</h2>
- <a href="{{site.gdeurl}}frontend-dev-guide/css-topics/css_debug.html" target="_blank">Styles debugging</a>
- <a href="{{site.gdeurl}}frontend-dev-guide/css-topics/css-preprocess.html" target="_blank">CSS preprocessing</a>