---
layout: default
group: fedg
subgroup: E_rwd
title: Overview of responsive web design in Magento 
menu_title: Responsive web design
menu_order: 1
menu_node: parent
github_link: frontend-dev-guide/responsive-web-design/rwd_overview.md
---

Responsive web design (RWD, <i>responsive design</i>) crafts web sites to provide an optimal viewing experience &mdash; easy reading and navigation with a minimum of resizing and scrolling, across a wide range of devices (from large, high-resolution desktop computer monitors to mobile phones).

The built-in Magento Blank and Luma (which <a href="{{site.gdeurl}}frontend-dev-guide/themes/theme-inherit.html" target="_blank">inherits</a> from Blank) themes use the mobile first RWD approach. It is ensured mostly by means of CSS and JavaScript.


The following figures show the same page built on the Blank theme on mobile and desktop devices.

<img src="{{site.baseurl}}common/images/css_responsive1.jpg">


We recommend to use the Blank theme, as a starting point for your customizations. That is, your custom theme should <a href="{{site.gdeurl}}frontend-dev-guide/themes/theme-inherit.html" target="_blank">inherit</a> from Blank.

The articles in this chapter describe the particular approaches used in the Blank theme, and provide practical recommendation how to use these approaches in your themes:

<ul>
<li> 
<a href="{{site.gdeurl}}frontend-dev-guide/responsive-web-design/rwd_css.html" target="_blank">CSS in Magento responsive design</a>
</li>
<li>
<a href="{{site.gdeurl}}frontend-dev-guide/responsive-web-design/rwd_blocks.html" target="_blank">JavaScript in Magento responsive design</a>
</li>
<li>
<a href="{{site.gdeurl}}frontend-dev-guide/responsive-web-design/rwd_practice.html" target="_blank">Customizing RWD: illustration</a>
</li>

<li>
<a href="{{site.gdeurl}}frontend-dev-guide/responsive-web-design/rwd_overview.html" target="_blank">Create a responsive mobile theme based on Blank</a>
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



