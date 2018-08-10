---
group: fedg
subgroup: C_Templates
title: Templates overview
menu_title: Templates
menu_order: 1
menu_node: parent
version: 2.1
redirect_from: /guides/v1.0/frontend-dev-guide/templates/template-overview.html
functional_areas:
  - Frontend
---

## Introduction to customizing a theme using templates

In Magento application templates are the part of the view layer. Templates define exactly how the content of [layout blocks]({{ page.baseurl }}/frontend-dev-guide/layouts/layout-overview.html){:target="_blank"} is presented on a page: order, {% glossarytooltip 6c5cb4e9-9197-46f2-ba79-6147d9bfe66d %}CSS{% endglossarytooltip %} classes, elements grouping, and so on.
In most cases, templates do not contain any logic about whether they will or will not be rendered, this is typically handled by the {% glossarytooltip 73ab5daa-5857-4039-97df-11269b626134 %}layout{% endglossarytooltip %} files. Once a template is called in a layout, it will be displayed.

Default Magento templates are {% glossarytooltip ae0f1f68-c466-4189-88fd-6cd8b23c804f %}PHTML{% endglossarytooltip %} files. Also {% glossarytooltip a2aff425-07dd-4bd6-9671-29b7edefa871 %}HTML{% endglossarytooltip %} templates are used for [Knockout JS](http://knockoutjs.com/index.html) scripts.

{:.bs-callout .bs-callout-info}

[The Magento template rendering subsystem]({{ page.baseurl }}/frontend-dev-guide/templates/template-overview.html){:target="_blank"} supports multiple template engines, including the default PHP-based engine for processing PHTML templates.

This chapter describes how to customize templates in your design theme, and provides both the practice reference and the theoretical background of how templates are applied in a Magento store.


We strongly recommend that you do not change the default templates, because if you do edit them, your changes can be overwritten by the new version of the default files during upgrades.
The best practice is [creating a new design theme]({{ page.baseurl }}/frontend-dev-guide/themes/theme-create.html){:target="_blank"} and adding your modified templates there.

This chapter contains the following topics:

* [Template customization walkthrough]({{ page.baseurl }}/frontend-dev-guide/templates/template-walkthrough.html){:target="_blank"}
* [Templates basic concepts]({{ page.baseurl }}/frontend-dev-guide/templates/template-override.html){:target="_blank"}
* [Illustration of customizing templates]({{ page.baseurl }}/frontend-dev-guide/templates/template-sample.html){:target="_blank"}
* [Customizing email templates]({{ page.baseurl }}/frontend-dev-guide/templates/template-email.html){:target="_blank"}
