---
layout: default
group: fedg
subgroup: E_rwd
title: Responsive web design
menu_title: Responsive web design
menu_order: 1
menu_node: parent
github_link: frontend-dev-guide/responsive-web-design/rwd_overview.md
---

<h2 id="fedg_rwd_overview">Overview</h2>

<!-- 
<a href="http://www.smashingmagazine.com/2011/01/12/guidelines-for-responsive-web-design/" target="_blank">Responsive web design</a> is a set of techniques that enable you to display the same content on multiple device sizes (referred to as *viewports*) without maintaining completely separate style sheets for each. -->

Responsive web design (RWD, <i>responsive design</i>) crafts web sites to provide an optimal viewing experience&mdash;easy reading and navigation with a minimum of resizing, panning, and scrolling, across a wide range of devices (from large, high-resolution desktop computer monitors to mobile phones).

The built-in Magento Blank and Luma (which <a href="{{site.gdeurl}}frontend-dev-guide/themes/theme-inherit.html" target="_blank">inherits</a> from Blank) themes use the mobile first RWD approach. It is ensured by means of CSS, JavaScript and HTML.

<h3 id="fedg_rwd_blank_ex">Blank theme examples</h3>

The following figures show the same page built on the Blank theme on mobile and desktop devices.

Mobile:

![Viewing a product catalog page on a mobile device using the Blank responsive theme.]({{ site.baseurl }}common/images/rwd_blank_mobile.png)

Desktop:

![Viewing a product catalog page on a desktop device using the Blank responsive theme.]({{ site.baseurl }}common/images/rwd_blank_desktop.png)

We recommend to use the Blank theme, as a starting point for your customizations. That is, your custom theme should <a href="{{site.gdeurl}}frontend-dev-guide/themes/theme-inherit.html" target="_blank">inherit</a> from Blank.

The articles in this chapter describe the particular approaches used in the Blank theme, with code samples:

<ul>
<li> 
<a href="{{site.gdeurl}frontend-dev-guide/responsive-web-design/rwd_css.html" target="_blank">CSS in Magento responsive design</a>
</li>
<li>
<a href="{{site.gdeurl}}frontend-dev-guide/responsive-web-design//rwd_blocks.html" target="_blank">Layout (HTML?) in Magento responsive design</a>
</li>
<li>
<a href="{{site.gdeurl}}frontend-dev-guide/responsive-web-design//rwd_blocks.html" target="_blank">JavaScript in Magento responsive design</a>
</li>
</ul>


<h2 id="fedg_rwd_terms">Terms used</h2>

<table>
<tr>
<th>
Term
</th>
<th>
Description
</th>
</tr>
<tr>
<td>
<i>Viewport</i>
</td>
<td>

The viewing region or screen size for which your responsive design is implemented.

</td>
</tr>
<tr>
<td>
<i>Breakpoint</i>
</td>
<td>

The viewport size at which the width of the user’s screen causes your responsive layout to change.

</td>
</tr>
</table>














<h2>Recommended reading</h2>

*	<a href="{{ site.gdeurl }}frontend-dev-guide/themes/theme-general.html" target="_blank">Magento Themes</a>



