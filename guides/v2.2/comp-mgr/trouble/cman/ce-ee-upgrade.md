---
group: software-update-guide
subgroup: 50_trouble
title: Error upgrading from CE to EE
menu_title: Error upgrading from CE to EE
menu_node:
menu_order: 500
functional_areas:
  - Upgrade
---

### Problem: Error upgrading from CE to EE {#ce-ee}

Your upgrade from **{{site.data.var.ce}}** to **{{site.data.var.ee}}** might fail with the following error:

```terminal
	[2016-01-19 23:33:24 UTC] An error occurred while executing job 
	"setup:upgrade {"command":"setup:upgrade"}": Could not complete 
	setup:upgrade {"command":"setup:upgrade"} successfully: Source 
	class "\Cybersource" for "CybersourceLogger" generation does not exist.
```

If this error displays, resolve it as follows:

1.	Log in to your Magento server as the [Magento file system owner](https://glossary.magento.com/magento-file-system-owner).
2.	Enter the following commands in the order shown:

    ```bash
    php <magento_root>/bin/magento setup:upgrade
    ```

3.	After the command completes, verify your upgrade was successful:

    ```bash
    bin/magento --version
    ```
