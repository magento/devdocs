---
title: Search engine prerequisites
functional_areas:
  - Configuration
  - Search
  - System
  - Setup
---

As of {{ site.data.var.ee }} and {{ site.data.var.ce }} 2.4, all installations must be configured to use [Elasticsearch][] or [OpenSearch][] as the [catalog](https://glossary.magento.com/catalog) search solution.

{:.bs-callout-info}
OpenSearch support has been added in 2.4.4. OpenSearch is a compatible fork of ElasticSearch. All instructions to configure Magento to use ElasticSearch 7 apply to OpenSearch. [Migrate ElasticSearch to OpenSearch]({{page.baseurl}}/install-gde/prereq/os-migration.html) provides guidance on switching to OpenSearch.

## Supported versions {#es-spt-versions}

You must install and configure either Elasticsearch or OpenSearch before installing {{ site.data.var.ee }} or {{ site.data.var.ce }} 2.4.4.

Refer to the [System Requirements][] for specific version information.

## Recommended configuration {#es-arch}

We recommend the following:

*  [Configure nginx and Elasticsearch][]
*  [Configure Apache and Elasticsearch][]

## Installation location {#es-host}

All of the following tasks we discuss assume you have configured your system this way.

![Search Engine diagram]({{ site.baseurl }}/common/images/elastic_config.png){:width="500px"}

The preceding diagram shows:

*  The Commerce application and the search engine are installed on different hosts.

   Running on separate hosts requires proxying to work. (Clustering the search engine is beyond the scope of this guide, but you can find more information in the [Elasticsearch clustering documentation][].)

*  Each host has its own web server; the web servers do not have to be the same.

   For example, the Commerce application can run Apache and the search engine can run nginx.

*  Both web servers use Transport Layer Security (TLS).

   Setting up TLS is beyond the scope of our documentation.

Search requests are processed as follows:

1. A search request from a user is received by the Commerce web server, which forwards it to the search engine server.

   You configure the search engine to connect to the proxy's host and port. We recommend the web server's SSL port (by default, 443).

1. The search engine web server (listening on port 443) proxies the request to the search engine server (by default, it listens on port 9200).

1. Access to the search engine is further protected by HTTP Basic authentication. For any request to reach the search engine, it must travel over SSL *and* provide a valid username and password.

1. The search engine processes the request.

1. Communication returns along the same route, with the Elasticsearch web server acting as a secure reverse proxy.

## Prerequisites {#es-prereq}

The tasks discussed in this section require the following:

*  [Firewall and SELinux](#firewall-selinux)
*  [Install the Java Software Development Kit (JDK)](#prereq-java)
*  [Install Elasticsearch](#es-install-es7)
*  [Upgrading Elasticsearch](#es-upgrade6)

{% include config/solr-elastic-selinux.md %}

{% include config/install-java8.md %}

### Install the search engine  {#es-install-es7}

Follow [Installing Elasticsearch][] or [Install and configure OpenSearch][] for your platform-specific steps.

To verify that Elasticsearch is working, enter the following command on the server on which it is running:

```bash
curl -XGET '<host>:9200/_cat/health?v&pretty'
```

A message similar to the following is displayed:

```terminal
epoch      timestamp cluster       status node.total node.data shards pri relo init unassign pending_tasks
1519701563 03:19:23  elasticsearch green           1         1      0   0    0    0        0             0
```

To verify Opensearch is working, enter the following commands:

```bash
curl -XGET https://<host>:9200 -u 'admin:admin' --insecure
```

```bash
curl -XGET https://<host>:9200/_cat/plugins?v -u 'admin:admin' --insecure
```

## Upgrading Elasticsearch {#es-upgrade6}

Refer to [Upgrading Elasticsearch][] for full instructions on backing up your data, detecting potential migration issues, and testing upgrades before deploying to production. Depending on your current version of Elasticsearch, a full cluster restart may or may not be required.

Elasticsearch requires JDK 1.8 or higher. See [Install the Java Software Development Kit (JDK)](#prereq-java) to check which version of JDK is installed.

## Additional resources {#es-resources}

For additional information, see [Elasticsearch documentation][]

### Next

*  [Configure nginx and Elasticsearch][]
*  [Configure Apache and Elasticsearch][]

<!-- Link Definitions -->
[Configure nginx and Elasticsearch]: {{page.baseurl}}/install-gde/prereq/es-config-nginx.html
[Configure Apache and Elasticsearch]: {{page.baseurl}}/install-gde/prereq/es-config-apache.html
[Configure Elasticsearch stopwords]: {{page.baseurl}}/config-guide/elasticsearch/es-config-stopwords.html
[Migrating ElasticSearch to OpenSearch]: {{page.baseurl}}/install-gde/prereq/os-migration.html
[Elasticsearch]: https://www.elastic.co
[OpenSearch]: https://opensearch.org/
[Elasticsearch clustering documentation]: https://www.elastic.co/guide/en/elasticsearch/guide/current/distributed-cluster.html
[Elasticsearch Ubuntu documentation]: https://www.elastic.co/guide/en/elasticsearch/reference/current/deb.html
[Configuring Elasticsearch]: https://www.elastic.co/guide/en/elasticsearch/reference/current/settings.html
[Upgrading Elasticsearch]: https://www.elastic.co/guide/en/elasticsearch/reference/current/setup-upgrade.html
[Full cluster restart upgrade]: https://www.elastic.co/guide/en/elasticsearch/reference/current/restart-upgrade.html
[Elasticsearch documentation]: https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html
[OpenSearch documentation]: https://opensearch.org/docs/latest/opensearch/index/
[Installing Elasticsearch]: https://www.elastic.co/guide/en/elasticsearch/reference/current/install-elasticsearch.html
[Installing OpenSearch]: https://opensearch.org/docs/latest/opensearch/install/index/
[System Requirements]: {{page.baseurl}}/install-gde/system-requirements.html
