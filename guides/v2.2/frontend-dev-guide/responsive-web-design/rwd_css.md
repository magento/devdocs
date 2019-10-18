---
group: frontend-developer-guide
title: CSS in responsive design
functional_areas:
  - Frontend
---

## In this topic

Stylesheets are the main tool in responsive web design (RWD) implementation. This topic describes the mechanisms and approaches to building RWD used in the default Magento themes. To re-use them in your custom theme, make your theme [inherit]({{ page.baseurl }}/frontend-dev-guide/themes/theme-inherit.html){:target="_blank"} from the Magento Blank theme.

## Mobile first

In the Blank and Luma themes, a "mobile first" approach is used. The order is:

-  Mobile
-  Tablet
-  Desktop

This means that the styles for mobile devices (screen width less than 768px) are extended by the styles for the higher breakpoints. As the result, the extra styles are never loaded when a store is viewed on a mobile device.

The mobile and desktop styles are defined in separate files:

-  [styles-l.less] is used to generate desktop-specific styles (768px and higher).
-  [styles-m.less] is used to generate basic and mobile-specific styles.

## Breakpoints {#fedg_rwd_css_break}

Breakpoints are used in the CSS code to set up the screen width at which the design switches from the mobile to the desktop version.

The Blank and Luma themes use Less variables to implement the following [breakpoints]({{ page.baseurl }}/frontend-dev-guide/responsive-web-design/rwd_overview.html#fedg_rwd_terms):

-  `@screen__xxs`: 320px
-  `@screen__xs`: 480px
-  `@screen__s`: 640px
-  `@screen__m`: 768px (in the Blank and Luma themes, this breakpoint switches between mobile and desktop views)
-  `@screen__l`: 1024px
-  `@screen__xl`: 1440px

You can change these breakpoints or add new ones in your custom theme. For instructions see the [Add a new breakpoint]({{ page.baseurl }}/frontend-dev-guide/responsive-web-design/rwd-breakpoints.html) topic.

## Media queries in Magento default themes {#lib_rwd}

The Blank and Luma theme styles are based on the [Magento UI library]. The library uses [CSS3 media queries](http://en.wikipedia.org/wiki/Media_queries), an extension of the `@media` rule, to adapt the layout to the screen width.

The approach implemented in the Magento UI library, uses `@media-common` style group separation and `.media-width()` mixins which can be used in any `.less` file in a theme, as many times as needed, but it is invoked only once, in `lib/web/css/source/lib/_responsive.less`. The resulting `styles-m.css` and `styles-l.css` both have only one call of each media query with all the rules there, instead of multiple calls for the same query.

-  Media queries `@media-common`, `max screen__s` and `max screen__m` will be added to `styles-m.css`.
-  Media queries `min screen__m` and `min screen__l` will be added to `styles-l.css`.

If working on a theme which inherits from either the Blank or Luma theme, it's recommended to use `.media-width()` and style groups separation.  Otherwise the style rules will be added twice, once to `styles-m.css` and once more to `styles-l.css`.

For Less styles rules to be compiled to `styles-m.css` without a media query so that they apply to all screen widths use the `@media-common` style group separation.

```less
//
//  Common (style-m.css)
//  _____________________________________________
& when (@media-common = true) {
    // your code
}
```

For grouping style rules in certain media queries the `.media-width()` mixin used.

```less
.media-width(<@extremum>, <@break>);
```

`@extremum: max|min` - sets whether to use min-width or max-width in media query condition. If `max` is used the compiled styles will be placed in `styles-m.css` with the appropriate media query. Whereas if `min` is used the compiled styles will be placed in `styles-l.css` with the appropriate media query.

`@break: value` - sets the value of breakpoint to compare with in media query condition.

```less
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
//  Tablet (for the front-end)
//  _____________________________________________

@media only screen and (max-width: @screen__m) {
    // your code
}

//
//  Tablets (for the back-end)
//  _____________________________________________

.media-width(@extremum, @break) when (@extremum = 'max') and (@break = @screen__l) {
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
```

You can find more information about the Magento UI library responsive mixin usage in `<your_Magento_instance>/pub/static/frontend/Magento/blank/en_US/css/docs/responsive.html` (view in a browser).

{:.ref-header}
Related topics

-  [Create a theme]({{page.baseurl}}/frontend-dev-guide/themes/theme-create.html)
-  [CSS and Less preprocessing]({{page.baseurl}}/frontend-dev-guide/css-topics/css-preprocess.html)
-  [Magento UI library]({{page.baseurl}}/frontend-dev-guide/css-topics/theme-ui-lib.html)
-  [JavaScript in a responsive design]({{page.baseurl}}/frontend-dev-guide/responsive-web-design/rwd_js.html)

[styles-l.less]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/design/frontend/Magento/blank/web/css/styles-l.less
[styles-m.less]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/design/frontend/Magento/blank/web/css/styles-m.less
