---
layout: default
group: fedg
title: Theme development best practices
menu_title: Theme development best practices
menu_order: 20
version: 2.0
github_link: frontend-dev-guide/theme-best-practice.md
---

This topic describes the recommended approaches and general things to consider when working with custom theme files.

<p class="q">what do they guarantee, these best practices? While developing a theme, it is important to consider that Magento 2 can be updated to a new version or different [extensions can be installed]({{page.baseurl}}/cloud/howtos/install-components.html) </p>

## Theme development best practice

1. Rather extend than override the parent/default styles. as less as possible. In other words, whenever possible put your customizations in the `_extend.less` or `_theme.less` file, than to override a `.less` file from a parent theme. 
2. Use `.xml` containers instead of overriding a template. If you need to create a new container, it is better to add an `.xml` file and create it there rather than override a template file. 
The reason is that layouts are merging so original file stays untouched.
<p class="q">need clarification here/ в лейаутах вызываются темлейты</p>
3. Some customization can be performed using [layout instructions]({{page.baseurl}}/frontend-dev-guide/layouts/xml-instructions.html ) like 
  1. `move` when you need change position of block or container
  2. `remove` or `display` attribute on the `referenceBlock/Container` to remove block
  3. reorder with `before/after`
  4. change html tag or css class for existing container using `referenceContainer` element.
<p class=q>is #3 related to #2? используйте по возможности лейауты а не перекрывать темлейты</p>
4. Try to find existing markup or design pattern in Magento2 and reuse it by referencing to the existing `.phtml` template if possible ([templates hints can help]({{page.baseurl}}/frontend-dev-guide/themes/debug-theme.html#debug-theme-templ)) or copy and paste html markup in your custom template.
<p class="q">reference where/how?копировать наш маркап</p>
5. Use `etc/view.xml` to change image types sizes or add your own types. Use this file also to [customize product gallery widget]({{page.baseurl}}/javascript-dev-guide/widgets/widget_gallery.html)
6. If you need to change the wording in user interface, [add custom CSV dictionary files]({{page.baseurl}}frontend-dev-guide/translations/theme_dictionary.html) instead of overriding PHTML templates. 


Please pay attention, that after an upgrade something in templates/layouts/styles could change, so it’s recommended to check if the changes affected overridden templates in your theme and copy changes to your templates/layouts/styles if any.

# Customizations, that can break your theme: (add to best practices)

- Removing containers with needed blocks via xml without moving these blocks to others via xml
- Risky customizations
<p class="q">What exactly customizations? those listed above as those to be avoided </p>
- Any overridden source file. The source file can change after update. So, it is important to pay attention to the overridden and move critical updates from initial file if needed.