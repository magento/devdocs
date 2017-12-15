---
layout: default
group: release-notes
title: Magento Commerce (Cloud) 2.1.6 through 2.1.11 Release Notes
version: 2.0
github_link: cloud/release-notes/CloudReleaseNotes2.1.6-2.1.11.md
functional_areas:
  - Cloud
---

These Release Notes provide up-to-date information about changes, additions, and fixes to the {{site.data.var.ece}} for versions 2.1.6 through 2.1.11.

## Fixes in this release

<!--MAGECLOUD-1246-->* The RabbitMQ configuration process now obtains all required parameters automatically.

<!--MAGECLOUD-912-->* AMQP settings in the `app/etc/env.php` file are no longer empty after enabling the RabbitMQ service.

<!--MAGECLOUD-1317-->* We fixed an issue with Elasticsearch configuration settings on deployment.

<!--MAGECLOUD-1281-->* We fixed an issue causing errors during the static content generation step of deployment on Production environments.
