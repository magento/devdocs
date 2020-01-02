---
group: frontend-developer-guide
title: Templates overview
functional_areas:
  - Frontend
---

## Introduction to customizing a theme using templates

In Magento application templates are the part of the view layer. Templates define exactly how the content of [layout blocks]({{ page.baseurl }}/frontend-dev-guide/layouts/layout-overview.html) is presented on a page: order, [CSS](https://glossary.magento.com/css) classes, elements grouping, and so on.
In most cases, templates do not contain any logic about whether they will or will not be rendered, this is typically handled by the [layout](https://glossary.magento.com/layout) files. Once a template is called in a layout, it will be displayed.

Default Magento templates are [PHTML](https://glossary.magento.com/phtml) files. Also HTML templates are used for [Knockout JS](http://knockoutjs.com/index.html) scripts.

{:.bs-callout-info}
[The Magento template rendering subsystem]({{ page.baseurl }}/frontend-dev-guide/templates/template-overview.html) supports multiple template engines, including the default PHP-based engine for processing PHTML templates.

This chapter describes how to customize templates in your design theme, and provides both the practice reference and the theoretical background of how templates are applied in a Magento store.

We strongly recommend that you do not change the default templates, because if you do edit them, your changes can be overwritten by the new version of the default files during upgrades.
The best practice is [creating a new design theme]({{ page.baseurl }}/frontend-dev-guide/themes/theme-create.html) and adding your modified templates there.

This chapter contains the following topics:

*  [Template customization walkthrough]({{ page.baseurl }}/frontend-dev-guide/templates/template-walkthrough.html)
*  [Templates basic concepts]({{ page.baseurl }}/frontend-dev-guide/templates/template-override.html)
*  [Illustration of customizing templates]({{ page.baseurl }}/frontend-dev-guide/templates/template-sample.html)
*  [Customizing email templates]({{ page.baseurl }}/frontend-dev-guide/templates/template-email.html)
