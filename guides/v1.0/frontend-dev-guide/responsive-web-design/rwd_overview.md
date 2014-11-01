---
layout: howtom2devgde_chapters_fedg
title: Responsive web design
---
 
<h1 id="fedg_rwd">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}frontend-dev-guide/responsive-web-design/rwd_overview.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="fedg_rwd_overview">Overview of Responsive Web Design</h2>

Simply put, <a href="http://www.smashingmagazine.com/2011/01/12/standard-for-responsive-web-design/" target="_blank">responsive web design</a> is a set of techniques that enable you to display the same content on multiple device sizes (referred to as *viewports*) without maintaining completely separate style sheets for each.

Magento 2 ships with a Blank responsive theme and these topics discuss how to use <a href="{{ site.gdeurl }}frontend-dev-guide/css-topics/css-overview.html">CSS</a>, <a href="{{ site.gdeurl }}frontend-dev-guide/javascript/js-mage-plugin.html">JavaScript</a>, and <a href="{{ site.gdeurl }}frontend-dev-guide/responsive-web-design/rwd_using-blocks.html">predefined blocks</a> to build a responsive design from there. 

<h3 id="fedg_rwd_terms">Terms Used</h3>

Responsive web design

:	(Also referred to as *responsive design*)&mdash;a web design approach aimed at creating sites with an optimal viewing experience for all screen sizes. This means that a responsive web site is easy for reading and has navigation with a minimum of resizing, panning, and scrolling across a wide range of devices&mdash;from desktop computers to mobile phones.

Viewport

:	The viewing region or screen size for which your responsive design is implemented.

Breakpoint

:	The viewport size at which the width of the user’s screen causes your responsive layout to change.


<h2 id="fedg_rwd_blank">About the Blank Theme</h2>

You should use the Blank responsive theme as your template for theme development. It contains examples of mobile-first responsive design, including:

*	navigation menu
*	page header
*	catalog page
*	product pages for different product types
*	customer account
*	shopping cart
*	checkout progress
*	different page elements (such as forms, tables, predefined properties for moving and showing or hiding elements depending on the device's screen width, and so on)

<h3 id="fedg_rwd_blank_location">Location of the Blank Theme</h3>

The blank theme is located as follows:

<pre>app/
├── design/
│    ├── frontend/
│    │    ├── Magento/
│    │    │   ├── blank/
│    │    │   │   ├── css-topics/
│    │    │   │   ├── fonts/
│    │    │   │   ├── js/
│    │    │   │   ├── Magento_[your module name]/
│    │    │   │   ...
│    │    │   │   ├── media/</pre>

<h3 id="fedg_rwd_blank_ex">Examples of the Blank Theme</h3>

The following figures show the same page built on the Blank theme on mobile and desktop devices.

Mobile:

![Viewing a product catalog page on a mobile device using the Blank responsive theme.]({{ site.baseurl }}common/images/rwd_blank_mobile.png)

Desktop:

![Viewing a product catalog page on a desktop device using the Blank responsive theme.]({{ site.baseurl }}common/images/rwd_blank_desktop.png)

#### Related Topics:

*	<a href="{{ site.gdeurl }}frontend-dev-guide/responsive-web-design/rwd_using-blocks.html">Blocks in a responsive design</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/responsive-web-design/rwd_js.html">JavaScript in a responsive design</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/responsive-web-design/rwd_css.html">CSS in a responsive design</a>	


