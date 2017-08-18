---
layout: default
group: cloud
subgroup: 100_project
title: Set up Elasticsearch
menu_title: Set up Elasticsearch
menu_order: 85
menu_node:
level3_menu_node: level3child
level3_subgroup: services
version: 2.0
github_link: cloud/project/project-conf-files_services-elastic.md
---

[Elasticsearch](https://www.elastic.co){:target="_blank"} is an open source product that enables you to take data from any source, any format, and search, and visualize it in real time.

*   Elasticsearch performs quick and advanced searches on products in the product catalog
*   Elasticsearch analyzers support multiple languages
*   Supports stop words and synonyms
*   Indexing does not impact customers until reindex is completed

We support Elasticsearch versions 1.4, 1.7, and 2.4. The default version is 1.7.

![This feature is supported in Magento 2.1 only]({{ site.baseurl }}common/images/2.1-only_small.png) We support Elasticsearch for all environments starting with Magento Commerce (Cloud) 2.1 and later.

We recommend installing and configuring Elasticsearch in all of your environments: Integration, Staging, and Production. All configuration settings should be in the following files in your branch then deployed. The following sections provide configuration information and supported plugins.

For full documentation to install and configure Elasticsearch per web server, see [Elasticsearch information]({{page.baseurl}}config-guide/elasticsearch/es-overview.html).

<div class="bs-callout bs-callout-info" id="info" markdown="1">
If you're upgrading to Magento Commerce 2.1.3, you must change your configuration as discussed in [the 2.1.3 Release Notes]({{ page.baseurl }}cloud/release-notes/CloudReleaseNotes2.1.3.html#cloud-rn-213-es).
</div>

## Relationship {#relationship}
We use the Magento Commerce (Cloud) environment variable [`$MAGENTO_CLOUD_RELATIONSHIPS`]({{page.baseurl}}cloud/env/environment-vars_cloud.html), a JSON object, to retrieve environment-related relationships.

The following is the Elasticsearch information:

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

## Configure service settings {#configure}
Configure the Elasticsearch version and additional values in `.magento/services.yaml`. The following example is the default version setting for Elasticsearch.

{% highlight yaml %}
elasticsearch:
   type: elasticsearch:1.7
   disk: 1024
{% endhighlight %}

To configure the relationships for environment variable, set a relationship in your `.magento.app.yaml` in the Git branch. For example:

{% highlight yaml %}
relationships:
    elasticsearch: "elasticsearch:elasticsearch"
{% endhighlight %}

Merge and deploy the code to set the configurations for Elasticsearch.

## Add Elasticsearch to your site
Add the service in a configuration file of your application. For example:

{% highlight yaml %}
<?php
if (isset($_ENV['MAGENTO_CLOUD_RELATIONSHIPS'])) {
  $relationships = json_decode(base64_decode($_ENV['MAGENTO_CLOUD_RELATIONSHIPS']), TRUE);

  foreach ($relationships['elasticsearch'] as $endpoint) {
    $container->setParameter('elasticsearch_host', $endpoint['host']);
    $container->setParameter('elasticsearch_port', $endpoint['port']);
  }
}
{% endhighlight %}

When you create an index on Elasticsearch, you should not specify `number_of_shards` and `number_of_replicas` settings in your Elasticsearch API call. These values will be set automatically based on available resources.

## Supported plugins {#plugins}
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

For full documentation on these plugins, see [Elasticsearch plugin documentation](https://www.elastic.co/guide/en/elasticsearch/plugins/2.4/index.html){:target="_blank"}.

You can add the plugins through the `.magento/services.yaml` file using the codes above. For example, to enable ICU analysis plugin and Python script support plugins, add the configuration plugins section with the listed plugin codes:

{% highlight yaml %}
elasticsearch:
   type: elasticsearch:1.7
   disk: 1024
   configuration:
    plugins:
      - analysis-icu
      - lang-python
{% endhighlight %}
