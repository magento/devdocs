---
group: cloud-guide
subgroup: 170_trouble
title: Redis troubleshooting
menu_title: Redis troubleshooting
menu_order: 23
menu_node:
functional_areas:
  - Cloud
  - Configuration
  - Services
---

Redis is an optional backend cache solution for {{site.data.var.ece}}. This information helps you troubleshoot errors and issues you encounter with Redis. These issues and resolutions affect Starter and Pro plans.

## Redis error on deploy {#update}

You may receive the following error when deploying your Git branch:

    Redis::pipeline(): Already in pipeline mode in /var/www/html/magento2ce/vendor/colinmollenhour/credis/Client.php on line 1037

Your Cloud systems and services have been updated to the latest Redis and PHP-Redis 3.1.3. Due to the upgrade, we have provided a patch to upgrade your PHP-Redis code to 3.1.3. You just need to [patch and test]({{ page.baseurl }}/cloud/project/project-patch.html) this general patch according to your {{site.data.var.ece}} version.

* Use an Integration branch to add the code through your local.
* Patch using the CLI command `composer update` in a terminal.
* Push your code to deploy and test in an Integration environment.
* After testing completes, deploy your code to Staging and Production environments. For more information on deployments, see [Deploy your store]({{ page.baseurl }}/cloud/live/stage-prod-live.html).

{:.bs-callout .bs-callout-info}
We strongly recommend patching to update your PHP-Redis version. Your build and deploy will continue to encounter issues until updated to PHP-Redis 3.1.3.

See the following instructions based on your {{site.data.var.ece}} version:

* 2.0.x: Apply the [patch and test]({{ page.baseurl }}/cloud/project/project-patch.html) the deployment in your Integration environment.
* 2.1.0 – 2.1.3: Apply the [patch and test]({{ page.baseurl }}/cloud/project/project-patch.html) the deployment in your Integration environment.
* 2.1.4 and later merchants: Upgrade [MCC]({{ page.baseurl }}/cloud/reference/cloud-composer.html) to the latest version in your branch and deploy to your Integration environment. The MCC upgrade includes this patch. To upgrade a default unchanged MCC, you only need to run `composer update` in a terminal.

  If you hardcoded or modified your MCC, run `composer update` in a terminal. After the composer update completes, verify following `magento/magento-cloud-configuration` version displays in `composer.lock`:

  * 2.1.4: `magento/magento-cloud-configuration 101.4.5` or later
  * 2.1.5: `magento/magento-cloud-configuration 101.5.4` or later
  * 2.1.6: `magento/magento-cloud-configuration 101.6.6` or later
  * 2.1.7: `magento/magento-cloud-configuration 101.7.6` or later
  * 2.1.8: `magento/magento-cloud-configuration 101.8.1` or later
* 2.2: This PHP-Redis upgrade is already included. v2.2 is coming soon for {{site.data.var.ece}}.

For details on MCC and the update command, see [Composer]({{ page.baseurl }}/cloud/reference/cloud-composer.html).

## Redis and static-content deployment {#static-content}

If you receive a number of Redis connection errors in your production logs during static content deployment, update your {{ site.data.var.ece }} project to use the latest version of the ece-tools package and redeploy your environment. See [Upgrades and Patches]({{ page.baseurl }}/cloud/project/project-upgrade-parent.html).