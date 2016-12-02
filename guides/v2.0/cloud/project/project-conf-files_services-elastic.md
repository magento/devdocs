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

[Elasticsearch](https://www.elastic.co){:target="_blank"} is an open source product that enables you to take data from any source, any format, and search, and visualize it in real time.

*   Elasticsearch performs quick and advanced searches on products in the catalog
*   Elasticsearch analyzers support multiple languages
*   Supports stop words and synonyms
*   Indexing does not impact customers until reindex is completed

We support Elasticsearch version 1.7.

![This feature is supported in Magento 2.1 only]({{ site.baseurl }}common/images/2.1-only_small.png). Elasticsearch is supported in Magento 2.1.

[More information about Elasticsearch]({{ site.gdeurl21 }}config-guide/elasticsearch/es-overview.html).

## Relationship
The format exposed in the [`$MAGENTO_CLOUD_RELATIONSHIPS`]({{page.baseurl}}cloud/env/environment-vars_cloud.html) follows:

{% highlight bash %}
{
    "elasticsearch": [
        {
            "host": "248.0.65.198",
            "scheme": "http",
            "port": "9200"
        }
    ]
}
{% endhighlight %}

## Usage example
In your `.magento/services.yaml`:

{% highlight yaml %}
mysearch:
    type: elasticsearch:1.4
    disk: 1024
{% endhighlight %}

In your `.magento.app.yaml`:

{% highlight yaml %}
relationships:
    elasticsearch: "mysearch:elasticsearch"
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

