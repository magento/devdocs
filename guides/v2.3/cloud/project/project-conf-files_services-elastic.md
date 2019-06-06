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

1.  [Verify the relationships](#verify-relationships) and configure Elasticsearch in the Admin UI.

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

{:.bs-callout .bs-callout-info}
Magento does not support the ElasticSuite third-party plugin.

See [Elasticsearch plugin documentation](https://www.elastic.co/guide/en/elasticsearch/plugins/current/index.html).

## Verify relationships

{{site.data.var.ece}} uses the [MAGENTO_CLOUD_RELATIONSHIPS]({{ page.baseurl }}/cloud/env/variables-cloud.html) variable to retrieve the environment-related relationships. You must use this information when you [configure Elasticsearch through the Magento Admin]({{page.baseurl}}/config-guide/elasticsearch/configure-magento.html).

#### To print the connection information for Elasticsearch:

```bash
php -r 'print_r(json_decode(base64_decode($_ENV["MAGENTO_CLOUD_RELATIONSHIPS"])));'
```

The response includes all relationships for services and configuration data for that environment; the Elasticsearch information is similar to the following:

```terminal
"elasticsearch" : [
      {
         "host" : "elasticsearch.internal",
         "ip" : "250.0.97.96",
         "scheme" : "http",
         "port" : "9200"
      }
   ],
```
{: .no-copy}

{:.bs-callout .bs-callout-warning}
The Staging and Production environments share a single Elasticsearch instance; therefore, you must specify a unique Elasticsearch prefix for each environment.
