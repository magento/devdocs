---
layout: default
group: cloud
subgroup: 10_project
title: Set up the elasticsearch service
menu_title: Set up the elasticsearch service
menu_order: 34
menu_node: 
level3_menu_node: level3child
level3_subgroup: services
version: 2.0
github_link: cloud/project/project-conf-files_services-elastic.md
---

## Set up the elasticsearch service
[Elasticsearch](https://www.elastic.co){:target="_blank"} is an open source product that enables you to take data from any source, any format, and search, and visualize it in real time.

*   Elasticsearch performs quick and advanced searches on products in the catalog
*   Elasticsearch analyzers support multiple languages
*   Supports stop words and synonyms
*   Indexing does not impact customers until reindex is completed

We support Elasticsearch version 1.4.

![This feature is supported in Magento 2.1 only]({{ site.baseurl }}common/images/2.1-only_small.png). Elasticsearch is supported in Magento 2.1.

[More information about Elasticsearch]({{ site.gdeurl21 }}config-guide/elasticsearch/es-overview.html).

<div class="bs-callout bs-callout-info" id="info" markdown="1">
If you're upgrading to Magento Enterprise Cloud Edition 2.1.3, you must change your configuration as discussed in [the 2.1.3 Release Notes]({{ page.baseurl }}cloud/CloudReleaseNotes2.1.3.html#cloud-rn-213-es).
</div>

### Relationship
The format exposed in the [`$MAGENTO_CLOUD_RELATIONSHIPS`]({{page.baseurl}}cloud/env/environment-vars_cloud.html) follows:

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

### Usage example
In your `.magento/services.yaml`:

{% highlight yaml %}
elasticsearch:
   type: elasticsearch:1.4
   disk: 1024
{% endhighlight %}

In your `.magento.app.yaml`:

{% highlight yaml %}
relationships:
    elasticsearch: "elasticsearch:elasticsearch"
{% endhighlight %}

You can use the preceding service in a configuration file of your application as follows:

{% highlight php startinline=true %}
if (isset($_ENV['MAGENTO_CLOUD_RELATIONSHIPS'])) {
  $relationships = json_decode(base64_decode($_ENV['MAGENTO_CLOUD_RELATIONSHIPS']), TRUE);

  foreach ($relationships['elasticsearch'] as $endpoint) {
    $container->setParameter('elasticsearch_host', $endpoint['host']);
    $container->setParameter('elasticsearch_port', $endpoint['port']);
  }
}
{% endhighlight %}

