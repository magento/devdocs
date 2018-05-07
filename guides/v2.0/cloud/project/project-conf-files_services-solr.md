---
layout: default
group: cloud
subgroup: 090_configure
title: Set up Solr service
menu_title: Set up Solr service
menu_order: 80
menu_node:
level3_menu_node: level3child
level3_subgroup: services
version: 2.0
github_link: cloud/project/project-conf-files_services-solr.md
redirect_from:
  - /guides/v2.1/project/project-conf-files_services-solr.html
  - /guides/v2.2/project/project-conf-files_services-solr.html
functional_areas:
  - Cloud
  - Setup
  - Search
---

Solr is highly reliable, scalable and fault tolerant, providing distributed
indexing, replication and load-balanced querying, automated failover and
recovery, centralized configuration, and more.

**Limited Support:** We only support Solr in {{site.data.var.ece}} 2.0.X. You should move to [Elasticsearch]({{page.baseurl}}/cloud/project/project-conf-files_services-elastic.html) for {{site.data.var.ece}} 2.1 and later, 2.2 and later.

Solr uses the Lucene Java search {% glossarytooltip 08968dbb-2eeb-45c7-ae95-ffca228a7575 %}library{% endglossarytooltip %} for full-text indexing and search. Your applications interact with Solr using:

* [HTTP POST](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5){:target="_blank"} in JSON, [XML](http://wiki.apache.org/solr/UpdateXmlMessages){:target="_blank"}, CSV, or binary formats to index documents
* [HTTP GET](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3){:target="_blank"} to retrieve search results back as >[JSON](http://wiki.apache.org/solr/SolJSON?highlight=%28json%29%7C%28solr%29){:target="_blank"}, XML, or a variety of other formats including Python, Ruby, [PHP](http://wiki.apache.org/solr/SolPHP?highlight=%28php%29%7C%28solr%29){:target="_blank"}, [CSV](http://wiki.apache.org/solr/CSVResponseWriter?highlight=%28solr%29%7C%28csv%29){:target="_blank"}, binary, and so on

We support Solr version 4.10 for {{site.data.var.ece}}.

For more information about Solr, see the following:

* [More information about Solr]({{page.baseurl}}/config-guide/solr/solr-overview.html)
* [Solr tutorial](https://lucene.apache.org/solr/4_10_0/tutorial.html){:target="_blank"}
* [Solr FAQ](http://wiki.apache.org/solr/FAQ){:target="_blank"}

## Add Solr in services.yaml and .magento.app.yaml {#settings}
To enable Solr, add the following code with your installed version and allocated disk space in MB to `.magento/services.yaml`.

{% highlight yaml %}
mysearch:
    type: solr:4.10
    disk: 1024
{% endhighlight %}

If you want to provide your own Solr configuration, you can add a `core_config` key in your `.magento/services.yaml`:

{% highlight yaml %}
mysearch:
    type: solr:4.10
    disk: 1024
    configuration:
        core_config: !archive "<directory>"
{% endhighlight %}

The `directory` parameter points to the Magento `vendor/magento/module-solr/conf` directory, relative to the `.magento` directory, in the Git repository. This directory contains the Magento schema.

To configure the relationships for the environment variable, set a relationship in your `.magento.app.yaml` in the Git branch. For example:

{% highlight yaml %}
relationships:
    solr: "mysearch:solr"
{% endhighlight %}

Merge and deploy the code to set the configurations for Solr. For information on how these changes affect your environments, see [`services.yaml`]({{page.baseurl}}/cloud/project/project-conf-files_services.html).

## Verify environment-related relationships {#cloud-es-config-mg}
We use the {{site.data.var.ece}} environment variable [`$MAGENTO_CLOUD_RELATIONSHIPS`]({{page.baseurl}}/cloud/env/environment-vars_cloud.html), a JSON object, to retrieve environment-related relationships.

To verify this information used for configurations and settings:

1. SSH into the Integration environment with Solr installed and configured.
2. Enter the following command to pretty-print connection information for Solr:

        php -r 'print_r(json_decode(base64_decode($_ENV["MAGENTO_CLOUD_RELATIONSHIPS"])));'

The response includes all relationships for services and configuration data for that environment. In the response, you will locate data similar to the following for Solr:

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

<!-- The following info is from Platform.sh and may not be required for Magento Cloud:
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
{% endhighlight %} -->

#### Related topics
*	[`services.yaml`]({{page.baseurl}}/cloud/project/project-conf-files_services.html)
* [`.magento.app.yaml`]({{page.baseurl}}/cloud/project/project-conf-files_magento-app.html)
* [`routes.yaml`]({{page.baseurl}}/cloud/project/project-conf-files_routes.html)
