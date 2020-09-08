---
group: frontend-developer-guide
title: Theme development best practices
functional_areas:
  - Frontend
  - Theme
  - Standards
---

Utilizing best practices for theme development give you a better chance of avoiding conflicts and issues with your theme after you update or upgrade your Magento instance or install a custom extension.

We recommend using the following best practices when developing themes:

1. When [inheriting]({{ page.baseurl }}/frontend-dev-guide/themes/theme-inherit.html) from a default Magento theme, extend the default styles instead of overriding them.  Whenever possible, put your customizations in the `_extend.less` or `_theme.less` file, instead of overriding a `.less` file from a parent theme.
1. Customize, or create new, `.xml` layout files instead of customizing and overriding `.phtml` templates. For example, if you need to create a new container, it is better to add an `.xml` file than override an existing template. Some other customizations that can be performed using layout instructions include:

    *  Change the position of a block or container using `<move>`.
    *  Add or remove a block or container by setting the `remove` or `display` attribute to `true` or `false` within the `<referenceBlock>/<referenceContainer>`.
    *  Change the HTML tag or CSS class for the existing container using the `<referenceContainer>` element.
    *  Add fonts, images, and JavaScript files in the `<theme_dir>/web/` directory.

    See the [Layout chapter of this Guide]({{ page.baseurl }}/frontend-dev-guide/layouts/layout-overview.html) for more information on working with layouts.

1. Reuse the markup and design patterns from the default Magento files by referencing the existing `.phtml` templates ([templates hints can help]({{ page.baseurl }}/frontend-dev-guide/themes/debug-theme.html#debug-theme-templ)) or copy-pasting HTML markup to your custom templates.
1. Use `<theme_dir>/etc/view.xml` to change image types or sizes, or add your own types. See [Configure images properties]({{ page.baseurl }}/frontend-dev-guide/themes/theme-images.html) for details. Use this file to also [customize the product gallery widget]({{ page.baseurl }}/javascript-dev-guide/widgets/widget_gallery.html).
1. If you need to change the wording in the user interface, [add custom CSV dictionary files]({{ page.baseurl }}/frontend-dev-guide/translations/theme_dictionary.html) instead of overriding `.phtml` templates.
1. Use [the CSS critical path]({{ page.baseurl }}/frontend-dev-guide/css-topics/css-critical-path.html) to render the page much faster.
1. Always keep the text translatable. To ensure text used within your Magento templates can be translated, wrap it within the translate function:
   Example:

   ```php
   <a href="#"><?= __('Click to download'); ?></a>
   ```

1. Make use of the mobile-first approach when inheriting blank or Luma themes.
1. Magento has a set of [coding standards]({{ page.baseurl }}/coding-standards/bk-coding-standards.html) for both back-end and front-end technologies. Refer to them when needed.
1. Do not repeat work while styling. Instead, create a class or mixin and call them when needed.
1. While styling any custom module, add the styling within the module, instead of adding it to the design theme. This way, the style will not be loaded unless the module is called. For example `app/code/Company/Module/view/frontend/web/css/source/_module.less`.
1. While styling a custom theme, add styles to seperate less files, instead of appending to a single file. This way, styles are easier to track down and debug.

   As a reference, check `[Magento_Blank_Theme_Path]/web/css/_styles.less`:

   ```less
   @import 'source/lib/_lib.less'; // Global lib
   @import 'source/_sources.less'; // Theme styles
   @import 'source/_components.less'; // Components styles (modal/sliding panel)
   ```

   **Magento-styled or ready-made component(s)**: To check the list of existing component(s) found in **blank theme**: `[Magento_Blank_Theme_Path]/web/css/source/_sources.less` and  `[Magento_Blank_Theme_Path]/web/css/source/_components.less`, Magento adds their ready-made components via `@import`.

    If you want to add custom components or extend an existing component, copy `[Magento_Blank_Theme_Path]/web/css/source/_components.less` into your custom theme. For example, use `app/design/frontend/Company/Theme/web/css/source/_components.less` and add/import your `Custom style for new/existing components`.

    {:.bs-callout-info}
   The blank theme path [Magento_Blank_Theme_Path] = `vendor/magento/theme-frontend-blank` or `app/design/frontend/Magento/blank` may vary.

   ```less
   //
   //  Components
   //  _____________________________________________

   @import 'components/_modals.less'; // From lib
   @import 'components/_modals_extend.less'; // Local

   //  _____________________________________________
   //
   //  Custom style for new components
   //  _____________________________________________

   @import 'components/_[CUSTOM_COMPONENT_1].less';
   @import 'components/_[CUSTOM_COMPONENT_2].less';

   //  _____________________________________________
   //
   //  Custom style for existing components
   //  _____________________________________________

   @import 'components/_[CUSTOM_COMPONENT_1]_extend.less';
   @import 'components/_[CUSTOM_COMPONENT_2]_extend.less';

   ```

 {:.bs-callout-info}
 `[CUSTOM_COMPONENT_1,2,3...]` needs to be replaced with a valid component name: `sliders, grids` etc. The new component name can be set as any value. For best practices, it is recommended to set a clear name that can be reused in the future.

Next, add styles for respective components (new or extended) in a separate file.
For example, for a new slider component: `app/code/Company/Module/view/frontend/web/css/source/components/_sliders.less`.
To extend or override an existing button style: `app/code/Company/Module/view/frontend/web/css/source/components/_buttons_extend.less`.
