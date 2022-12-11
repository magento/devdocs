---
group: cloud-guide
title: Set up OpenSearch service
functional_areas:
  - Cloud
  - Setup
  - Search
redirect_to: https://experienceleague.adobe.com/docs/commerce-cloud-service/user-guide/configure/service/opensearch.html
layout: migrated
---

The [OpenSearch](https://www.opensearch.org) service is an open-source fork of Elasticsearch 7.10.2, following the licensing changes for Elasticsearch. See [System requirements]({{ site.baseurl }}/guides/v2.4/install-gde/system-requirements.html) for a list of supported versions.

{% include cloud/note-elasticsearch.md %}

OpenSearch enables you to take data from any source, any format, and search and visualize it in real time.

-  Quick and advanced searches on products in the product catalog
-  OpenSearch Analyzers support multiple languages
-  Supports stop words and synonyms
-  Indexing does not impact customers until the reindex operation completes

{% include cloud/service-config-integration-starter.md %}

{:.bs-callout-tip}
Adobe recommends that you always set up OpenSearch for your {{ site.data.var.ece }} project even if you plan to configure a third-party search tool for your {{ site.data.var.ee }} application. Setting up OpenSearch provides a fallback option in the event that the third-party search tool fails.

## Enable OpenSearch

{:.procedure}
To enable OpenSearch:

1. For Starter projects and Pro Integration environments, add the `opensearch` service to the `.magento/services.yaml` file with the appropriate version and allocated disk space in MB.

   ```yaml
   opensearch:
       type: opensearch:<version>
       disk: 1024
   ```

   For Pro projects, you must submit a {{site.data.var.ee}} [Support ticket](https://support.magento.com/hc/en-us/articles/360000913794#support-tickets) to change the OpenSearch version in the Staging and Production environments.

1. Set the `relationships` property in the `.magento.app.yaml` file.

   ```yaml
   relationships:
       opensearch: "opensearch:opensearch"
   ```

1. Add, commit, and push code changes.

   ```bash
   git add -A && git commit -m "Enable OpenSearch" && git push origin <branch-name>
   ```

   For information on how these changes affect your environments, see [Services]({{ site.baseurl }}/cloud/project/services.html).

1. [Verify the service relationships]({{ site.baseurl }}/cloud/project/services.html#service-relationships) and configure OpenSearch in the Admin UI.

1. Reindex the Catalog Search index.

   ```bash
   bin/magento indexer:reindex catalogsearch_fulltext
   ```

1. Clean the cache.

   ```bash
   bin/magento cache:clean
   ```

{%include cloud/tip-change-installed-service-version.md%}

## Add plugins for OpenSearch

You can add plugins to OpenSearch by adding the `configuration:plugins` section to the OpenSearch service in the `.magento/services.yaml` file. For example, the following code enables both the ICU and Phonetic analysis plugins.

```yaml
opensearch:
    type: opensearch:<service-version>
    disk: 1024
    configuration:
        plugins:
            - analysis-icu
            - analysis-phonetic
```
