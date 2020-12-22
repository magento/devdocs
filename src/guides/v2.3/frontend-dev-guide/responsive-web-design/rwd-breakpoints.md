---
group: frontend-developer-guide
title: Add a custom breakpoint
functional_areas:
  - Frontend
---

## What's in this topic

Breakpoints are used in stylesheets to set up the screen width at which the design changes, for example from the mobile to the desktop version. Themes provided with Magento implement a list of [default breakpoints][breakpoints-link]. This topic describes how to add a custom breakpoint in your theme.

## Overview

To add a custom breakpoint in your theme, you need to do the following:

1. Define a variable for the new breakpoint.
1. Override the library `_responsive.less` file, and add the new rule for the new breakpoint.
1. Implement the screen changes for the new breakpoint.

## Add a new breakpoint variable

In your custom theme directory, add a `/web/css/source/_variables.less` in one of the following ways:

-  if your theme [inherits][theme-inherit] from the other, then copy the parent's `_variables.less`.
-  if your theme is a standalone one, add a new empty file.

In your file `_variables.less` in custom theme, add the variable for your new breakpoint.

For example:

```less
@screen__xl: 1280px;
@screen__lg: 1600px;
```

For variables' naming rules see [Less coding standards][code-standard-less].

## Override `_responsive.less` from the library

According to the approach, implemented in the Magento UI library, the `.media-width()` mixin calls are defined in many places, but invoked in one place, in `lib/web/css/source/lib/_responsive.less`.

To implement a new breakpoint, you need to edit the `.media-width()` mixin by adding the appropriate rule there. So you need to override the library `_responsive.less` in your theme, and add the customizations there.

To do this, take the following steps:

1. Copy the `_responsive.less` file to your `<your_theme_dir>/web/css/source/lib/` directory from one of the following locations:
   -  `<your_parent_theme_dir>/web/css/source/lib/_responsive.less`: overriding `_responsive.less` in the parent theme. If there's no such file or no parent theme, use the other option.
   -  `<your_theme_dir>/web/css/source/lib/_responsive.less`: the library file.
1. In your `_responsive.less` file, add the `.media-width` [mixin][mixin-link] rule for your breakpoint in the corresponding section (desktop or mobile, depending on the type of breakpoint you add).

{:.bs-callout-info}
The `@media-target` option may have one of the following values: `all`, `desktop` or `mobile`.

{:.bs-callout-warning}
Use single quotes when specifying media-targets. Double quotes may cause unexpected issues with the scripts.

Example:

```less
& when (@media-target = 'desktop'), (@media-target = 'all') {

    @media all and (min-width: @screen__xl) {
        .media-width('min', @screen__xl);
    }
}
```

## Add `.media-width()` calls for the new breakpoint

Now you can add a new `.media-width()` mixin call where necessary in your theme `.less` files.

Example:

```less
.media-width(@extremum, @break) when (@extremum = 'min') and (@break = @screen__xl) {
    //  Customization for @screen__xl breakpoint
}
```

## Related reading

-  You can find information about the `_responsive.less` library file in the generated Magento UI library documentation. It is available in the following location in your Magento installation: `<your_Magento_installation>/pub/static/frontend/Magento/blank/en_US/css/docs/responsive.html` (view in a browser).
-  [How to make your theme responsive and mobile][rwd-overview].

<!-- Link definitions -->
[rwd-overview]: {{ page.baseurl }}/frontend-dev-guide/responsive-web-design/rwd_overview.html
[mixin-link]: https://glossary.magento.com/mixin
[theme-inherit]: {{ page.baseurl }}/frontend-dev-guide/themes/theme-inherit.html
[code-standard-less]: {{ page.baseurl }}/coding-standards/code-standard-less.html#variables
[breakpoints-link]: {{ page.baseurl }}/frontend-dev-guide/responsive-web-design/rwd_css.html#fedg_rwd_css_break
