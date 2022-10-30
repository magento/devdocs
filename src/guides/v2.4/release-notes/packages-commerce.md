---
group: release-notes
title: Adobe Commerce packages
migrated_to: https://experienceleague.adobe.com/docs/commerce-operations/release/packages/adobe-commerce.html
layout: migrated
---

<!-- The 'packages' variable contains the 'packages' node of the '_data/codebase/v2_4/commerce/composer_lock.json' file
{% assign packages = site.data.codebase.v2_4.commerce.composer_lock.packages %} -->

<!-- The 'packages-dev' variable contains the 'packages-dev' node of the '_data/codebase/v2_4/commerce/composer_lock.json' file
{% assign packages-dev = site.data.codebase.v2_4.commerce.composer_lock.packages-dev %} -->

<!-- The 'product' variable contains data of the 'magento/product-enterprise-edition' package {% assign product = packages | where_exp: "package", "package.name == 'magento/product-enterprise-edition'" | first %} -->

<!-- The edition variable contains `ee` value from the _data/var.yml file
{% assign edition = site.data.var.ee %} -->

{% include release-notes/packages.md %}