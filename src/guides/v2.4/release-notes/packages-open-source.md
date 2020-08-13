---
group: release-notes
title: Magento Open Source packages
---

<!-- The 'packages' variable contains the 'packages' node of the '_data/codebase/v2_4/open-source/composer_lock.json' file
{% assign packages = site.data.codebase.v2_4.open-source.composer_lock.packages %} -->

<!-- The 'packages-dev' variable contains the 'packages-dev' node of the '_data/codebase/v2_4/open-source/composer_lock.json' file
{% assign packages-dev = site.data.codebase.v2_4.open-source.composer_lock.packages-dev %} -->

<!-- The 'product' variable contains data of the 'magento/product-community-edition' package {% assign product = packages | where_exp: "package", "package.name == 'magento/product-community-edition'" | first %} -->

<!-- The edition variable contains `ce` value from the _data/var.yml file
{% assign edition = site.data.var.ce %} -->

{% include release-notes/packages.md %}
