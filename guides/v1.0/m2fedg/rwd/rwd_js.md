---
layout: howtom2devgde_chapters_fedg
title: Using JavaScript in Your Responsive Design
---
 
<h1 id="fedg_rwd_js">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}m2fedg/rwd/rwd_overview.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

To enable pages to load, we excluded JavaScript from the page head block and integrated Magento 2 with <a href="http://requirejs.org/" target="_blank">RequireJS</a>. RequireJS uses asynchronous loading to decrease page load tme and enables you to specify dependencies between JavaScript resources in your responsive theme.

For an example of how to include JavaScript in your responsive theme, see <a href="https://github.com/magento/magento2/blob/master/app/design/frontend/Magento/blank/web/bootstrap.js" target="_blank">bootstrap.js</a>.

The Blank theme uses the following JavaScript to responsively relocate page elements by viewport:

<pre>
├── app/design/frontend/Magento/blank/web/js/
    ├── responsive.js
    ├── navigation-menu.js
├── lib/web/
    ├── matchMedia.js</pre>

See one of the following sections for more information

*	<a href="#fedg_rwd_js_matchmedia">Using matchMedia.js</a>
*	<a href="#fedg_rwd_js_resp">Using responsive.js</a>
*	<a href="#fedg_rwd_js_nav">Using navigation-menu.js</a>
	
<h2 id="fedg_rwd_js_matchmedia">Using matchMedia.js</h2>

<a href="https://github.com/magento/magento2/blob/master/lib/web/matchMedia.js" target="_blank">matchMedia.js</a> enables you to manipulate JavaScript for the desktop or mobile viewports. In the Blank theme, `responsive.js` toggles the behavior when the screen size reaches the breakpoint of 768px.

`matchMedia.js` can be used in any theme.

<h2 id="fedg_rwd_js_resp">Using responsive.js</h2>

<a href="https://github.com/magento/magento2/blob/master/app/design/frontend/Magento/blank/web/js/responsive.js" target="_blank">responsive.js</a> implements specific responsive functions for the Blank theme. This file also contains a call of the `mediaCheck` anonymous function from `matchMedia.js`, which is responsible for reaching breakpoints.

The `mediaCheck` call follows:

<script src="https://gist.github.com/xcomSteveJohnson/16b30d482f0512f88d89.js"></script>

In `responsive.js`, you can see how the following elements are toggled from the mobile to the desktop version.

*	The link to the shopping cart: For the desktop viewport, clicking the link runs JavaScript and opens the mini shopping cart list (a drop-down list that contains links to customer's items in the shopping cart). 

	For the mobile viewport, clicking the link opens the shopping cart page. 
	
	The behavior of the same block in the desktop and mobile viewports results from separate JavaScript widgets that are responsible for managing the block's behavior based on the viewport. 
	
	With the specified breakpoint, `matchMedia.js` controls which JavaScript widget is applied to the block when the screen size is a desktop or a mobile device.
	
*	Checkout progress: For the mobile viewport, the checkout progress block on the checkout page is moved by CSS to be displayed under the checkout steps, and it becomes a toggled block by means of JavaScript. By default, the checkout progress information is hidden in the “Your Checkout Progress” section and it becomes visible after you click it.

*	Product image zoom on product page: This element is switched off for the mobile viewport and is switched on for the desktop viewport.

A sample checkout page follows:

![In a mobile viewport, checkout progress displays following the checkout steps.]({{ site.baseurl }}common/images/rwd_js_checkout-progress.png)

<h2 id="fedg_rwd_js_nav">Using navigation-menu.js</h2>

Responsible for rearranging navigation and header links for the desktop and mobile viewports. See one of the following sections for more information:

*	<a href="#fedg_rwd_js_nav_mobile">Mobile Navigation</a>
*	<a href="#fedg_rwd_js_nav_desktop">Desktop Navigation</a>

<h3 id="fedg_rwd_js_nav_mobile">Mobile Navigation</h3>

In a mobile viewport, <a href="https://github.com/magento/magento2/blob/master/app/design/frontend/Magento/blank/web/js/navigation-menu.js" target="_blank">navigation-menu.js</a> copies the existing navigation menu `<nav class="navigation">`, moves it from the desktop position in the page source code, and inserts it before the global wrapping tag `<div class="page wrapper">`. 

`navigation-menu.js` also adds the links (**Sign in**, **Register**, and so on) and the Settings block (language switcher, currency switcher) to the mobile navigation. 

The mobile navigation moves left and it slides from the left side when the navigation menu button is clicked.

Sample HTML:

<script src="https://gist.github.com/xcomSteveJohnson/6e00b3139e039bf8c966.js"></script>

Sample of how it might look:

![In a mobile viewport, navigation displays on the left.]({{ site.baseurl }}common/images/rwd_js_nav_mobile.png)

<h3 id="fedg_rwd_js_nav_desktop">Desktop Navigation</h3>

In a desktop viewport, the script returns the default elements sequence in the source code:

<script src="https://gist.github.com/xcomSteveJohnson/eadce4824923cf19f412.js"></script>

Sample of how it might look:

![In a desktop viewport, navigation displays at the top.]({{ site.baseurl }}common/images/rwd_js_nav_desktop.png)

<h2 id="fedg_rwd_include-js">Including JavaScript Files In Your Responsive Theme</h2>

The Blank theme layout file, <a href="{{ site.mage2000url }}blob/master/app/design/frontend/Magento/blank/Magento_Theme/layout/default_head_blocks.xml" target="_blank">app/design/frontend/Magento/blank/Magento_Theme/layout/default_head_blocks.xml</a>, already has `responsive.js`, `navigation-menu.js`, and `matchMedia.js` included. 

When you add a new theme, you include them in your responsive theme layout as follows:

<script src="https://gist.github.com/xcomSteveJohnson/1f24ae464c0f1727899a.js"></script>


#### Related Topics:

*	<a href="{{ site.gdeurl }}m2fedg/layout/layout-how-to-theme.html">How To Create a Theme</a>
*	<a href="{{ site.gdeurl }}m2fedg/layout/layout-theme-bestpr.html">Best Practices for Theme Design</a>
*	<a href="{{ site.gdeurl }}m2fedg/layout/magento-ui-lib.html">Using the Magento 2 UI Library</a>
*	<a href="{{ site.gdeurl }}m2fedg/rwd/rwd_css.html">Using CSS in Your Responsive Design</a>



