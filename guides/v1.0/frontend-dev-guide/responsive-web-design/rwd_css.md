---
layout: default
group: fedg
subgroup: E_rwd
title: CSS in a responsive design
menu_title: CSS in a responsive design
menu_order: 3
github_link: frontend-dev-guide/responsive-web-design/rwd_css.md
---

<h2>Overview</h2>
The Blank and Luma themes are based on the <a href="{{site.gdeurl}}/css-topics/theme-ui-lib.html" target="_blank">Magento UI library</a>. Magento UI library provides a strong approach for working with media queries. It is based on a recursive call of <code>.media-width()</code> mixin defined anywhere in the project, but invoked in one place in <code>lib/web/css/source/lib/_responsive.less</code>. That is why in the resulting <code>styles.css</code> there is only one call of each media query with all the rules there, instead of multiple calls for the same query.

More on Magento UI library responsive mixin usage you can find in the Magento UI library documentation <code>&lt;your_Magento_instance&gt;/pub/static/frontend/Magento/blank/en_US/css/docs/responsive.html</code>.

<h2 id="fedg_rwd_css_break">Breakpoints</h2>

Responsive design uses <a href="http://www.w3.org/TR/css3-mediaqueries/" target="_blank">CSS3 media queries</a> (an extension of the `@media` rule) to adapt the layout to the viewport.

Breakpoints are used in the CSS code to set up a viewport at which the design switches from the mobile to the desktop version.

The Blank theme implements the following breakpoints:
<ul>
<li>640px </li>
<li>at 768px. This breakpoint switches between mobile and desktop views.
<p class="q">is it true?</p></li>
<li>1024px</li>
</ul>

<h2>Mobile first</h2>

In the Blank and Luma themes mobile first approach is used. Which means that the styles for mobile devices (640px breakpoint) are extended by the styles for the bigger breakpoints. As the result the extra styles are never loaded when a store is viewed on a mobile device.

<p class="q">Should we mention styles-l and styles-m here?</p>

<img src="{{site.baseurl}}common/images/css_responsive1.jpg">


Mobile version: The following figure shows the main and sidebar columns defined one after the other.

![In the mobile viewport, the columns display one on top of the other.]({{ site.baseurl }}common/images/rwd_css_resp_mobile.png)

Desktop version: After the breakpoint of 768px is reached, the page uses CSS provided in the `@media` query to display the same columns side by side.

CSS snippet:

<script src="https://gist.github.com/xcomSteveJohnson/787060623b87ef506bc0.js"></script>

How it displays in a desktop browser:

![In the desktop viewport, the columns display side by side.]({{ site.baseurl }}common/images/rwd_css_resp_desktop.png)

#### Related topics:

*	<a href="{{ site.gdeurl }}frontend-dev-guide/themes/theme-create.html">Create a theme</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/responsive-web-design/theme-best-practices.html">Theme design best practices</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/css-topics/theme-ui-lib.html">Magento UI library</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/responsive-web-design/rwd_js.html">JavaScript in a responsive design</a>


