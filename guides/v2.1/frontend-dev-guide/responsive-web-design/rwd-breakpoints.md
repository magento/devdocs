---
layout: default
group: fedg
subgroup: E_rwd
title: Add a custom breakpoint
menu_order: 7
menu_title: Add a custom breakpoint
github_link: frontend-dev-guide/responsive-web-design/rwd-breakpoints.md
redirect_from: guides/v2.1/frontend-dev-guide/css-topics/css-breakpoints.html
---

<h2>What's in this topic</h2>

Breakpoints are used in stylesheets to set up the screen width at which the design changes, for example from the mobile to the desktop version. Themes provided with Magento implement a list of [default breakpoints]({{site.gdeurl21}}frontend-dev-guide/responsive-web-design/rwd_css.html#fedg_rwd_css_break). This topic describes how to add a custom breakpoint in your theme. 

**Contents**

* TOC
{:toc}

## Overview
To add a custom breakpoint in your theme, you need to do the following:

1. Define a variable for the new breakpoint.
2. Override the library `_responsive.less` file, and add the new rule for the new breakpoint. 
3. Implement the screen changes for the new breakpoint.

## Add a new breakpoint variable

In your custom theme directory, add a `/web/css/source/variables.less` in one of the following ways:

- if your theme [inherits]({{site.gdeurl21}}frontend-dev-guide/themes/theme-inherit.html) from the other, then copy the parent's `variables.less`.
- if your theme is a standalone one, add a new empty file.

In `variable.less`, add the variable for your new breakpoint.

For example:

    @your__breakpoint: 1280px;

For variables' naming rules see [Less coding standards]({{site.gdeurl21}}coding-standards/code-standard-less.html#variables).

## Override `_responsive.less` from the library

According to the approach, implemented in the Magento UI library, the `.media-width()` mixin calls are defined in many places, but invoked in one place, in `lib/web/css/source/lib/_responsive.less`. 

To implement a new breakpoint, you need to edit the `.media-width()` mixin by adding the appropriate rule there. So you need to override the library `_responsive.less` in your theme, and add the customizations there. 

To do this, take the following steps:

1. Copy the `_responsive.less` file to your `<your_theme_dir>/web/css/source/lib/` directory from one of the following locations:
	- `<your_parent_theme_dir>/web/css/source/lib/_responsive.less`: overriding `_responsive.less` in the parent theme. If there's no such file or no parent theme, use the other option. 
	- `<your_theme_dir>/web/css/source/lib/_responsive.less`: the library file.
2. In your `_responsive.less`, add the `.media-width` mixin rule for your breakpoint in the corresponding section (desktop or mobile, depending on the type of breakpoint you add).

Example:

    & when (@media-target = 'desktop'), (@media-target = 'all') {
    …
        @media all and (min-width: @your__breakpoint) {
            .media-width('min', @your__breakpoint);
        }
    }

## Add `.media-width()` calls for the new breakpoint

Now you can add a new `.media-width()` mixin call where necessary in your theme `.less ` files.

Example:

    .media-width(@extremum, @break) when (@extremum = 'min') and (@break = @your__breakpoint) {
        //  Customization for @your__breakpoint breakpoint
    }

## Related reading

- You can find information about the `_responsive.less` library file in the generated Magento UI library documentation. It is available in the following location in your Magento installation: `<your_Magento_installation>/pub/static/frontend/Magento/blank/en_US/css/docs/responsive.html`.
- [How to make your theme responsive and mobile]({{site.gdeurl21}}frontend-dev-guide/responsive-web-design/rwd_overview.html).
