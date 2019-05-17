---
group: frontend-developer-guide
title: Theme development best practices
functional_areas:
  - Frontend
  - Theme
  - Standards
---

This topic describes the recommended approaches and things to consider when working on a custom theme.

These approaches give higher chances to avoid conflicts and issues with your theme after your Magento instance get updated or upgraded, or a custom extension is installed.

## Theme development best practice

1. When [inheriting]({{ page.baseurl }}/frontend-dev-guide/themes/theme-inherit.html) from a default Magento theme, extend the default styles instead of overriding them.  Whenever possible, put your customizations in the `_extend.less` or `_theme.less` file, instead of overriding a `.less` file from a parent theme. 
2. Customize or create new `.xml` layout files instead of customizing and overriding `.phtml` templates. For example, if you need to create a new container, it is better to add an `.xml` file and create it there, than override a template. 
Some other customizations that can be performed using layout instructions are the following:
 
   * change the position of a block or container using `<move>`.
   * add/remove a block or container by setting the `remove` attribute to `true` or `false`, or the `display` attribute to `true` or `false` within the `<referenceBlock>/<referenceContainer>` instruction.
   * reorder blocks and container using the `before/after` attributes of the `<referenceBlock>/<referenceContainer>` instruction.
   * change the HTML tag or CSS class for the existing container using `<referenceContainer>` element.
   
   For details about working with layouts see the [Layout chapter of this Guide]({{ page.baseurl }}/frontend-dev-guide/layouts/layout-overview.html).
		
3. Reuse the markup and design patterns from the default Magento files by referencing the existing `.phtml` templates ([templates hints can help]({{ page.baseurl }}/frontend-dev-guide/themes/debug-theme.html#debug-theme-templ)) or copy-pasting HTML markup to your custom templates.
4. Use `<theme_dir>/etc/view.xml` to change image types sizes or add your own types. See [Configure images properties]({{ page.baseurl }}/frontend-dev-guide/themes/theme-images.html) for details. Use this file also to [customize product gallery widget]({{ page.baseurl }}/javascript-dev-guide/widgets/widget_gallery.html)
5. If you need to change the wording in user interface, [add custom CSV dictionary files]({{ page.baseurl }}/frontend-dev-guide/translations/theme_dictionary.html) instead of overriding `.phtml` templates. 

Keep in mind, that after Magento instances, updates or upgrades something can change in default templates, layouts, and styles. So it is recommended to check if the changes effected the files overridden in your theme and copy changes if any, to your templates, layouts, and styles.
