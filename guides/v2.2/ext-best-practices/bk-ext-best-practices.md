---
group: extension-best-practices
title: Best Practices for Extension Developers
functional_areas:
  - Standards
---

{:.bs-callout .bs-callout-info}
DRAFT/PROPOSAL: This Best Practices Guide is a first draft! The guide combines Best Practices that we have heard the community ask for, along with guidelines that our Magento UX, Engineering, and Product teams are working on.
We want your feedback; please do a pull request on [feedback-placement-and-design.md]({{ page.baseurl }}/ext-best-practices/admin/feedback-placement-and-design.html) and let us know what your best practices are, your challenges, and how you would like Magento to help standardize (where needed).

Magento consists of the core product code plus optional components that enhance or replace the core product code. There are over 100 out-of-the-box components in the form of modules, themes, and language packages available for Magento 2.

Magento's architecture allows for enhancements by letting you develop your own component. Keep in mind that in addition to Magento's own modules, your [extension](https://glossary.magento.com/extension) will be running alongside components from other developers. For this reason, it is important that your component behaves correctly in Magento's modular environment.

The table below is data from a recent poll that shows the distribution of the amount of extensions installed on a Magento instance for each edition. So for example, 32% of merchants on EE have over 50 different extensions installed!

| Edition   | 1-9 extensions | 10-30 extensions| 31-50 extensions| 50+ extensions|
| --------- | --- | ----- | ----- | --- |
| Community | 10% | 53%   | 26%   | 11% |
| Enterprise| 9%  | 32%   | 27%   | 32% |

This guide provides best practices, guidelines, and tips for creating Magento extensions.  We encourage you to follow our best practices when developing code for your Magento components.

### Related Content

*  [Admin Design Pattern Library]({{ page.baseurl }}/pattern-library/bk-pattern.html) - An in depth guide to the design patterns used in the Admin.
*  [PHP Developer Guide]({{ page.baseurl }}/extension-dev-guide/bk-extension-dev-guide.html) - An in depth guide to creating Magento components.
*  [Frontend Developer Guide]({{ page.baseurl }}/frontend-dev-guide/bk-frontend-dev-guide.html) - An in depth guide to creating a Magento storefront theme.
