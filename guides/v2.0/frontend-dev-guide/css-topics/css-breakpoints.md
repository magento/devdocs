---
layout: default
group: fedg
subgroup: D_CSS
title: Add a custom breakpoint
menu_order: 7
menu_title: Add a custom breakpoint
github_link: frontend-dev-guide/css-topics/css-breakpoints.md
---

<h2>What's in this topic</h2>

Breakpoints are used in stylesheets to set up the screen width at which the design switches from the mobile to the desktop version. Magento out of the box themes implement a list of [default breakpoints]({{site.gdeurl}}frontend-dev-guide/responsive-web-design/rwd_css.html#fedg_rwd_css_break). This topic describes how to set breakpoints in your theme. 


* TOC
{:toc}

## Overview
To add a custom breakpoint to your theme you need to do the following:

1. Define a variable for the new breakpoint.
2. Override the library `_responsive.less` file and add the new rule for the new breakpoint.
3. Implement the screen changes for the new breakpoint.

## Add a new breakpoint variable

In your custom theme directory, add a `/web/css/source/variables.less` in one of the following ways:

-  if your theme [inherits]({{site.gdeurl}}frontend-dev-guide/themes/theme-inherit.html) from the other, then copy the parent's `variables.less`.
-  if your theme is a standalone one, add a new empty file.

In your `variable.less`, add the variable for your new breakpoint.

<p class="q">do we talk only about adding a new breakpoint? what about changing the behavior for the default ones?</p>

For example:

    @your__breakpoint: 1280px;

For varibles naming rules see [Less coding standards](http://devdocs.magento.com/guides/v2.0/coding-standards/code-standard-less.html#variables).

## Override `_responsive.less` from the library

The library _responsive.less file sets the rules using breakpoints. So to add a new rule, you need to override the library file, and add the rule for your breakpoint. 

If the `<your_parent_theme_dir>/web/css/source/lib/_responsive.less` exists, copy it to `<your_theme_dir>/web/css/source/lib/`.

If the file in the parent theme does not exist, copy `/lib/web/css/source/lib/_responsive.less` to `<your_theme_dir>/web/css/source/lib/`.

In your `_responsive.less`, add the rule in the correspoding section (desktop or mobile, depending on the type of breakpoint you add).

Example:

    & when (@media-target = 'desktop'), (@media-target = 'all') {
    …
        @media all and (min-width: @screen__my) {
            .media-width('min', @screen__my);
        }
    }

## Declare the screen changes for the breakpoint

In one of your theme .less files, add a new `@media` instruction implementing the required screen changes.

Example:

    .media-width(@extremum, @break) when (@extremum = 'min') and (@break = @screen__my) {
        //  Customisation for @screen__my breakpoint
    }
