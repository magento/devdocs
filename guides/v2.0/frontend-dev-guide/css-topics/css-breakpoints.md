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

<p class="q">Why so many of them??</p>

* TOC
{:toc}

## Overview
To add a custom breakpoint to your theme you need to define a variable for the new breakpoint and override the `/lib/web/css/source/lib/_responsive.less` Magento UI library in the theme.

## Add a new breakpoint variable

In your custom theme directory, add a `/web/css/source/variables.less` with the following content:

<p class="q">What should be in this file, except the new breakpoint? </p>

    @your__breakpoint: 1280px;

For varibles naming rules see [Less coding standards](http://devdocs.magento.com/guides/v2.0/coding-standards/code-standard-less.html#variables).

## Override the lib `_responsive.less`

To override lib `_responsive.less` file: 
Copy `/lib/web/css/source/lib/_responsive.less` to `<your_theme_dir>/web/css/source/lib/` directory.

In your _responsive.less, add the following in the “Style groups for 'desktop' devices” section:

& when (@media-target = 'desktop'), (@media-target = 'all') {
…
    @media all and (min-width: @screen__my) {
        .media-width('min', @screen__my);
    }
}
4.	Add a new @media instruction where needed:
.media-width(@extremum, @break) when (@extremum = 'min') and (@break = @screen__my) {
    //  Customisation for @screen__my breakpoint
}
