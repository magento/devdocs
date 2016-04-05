---
layout: default
group: ext-best-practices
title: Best Practices for Extension Developers
menu_title: Introduction
menu_order: 1
github_link: ext-best-practices/ext-best-practices-bk.md
redirect_from: /guides/v1.0/extension-dev-guide/package_module.html

---

##{{page.menu_title}}

Magento consists of the core product code plus optional components that enhance or replace the core product code. There are over 100 out-of-the-box components available for Magento 2.

The table below shows the distribution of the amount of extensions installed on a Magento instance for each edition.

| Edition   | 1-9 | 10-30 | 31-50 | 50+ |
| --------- | --- | ----- | ----- | --- |
| Community | 10% | 53%   | 26%   | 11% |
| Enterprise| 9%  | 32%   | 27%   | 32% |

Keep in mind that in addition to Magento's own components, your component will be running alongside other developer's components. It is important that your component behaves correctly in the Magento environment.

This guide provides best practices, guidelines, and tips for creating Magento components, or extensions. Unlike standards, which are processes that have to be followed regardless of the situation, best practices are optional methods or techniques that often yield the best results. We encourage you to follow our best practices when developing code for your Magento components.

### Related Content

* [PHP Developer Guide]({{site.gdeurl}}extension-dev-guide/bk-extension-dev-guide.html) - An in depth guide to creating Magento components.
* [Frontend Developer Guide]({{site.gdeurl}}frontend-dev-guide/bk-frontend-dev-guide.html) - An in depth guide to creating a Magento storefront theme.
