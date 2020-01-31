---
group: frontend-developer-guide
title: Simple ways to customize a theme's styles
functional_areas:
  - Frontend
---
## What's in this topic

Let's say you created a new [theme](https://glossary.magento.com/theme) inheriting from Magento Blank or Luma, and chose the [Less compilation mode]. What's next? Where to add the style changes? This topic gives quick answers.

## Simplest way to extend parent styles {#simple_extend}

To extend the parent theme's styles in your theme:

1. In your theme directory, create a `web/css/source` sub-directory.
1. Create a `_extend.less` file there. The path to it looks like following:

    ```tree
    <theme_dir>/
    │  ├── web/
    │  │   ├── css/
    │  │   │   ├── source/
    │  │   │      ├──_extend.less
    ...
    ```

1. Add your Less code in this file.

Extending a theme using `_extend.less` is the simplest option when you are happy with everything the parent theme has, but want to add more styles.

{:.bs-callout-info}
The rules and variables declared in `_extend.less` always have precedence over ones declared in `_theme.less`.

## Simplest way to override parent styles {#simple_override}

To override parent styles (that is, override default Magento UI [library](https://glossary.magento.com/library) variables):

1. In your theme directory, create a `web/css/source` sub-directory.
1. Create a `_theme.less` file here. The path to it then looks like following:

   ```tree
   <theme_dir>/
   │  ├── web/
   │  │   ├── css/
   │  │   │   ├── source/
   │  │   │      ├──_theme.less
   ...
   ```

   It is important to remember that your `_theme.less` overrides the parent `_theme.less`.

1. Copy all variables you need from the parent `_theme.less`, including those which will not be changed. For example if your theme inherits from Blank, the `_theme.less` you should copy from is located at `<Magento_Blank_theme_dir>/web/css/source/_theme.less`.
1. Make the necessary changes.

The drawback of this approach is that you need to monitor and manually update your files whenever the parent's `_theme.less` is updated.

## Adding structured changes {#structured_changes}

To make your changes easier to read and support, structure them by adding a separate overriding or extending `.less` files for each [Magento UI library component] you change. Let's use the `button` component implemented in `_button.less` as an illustration.

### Extend component's styles {#structured_extend}

1. In your theme directory, create a `web/css/source` sub-directory.
1. Add `_buttons_extend.less` and `_extend.less` here. The path to the files looks like following:

   ```tree
   <theme_dir>
   │  ├── web/
   │  │   ├── css/
   │  │   │   ├── source/
   │  │   │      ├──_buttons_extend.less
   │  │   │      ├──_extend.less
   ...
   ```

1. In `_buttons_extend.less` add your styles for the button component.
1. In `_extend.less` register the `_buttons_extend.less` by adding the following code: `@import '_buttons_extend.less';`

### Override component's styles {#structured_override}

To override the parent theme's styles for buttons in your theme:

1. In your theme directory, create a `web/css/source` sub-directory.
1. Create a `_buttons.less` file here. The path to it looks like following:

   ```tree
   <theme_dir>/
   │  ├── web/
   │  │   ├── css/
   │  │   │   ├── source/
   │  │   │      ├──_buttons.less
   ...
   ```

   This file overrides the `_buttons.less` of the parent theme.

1. Add your styles for the button component. If the file is left blank, then no styles are applied for the component.

## Recommended reading

-  [Compile Less with Grunt]({{page.baseurl}}/frontend-dev-guide/css-topics/css_debug.html)
-  [CSS preprocessing]({{page.baseurl}}/frontend-dev-guide/css-topics/css-preprocess.html)
-  [Magento UI library]({{page.baseurl}}/frontend-dev-guide/css-topics/theme-ui-lib.html)

[Less compilation mode]: {{page.baseurl}}/frontend-dev-guide/css-guide/css_quick_guide_mode.html
[Magento UI library component]: {{page.baseurl}}/frontend-dev-guide/css-topics/theme-ui-lib.html#library_elements
