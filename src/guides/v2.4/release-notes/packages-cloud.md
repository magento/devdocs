---
group: release-notes
title: Magento Commerce Cloud packages
---

<!-- The 'packages' variable contains the 'packages' node of the '_data/codebase/v2_4/cloud/composer_lock.json' file
{% assign packages = site.data.codebase.v2_4.cloud.composer_lock.packages %} -->

<!-- The 'packages-dev' variable contains the 'packages-dev' node of the '_data/codebase/v2_4/cloud/composer_lock.json' file
{% assign packages-dev = site.data.codebase.v2_4.cloud.composer_lock.packages-dev %} -->

<!-- The 'product' variable contains data of the 'magento/magento-cloud-metapackage' package {% assign product = packages | where_exp: "package", "package.name == 'magento/magento-cloud-metapackage'" | first %} -->

<!-- The edition variable contains `ece` value from the _data/var.yml file
{% assign edition = site.data.var.ece %} -->

{% include release-notes/packages.md %}
