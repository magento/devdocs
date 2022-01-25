---
group: configuration-guide
title: Configure and maintain the search engine
functional_areas:
  - Configuration
  - Search
  - System
  - Setup
---

As of version 2.4.4, {{ site.data.var.ee }} and {{ site.data.var.ce }} requires either [Elasticsearch][] or [OpenSearch][] to be the catalog search engine. (Previous versions of 2.4.x required Elasticsearch.) Refer to the following topics for details about installing a search engine and initial configuration:

*  [Search engine prerequisites][]
*  [Configure nginx and Elasticsearch][]
*  [Configure Apache and Elasticsearch][]
*  [Install the Magento software][] (command line interface)

After you install and integrate your search engine with {{ site.data.var.ee }}, you might need to perform additional maintenance:

*  [Configure Elasticsearch stopwords][]
*  [Configure Magento to use Elasticsearch][]

## Additional resources {#es-resources}

For additional information, see the [Elasticsearch documentation][]

<!-- Link Definitions -->
[Search engine prerequisites]: {{page.baseurl}}/install-gde/prereq/elasticsearch.html
[Configure nginx and Elasticsearch]: {{page.baseurl}}/install-gde/prereq/es-config-nginx.html
[Configure Apache and Elasticsearch]: {{page.baseurl}}/install-gde/prereq/es-config-apache.html
[Configure Elasticsearch stopwords]: {{page.baseurl}}/config-guide/elasticsearch/es-config-stopwords.html
[Elasticsearch]: https://www.elastic.co
[Configure Magento to use Elasticsearch]: {{page.baseurl}}/config-guide/elasticsearch/configure-magento.html
[Elasticsearch documentation]: https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html
[Install the Magento software]: {{page.baseurl}}/install-gde/install/cli/install-cli-install.html
[OpenSearch]: https://opensearch.org/docs/latest/opensearch/install/index/
