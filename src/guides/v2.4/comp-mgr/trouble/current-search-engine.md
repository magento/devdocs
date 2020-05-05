---
group: software-update-guide
title: Your current search engine is not supported
functional_areas:
  - Upgrade
---

The following error message indicates that the Magento version you are upgrading from is configured to use a catalog search engine that is not supported in the Magento version you are upgrading to:

`Your current search engine, <Engine Name>, is not supported. You must install a supported search engine before upgrading. See the System Upgrade Guide for more information.`

This error means one of the following conditions are true on the down-level version of Magento:

*  The search engine is set to MySQL.
*  The search engine is set to a version of Elasticsearch that is no longer supported.

Use the following command to check the current search engine:

```bash
bin/magento config:show catalog/search/engine
```

The error occurs if the returned value is `mysql` or `elasticsearch`.

{:.bs-callout-warning}
{%
include note.html
type='warning'
content='If you have received this error, Magento is in an inconsistent state, and you cannot access the Admin. We recommend that you revert to your previous version of Magento while you resolve this error. To do this, run one of the following commands:

```bash
composer require magento/product-enterprise-edition=<version>
```

```bash
composer require magento/product-community-edition=<version>
```

where `<version>` is the version of Magento you were running **before** the upgrade. For example, `2.3.5`.'
%}

Follow the guidelines described in the following sections to recover from Magento's inconsistent state.

## If your search engine is `mysql`

Before Magento 2.4, MySQL was the default catalog search engine, but MySQL is no longer supported in this capacity. Now, you must install and configure Elasticsearch as your search engine before upgrading to 2.4.

Use the following resources to help guide you through this process:

*  [Install and configure Elasticsearch]({{site.baseurl}}/guides/v2.3/config-guide/elasticsearch/es-overview.html)
*  [Installing Elasticsearch](https://www.elastic.co/guide/en/elasticsearch/reference/current/install-elasticsearch.html)
*  Configure Elasticsearch to work with [nginx]({{site.baseurl}}/guides/v2.3/config-guide/elasticsearch/es-config-nginx.html) or [Apache]({{site.baseurl}}/guides/v2.3/config-guide/elasticsearch/es-config-apache.html)
*  [Configure Magento to use Elasticsearch]({{site.baseurl}}/guides/v2.3/config-guide/elasticsearch/configure-magento.html)

After you configure Elasticsearch and reindex, you are ready to upgrade to Magento 2.4.

## If your search engine is `elasticsearch`

A value of `elasticsearch` indicates your down-level version of Magento is configured to use Elasticsearch 2.x. This version of Elasticsearch is no longer supported.

You must perform the following tasks before upgrading to Magento 2.4:

1. Update Elasticsearch. We recommend updating to Elasticsearch 7.x. Refer to [Upgrading Elasticsearch](https://www.elastic.co/guide/en/elasticsearch/reference/current/setup-upgrade.html) for full instructions on backing up your data, detecting potential migration issues, and testing upgrades before deploying to production. Depending on your current version of Elasticsearch, a full cluster restart may or may not be required.

   {:.bs-callout-info}
   Elasticsearch requires JDK 1.8 or higher. See [Install the Java Software Development Kit (JDK)]({{page.baseurl}}/install-gde/prereq/elasticsearch.html#prereq-java) to check which version of JDK is installed.

1. [Configure Magento to use Elasticsearch]({{site.baseurl}}/guides/v2.3/config-guide/elasticsearch/configure-magento.html) and reindex.

After you configure Elasticsearch and reindex, you are ready to upgrade to Magento 2.4.

{:.ref-header}
Related topics

*  [Check the catalog search engine]({{page.baseurl}}/comp-mgr/prereq/prereq-elasticsearch.html)
*  [Configure Elasticsearch stopwords]({{page.baseurl}}/config-guide/elasticsearch/es-config-stopwords.html)
