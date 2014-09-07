---
layout: howtom2devgde_chapters_fedg
title: Using CSS in Your Responsive Design
---
 
<h1 id="fedg_rwd_css">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}m2fedg/rwd/rwd_css.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="fedg_rwd_css_break">Using Breakpoints</h2>

Responsive design uses <a href="http://www.w3.org/TR/css3-mediaqueries/" target="_blank">CSS3 media queries</a> (an extension of the `@media` rule) to adapt the layout to the viewport. 

Breakpoints are used in the CSS code to set up a viewport at which the design switches from the mobile to the desktop version.

The Blank theme implements three breakpoints:

*	The main one at 768px

	This breakpoints switches between mobile and desktop views. 

*	600px and 800px

	These breakpoints affect how your catalog displays.
	
CSS snippet:

<script src="https://gist.github.com/xcomSteveJohnson/be946288f49b228e04df.js"></script>

<h2 id="fedg_rwd_ex">CSS Examples From the Blank Theme</h2>

To change the position of elements depending on the screen width, you must redefine which styles control their behavior. The following example compares a two-column display for mobile and desktop viewports.

Mobile version: The following figure shows the main and sidebar columns defined one after the other.

![In the mobile viewport, the columns display one on top of the other.]({{ site.baseurl }}common/images/rwd_css_resp_mobile.png)

Desktop version: After the breakpoint of 768px is reached, the page uses CSS provided in the `@media` query to display the same columns side by side.

CSS snippet:

<script src="https://gist.github.com/xcomSteveJohnson/787060623b87ef506bc0.js"></script>

How it displays in a desktop browser:

![In the desktop viewport, the columns display side by side.]({{ site.baseurl }}common/images/rwd_css_resp_desktop.png)

#### Related Topics:

*	<a href="{{ site.gdeurl }}m2fedg/layout/layout-how-to-theme.html">How To Create a Theme</a>
*	<a href="{{ site.gdeurl }}m2fedg/layout/layout-theme-bestpr.html">Best Practices for Theme Design</a>
*	<a href="{{ site.gdeurl }}m2fedg/layout/magento-ui-lib.html">Using the Magento 2 UI Library</a>
*	<a href="{{ site.gdeurl }}m2fedg/rwd/rwd_js.html">Using JavaScript in Your Responsive Design</a>


