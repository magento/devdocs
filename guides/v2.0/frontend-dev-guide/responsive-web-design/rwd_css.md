---
layout: default
group: fedg
subgroup: E_rwd
title: CSS in responsive design
menu_title: CSS in responsive design
menu_order: 2
version: 2.0
github_link: frontend-dev-guide/responsive-web-design/rwd_css.md
redirect_from: /guides/v1.0/frontend-dev-guide/responsive-web-design/rwd_css.html
---

<h2>What's in this topic</h2>

Stylesheets are the main tool in responsive web design (RWD) implementation. This topic describes the mechanisms and approaches to building RWD used in the default Magento themes. To re-use them in your custom theme, make your theme <a href="{{page.baseurl}}frontend-dev-guide/themes/theme-inherit.html" target="_blank">inherit</a> from the Magento basic Blank theme.

<h2 id="lib_rwd">Media queries in Magento default themes</h2>

The Blank and Luma theme styles are based on the <a href="{{page.baseurl}}frontend-dev-guide//css-topics/theme-ui-lib.html" target="_blank">Magento UI library</a>. The library uses <a href="http://en.wikipedia.org/wiki/Media_queries" target="_blank">CSS3 media queries</a>, an extension of the <code>@media</code> rule, to adapt the layout to the screen width.

According to the approach implemented in the library, the <code>.media-width()</code> mixin can be used in any <code>.less</code> file in your theme, as many times as you need, but it is invoked only once, in <code>lib/web/css/source/lib/_responsive.less</code>. The resulting <code>styles.css</code> has only one call of each media query with all the rules there, instead of multiple calls for the same query.


You can find more information about the Magento UI library responsive mixin usage in <code>&lt;your_Magento_instance&gt;/pub/static/frontend/Magento/blank/en_US/css/docs/responsive.html</code> (view in a browser).

<h2 id="fedg_rwd_css_break">Breakpoints</h2>

Breakpoints are used in the CSS code to set up the screen width at which the design switches from the mobile to the desktop version.

The Blank and Luma themes implement the following <a href="{{page.baseurl}}frontend-dev-guide/responsive-web-design/rwd_overview.html#fedg_rwd_terms" target="_blank">breakpoints</a>:
<ul>
  <li>320px</li>
  <li>480px</li>
  <li>640px</li>
  <li>768px (in the Blank and Luma themes, this breakpoint switches between mobile and desktop views)</li> <li>1024px</li>
  <li>1440px</li>
</ul>

You can change these breakpoints and add new ones in your custom theme. For instructions see the [Add a new breakpoint]({{page.baseurl}}frontend-dev-guide/responsive-web-design/rwd-breakpoints.html) topic.

<h2>Mobile first</h2>

In the Blank and Luma themes, the mobile first approach is used. It means that the styles for mobile devices (screen width less than 768px) are extended by the styles for the higher breakpoints. As the result, the extra styles are never loaded when a store is viewed on a mobile device.


In the Blank theme, the mobile and desktop styles are defined in separate files:

<ul>
<li><a href="{{site.mage2000url}}app/design/frontend/Magento/blank/web/css/styles-l.less">styles-l.less</a> is used to generate desktop-specific styles (768px and higher).</li>
<li><a href="{{site.mage2000url}}app/design/frontend/Magento/blank/web/css/styles-m.less">styles-m.less</a> is used to generate basic and mobile-specific styles.</li>
</ul>




<h2>Related topics</h2>

*	<a href="{{page.baseurl}}frontend-dev-guide/themes/theme-create.html">Create a theme</a>
*	<a href="{{page.baseurl}}frontend-dev-guide/css-topics/theme-ui-lib.html">Magento UI library</a>
*	<a href="{{page.baseurl}}frontend-dev-guide/responsive-web-design/rwd_js.html">JavaScript in a responsive design</a>


