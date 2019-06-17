---
group: cloud-guide
title: Set up Elasticsearch service
functional_areas:
  - Cloud
  - Setup
  - Search
---

[Elasticsearch](https://www.elastic.co) is an open source product that enables you to take data from any source, any format, and search and visualize it in real time.

-  Elasticsearch performs quick and advanced searches on products in the product catalog
-  Elasticsearch Analyzers support multiple languages
-  Supports stop words and synonyms
-  Indexing does not impact customers until the reindex operation completes

{{site.data.var.ee}} supports [Elasticsearch]({{ site.baseurl }}/guides/v2.2/config-guide/elasticsearch/es-overview.html) versions 1.4, 1.7, 2.4, and 5.2 (requires {{site.data.var.ee}} v2.2.3 or later). The recommended version is 5.2.

{:.bs-callout .bs-callout-info}
If you are upgrading to {{site.data.var.ee}} 2.1.3, you must change your configuration to replace Solr with Elasticsearch as discussed in [the 2.1.3 Release Notes]({{ site.baseurl }}/guides/v2.1/cloud/release-notes/CloudReleaseNotes2.1.3.html#cloud-rn-213-es).

#### To enable Elasticsearch:

1.  Add the `elasticsearch` service to the `.magento/services.yaml` file with the Elasticsearch version and allocated disk space in MB.

    ```yaml
    elasticsearch:
        type: elasticsearch:5.2
        disk: 1024
    ```

1.  Set the `relationships` property in the `.magento.app.yaml` file.

    ```yaml
    relationships:
        elasticsearch: "elasticsearch:elasticsearch"
    ```

1.  Add, commit, and push code changes.

    ```bash
    git add -A && git commit -m "Enable Elasticsearch" && git push origin <branch-name>
    ```

    For information on how these changes affect your environments, see [Services]({{ page.baseurl }}/cloud/project/project-conf-files_services.html).

1.  [Verify the relationships](#verify-relationships) and configure Elasticsearch in the Admin UI.

### Add Elasticsearch plugins

Optionally, you can add plugins with the `.magento/services.yaml` file. For example, to enable the ICU analysis plugin and Python script support plugin, add the `configuration:plugins` section with the listed plugin codes:

```yaml
elasticsearch:
    type: elasticsearch:5.2
    disk: 1024
    configuration:
        plugins:
            - analysis-icu
            - lang-python
```

The following are supported Elasticsearch plugins for version 2.4:

-  `analysis-icu`: ICU Analysis Plugin, Support ICU Unicode text analysis
-  `analysis-kuromoji`: Japanese (kuromoji) Analysis Plugin, Japanese language support
-  `analysis-phonetic`: Phonetic Analysis Plugin, Phonetic analysis
-  `analysis-smartcn`: Smart Chinese Analysis Plugins
-  `analysis-stempel`: Stempel Polish Analysis Plugin
-  `cloud-aws`: AWS Cloud Plugin, allows storing indices on AWS S3
-  `cloud-azure`: Azure Cloud Plugin
-  `cloud-gce`: GCE Cloud Plugin
-  `delete-by-query`: Support for deleting documents matching a given query
-  `discovery-multicast`: Ability to form a cluster using TCP/IP multicast messages
-  `lang-javascript`: JavaScript language plugin, allows the use of JavaScript in Elasticsearch scripts
-  `lang-python`: Python language plugin, allows the use of Python in Elasticsearch scripts
-  `mapper-attachments`: Mapper attachments plugin for indexing common file types
-  `mapper-murmur3`: Murmur3 mapper plugin for computing hashes at index-time
-  `mapper-size`: Size mapper plugin, enables the `_size` meta field

See [Elasticsearch plugin documentation](https://www.elastic.co/guide/en/elasticsearch/plugins/2.4/index.html).

{:.bs-callout-info}
If you use the ElasticSuite third-party plugin, you must [update the `{{site.data.var.ct}}` package]({{page.baseurl}}/cloud/project/ece-tools-update.html) to version 2002.0.19 or later.

## Verify relationships

{{site.data.var.ece}} uses the [MAGENTO_CLOUD_RELATIONSHIPS]({{ page.baseurl }}/cloud/env/variables-cloud.html) variable to retrieve the environment-related relationships. You must use this information when you [configure Elasticsearch through the Magento Admin]({{page.baseurl}}/config-guide/elasticsearch/configure-magento.html).

{% include cloud/pretty-print-services.md %}

{: .bs-callout-warning}
Staging and Production environments that are in the same cluster share a single Elasticsearch instance, so you must specify a unique Elasticsearch prefix for each of these environments.