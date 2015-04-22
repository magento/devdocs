---
layout: default
group: fedg
subgroup: E_rwd
title: JavaScript in Magento responsive design
menu_title: JavaScript in Magento responsive design
menu_order: 4
github_link: frontend-dev-guide/responsive-web-design/rwd_js.md
---

<h2>Overview</h2>


To enable pages to load, we excluded JavaScript from the page head block and integrated the Magento system with <a href="http://requirejs.org/" target="_blank">RequireJS</a>. RequireJS uses asynchronous loading to decrease page load time and enables you to specify dependencies between JavaScript resources in your responsive theme.

<h2>JavaScript for responsiveness in the Blank theme</h2>

The Blank theme uses the following JavaScript to responsively relocate page elements by <a href="{{site.gdeurl}}frontend-dev-guide/responsive-web-design/rwd_overview.html#fedg_rwd_terms" target="_blank">viewport</a>:
<ul>
<li>matchMedia.js</li>
<li>responsive.js</li>
<li>navigation-menu.js</li>
</ul>

The script files are located in the file system as follows:
<pre>
├── app/design/frontend/Magento/blank/web/js/
    ├── responsive.js
    ├── navigation-menu.js
├── lib/web/
    ├── matchMedia.js
</pre>

If your theme inherit from Blank, you do not need to additionally include these files. In other case to be able to use the scripts, you need to include them in the default.head.blocks.xml as described in <a href="{{site.gdeurl}}frontend-dev-guide/layouts/xml-manage.html#layout_markup_css">Add Javascript and CSS</a>.

<p class="q">What about the ones which are not in lib, can they include them as well? Do we need the info about location in the file system at all, if we add the links to the github, for example?</p>

See one of the following sections for more information

*	<a href="#fedg_rwd_js_matchmedia">matchMedia.js</a>
*	<a href="#fedg_rwd_js_resp">responsive.js</a>
*	<a href="#fedg_rwd_js_nav">navigation-menu.js</a>

<h2 id="fedg_rwd_js_matchmedia">matchMedia.js</h2>

<a href="https://github.com/magento/magento2/blob/master/lib/web/matchMedia.js" target="_blank">matchMedia.js</a> enables you to manipulate JavaScript for the desktop or mobile viewports. In the Blank theme, `responsive.js` toggles the behavior when the screen size reaches the breakpoint of 768px.

`matchMedia.js` can be used in any theme.

<h2 id="fedg_rwd_js_resp">responsive.js</h2>

<a href="https://github.com/magento/magento2/blob/master/app/design/frontend/Magento/blank/web/js/responsive.js" target="_blank">responsive.js</a> implements specific responsive functions for the Blank theme. This file also contains a call of the `mediaCheck` anonymous function from `matchMedia.js`, which is responsible for reaching breakpoints.

The `mediaCheck` call follows:
<p class="q">Do we need this code sample?</p>

<script src="https://gist.github.com/xcomSteveJohnson/16b30d482f0512f88d89.js"></script>

In `responsive.js`, you can see how the following elements are toggled from the mobile to the desktop version:
<p class="q">should we mention tablet version as well?</p>
<ul>
<li>Checkout progress. <br>
For the mobile viewport, the checkout progress block on the checkout page is moved by CSS to be displayed under the checkout steps (for the desktop, it is displayed on the left-hand side), and it becomes a toggled block by means of JavaScript. By default, the checkout progress information is hidden in the “Your Checkout Progress” section and it becomes visible after you click it.</li>



<li>Product image zoom on product page.<br> This element is switched off for the mobile viewport and is switched on for the desktop viewport.</li>
<p class="q">Is it correct to call it "element"?</p>
</ul>

<h2 id="fedg_rwd_js_nav">navigation-menu.js</h2>

Responsible for rearranging navigation and header links for the desktop and mobile viewports. See one of the following sections for more information:

*	<a href="#fedg_rwd_js_nav_mobile">Mobile navigation</a>
*	<a href="#fedg_rwd_js_nav_desktop">Desktop navigation</a>

<h3 id="fedg_rwd_js_nav_mobile">Mobile navigation</h3>

In a mobile viewport, <code>navigation-menu.js</code> copies the existing navigation menu `<nav class="navigation">`, moves it from the desktop position in the page source code, and inserts it before the global wrapping tag `<div class="page wrapper">`.

`navigation-menu.js` also adds the links (**Sign in**, **Register**, and so on) and the Settings block (language switcher, currency switcher) to the Mobile navigation.

The Mobile navigation moves left and it slides from the left side when the navigation menu button is clicked.

Sample HTML:

<script src="https://gist.github.com/xcomSteveJohnson/6e00b3139e039bf8c966.js"></script>

Sample of how it might look:

![In a mobile viewport, navigation displays on the left.]({{ site.baseurl }}common/images/rwd_js_nav_mobile.png)

<h3 id="fedg_rwd_js_nav_desktop">Desktop navigation</h3>

In a desktop viewport, the script returns the default elements sequence in the source code:

<script src="https://gist.github.com/xcomSteveJohnson/eadce4824923cf19f412.js"></script>

Sample of how it might look:

![In a desktop viewport, navigation displays at the top.]({{ site.baseurl }}common/images/rwd_js_nav_desktop.png)





