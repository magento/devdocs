---
group: architecture-guide
title: Storefront customization strategies
menu_title: Storefront customization strategies
---

## Overview

We can generalize about the range of [storefront](https://glossary.magento.com/storefront) customizations that the Magento supports. This range spans the simplest customizations, which involve only small additions to the default Magento storefront settings, to a complete replacement of Magento-provided [HTML](https://glossary.magento.com/html) and [CSS](https://glossary.magento.com/css).

## Storefront customization levels

These four levels of potential storefront customization are listed in order to increase complexity.

### Extend Magento-Provided CSS

Magento supplies a default [theme](https://glossary.magento.com/theme) and a Less-based CSS. You can substantially change a storefront using CSS only. This uncomplicated strategy might suit projects with a limited budget, or might interest developers who create different skins for a site. A small business enter this process of storefront customization by buying a third-party developed theme from Magento Marketplace to extend the default values.

### Replace PHTML template files

In addition to extending the default CSS, you can generate different HTML [markup](https://glossary.magento.com/markup). For example, you might need to add a missing CSS class name, or add an extra `<div>` tag to achieve some visual effect. You might also need to tweak some [JavaScript](https://glossary.magento.com/javascript) to cope with different HTML markup. This change is more demanding than simply extending Magento CSS, but is still within the grasp of smaller projects and leaner teams.

### Replace Magento-Provided CSS

Rather than edit the default CSS provided by Magento, you might decide to replace all the default storefront CSS code with your own. This strategy avoids tying a project to the Magento-provided CSS, but puts a greater burden on project development and integration. It also allows the use of different CSS tools or technologies not provided with Magento. Partners who build their own set of CSS libraries could reuse these libraries on different customer projects. (These unique CSS libraries may help differentiate a partner from others in the market.)

In addition to replacing CSS files, you might need to replace small amounts of HTML and JavaScript.

### Replace Magento-Provided CSS, HTML, and JavaScript

Delivering a sharply different shopping experience than the default Magento installation provides is a more substantial task. However, the tradeoff might be a more complicated experience integrating additional extensions into your installation in the future.

{:.bs-callout-tip}
 Any customization of your storefront will work optimally, and provide the easiest path for later upgrades, if you follow the best practice of consistently compartmentalizing code by type. For example, keep all HTML in [PHTML](https://glossary.magento.com/phtml) files; keep all JavaScript in JavaScript files.

{:.ref-header}
Related topics

[Frontend Developer Guide]({{page.baseurl}}/frontend-dev-guide/bk-frontend-dev-guide.html)

[JavaScript Developer Guide]({{page.baseurl}}/javascript-dev-guide/bk-javascript-dev-guide.html)
