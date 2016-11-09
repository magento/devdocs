---
layout: default
group: cloud
subgroup: 10_project
title: Set up the solr service
menu_title: Set up the solr service
menu_order: 33
menu_node: 
level3_menu_node: level3child
level3_subgroup: services
version: 2.0
github_link: cloud/project/project-conf-files_services-solr.md
---

## Set up the solr service

Solr is highly reliable, scalable and fault tolerant, providing distributed 
indexing, replication and load-balanced querying, automated failover and 
recovery, centralized configuration, and more.

Solr uses the Lucene Java search library for full-text indexing and search. Your applications interact with Solr using <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5" target="_blank">HTTP POST</a> (in JSON, <a href="http://wiki.apache.org/solr/UpdateXmlMessages" target="_blank">XML</a>, CSV, or binary formats) to index documents and using <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3" target="_blank">HTTP GET</a> to retrieve search results back as <a href="http://wiki.apache.org/solr/SolJSON?highlight=%28json%29%7C%28solr%29" target="_blank">JSON</a>, XML, or a variety of other formats (Python, Ruby, <a href="http://wiki.apache.org/solr/SolPHP?highlight=%28php%29%7C%28solr%29" target="_blank">PHP</a>, <a href="http://wiki.apache.org/solr/CSVResponseWriter?highlight=%28solr%29%7C%28csv%29" target="_blank">CSV</a>, binary, and so on). If you're a programmer, try the <a href="https://lucene.apache.org/solr/4_10_0/tutorial.html" target="_blank">Solr tutorial</a>. Whether you're a programmer or not, read the <a href="http://wiki.apache.org/solr/FAQ" target="_blank">Solr FAQ</a>.

[More information about Solr]({{page.baseurl}}config-guide/solr/solr-overview.html).

We support Solr version 4.10.

## Relationship
The format exposed in the [`$MAGENTO_CLOUD_RELATIONSHIPS`]({{page.baseurl}}cloud/env/environment-vars_cloud.html) follows:

{% highlight bash %}
{
    "solr": [
        {
            "path": "solr",
            "host": "192.0.2.55",
            "scheme": "solr",
            "port": 8080
        }
    ]
}
{% endhighlight %}

## Usage example
In your `.magento/services.yaml`:

{% highlight yaml %}
mysearch:
    type: solr:4.10
    disk: 1024
{% endhighlight %}

In your `.magento.app.yaml`:

{% highlight yaml %}
relationships:
    solr: "mysearch:solr"
{% endhighlight %}

You can then use the service in a configuration file similar to the following:

{% highlight php startinline=true %}
$relationships = getenv("MAGENTO_CLOUD_RELATIONSHIPS");
if (!$relationships) {
  return;
}

$relationships = json_decode(base64_decode($relationships), TRUE);

foreach ($relationships['solr'] as $endpoint) {
  $container->setParameter('solr_host', $endpoint['host']);
  $container->setParameter('solr_port', $endpoint['port']);
}
{% endhighlight %}

## Configuration
If you want to provide your own Solr configuration, you can add a `core_config` key in your `.magento/services.yaml`:

{% highlight yaml %}
mysearch:
    type: solr:4.10
    disk: 1024
    configuration:
        core_config: !archive "<directory>"
{% endhighlight %}

The `directory` parameter points to the Magento `vendor/magento/module-solr/conf` directory, relative to the `.magento` directory, in the Git repository. This directory contains the Magento schema.
