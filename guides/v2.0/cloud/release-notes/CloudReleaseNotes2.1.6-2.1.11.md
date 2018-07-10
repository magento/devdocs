---
group: release-notes
title: Magento Commerce (Cloud) 2.1.6 through 2.1.11 Release Notes
version: 2.0
github_link: cloud/release-notes/CloudReleaseNotes2.1.6-2.1.11.md
functional_areas:
  - Cloud
---

These Release Notes provide up-to-date information about changes, additions, and fixes to the {{site.data.var.ece}} for versions 2.1.6 through 2.1.11.

## Fixes in this release
<!--RFC-125-->* We removed `var/view_preprocessed` symlinking to fix an issue that was causing JavaScript minification conflicts in 2.1.9 through 2.1.11.

<!--MAGECLOUD-1427-->* We fixed an issue that was causing the wrong products to be indexed. Previously, the `mview.xml` configuration used `row_id`  instead of `entity_id` when collecting information from changelogs.

<!--MAGECLOUD-1428-->* We fixed an issue that was preventing merchants from using AMQP and search services. Previously, the deployment process was overwriting these settings in the `env.php` file if the `QUEUE_CONFIGURATION` and/or `SEARCH_CONFIGURATION` [environment variables](http://devdocs.magento.com/guides/v2.1/cloud/env/environment-vars_magento.html#deploy) were not set.

<!--MAGECLOUD-1409-->* We fixed an issue that was causing inordinately long down times during deployment in 2.1.9 through 2.1.11.

<!--MAGECLOUD-1385-->* We fixed an issue that was causing exceptions when running `autoload.php` in 2.1.10 through 2.1.11.

<!--MAGECLOUD-1246-->* The RabbitMQ configuration process now obtains all required parameters automatically.

<!--MAGECLOUD-912-->* AMQP settings in the `app/etc/env.php` file are no longer empty after enabling the RabbitMQ service.

<!--MAGECLOUD-1317-->* We fixed an issue with Elasticsearch configuration settings on deployment.

<!--MAGECLOUD-1281-->* We fixed an issue causing errors during the static content generation step of deployment on Production environments.
