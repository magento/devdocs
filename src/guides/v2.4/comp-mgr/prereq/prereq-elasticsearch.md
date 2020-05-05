---
group: software-update-guide
title: Check the catalog search engine
functional_areas:
  - Upgrade
---

Before you upgrade from Magento 2.3.x to Magento 2.4, you must check whether you are using MySQL, Elasticsearch, or a third-party extension as your catalog search engine in your Magento 2.3.x instance. The result determines what you must do **before** upgrading to Magento 2.4.

You can use the CLI or the Admin to determine your catalog search engine:

*  Enter the `bin/magento config:show catalog/search/engine` command. The command returns a value of `mysql`, `elasticsearch` (which indicates Elasticsearch 2 is configured), `elasticsearch5`, `elasticsearch6`, `elasticsearch7`, or a custom value, indicating you have installed a third-party search engine.

*  From the Admin, check the value of the **Stores** > Settings > **Configuration** > **Catalog** > **Catalog** > **Catalog Search** > **Search Engine** field.

The following sections describe what actions you must take before upgrading to Magento 2.4.

## MySQL

Magento 2.4 does not support MySQL as a catalog search engine. You must install and configure Elasticsearch 7.x or 6.x before upgrading. Use the following resources to help guide you through this process:

*  [Install and configure Elasticsearch]({{site.baseurl}}/guides/v2.3/config-guide/elasticsearch/es-overview.html)
*  [Installing Elasticsearch](https://www.elastic.co/guide/en/elasticsearch/reference/current/install-elasticsearch.html)
*  Configure Elasticsearch to work with [nginx]({{site.baseurl}}/guides/v2.3/config-guide/elasticsearch/es-config-nginx.html) or [Apache]({{site.baseurl}}/guides/v2.3/config-guide/elasticsearch/es-config-apache.html)
*  [Configure Magento to use Elasticsearch]({{site.baseurl}}/guides/v2.3/config-guide/elasticsearch/configure-magento.html) and reindex

Some third-party catalog search engines run on top of Magento's search engine. Contact your vendor to determine whether you need to update your extension.

## Elasticsearch 2

Magento does not support Elasticsearch 2. You must update to a more recent version. Elasticsearch 7 is recommended.

Refer to [Upgrading Elasticsearch](https://www.elastic.co/guide/en/elasticsearch/reference/current/setup-upgrade.html) for full instructions on backing up your data, detecting potential migration issues, and testing upgrades before deploying to production. Depending on your current version of Elasticsearch, a full cluster restart may or may not be required.

{:.bs-callout-info}
Elasticsearch requires JDK 1.8 or higher. See [Install the Java Software Development Kit (JDK)]({{page.baseurl}}/install-gde/prereq/elasticsearch.html#prereq-java) to check which version of JDK is installed.

[Configure Magento to use Elasticsearch]({{site.baseurl}}/guides/v2.3/config-guide/elasticsearch/configure-magento.html) describes the tasks you must perform after updating Elasticsearch 2.

## Elasticsearch 5

Elasticsearch 5 has reached its [End of Life](https://www.elastic.co/support/eol), and Magento support for Elasticsearch 5 has been deprecated.

Although you can upgrade to Magento 2.4 without updating Elasticsearch 5, Magento recommends that you update to Elasticsearch 7.

Refer to [Upgrading Elasticsearch](https://www.elastic.co/guide/en/elasticsearch/reference/current/setup-upgrade.html) for full instructions on backing up your data, detecting potential migration issues, and testing upgrades before deploying to production. Depending on your current version of Elasticsearch, a full cluster restart may or may not be required.

[Configure Magento to use Elasticsearch]({{site.baseurl}}/guides/v2.3/config-guide/elasticsearch/configure-magento.html) describes the tasks you must perform after updating Elasticsearch 5.

## Elasticsearch 6 or 7

If you are using Elasticsearch 6 or 7 as your catalog search engine, you are not required to perform any additional steps before upgrading to Magento 2.4.

## Third-party extensions

Magento recommends that you contact your search engine vendor to determine whether your extension is fully compatible with Magento 2.4. However, you are not required to perform any additional steps before upgrading to Magento 2.4.
