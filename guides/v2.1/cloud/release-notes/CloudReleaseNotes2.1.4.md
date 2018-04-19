---
layout: default
group: release-notes
subgroup: 02_rel-notes
title: Magento Commerce (Cloud) 2.1.4 and 2.0.12 Release Notes
menu_title: Magento Commerce (Cloud) 2.1.4 and 2.0.12 Release Notes
menu_order: 383
menu_node:
level3_menu_node: level3child
level3_subgroup: mccloud-relnotes
version: 2.1
github_link: cloud/release-notes/CloudReleaseNotes2.1.4.md
redirect_from:
  - /guides/v2.2/cloud/release-notes/CloudReleaseNotes2.1.4.html
functional_areas:
  - Cloud
---

These Release Notes provide up-to-date information about changes, additions, and fixes to the Magento Enterprise Cloud Edition for versions 2.1.4 and 2.0.12.

## Changes in this release
* Removed the MDVA-913 patch because the issue is now fixed in Magento Enterprise Edition 2.1.4.
* Staging and Production environments in the UI for Pro projects. You can enter a ticket to have your project updated. For more information, see [Add Staging and Production to Pro projects UI]({{page.baseurl}}/cloud/trouble/pro-env-management.html).

## Fixes in this release
<!--MAGECLOUD-1427-->* We fixed an issue that was causing the wrong products to be indexed in 2.1.4. Previously, the `mview.xml` configuration used `row_id`  instead of `entity_id` when collecting information from changelogs.

<!--MAGECLOUD-1428-->* We fixed an issue that was preventing merchants from using AMQP and search services. Previously, the deployment process was overwriting these settings in the `env.php` file if the `QUEUE_CONFIGURATION` and/or `SEARCH_CONFIGURATION` [environment variables](http://devdocs.magento.com/guides/v2.1/cloud/env/environment-vars_magento.html#deploy) were not set in 2.1.4.

<!--MAGECLOUD-1246-->* The RabbitMQ configuration process now obtains all required parameters automatically in 2.1.4.

<!--MAGECLOUD-912-->* AMQP settings in the `app/etc/env.php` file are no longer empty after enabling the RabbitMQ service in 2.1.4.

<!--MAGECLOUD-1317-->* We fixed an issue with Elasticsearch configuration settings on deployment in 2.1.4.

*	When you disable a {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} and deploy it to the remote Cloud server, the module stays disabled.

*	You can now successfully upgrade from Magento Enterprise Cloud Edition 2.0.x to 2.1.x.

### {{site.data.var.ee}} Release Notes
*	[{{site.data.var.ee}} 2.0.12 Release Notes]({{ site.gdeurl }}release-notes/ReleaseNotes2.0.12EE.html)
*	[{{site.data.var.ee}} 2.1.4 Release Notes]({{ site.gdeurl21 }}release-notes/ReleaseNotes2.1.4EE.html)
