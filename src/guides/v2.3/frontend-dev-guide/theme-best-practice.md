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

After updating or upgrading Magento instances, check for changes in any files that are overridden by your theme. If there were changes to default templates, layouts, or styles, copy those changes to your templates, layouts, and styles.
