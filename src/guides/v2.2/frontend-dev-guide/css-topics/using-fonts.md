---
group: frontend-developer-guide
title: Using custom fonts
functional_areas:
  - Frontend
---

The Magento application contains a set of built-in fonts, but you can easily include custom fonts. This topic describes how to include a locally stored custom font in your Magento [theme](https://glossary.magento.com/theme).

{:.bs-callout-tip}
If you are new to Magento theme development, see [Create a theme]({{ page.baseurl }}/frontend-dev-guide/themes/theme-create.html) to get familiar with the basics.

To ensure the stability of your customizations and prevent upgrades from overwriting your customizations, do not change the default Magento theme files. You must include custom fonts in the your theme's stylesheet.

1. Add font files to your local theme directory. For example, `app/design/frontend/<your_vendor_name>/<your_theme_name>/web/fonts`.

    {:.bs-callout-info}
    To add _external_ fonts, add font references to the page configuration file as described in [Include static resources (JavaScript, CSS, fonts)]({{ page.baseurl }}/frontend-dev-guide/layouts/xml-manage.html#layout_markup_css).

1. If you build a theme using the Magento UI library, declare the font by adding the `.lib-font-face` [mixin](https://glossary.magento.com/mixin) to the `app/design/frontend/<your_vendor_name>/<your_theme_name>/web/css/source/_typography.less` file:

    ```css
    .lib-font-face(
        @family-name:'<any_font_name>',
        @font-path: '@{baseDir}fonts/<path_to_font_file>',
        @font-weight: <font_weight>,
        @font-style: <font_style>
        @font-display: <auto|block|fallback|option|swap>
    );
    ```

    Where:

    *  `@{baseDir}` stands for the `app/design/frontend/<you_vendor_name>/<your_theme_name>/web` directory.
    *  `<path_to_font_file>` includes the font file name, but without the extension. For example, `@font-path: '@{baseDir}fonts/Luma-Icons'` for the font stored in `web/fonts/Luma-Icons.woff`.

    The mixin generates the CSS, which includes the font. The following example shows how to generate CSS for the Open Sans font in the Blank theme:

    ```css
    @font-face {
        font-family: 'Open Sans';
        src: url('../fonts/opensans/light/opensans-300.eot');
        src: url('../fonts/opensans/light/opensans-300.eot?#iefix') format('embedded-opentype'), url('../fonts/opensans/light/opensans-300.woff2') format('woff2'), url('../fonts/opensans/light/opensans-300.woff') format('woff'), url('../fonts/opensans/light/opensans-300.ttf') format('truetype'), url('../fonts/opensans/light/opensans-300.svg#Open Sans') format('svg');
        font-weight: 300;
        font-style: normal
        font-display: swap;
    }
    ```

    `@font-display: swap` is declared by default for Magento Blank theme in `app/design/frontend/Magento/blank/web/css/source/_typography.less`.

    Fallback web fonts that are used by default in Magento are located in `lib/web/css/source/lib/variables/_typography.less`.

## `<font>` head type

A `<font>` node is added to HTML `<head>` type for layout in `lib/internal/Magento/Framework/View/Layout/etc/head.xsd`. All resources added with `<font>` node will be downloaded with `preload` html attribute.

## Overview of Magento's Icon CSS

In addition to including custom fonts in your Magento Blank theme, you also can include custom fonts for any icons in the Blank theme. The icon font files for the Magento Blank theme are located in the `lib/web/fonts/Blank-Theme-Icons` directory. The `lib/web/css/source/lib/variables/_typography.less` file defines the font icon path and name for the icons and the `web/css/source/_icons.less` file uses these files to define the icon font face itself, which should be used in all CSS declarations.

 The Unicode characters that correspond to the correct font glyphs for each icon are defined in the following `lib/web/css/source/lib/variables/_icons.less` file.

By calling the `lib-icon-font` mixin, you can apply the icon font and character variables throughout the theme LESS code.

To customize a font you import, consider using [IcoMoon](https://icomoon.io/app/).

{:.bs-callout-info}
If your theme does not use the Magento UI library, include the font in your theme's CSS files using the `@font-face` CSS rule.
