---
layout: howtom2devgde_chapters_fedg
title: Using CSS in Your Responsive Design
---
 
<h1 id="fedg_rwd_css">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}guides/m2fedg/v1.0.0.0/rwd/rwd_css.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="fedg_rwd_css_break">Using Breakpoints</h2>

Responsive design uses <a href="http://www.w3.org/TR/css3-mediaqueries/" target="_blank">CSS3 media queries</a> (an extension of the `@media` rule) to adapt the layout to the viewingport. 

Breakpoints are used in the CSS code to set up a viewport at which the design switches from the mobile to the desktop version.

The Blank theme implements three breakpoints:

*	The main one at 768px

	This breakpoints switches between mobile and desktop views. 

*	600px and 800px

	These breakpoints affect how your catalog displays.
	
CSS snippet:

<script src="https://gist.github.com/xcomSteveJohnson/be946288f49b228e04df.js"></script>

<h2 id="fedg_rwd_ex">CSS Examples From the Blank Theme</h2>

To change the position of elements depending on the screen width, you need to redefine the styles which control their behavior. The following example shows how the 2 columns with left bar layout of a category page is rearranged from the mobile to the desktop version in the Blank theme.

Mobile version: Columns in the two-columns with left bar layout are located one after the other as you can see it in the following figure.




#### Related Topics:


