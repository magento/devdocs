---
group: fedg
subgroup: E_rwd
title: Overview of responsive web design in Magento
menu_title: How to Make Your Theme Responsive and Mobile
menu_order: 1
menu_node: parent
version: 2.1
redirect_from: /guides/v1.0/frontend-dev-guide/responsive-web-design/rwd_overview.html
functional_areas:
  - Frontend
---

Responsive web design (RWD, also referred as <i>responsive design</i>) crafts web sites to provide an optimal viewing experience across a wide range of devices (from large, high-resolution desktop computer monitors to mobile phones).

The out of the box Magento Blank and Luma themes (Luma <a href="{{ page.baseurl }}/frontend-dev-guide/themes/theme-inherit.html" target="_blank">inherits</a> from Blank) use the mobile first RWD approach. It is ensured mostly by means of {% glossarytooltip 6c5cb4e9-9197-46f2-ba79-6147d9bfe66d %}CSS{% endglossarytooltip %} and {% glossarytooltip 312b4baf-15f7-4968-944e-c814d53de218 %}JavaScript{% endglossarytooltip %}.


The following image illustrates how the same page built on the Blank {% glossarytooltip d2093e4a-2b71-48a3-99b7-b32af7158019 %}theme{% endglossarytooltip %} looks on mobile, tablet and desktop devices.

<img src="{{ site.baseurl }}/common/images/css_responsive1.jpg">


We recommend using the Blank theme, as a starting point for your customizations. That is, your custom theme should <a href="{{ page.baseurl }}/frontend-dev-guide/themes/theme-inherit.html" target="_blank">inherit</a> from Blank.

The articles in this chapter describe the particular approaches used in the Blank theme, and provide practical recommendations on how to use these approaches in your themes:

<ul>
<li> 
<a href="{{ page.baseurl }}/frontend-dev-guide/responsive-web-design/rwd_css.html" target="_blank">CSS in Magento responsive design</a>
</li>
<li>
<a href="{{ page.baseurl }}/frontend-dev-guide/responsive-web-design/rwd_js.html" target="_blank">JavaScript in Magento responsive design</a>
</li>
<li>
<a href="{{ page.baseurl }}/frontend-dev-guide/responsive-web-design/rwd_practice.html" target="_blank">Customizing RWD: illustration</a>
</li>

<li>
<a href="{{ page.baseurl }}/frontend-dev-guide/responsive-web-design/rwd_mobile.html" target="_blank">Create a responsive mobile theme based on Blank</a>
</li>

</ul>

## Terms used {#fedg_rwd_terms}

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
<i>Breakpoint</i>
</td>
<td>

The width of the user’s screen that causes your responsive {% glossarytooltip 73ab5daa-5857-4039-97df-11269b626134 %}layout{% endglossarytooltip %} to change.

</td>
</tr>
</table>

## Recommended reading

*	<a href="{{ page.baseurl }}/frontend-dev-guide/themes/theme-general.html" target="_blank">Magento Themes</a>



