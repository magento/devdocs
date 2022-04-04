---
group: cloud-guide
title: Set up Opensearch service
functional_areas:
  - Cloud
  - Setup
  - Search
---

The [Opensearch](https://www.opensearch.org) service is an open-source fork of Elasticsearch 7.10.2, following the licensing changes for Elasticsearch. See [System requirements]({{ site.baseurl }}/guides/v2.4/install-gde/system-requirements.html) for a list of supported versions.

Opensearch enables you to take data from any source, any format, and search and visualize it in real time.

-  Quick and advanced searches on products in the product catalog
-  Elasticsearch Analyzers support multiple languages
-  Supports stop words and synonyms
-  Indexing does not impact customers until the reindex operation completes

{% include cloud/note-elasticsearch.md %}

{% include cloud/service-config-integration-starter.md %}

{:.bs-callout-tip}
Adobe recommends that you always set up Opensearch for your {{ site.data.var.ece }} project even if you plan to configure a third-party search tool for your {{ site.data.var.ee }} application. Setting up Opensearch provides a fallback option in the event that the third-party search tool fails.

{:.procedure}
To enable Opensearch:

1. For Starter projects, add the `opensearch` service to the `.magento/services.yaml` file with the appropriate version and allocated disk space in MB.

   ```yaml
   elasticsearch:
       type: opensearch:<version>
       disk: 1024
   ```

   For Pro projects, you must submit a {{site.data.var.ee}} Support ticket to change the Opensearch version in the Staging and Production environments.

1. Set the `relationships` property in the `.magento.app.yaml` file.

   ```yaml
   relationships:
       opensearch: "opensearch:opensearch"
   ```

1. Add, commit, and push code changes.

   ```bash
   git add -A && git commit -m "Enable Opensearch" && git push origin <branch-name>
   ```

   For information on how these changes affect your environments, see [Services]({{ site.baseurl }}/cloud/project/services.html).

1. [Verify the service relationships]({{ site.baseurl }}/cloud/project/services.html#service-relationships) and configure Opensearch in the Admin UI.

1. Reindex the Catalog Search index.

   ```bash
   bin/magento indexer:reindex catalogsearch_fulltext
   ```

1. Clean the cache.

   ```bash
   bin/magento cache:clean
   ```

{%include cloud/tip-change-installed-service-version.md%}
