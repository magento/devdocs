---
group: software-update-guide
subgroup: 32_UseUpgrade
title: Step 4. Upgrade
menu_title: Step 4. Upgrade
menu_node:
menu_order: 20
functional_areas:
  - Upgrade
---

The components you're upgrading are displayed. The following figure shows an example.

![Click upgrade to complete the task]({{ site.baseurl }}/common/images/upgr_upgrade.png){:width="550px"}

To complete the upgrade, click **Upgrade**. If the upgrade is successful, a page similar to the following displays.

![Your upgrade was successful]({{ site.baseurl }}/common/images/upgr_success.png){:width="350px"}

Messages similar to the following are displayed in the Console Log:

{% collapsible Click to view the Console Log %}

![]({{ site.baseurl }}/common/images/upgrade-success-consolelog.png){:width="650px"}

{% endcollapsible %}

## Clean the Magento cache

Clean the Magento cache:

```bash
bin/magento cache:clean
```

## Manually clear directories

After the upgrade completes, manually clear `var` subdirectories:

```bash
rm -rf <Magento install dir>/var/cache/*
```

```bash
rm -rf <Magento install dir>/var/page_cache/*
```

```bash
rm -rf <Magento install dir>/generated/code/*
```

## Restart Varnish

After the upgrade completes, restart Varnish if you use it for page caching.

```bash
service varnish restart
```

Then access your [storefront](https://glossary.magento.com/storefront) and verify everything is working properly.

## Errors after upgrade

After you finish your upgrade, errors might display.

*  On the main storefront page, the following error might display.

   _We're sorry, an error has occurred while generating this email._

*  On a [category](https://glossary.magento.com/category) page, the following error might display:

   _We can't find products matching the selection._

If any of the preceding errors display, perform all of the following tasks.

{% include install/sampledata/file-sys-perms-digest.md %}

### Clear `var` and `generated` directories

Clear the `var/cache`, `var/page_cache`, `generated/code`

A sample command follows:

```bash
rm -rf var/cache/* var/page_cache/* generated/code/*
```

### Access your storefront again

After performing the preceding tasks, access your storefront again. If necessary, press Control+R to force the page to reload.
