---
group: installation-guide
title: Elasticsearch
functional_areas:
  - Configuration
  - Search
  - System
  - Setup
---

As of Magento 2.4, all installations must be configured to use [Elasticsearch][] as the [catalog](https://glossary.magento.com/catalog) search solution. Elasticsearch provides the following benefits:

*  Quick and advanced searches on products in the catalog
*  Support for multiple languages
*  Support for stop words and synonyms
*  Shoppers are not disrupted while Elasticsearch reindexes
*  Accurate, performant, and scalable
*  Works well out of the box
*  Easy to horizontally scale
*  Supports real-time data and analysis
*  Can be used as a document-oriented data store
*  Applications in framework beyond search, including reporting, personalization, performance, and storage

## Supported versions {#es-spt-versions}

You must install and configure Elasticsearch 7.6.x before upgrading to Magento 2.4.x.

Magento 2.4.x is tested with Elasticsearch 7.6.x only. You can use other 7.x versions at your discretion, but we recommend using the tested version of Elasticsearch.

{:.bs-callout-info}
Magento does not support Elasticsearch 2.x, 5.x, and 6.x.

## Recommended configuration {#es-arch}

We recommend the following:

*  [Configure nginx and Elasticsearch][]
*  [Configure Apache and Elasticsearch][]

## Elasticsearch on different hosts {#es-host}

All of the following tasks we discuss assume you have configured your system this way.

![Magento ElasticSearch diagram]({{ site.baseurl }}/common/images/elastic_config.png){:width="500px"}

The preceding diagram shows:

*  The Magento application and Elasticsearch are installed on different hosts.

   Running on separate hosts requires proxying to work. (Clustering Elasticsearch is beyond the scope of this guide but you can find more information in the [Elasticsearch clustering documentation][].)

*  Each host has its own web server; the web servers do not have to be the same.

   For example, the Magento application can run Apache and Elasticsearch can run nginx.

*  Both web servers use Transport Layer Security (TLS).

   Setting up TLS is beyond the scope of our documentation.

Search requests are processed as follows:

1. A search request from a user is received by the Magento web server, which forwards it to the Elasticsearch server.

   You configure the Elasticsearch to connect to the proxy's host and port. We recommend the web server's SSL port (by default, 443).

1. The Elasticsearch web server (listening on port 443) proxies the request to the Elasticsearch server (by default, it listens on port 9200).

1. Access to Elasticsearch is further protected by HTTP Basic authentication. For any request to reach Elasticsearch, it must travel over SSL *and* provide a valid username and password.

1. Elasticsearch processes the search request.

1. Communication returns along the same route, with the Elasticsearch web server acting as a secure reverse proxy.

## Prerequisites and Elasticsearch {#es-prereq}

The tasks discussed in this section require the following:

*  [Firewall and SELinux](#firewall-selinux)
*  [Install the Java Software Development Kit (JDK)](#prereq-java)
*  [Install Elasticsearch](#es-install-es7)
*  [Upgrading Elasticsearch](#es-upgrade6)

{% include config/solr-elastic-selinux.md %}

{% include config/install-java8.md %}

### Install Elasticsearch  {#es-install-es7}

Follow [Installing Elasticsearch][] for your platform-specific steps.

To verify that Elasticsearch is working, enter the following command on the server on which it is running:

```bash
curl -XGET '<host>:9200/_cat/health?v&pretty'
```

A message similar to the following is displayed:

```terminal
epoch      timestamp cluster       status node.total node.data shards pri relo init unassign pending_tasks
1519701563 03:19:23  elasticsearch green           1         1      0   0    0    0        0             0
```

## Upgrading Elasticsearch {#es-upgrade6}

Refer to [Upgrading Elasticsearch][] for full instructions on backing up your data, detecting potential migration issues, and testing upgrades before deploying to production. Depending on your current version of Elasticsearch, a full cluster restart may or may not be required.

{:.bs-callout-info}
Elasticsearch requires JDK 1.8 or higher. See [Install the Java Software Development Kit (JDK)](#prereq-java) to check which version of JDK is installed.

## Additional resources {#es-resources}

For additional information, see [Elasticsearch documentation][]{:target="_blank"}

### Next

*  [Configure nginx and Elasticsearch][]
*  [Configure Apache and Elasticsearch][]

<!-- Link Definitions -->
[Configure nginx and Elasticsearch]: {{page.baseurl}}/install-gde/prereq/es-config-nginx.html
[Configure Apache and Elasticsearch]: {{page.baseurl}}/install-gde/prereq/es-config-apache.html
[Configure Elasticsearch stopwords]: {{page.baseurl}}/config-guide/elasticsearch/es-config-stopwords.html
[Elasticsearch]: https://www.elastic.co
[Elasticsearch clustering documentation]: https://www.elastic.co/guide/en/elasticsearch/guide/current/distributed-cluster.html
[Elasticsearch Ubuntu documentation]: https://www.elastic.co/guide/en/elasticsearch/reference/current/deb.html
[Configuring Elasticsearch]: https://www.elastic.co/guide/en/elasticsearch/reference/current/settings.html
[Upgrading Elasticsearch]: https://www.elastic.co/guide/en/elasticsearch/reference/current/setup-upgrade.html
[Full cluster restart upgrade]: https://www.elastic.co/guide/en/elasticsearch/reference/current/restart-upgrade.html
[Elasticsearch documentation]: https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html
[Installing Elasticsearch]: https://www.elastic.co/guide/en/elasticsearch/reference/current/install-elasticsearch.html
