This package contains patch files that are specific to {{site.data.var.ece}}. Patches are separate from tools, allowing you to apply patch updates without requiring a full upgrade and install of all {{site.data.var.ece}} code. Using `composer update` automatically runs tools to check for available patches and to run them with build and deploy scripts.

Versions are specified as `10<major>.<minor>.<patch>`.

These updates strictly contain improvements to {{site.data.var.ece}}. Patches are available in the `vendor/magento/ece-patches` folder. To check for available patches, you can check in the `vendor/magento/ece-patches` folder.