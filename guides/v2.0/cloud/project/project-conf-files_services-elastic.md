---
group: cloud
title: Set up Elasticsearch service
version: 2.0
functional_areas:
  - Cloud
  - Setup
  - Search
---

[Elasticsearch](https://www.elastic.co){:target="\_blank"} is an open source product that enables you to take data from any source, any format, and search and visualize it in real time.

*   Elasticsearch performs quick and advanced searches on products in the product catalog
*   Elasticsearch Analyzers support multiple languages
*   Supports stop words and synonyms
*   Indexing does not impact customers until reindex is completed

We support Elasticsearch versions 1.4, 1.7, and 2.4. The default version is 1.7. We support Elasticsearch for all environments starting with {{site.data.var.ece}} 2.1 and later. Refer to [Elasticsearch information]({{ site.baseurl }}/guides/v2.1/config-guide/elasticsearch/es-overview.html) to learn more. For {{site.data.var.ece}} 2.0.X, you can use [Solr]({{ site.baseurl }}/guides/v2.0/cloud/project/project-conf-files_services-solr.html).

<div class="bs-callout bs-callout-info" id="info" markdown="1">
If you're upgrading to Magento Commerce 2.1.3, you must change your configuration as discussed in [the 2.1.3 Release Notes]({{ page.baseurl }}/cloud/release-notes/CloudReleaseNotes2.1.3.html#cloud-rn-213-es).
</div>

<div class="bs-callout bs-callout-warning" markdown="1">
If you prefer using an existing search service, like Elasticsearch, instead of relying on {{site.data.var.ece}} to create it for you, use the [`SEARCH_CONFIGURATION`]({{ site.baseurl }}/guides/v2.1/cloud/env/working-with-variables.html#search) environment variable to connect it to your site.
</div>

## Add Elasticsearch in services.yaml and .magento.app.yaml {#settings}

To enable Elasticsearch, add the following code with your installed version and allocated disk space in MB to `.magento/services.yaml`.

{% highlight yaml %}
elasticsearch:
   type: elasticsearch:1.7
   disk: 1024
{% endhighlight %}

To configure the relationships for the environment variable, set a relationship in your `.magento.app.yaml` in the Git branch. For example:

{% highlight yaml %}
relationships:
    elasticsearch: "elasticsearch:elasticsearch"
{% endhighlight %}

Merge and deploy the code to set the configurations for Elasticsearch. For information on how these changes affect your environments, see [`services.yaml`]({{ page.baseurl }}/cloud/project/project-conf-files_services.html).

### Add Elasticsearch plugins {#addplugins}

Optionally, you can add the plugins through the `.magento/services.yaml` file. For example, to enable ICU analysis plugin and Python script support plugins, add the configuration plugins section with the listed plugin codes:

{% highlight yaml %}
elasticsearch:
   type: elasticsearch:1.7
   disk: 1024
   configuration:
    plugins:
      - analysis-icu
      - lang-python
{% endhighlight %}

For example, if you are using [Smile ElasticSuite](https://github.com/Smile-SA/elasticsuite){:target="\_blank"}, you should add the following plugins:

{% highlight yaml %}
elasticsearch:
   type: elasticsearch:2.4
   disk: 1024
   configuration:
    plugins:
      - analysis-icu
      - analysis-phonetic
{% endhighlight %}

The following are supported Elasticsearch plugins for version 2.4:

* `analysis-icu`: ICU Analysis Plugin, Support ICU Unicode text analysis
* `analysis-kuromoji`: Japanese (kuromoji) Analysis Plugin, Japanese language support
* `analysis-phonetic`: Phonetic Analysis Plugin, Phonetic analysis
* `analysis-smartcn`: Smart Chinese Analysis Plugins
* `analysis-stempel`: Stempel Polish Analysis Plugin
* `cloud-aws`: AWS Cloud Plugin, allows storing indices on AWS S3
* `cloud-azure`: Azure Cloud Plugin
* `cloud-gce`: GCE Cloud Plugin
* `delete-by-query`: Support for deleting documents matching a given query
* `discovery-multicast`: Ability to form a cluster using TCP/IP multicast messages
* `lang-javascript`: Javascript language plugin, allows the use of Javascript in Elasticsearch scripts
* `lang-python`: Python language plugin, allows the use of Python in Elasticsearch scripts
* `mapper-attachments`: Mapper attachments plugin for indexing common file types
* `mapper-murmur3`: Murmur3 mapper plugin for computing hashes at index-time
* `mapper-size`: Size mapper plugin, enables the `_size` meta field

If using [Smile ElasticSuite](https://github.com/Smile-SA/elasticsuite){:target="\_blank"}, the required plugins are `analysis-icu` and `analysis-phonetic`. Make sure to add these to the plugins section of `services.yaml.` See [Add Elasticsearch plugins](#addplugins).

For full documentation on these plugins, see [Elasticsearch plugin documentation](https://www.elastic.co/guide/en/elasticsearch/plugins/2.4/index.html){:target="\_blank"}.

## Verify environment-related relationships {#cloud-es-config-mg}

We use the {{site.data.var.ece}} environment variable [`$MAGENTO_CLOUD_RELATIONSHIPS`]({{ page.baseurl }}/cloud/env/environment-vars_cloud.html), a JSON object, to retrieve environment-related relationships.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
You will use this information to [complete Elasticsearch configuration](#configure) in the Admin Panel.
</div>

To verify this information used for configurations and settings:

1. SSH into the Integration environment with Elasticsearch installed and configured.
2. Enter the following command to pretty-print connection information for Elasticsearch. You will use this information when configuring Elasticsearch through the Magento Admin.

        php -r 'print_r(json_decode(base64_decode($_ENV["MAGENTO_CLOUD_RELATIONSHIPS"])));'

The response includes all relationships for services and configuration data for that environment. In the response, you will locate data similar to the following for Elasticsearch:

{% highlight bash %}
"elasticsearch" : [
      {
         "host" : "elasticsearch.internal",
         "ip" : "250.0.97.96",
         "scheme" : "http",
         "port" : "9200"
      }
   ],
{% endhighlight %}

## Configure Elasticsearch for your site {#configure}

The last step is to configure Elasticsearch for your catalog search options through the Magento Admin. You will need the information from the variable `MAGENTO_CLOUD_RELATIONSHIPS`. See [Configure Magento to use Elasticsearch]({{ site.baseurl }}/guides/v2.1/config-guide/elasticsearch/configure-magento.html) to complete your Admin configurations.

<div class="bs-callout bs-callout-warning" markdown="1">
Staging and Production environments share a single Elasticsearch instance, so you must specify a unique Elasticsearch prefix for each of these environments.
</div>
