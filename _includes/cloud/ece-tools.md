<div markdown="1">
This package contains the following scripts and {{site.data.var.ece}} commands that automatically perform build and deploy actions of the codebase in your environments:

-   `pre-deploy.php`
-   `bin/magento magento-cloud:deploy`
-   `bin/magento magento-cloud:build`

For {{site.data.var.ece}}, versions are specified as `2.<x>.<y>`. The versioning for `magento/ece-tools` will then be  `<2000 + <x>.<y>.*`. For example, Magento Commerce 2.2.0 is associated with 2002.0.0.

`magento/ece-tools` patches strictly contain improvements for tools, including build and deploy hooks. These tools are updated as needed through patching and product upgrades; managed by the magento-cloud-metapackage.
