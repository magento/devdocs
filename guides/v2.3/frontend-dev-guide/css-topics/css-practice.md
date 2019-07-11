---
group: frontend-developer-guide
title: Customizing styles illustration
functional_areas:
  - Frontend
---

## What is in this topic   {#practice_over}

This topic features a step-by-step illustration of how to change a theme's color scheme using Magento UI library.

## Changing theme color scheme

OrangeCo created a custom theme that inherits from the Magento basic Blank theme.
The following image illustrates how store pages look when the Blank theme is applied:

![product page when Blank applied]

In their Grey theme, OrangeCo wants to change the color scheme from white to grey.

The Grey theme directory is `app/design/frontend/OrangeCo/grey`.

OrangeCo decided to use the Magento UI library, so to change the color scheme, they need to define new values for certain default Less variables.
To do this, they added an overriding `_theme.less` file in the `app/design/frontend/OrangeCo/grey/web/css/source` directory, with the following content:

```less
//  Color nesting
@page__background-color: @color-gray20;
@sidebar__background-color: @color-gray40;
@primary__color: @color-gray80;
@border-color__base: @color-gray76;

@link__color: @color-gray56;
@link__hover__color: @color-gray60;

//  Buttons
@button__color: @color-gray20;
@button__background: @color-gray80;
@button__border: 1px solid @border-color__base;

//  Primary button
@button-primary__background: @color-orange-red1;
@button-primary__border: 1px solid @color-orange-red2;
@button-primary__color: @color-white;
@button-primary__hover__background: darken(@color-orange-red1, 5%);
@button-primary__hover__border: 1px solid @color-orange-red2;
@button-primary__hover__color: @color-white;

//  Navigation
@navigation-level0-item__color: @color-gray80;
@submenu-item__color: @color-gray80;

@navigation__background: @color-gray40;
@navigation-desktop-level0-item__color: @color-gray80;
@navigation-desktop-level0-item__hover__color: @color-gray34;
@navigation-desktop-level0-item__active__color: @navigation-desktop-level0-item__color;

//  Tabs
@tab-control__background-color: @page__background-color;

//  Forms
@form-element-input__background: @color-gray89;
@form-element-input-placeholder__color: @color-gray60;

//  Header icons
@header-icons-color: @color-gray89;
@header-icons-color-hover: @color-gray60;
```

After the Grey theme is applied (and [static files cache cleared]), store pages will look like following:

![product page when Grey applied]

[product page when Blank applied]: {{site.baseurl}}/common/images/practice_blank.png
[product page when Grey applied]: {{site.baseurl}}/common/images/css_practice.png
[static files cache cleared]: {{page.baseurl}}/frontend-dev-guide/cache_for_frontdevs.html#clean_static_cache
