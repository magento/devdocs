---
group: configuration-guide
title: Configure and maintain the search engine
functional_areas:
  - Configuration
  - Search
  - System
  - Setup
redirect_to: https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/search/overview-search.html
layout: migrated
---

As of version 2.4.4, {{ site.data.var.ee }} and {{ site.data.var.ce }} requires either [Elasticsearch][] or [OpenSearch][] to be the catalog search engine. (Previous versions of 2.4.x required Elasticsearch.) Refer to the following topics for details about installing a search engine and initial configuration:

*  [Search engine prerequisites][]
*  [Configure nginx for your search engine][]
*  [Configure Apache for your search engine][]
*  [Install the Magento software][] (command line interface)

After you install and integrate your search engine with {{ site.data.var.ee }}, you might need to perform additional maintenance:

*  [Configure search stopwords][]
*  [Search engine configuration][]

## Additional resources {#es-resources}

For additional information, see the [Elasticsearch documentation][] / [OpenSearch documentation][]

<!-- Link Definitions -->
[Search engine prerequisites]: {{page.baseurl}}/install-gde/prereq/elasticsearch.html
[Configure nginx for your search engine]: {{page.baseurl}}/install-gde/prereq/es-config-nginx.html
[Configure Apache for your search engine]: {{page.baseurl}}/install-gde/prereq/es-config-apache.html
[Configure search stopwords]: {{page.baseurl}}/config-guide/elasticsearch/es-config-stopwords.html
[Elasticsearch]: https://www.elastic.co
[Search engine configuration]: {{page.baseurl}}/config-guide/elasticsearch/configure-magento.html
[Elasticsearch documentation]: https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html
[Install the Magento software]: {{page.baseurl}}/install-gde/install/cli/install-cli-install.html
[OpenSearch]: https://opensearch.org/docs/latest/opensearch/install/index/
[OpenSearch documentation]: https://opensearch.org/docs/latest/
