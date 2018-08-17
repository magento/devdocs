---
group: fedg
subgroup: E_rwd
title: CSS in responsive design
menu_title: CSS in responsive design
menu_order: 2
version: 2.1
redirect_from: /guides/v1.0/frontend-dev-guide/responsive-web-design/rwd_css.html
functional_areas:
  - Frontend
---

## What's in this topic

Stylesheets are the main tool in responsive web design (RWD) implementation. This topic describes the mechanisms and approaches to building RWD used in the default Magento themes. To re-use them in your custom theme, make your {% glossarytooltip d2093e4a-2b71-48a3-99b7-b32af7158019 %}theme{% endglossarytooltip %} [inherit]({{ page.baseurl }}/frontend-dev-guide/themes/theme-inherit.html){:target="_blank"} from the Magento Blank theme.

## Mobile first

In the Blank and Luma themes, the mobile first approach is used. It means that the styles for mobile devices (screen width less than 768px) are extended by the styles for the higher breakpoints. As the result, the extra styles are never loaded when a store is viewed on a mobile device.

The mobile and desktop styles are defined in separate files:

<ul>
<li><a href="{{ site.mage2000url }}app/design/frontend/Magento/blank/web/css/styles-l.less">styles-l.less</a> is used to generate desktop-specific styles (768px and higher).</li>
<li><a href="{{ site.mage2000url }}app/design/frontend/Magento/blank/web/css/styles-m.less">styles-m.less</a> is used to generate basic and mobile-specific styles.</li>
</ul>

## Breakpoints {#fedg_rwd_css_break}

Breakpoints are used in the {% glossarytooltip 6c5cb4e9-9197-46f2-ba79-6147d9bfe66d %}CSS{% endglossarytooltip %} code to set up the screen width at which the design switches from the mobile to the desktop version.

The Blank and Luma themes use LESS variables to implement the following [breakpoints]({{ page.baseurl }}/frontend-dev-guide/responsive-web-design/rwd_overview.html#fedg_rwd_terms){:target="_blank"}:
<ul>
  <li><code>@screen__xxs</code>: 320px</li>
  <li><code>@screen__xs</code>: 480px</li>
  <li><code>@screen__s</code>: 640px</li>
  <li><code>@screen__m</code>: 768px (in the Blank and Luma themes, this breakpoint switches between mobile and desktop views)</li>
  <li><code>@screen__l</code>: 1024px</li>
  <li><code>@screen__xl</code>: 1440px</li>
</ul>

You can change these breakpoints and add new ones in your custom theme. For instructions see the [Add a new breakpoint]({{ page.baseurl }}/frontend-dev-guide/responsive-web-design/rwd-breakpoints.html) topic.

## Media queries in Magento default themes {#lib_rwd}

The Blank and Luma theme styles are based on the [Magento UI library]({{ page.baseurl }}/frontend-dev-guide//css-topics/theme-ui-lib.html){:target="_blank"}. The library uses [CSS3 media queries](http://en.wikipedia.org/wiki/Media_queries){:target="_blank"}, an {% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}extension{% endglossarytooltip %} of the <code>@media</code> rule, to adapt the {% glossarytooltip 73ab5daa-5857-4039-97df-11269b626134 %}layout{% endglossarytooltip %} to the screen width.

The approach implemented in the Magento UI library, uses <code>@media-common</code> style group separation and <code>.media-width()</code> {% glossarytooltip 1a305bdb-9be8-44aa-adad-98758821d6a7 %}mixins{% endglossarytooltip %} which can be used in any <code>.less</code> file in a theme, as many times as needed, but it is invoked only once, in <code>lib/web/css/source/lib/_responsive.less</code>. The resulting <code>styles-m.css</code> and <code>styles-l.css</code> both have only one call of each media query with all the rules there, instead of multiple calls for the same query.

If working on a theme which inherits from either the Blank or Luma theme, it's recommended to use <code>.media-width()</code> and style groups separation.  Otherwise the style rules will be added twice, once to <code>styles-m.css</code> and once more to <code>styles-l.css</code>.

For LESS styles rules to be compiled to <code>styles-m.css</code> without a media query so that they apply to all screen widths use the <code>@media-common</code> style group separation.

<pre>
//
//  Common (style-m.css)
//  _____________________________________________
& when (@media-common = true) {
    // your code
}
</pre>

For grouping style rules in certain media queries the .media-width() mixin used.

<pre>
.media-width(<@extremum>, <@break>);
</pre>

<code>@extremum: max|min</code> - sets whether to use min-width or max-width in media query condition. If <code>max</code> is used the compiled styles will be placed in <code>styles-m.css</code> with the appropriate media query. Whereas if <code>min</code> is used the compiled styles will be placed in <code>styles-l.css</code> with the appropriate media query.

<code>@break: value</code> - sets the value of breakpoint to compare with in media query condition.

<pre>
//
//  Mobile (style-m.css)
//  _____________________________________________
.media-width(@extremum, @break) when (@extremum = 'max') and (@break = @screen__s) {
    // your code
}

.media-width(@extremum, @break) when (@extremum = 'max') and (@break = @screen__m) {
    // your code
}

//
//  Desktop (style-l.css)
//  _____________________________________________
.media-width(@extremum, @break) when (@extremum = 'min') and (@break = @screen__m) {
    // your code
}

.media-width(@extremum, @break) when (@extremum = 'min') and (@break = @screen__l) {
    // your code
}
</pre>

You can find more information about the Magento UI {% glossarytooltip 08968dbb-2eeb-45c7-ae95-ffca228a7575 %}library{% endglossarytooltip %} responsive mixin usage in <code>&lt;your_Magento_instance&gt;/pub/static/frontend/Magento/blank/en_US/css/docs/responsive.html</code> (view in a browser).

## Related topics

*	<a href="{{ page.baseurl }}/frontend-dev-guide/themes/theme-create.html">Create a theme</a>
*	<a href="{{ page.baseurl }}/frontend-dev-guide/css-topics/css-preprocess.html">CSS and LESS preprocessing</a>
*	<a href="{{ page.baseurl }}/frontend-dev-guide/css-topics/theme-ui-lib.html">Magento UI library</a>
*	<a href="{{ page.baseurl }}/frontend-dev-guide/responsive-web-design/rwd_js.html">JavaScript in a responsive design</a>
