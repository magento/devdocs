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

We support Elasticsearch versions 1.4, 1.7, and 2.4. The recommended version is 2.4. We support Elasticsearch for all environments starting with {{site.data.var.ece}} 2.1 and later. Refer to [Elasticsearch information]({{ site.baseurl }}/guides/v2.1/config-guide/elasticsearch/es-overview.html) to learn more.

{:.bs-callout .bs-callout-info}
If you are upgrading to {{site.data.var.ee}} 2.1.3, you must change your configuration as discussed in [the 2.1.3 Release Notes]({{ page.baseurl }}/cloud/release-notes/CloudReleaseNotes2.1.3.html#cloud-rn-213-es).

{:.bs-callout .bs-callout-warning}
If you prefer using an existing search service, like Elasticsearch, instead of relying on {{site.data.var.ece}} to create it for you, use the [`SEARCH_CONFIGURATION`]({{ site.baseurl }}/guides/v2.1/cloud/env/variables-deploy.html#search_configuration) environment variable to connect it to your site.

{% include cloud/service-config-integration-starter.md %}

## Add Elasticsearch in services.yaml and .magento.app.yaml {#settings}

To enable Elasticsearch, add the following code with your installed version and allocated disk space in MB to the `.magento/services.yaml` file.

```yaml
elasticsearch:
    type: elasticsearch:2.4
    disk: 1024
```

To configure the relationships for the environment variable, set a relationship in your `.magento.app.yaml` in the Git branch. For example:

```yaml
relationships:
    elasticsearch: "elasticsearch:elasticsearch"
```

Merge and deploy the code to set the configurations for Elasticsearch. For information on how these changes affect your environments, see [`services.yaml`]({{ page.baseurl }}/cloud/project/project-conf-files_services.html).

### Add Elasticsearch plugins {#addplugins}

Optionally, you can add the plugins through the `.magento/services.yaml` file. For example, to enable ICU analysis plugin and Python script support plugins, add the configuration plugins section with the listed plugin codes:

```yaml
elasticsearch:
    type: elasticsearch:2.4
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

For documentation on plugins, see [Elasticsearch plugin documentation](https://www.elastic.co/guide/en/elasticsearch/plugins/2.4/index.html).

{:.bs-callout-info}
If you use the ElasticSuite third-party plugin, you must [update the `{{site.data.var.ct}}` package]({{page.baseurl}}/cloud/project/ece-tools-update.html) to version 2002.0.19 or later.

## Verify relationships

We use the {{site.data.var.ece}} environment variable [`$MAGENTO_CLOUD_RELATIONSHIPS`]({{ page.baseurl }}/cloud/env/environment-vars_cloud.html), a JSON object, to retrieve environment-related relationships.

Use this information to [complete Elasticsearch configuration](#configure) in the Admin Panel.

{% include cloud/pretty-print-services.md %}

## Configure Elasticsearch for your site {#configure}

The last step is to configure Elasticsearch for your catalog search options through the Magento Admin. You will need the information from the variable `MAGENTO_CLOUD_RELATIONSHIPS`. See [Configure Magento to use Elasticsearch]({{ site.baseurl }}/guides/v2.1/config-guide/elasticsearch/configure-magento.html) to complete your Admin configurations.

{: .bs-callout-warning}
Staging and Production environments that are in the same cluster share a single Elasticsearch instance, so you must specify a unique Elasticsearch prefix for each of these environments.