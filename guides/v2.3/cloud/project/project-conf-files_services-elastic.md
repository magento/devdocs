---
group: cloud-guide
title: Set up Elasticsearch service
functional_areas:
  - Cloud
  - Setup
  - Search
---

[Elasticsearch](https://www.elastic.co) is an open source product that enables you to take data from any source, any format, and search and visualize it in real time.

*   Elasticsearch performs quick and advanced searches on products in the product catalog
*   Elasticsearch Analyzers support multiple languages
*   Supports stop words and synonyms
*   Indexing does not impact customers until the reindex operation completes

{{site.data.var.ee}} supports [Elasticsearch]({{ site.baseurl }}/guides/v2.2/config-guide/elasticsearch/es-overview.html) version 5.2 and 6.x (supported by Magento version 2.3.1 and later).

{% include cloud/service-config-integration-starter.md %}

#### To enable Elasticsearch:

1.  Add the `elasticsearch` service to the `.magento/services.yaml` file with the Elasticsearch version and allocated disk space in MB.

    ```yaml
    elasticsearch:
        type: elasticsearch:6.5
        disk: 1024
    ```

1.  Set the `relationships` property in the `.magento.app.yaml` file.

    ```yaml
    relationships:
        elasticsearch: "elasticsearch:elasticsearch"
    ```

1.  Add, commit, and push code changes.

    ```bash
    git add -A && git commit -m "Enable Elasticsearch" && git push origin <branch name>
    ```

    For information on how these changes affect your environments, see [Services]({{ page.baseurl }}/cloud/project/project-conf-files_services.html).

1.  [Verify the relationships]({{page.baseurl}}/cloud/project/project-conf-files_services.html#service-relationships) and configure Elasticsearch in the Admin UI.

1. Reindex the Catalog Search index.

    ```bash
    bin/magento indexer:reindex catalogsearch_fulltext
    ```

1. Clean the cache.

    ```bash
    bin/magento cache:clean
    ```

## Elasticsearch plugins

Optionally, you can add plugins with the `.magento/services.yaml` file. For example, to enable the ICU analysis plugin and Python script support plugin, add the `configuration:plugins` section with the listed plugin codes:

```yaml
elasticsearch:
    type: elasticsearch:6.5
    disk: 1024
    configuration:
        plugins:
            - analysis-icu
            - lang-python
```

See [Elasticsearch plugin documentation](https://www.elastic.co/guide/en/elasticsearch/plugins/current/index.html).

{:.bs-callout-info}
If you use the ElasticSuite third-party plugin, you must [update the `{{site.data.var.ct}}` package]({{page.baseurl}}/cloud/project/ece-tools-update.html) to version 2002.0.19 or later.

{: .bs-callout-info }
If you need to restart the [Elasticsearch](https://www.elastic.co) service, you must contact Magento support.

{: .bs-callout-warning}
Staging and Production environments that are in the same cluster share a single Elasticsearch instance, so you must specify a unique Elasticsearch prefix for each of these environments.
