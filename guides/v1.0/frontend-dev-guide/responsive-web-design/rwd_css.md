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

Stylesheets are the main tool in responsive web design implementation. This topic describes the mechanisms and approaches to building RWD used in the default Magento themes. To re-use them in your custom theme, make your theme inherit from the main default Blank theme.

<h2 id="lib_rwd">Media queries in Magento default themes</h2>

The Blank and Luma theme styles are based on the <a href="{{site.gdeurl}}/css-topics/theme-ui-lib.html" target="_blank">Magento UI library</a>. The library uses <a href="http://en.wikipedia.org/wiki/Media_queries" target="_blank">CSS3 media queries</a>, an extension of the <code>@media</code> rule, to adapt the layout to the <a href="{{site.gdeurl}}frontend-dev-guide/responsive-web-design/rwd_overview.html#fedg_rwd_terms" target="_blank">viewport</a>.

The approach used in the Magento UI library is based on a recursive call of the <code>.media-width()</code> mixin defined anywhere in the project, but invoked in one place in <code>lib/web/css/source/lib/_responsive.less</code>. So that in the resulting <code>styles.css</code> there is only one call of each media query with all the rules there, instead of multiple calls for the same query.

<p class="q">need clarification to rephrase about the recursive call</p>

You can find more information about the Magento UI library responsive mixin usage at <code>&lt;your_Magento_instance&gt;/pub/static/frontend/Magento/blank/en_US/css/docs/responsive.html</code> (view in a browser).

<h2 id="fedg_rwd_css_break">Breakpoints</h2>

Breakpoints are used in the CSS code to set up a viewport at which the design switches from the mobile to the desktop version.

The Blank theme implements the following <a href="{{site.gdeurl}}frontend-dev-guide/responsive-web-design/rwd_overview.html#fedg_rwd_terms" target="_blank">breakpoints</a>:
<ul>
  <li>320px</li>
  <li>480px</li>
  <li>640px</li>
  <li>768px</li> 
  <li>1024px</li>
  <li>1440px</li>
</ul>

These breakpoints switch page layouts and separate blocks layouts between mobile and desktop views.

<h2>Mobile first</h2>

In the Blank and Luma themes mobile first approach is used. It means that the styles for mobile devices (640px breakpoint) are extended by the styles for the bigger breakpoints. As the result the extra styles are never loaded when a store is viewed on a mobile device.


<p class="q">Is it only 640, or 320 and 480 px as well?</p>

In the Blank theme, The mobile and desktop styles are defined in separate files:

<ul>
<li><a href="{{site.mage2000url}}app/design/frontend/Magento/blank/web/css/styles-l.less">styles-l.less</a> is used to generate desktop-specific styles (768px and higher).</li>
<li><a href="{{site.mage2000url}}app/design/frontend/Magento/blank/web/css/styles-m.less">styles-m.less</a> is used to generate mobile-specific styles.</li>
</ul>






#### Related topics:

*	<a href="{{ site.gdeurl }}frontend-dev-guide/themes/theme-create.html">Create a theme</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/css-topics/theme-ui-lib.html">Magento UI library</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/responsive-web-design/rwd_js.html">JavaScript in a responsive design</a>


