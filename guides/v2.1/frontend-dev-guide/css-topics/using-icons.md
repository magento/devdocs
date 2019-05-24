---
group: frontend-developer-guide
title: Using custom icons
functional_areas:
  - Frontend
---

The Magento application directly extends the Magento 2 Blank theme but implements the font icon set from the Luma theme.

The package includes CSS adjustments to scale font sizes in keeping with the Luma icons (which represent a size more typical of available icon fonts). The theme is intended to serve as a base for extending with your own theme and replacing icons with your own.

Using fonts for icons makes sense for a lot of reasons. In reality, iconography has always had more in common with text than content images icons are glyphs that communicate meaning to the audience. And in technical terms, font glyphs are vector information that can scale up to any resolution, The native Magento theme provides the framework you need for implementation.


## Overview of Magento's Icon CSS

In addition to including custom fonts in your Magento Blank theme, you also can include custom fonts for any icons in the Blank theme. The icon font files for the Magento Blank theme are located in the `lib/web/fonts/Blank-Theme-Icons` directory. The `lib/web/css/source/lib/variables/_typography.less` file defines the font icon path and name for the icons and the `web/css/source/_icons.less` file uses these files to define the icon font face itself, which should be used in all CSS declarations.
 
 The Unicode characters that correspond to the correct font glyphs for each icon are defined in the following `lib/web/css/source/lib/variables/_icons.less` file.
 
By calling the `lib-icon-font` mixin, you can apply the icon font and character variables throughout the theme LESS code.

Add Icon in specific class using mixin: 
  
    ```css
    .control {
        .lib-icon-font(
        @icon-envelope,
        @_icon-font-size: 16px,
        @_icon-font-line-height: 32px,
        @_icon-font-color: @form-element-input-placeholder__color,
        @_icon-font-margin: 0 0 0 8px
        );
    }
    ```

To customize a font you import, consider using [IcoMoon](https://icomoon.io/app/).

{:.bs-callout .bs-callout-info}
If your theme does not use the Magento UI library, include the font in your theme's CSS files using the `@font-face` CSS rule.
