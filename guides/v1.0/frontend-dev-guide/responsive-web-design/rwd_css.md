---
layout: default
group: fedg
subgroup: E_rwd
title: CSS in a responsive design
menu_title: CSS in a responsive design
menu_order: 3
github_link: frontend-dev-guide/responsive-web-design/rwd_css.md
---

<h2 id="fedg_rwd_css_break">Breakpoints</h2>

Responsive design uses <a href="http://www.w3.org/TR/css3-mediaqueries/" target="_blank">CSS3 media queries</a> (an extension of the `@media` rule) to adapt the layout to the viewport.

Breakpoints are used in the CSS code to set up a viewport at which the design switches from the mobile to the desktop version.

The Blank theme implements a breakpoint at 768px. This breakpoint switches between mobile and desktop views.
<p class="q">is it true?</p>

The Blank and Luma themes are based on Magento UI library. Magento UI library provides a strong approach for working with media queries. It`s based on recursive call of .media-width() mixin defined anywhere in project but invoked in one place in lib/web/css/source/lib/_responsive.less. That's why in the resulting styles.css we have every media query only once with all the rules there, not a multiple calls for the same query.
More on Magento UI library responsive mixin usage you can find in the Magento UI library documentation <your_Magento_instance>/pub/static/frontend/Magento/blank/en_US/css/docs/responsive.html
In Blank and Luma themes mobile first approach is used. 

<img src="{{site.baseurl}}common/images/css_responsive1.jgp">


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


