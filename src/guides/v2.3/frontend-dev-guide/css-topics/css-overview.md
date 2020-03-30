---
group: frontend-developer-guide
title: Cascading style sheets (CSS)
functional_areas:
  - Frontend
---

## Overview

Magento 2 incorporates [Less](http://lesscss.org/), a CSS pre-processor that simplifies the management of complex CSS files.
To define styles of a Magento store, you can use both - CSS and Less stylesheets.

Magento application provides a built-in Less UI library, which you can optionally extend.

To customize [storefront](https://glossary.magento.com/storefront) styles, you need to [create a custom design theme]({{ page.baseurl }}/frontend-dev-guide/themes/theme-create.html). Then you can use one of the following approaches:

*  If your theme [inherits]({{ page.baseurl }}/frontend-dev-guide/themes/theme-inherit.html) from the Magento out-of-the-box Blank or Luma theme, you can override the default Less files; for example to [change the values of the variables]({{ page.baseurl }}/frontend-dev-guide/css-topics/theme-ui-lib.html#fedg_using-ui-lib_predef-vars) used in the default files.
*  Create your own Less files using the built-in Less preprocessor.
*  Create your own CSS files, optionally having compiled them using third-party CSS preprocessor.

## Things to remember when working with styles

*  Make sure that you [set]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-mode.html) your Magento application to the developer or default [mode]({{ page.baseurl }}/config-guide/bootstrap/magento-modes.html).

*  If your style changes do not apply after refreshing the page, cleaning the static files cache might help. See the [Clean static files cache topic]({{ page.baseurl }}/frontend-dev-guide/cache_for_frontdevs.html#clean_static_cache) for instructions how to do this.

### CSS merging, minification and performance

There are a couple options to help with CSS and site performance.

*  Merge CSS files to decrease the number of HTTP requests required to load the page.

*  Minification of CSS files reduces the file size being sent. It does this by stripping white space within the file.

*  Use CSS critical path to eliminate render-blocking CSS resources.

To enable / disable these settings, go into Admin > **Stores** > Setting > **Configuration** > **Advanced** > **Developer** > **CSS Settings**.

## Change styles: walkthrough {#css_walk}

Here is a simple illustration of changing styles using the first approach: changing the color of the buttons of a certain class.
In the Blank theme, the buttons of the `.action.primary` class, so called *primary* buttons, are blue. The following image illustrates this:

![The default view of a product page, with the orange Add to Cart button]

OrangeCo wants to change the color of the primary buttons to orange. To achieve this, they do the following:

1. Create a new Orange theme, which inherits from the Blank [theme](https://glossary.magento.com/theme).
1. In the Orange theme directory add the overriding `app/design/frontend/OrangeCo/orange/web/css/source/_theme.less` file with the following code:

   ```less
   //  Primary button
   @button-primary__color: @color-white;
   @button-primary__hover__color: @color-white;
   @button-primary__background: @color-orange-red1;
   @button-primary__hover__background: @color-orange-red4;
   @button-primary__border: 1px solid @color-orange-red2;
   @button-primary__hover__border: 1px solid @color-orange-red2;
   ```

When OrangeCo [applies their theme]({{ page.baseurl }}/frontend-dev-guide/themes/theme-apply.html), the primary buttons will look like on the following image:

![The customized view of a product page, with the grey Add to Cart button]

## In this chapter {#css_topics}

Other topics of this chapter describe the following:

*  [Including CSS]({{ page.baseurl }}/frontend-dev-guide/css-topics/css-themes.html): how stylesheets are organized and included to be used for store pages in the Magento application.
*  [CSS Preprocessing]({{ page.baseurl }}/frontend-dev-guide/css-topics/css-preprocess.html): how stylesheets are preprocessed and compiled.
*  [Magento UI Library]({{ page.baseurl }}/frontend-dev-guide/css-topics/theme-ui-lib.html): how to use the Magento styles [library](https://glossary.magento.com/library) in your custom themes.
*  [Using Custom Fonts]({{ page.baseurl }}/frontend-dev-guide/css-topics/using-fonts.html): how to add custom fonts.
*  [CSS critical path]({{ page.baseurl }}/frontend-dev-guide/css-topics/css-critical-path.html): how to use CSS critical path.
*  [Customizing styles illustration]({{ page.baseurl }}/frontend-dev-guide/css-topics/css-practice.html): how to change a theme's color scheme using Magento UI library.

[The default view of a product page, with the orange Add to Cart button]: {{site.baseurl}}/common/images/css_over1.png
[The customized view of a product page, with the grey Add to Cart button]: {{site.baseurl}}/common/images/css_over2.png
