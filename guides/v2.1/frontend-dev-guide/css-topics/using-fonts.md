---
group: fedg
title: Using custom fonts
version: 2.1
github_link: frontend-dev-guide/css-topics/using-fonts.md
redirect_from: /guides/v1.0/frontend-dev-guide/css-topics/using-fonts.html
functional_areas:
  - Frontend
---

The Magento application contains a set of built-in fonts, but you can easily include custom fonts. This topic describes how to include a locally stored custom font in your Magento {% glossarytooltip d2093e4a-2b71-48a3-99b7-b32af7158019 %}theme{% endglossarytooltip %}.

{:.bs-callout .bs-callout-tip}
If you are new to Magento theme development, see [Create a theme]({{ page.baseurl }}/frontend-dev-guide/themes/theme-create.html) to get familiar with the basics.

To ensure the stability of your customizations and prevent upgrades from overwriting your customizations, do not change the default Magento theme files. You must include custom fonts in the your theme's stylesheet.

1. Add font files to your local theme directory. For example, `app/design/frontend/<your_vendor_name>/<your_theme_name>/web/fonts`.

    {:.bs-callout .bs-callout-info}
    To add _external_ fonts, add font references to the page configuration file as described in [Include static resources (JavaScript, CSS, fonts)]({{ page.baseurl }}/frontend-dev-guide/layouts/xml-manage.html#layout_markup_css).

1. If you build a theme using the Magento UI library, declare the font by adding the `.lib-font-face` {% glossarytooltip 1a305bdb-9be8-44aa-adad-98758821d6a7 %}mixin{% endglossarytooltip %} to the `app/design/frontend/<your_vendor_name>/<your_theme_name>/web/css/source/_typography.less` file:

    ```css
    .lib-font-face(
        @family-name:'<any_font_name>',
        @font-path: '@{baseDir}fonts/<path_to_font_file>',
        @font-weight: <a href="http://www.w3schools.com/cssref/pr_font_weight.asp" target="_blank"><font_weight></a>,
        @font-style: <a href="http://www.w3schools.com/cssref/pr_font_font-style.asp" target="_blank"><font_style></a>
    );
    ```

    Where:

    * `{@baseDir}` stands for the `app/design/frontend/<you_vendor_name>/<your_theme_name>/web` directory.
    * `<path_to_font_file>` includes the font file name, but without the extension. For example, `@font-path: '@{baseDir}fonts/Luma-Icons'` for the font stored in `web/fonts/Luma-Icons.woff`.

    The mixin generates the CSS, which includes the font. The following example shows how to generate CSS for the Open Sans font in the Blank theme:

    ```css
    @font-face {
        font-family: 'Open Sans';
        src: url('../fonts/opensans/light/opensans-300.eot');
        src: url('../fonts/opensans/light/opensans-300.eot?#iefix') format('embedded-opentype'), url('../fonts/opensans/light/opensans-300.woff2') format('woff2'), url('../fonts/opensans/light/opensans-300.woff') format('woff'), url('../fonts/opensans/light/opensans-300.ttf') format('truetype'), url('../fonts/opensans/light/opensans-300.svg#Open Sans') format('svg');
        font-weight: 300;
        font-style: normal
    }
    ```

{:.bs-callout .bs-callout-info}
If your theme does not use the Magento UI library, include the font in your theme's CSS files using the `@font-face` CSS rule.