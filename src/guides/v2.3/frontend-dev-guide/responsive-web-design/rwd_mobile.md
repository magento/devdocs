---
group: frontend-developer-guide
title: Create a responsive mobile theme based on a default theme
functional_areas:
  - Frontend
---
## What's in this topic

The topic describes how to create a responsive mobile-specific theme using the default Magento approaches.

## Creating a mobile-specific theme

To use all the responsive approaches implemented in the Magento out-of-the-box Blank and Luma themes, your theme should declare one of them as a [parent]({{ page.baseurl }}/frontend-dev-guide/themes/theme-inherit.html).

To create a mobile-specific theme:

1. Create a theme as described in [Create a theme]({{ page.baseurl }}/frontend-dev-guide/themes/theme-create.html), having specified Blank or Luma as a parent theme.
1. Add a `<theme_dir>/Magento_Theme/layout/default_head_blocks.xml` [layout](https://glossary.magento.com/layout) file with the following content:

```xml
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <head>
        <remove src="css/styles-l.css" />
    </head>
</page>
```

The `<remove>` instruction removes the desktop-specific files from your theme.

## Applying mobile-specific styles

Use `styles-m.less` to generate mobile-specific styles.

 ```xml
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
  <head>
    <remove src="css/styles-l.css" />
    <css src="css/styles-m.css" />
  </head>
</page>
```

Media queries `@media-common`, `max screen__m`, `max screen__s`, `max @screen__xs` and `max @screen__xxs` will be added to `styles-m.css`.

Example of a LESS mixin to target screen width less than 480px:

```less
.media-width(@extremum, @break) when (@extremum = 'max') and (@break = @screen__xs) {
    // your code
}
```

Example of a LESS mixin to target screen width less than 768px:

```less
.media-width(@extremum, @break) when (@extremum = 'max') and (@break = @screen__m) {
    // your code
}
```

## Recommended reading

[CSS in Magento responsive design]({{page.baseurl}}/frontend-dev-guide/responsive-web-design/rwd_css.html)
