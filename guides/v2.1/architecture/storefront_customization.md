---
group: arch-guide
subgroup: Architectural Basics
title: Storefront customization strategies
menu_title: Storefront customization strategies
menu_order:
version: 2.1
github_link: architecture/storefront_customization.md
---

## Overview

We can generalize about the range of {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} customizations that the Magento supports. This range spans the simplest customizations, which involve only small additions to the default Magento storefront settings, to a complete replacement of Magento-provided {% glossarytooltip a2aff425-07dd-4bd6-9671-29b7edefa871 %}HTML{% endglossarytooltip %} and {% glossarytooltip 6c5cb4e9-9197-46f2-ba79-6147d9bfe66d %}CSS{% endglossarytooltip %}.

## Storefront customization levels

These four levels of potential storefront customization are listed in order to increase complexity.

### Extend Magento-Provided CSS
Magento supplies a default {% glossarytooltip d2093e4a-2b71-48a3-99b7-b32af7158019 %}theme{% endglossarytooltip %} and a LESS-based CSS. You can substantially change a storefront using CSS only. This uncomplicated strategy might suit projects with a limited budget, or might interest developers who create different skins for a site. A small business enter this process of storefront customization by buying a third-party developed theme from Magento Marketplace to extend the default values.

### Replace PHTML template files
In addition to extending the default CSS, you can generate different HTML {% glossarytooltip 8f407f13-4350-449b-9dc5-217dcf01bc42 %}markup{% endglossarytooltip %}. For example, you might need to add a missing CSS class name, or an add an extra `<div>` tag to achieve some visual effect. You might also need to tweak some {% glossarytooltip 312b4baf-15f7-4968-944e-c814d53de218 %}JavaScript{% endglossarytooltip %} to cope with different HTML markup. This change is more demanding than simply extending Magento CSS, but is still within the grasp of smaller projects and leaner teams.

### Replace Magento-Provided CSS
Rather than edit the default CSS provided by Magento, you might decide to replace all the default storefront CSS code with your own. This strategy avoids tying a project to the Magento-provided CSS, but puts a greater burden on project development and integration. It also allows use of different CSS tools or technologies not provided with Magento. Partners who build their own set of CSS libraries could reuse these libraries on different customer projects. (These unique CSS libraries may help differentiate a partner from others in the market.)

In addition to replacing CSS files, you might need to replace small amounts of HTML and JavaScript.

### Replace Magento-Provided CSS, HTML, and JavaScript
Delivering a sharply different shopping experience than the default Magento installation provides is a more substantial task. However, the tradeoff might be a more complicated experience integrating additional extensions into your installation in the future.

<div class="bs-callout bs-callout-info" id="info">
  <p>Any customization of your storefront will work optimally, and provide the easiest path for later upgrades, if you follow the best practice of consistently compartmentalizing code by type. For example, keep all HTML in {% glossarytooltip ae0f1f68-c466-4189-88fd-6cd8b23c804f %}PHTML{% endglossarytooltip %} files; keep all JavaScript in JavaScript files.</p>
</div>

### Related topics

<a href="{{ page.baseurl }}/frontend-dev-guide/bk-frontend-dev-guide.html" target="_blank">Frontend Developer Guide</a>

<a href="{{ page.baseurl }}/javascript-dev-guide/bk-javascript-dev-guide.html" target="_blank">JavaScript Developer Guide</a>
