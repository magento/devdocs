---
layout: default
group: fedg
subgroup: D_CSS_G
title: Simple style changes with client-side LESS compilation vs. server-side
menu_title: Simple style changes with client-side LESS compilation vs. server-side
menu_order: 2
version: 2.0
github_link: frontend-dev-guide/css-guide/css_quick_guide_mode.md
---
<h2> What's in this topic </h2>

After you <a href="{{page.baseurl}}frontend-dev-guide/themes/theme-create.html" target="_blank">create a theme</a>, before starting to change the styles, is deciding, which LESS compilation mode you will use. There are <a href="{{page.baseurl}}frontend-dev-guide/css-topics/css-preprocess.html#LESS compilation modes" target="_blank">two modes available in Magento</a>: server-side compilation mode and client-side (recommended for theme development). 
This topic demonstrates on a practical example how the choice of the mode influences the styles development.

The first step, creating and applying a theme is done before the compilation mode is chosen, so it is described only once, but is required whatever compilation mode you will further use.

In the examples in this topic the <a href="{{page.baseurl}}frontend-dev-guide/css-guide/css_quick_guide_approach.html#simple_extend">simplest approach for customizing theme styles</a> is used: changes are done in the `_extend.less` of the new theme. 

In our examples we will change the color and font of the primary buttons. The default view of the primary buttons can be illustrated by the **Create an Account** button view on the Admin login page:

<img src="{{site.baseurl}}common/images/extend_less_screenshot0.png" alt="Admin login page with the default view of the primary buttons">

<h3>Contents</h3>
- <a href="#first_step">First step: Create and apply a theme</a>
- <a href="#server-side">Making simple style changes in server-side compilation mode</a>
- <a href="#server-side-grunt">Making simple style changes in server-side compilation mode using Grunt</a>
- <a href="#client-side">Making simple style changes in client-side compilation mode</a>

<h2 id="first_step">First step: Create and apply a theme</h2>

1. Create a new theme as described in the <a href="{{page.baseurl}}frontend-dev-guide/themes/theme-create.html" target="_blank">Create a theme</a> topic. In your `theme.xml` specify Magento Luma or Magento Blank as a parent theme.
2. <a href="{{page.baseurl}}frontend-dev-guide/themes/theme-apply.html#theme-apply-apply">Apply your theme</a> in the Magento Admin.

Server-side is the default mode for LESS compilation, so if you do not change this, your Magento instance is using server-side compilation mode. 

<h2 id="server-side">Making simple style changes in server-side compilation mode</h2>

The following is an illustration of how the process of making simple changes looks like with the server-side LESS compilation mode:
<ol>
<li>Create and apply a theme.</li>
<li>In your theme directory, add <code>web/css/source/_extend.less</code>.</li>
<li>Change the color of the buttons by adding the following code in <code>_extend.less</code>:

<img src="{{ site.baseurl }}common/images/extend_less_code_1.png" alt="Less code redefining the color of the primary buttons">
<li>Delete all files in the following directories:
<ul>
<li><code>pub/static/frontend/&lt;Your_Vendor&gt;/&lt;your_theme&gt;</code></li>
<li><code>var/view_preprocessed/less</code></li>
</ul>
</li>
<li>Refresh the page, and view the changes applied. For example:

<img src="{{ site.baseurl }}common/images/extend_less_screenshot1.png" alt="Less code redefining the color of the primary buttons">
</li>
<li>Change the font of the buttons by adding the following code in <code>_extend.less</code>:

<img src="{{ site.baseurl }}common/images/extend_less_code_2.png" alt="Less code redefining the font of the primary buttons">
</li>
<li>Delete all files in the following directories:
<ul>
<li><code>pub/static/frontend/&lt;Your_Vendor&gt;/&lt;your_theme&gt;</code></li>
<li><code>var/view_preprocessed/less</code> </li>
</ul>
</li>
<li>Refresh the page, and view the changes applied. 

<img src="{{ site.baseurl }}common/images/extend_less_screenshot2.png" alt="Admin login page where the font of the buttons was changed">
</li>
</ol>
If your Magento instance uses the server-side compilation mode, you need to manually clean sub-directories in <code>pub/static</code> and <code>var/view_preprocessed/less</code> to make your changes apply. You can automate this process by additionally installing Grunt, and using the built-in Grunt commands to watch the changes and clean the directories. The flow of making changes using Grunt is described in the following section.

<h2 id="server-side-grunt">Making simple style changes in server-side compilation mode using Grunt</h2>

<ol>
<li>Create and apply a theme. </li>
<li>In your theme directory, add <code>web/css/source/_extend.less</code>.</li>
<li>Install Grunt and register your theme as described in <a href="{{page.baseurl}}frontend-dev-guide/css-topics/css_debug.html#grunt_prereq" target="_blank">Installing and configuring Grunt</a>.</li>
<li>From your Magento installation directory, run the following commands:
<ul>
<li><code>grunt exec:&lt;your_theme&gt;</code></li>
<li><code>grunt less:&lt;your_theme&gt;</code></li>
<li><code>grunt watch</code></li>
</ul>
Where <code>&lt;your_theme&gt;</code> is the code of your theme. Conventionally it should coincide with the theme directory name.
</li>
<li>Change the color of the buttons by adding the following code in <code>_extend.less</code>:
<img src="{{ site.baseurl }}common/images/extend_less_code_1.png" alt="Less code redefining the color of the primary buttons">
</li>
<li>Refresh the page and view your changes applied:
<img src="{{ site.baseurl }}common/images/extend_less_screenshot1.png" alt="Admin login page where the color of the button was changed">
</li>
<li>Change the font of the buttons by adding the following code in <code>_extend.less</code>:
<img src="{{ site.baseurl }}common/images/extend_less_code_2.png" alt="Less code redefining the font of the primary buttons">
</li>
<li>Refresh the page and view your changes applied:
<img src="{{ site.baseurl }}common/images/extend_less_screenshot2.png" alt="Admin login page where the font of the buttons was changed">
</li>
</ol>

<h2 id="client-side">Making simple style changes in client-side compilation mode</h2>

<ol>
<li>Create and apply a theme.</li>
<li>In your theme directory, add <code>web/css/source/_extend.less</code>.</li>
<li>In the Magento Admin, change the LESS compilation mode to client-side under <b>STORES</b> > <b>Configuration</b> > <b>ADVANCED</b> > <b>Developer</b> > <b>Front-end development workflow</b> > <b>Workflow type</b>. For detailed description see the <a href="{{page.baseurl}}frontend-dev-guide/css-topics/css-preprocess.html#less_modes">CSS preprocessing</a> topic.</li>
<li>Delete all files in the following directories:
<ul>
<li><code>pub/static/frontend/&lt;Your_Vendor&gt;/&lt;your_theme&gt;</code></li>
<li><code>var/view_preprocessed/less</code></li>
</ul>
</li>
<li>Change the color of the buttons by adding the following code in <code>_extend.less</code>:

<img src="{{ site.baseurl }}common/images/extend_less_code_1.png" alt="Less code redefining the color of the primary buttons">
</li>
<li>Refresh the page and view your changes applied:

<img src="{{ site.baseurl }}common/images/extend_less_screenshot1.png" alt="Admin login page where the font of the buttons was changed">
</li>
<li>Change the font of the buttons by adding the following code in <code>_extend.less</code>:

<img src="{{ site.baseurl }}common/images/extend_less_code_2.png" alt="Less code redefining the font of the primary buttons">
</li>
<li>Refresh the page and view your changes applied:

<img src="{{ site.baseurl }}common/images/extend_less_screenshot2.png" alt="Admin login page where the font of the buttons was changed">
</li>
</ol>

If your Magento instance uses the client-side compilation mode, simple changes are applied at once. In case of more sophisticated changes, you might need to manually clean the theme sub-directory in the <code>pub/static/frontend</code> directory. There are more details about these types of changes and about the client-side mode implementation in the <a href="{{page.baseurl}}frontend-dev-guide/css-topics/css_debug.html#css_debug_client" target="_blank">Styles debugging</a> topic.

<h2>Recommended reading</h2>
<ul>
<li><a href="{{page.baseurl}}frontend-dev-guide/css-topics/css_debug.html" target="_blank">Styles debugging</a></li>
<li><a href="{{page.baseurl}}frontend-dev-guide/css-topics/css-preprocess.html" target="_blank">CSS preprocessing</a></li>
</ul>
