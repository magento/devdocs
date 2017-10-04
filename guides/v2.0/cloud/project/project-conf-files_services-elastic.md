---
layout: default
group: cloud
subgroup: 090_configure
title: Set up Elasticsearch service
menu_title: Set up Elasticsearch service
menu_order: 70
menu_node:
level3_menu_node: level3child
level3_subgroup: services
version: 2.1
github_link: cloud/project/project-conf-files_services-elastic.md
---

[Elasticsearch](https://www.elastic.co){:target="_blank"} is an open source product that enables you to take data from any source, any format, and search and visualize it in real time.

*   Elasticsearch performs quick and advanced searches on products in the product catalog
*   Elasticsearch analyzers support multiple languages
*   Supports stop words and synonyms
*   Indexing does not impact customers until reindex is completed

We support Elasticsearch versions 1.4, 1.7, and 2.4. The default version is 1.7.

We support Elasticsearch for all environments starting with {{site.data.var.ece}} 2.1 and later. For {{site.data.var.ece}} 2.0.X, you can use [Solr](http://devdocs.magento.com/guides/v2.0/cloud/project/project-conf-files_services-solr.html).

## Install Elasticsearch {#install}
We recommend installing and configuring Elasticsearch in all of your environments: Integration, Staging, and Production.

* For Starter: You can directly install Elasticsearch into all your environments by SSH.
* For Pro: You can directly install Elasticsearch into your Intergration environments. For Staging and Production, you need to enter a [Support ticket]({{page.baseurl}}cloud/bk-cloud.html#gethelp) requesting Elasticsearch by version installed in those environments.

After installation, you need to:

* [Add settings](#settings) your `.magento.app.yaml` and `services.yaml` files and push the changes to Git
* Optionally, add Elasticsearch [plugins](#addplugins)
* [Configure Elasticsearch](#configure) for your site

For full documentation to install and configure Elasticsearch per web server, see [Elasticsearch information]({{page.baseurl}}config-guide/elasticsearch/es-overview.html).

<div class="bs-callout bs-callout-info" id="info" markdown="1">
If you're upgrading to Magento Commerce 2.1.3, you must change your configuration as discussed in [the 2.1.3 Release Notes]({{page.baseurl}}cloud/release-notes/CloudReleaseNotes2.1.3.html#cloud-rn-213-es).
</div>

## Get environment-related relationships {#cloud-es-config-mg}
We use the {{site.data.var.ece}} environment variable [`$MAGENTO_CLOUD_RELATIONSHIPS`]({{page.baseurl}}cloud/env/environment-vars_cloud.html), a JSON object, to retrieve environment-related relationships.

To get this information used for configurations and settings:

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

Merge and deploy the code to set the configurations for Elasticsearch.

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

For example, if you are using `smile-es`, you should add the following plugins:

{% highlight yaml %}
elasticsearch:
   type: elasticsearch:1.7
   disk: 1024
   configuration:
    plugins:
      - analysis-icu
      - analysis-phonetic
      - lang-python
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

If using `smile-es`, the required plugins are `analysis-icu` and `analysis-phonetic`. Make sure to add these to the plugins section of `services.yaml.` See [Add Elasticsearch plugins](#addplugins).

For full documentation on these plugins, see [Elasticsearch plugin documentation](https://www.elastic.co/guide/en/elasticsearch/plugins/2.4/index.html){:target="_blank"}.

## Configure Elasticsearch for your site {#configure}
The last step is to configure Elasticsearch for your catalog search options through the Magento Admin. You will need the information from the variable `MAGENTO_CLOUD_RELATIONSHIPS`.

1. SSH into the Integration environment with Elasticsearch installed and configured.
2. Enter the following command to get connection information for Elasticsearch. You will use this information when configuring Elasticsearch through the Magento Admin.

    echo $MAGENTO_CLOUD_RELATIONSHIPS | base64 -d | json_pp
3. Log into the Magento Admin in the Integration environment.
4. Click **Stores** > Settings > **Configuration** > **Catalog** > **Catalog** > **Catalog Search**.
5. From the Search Engine list, click Elasticsearch as the following figure shows.

  <img src="{{ site.baseurl }}common/images/elastic_choose-in-admin.png" width="650px">
6. The following table provides configuration options required to test the connection. Enter connection settings

	<table>
		<tbody>
		<tr><th>Option</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>Elasticsearch Server Hostname</td>
		<td>Enter the fully qualified host name or IP address of the environment running Elasticsearch. This value should not be <code>localhost</code>. For {{site.data.var.ece}}, this is the value returned by the the echo command for <code>MAGENTO_CLOUD_RELATIONSHIPS</code>.</td>
	</tr>
	<tr>
		<td>Elasticsearch Server Port</td>
		<td><p>Enter the Elasticsearch web server proxy port. For {{site.data.var.ece}}, this is the value returned by the the echo command for <code>MAGENTO_CLOUD_RELATIONSHIPS</code>. For typical environments, the port is <code>8080</code> or <code>443</code> if using a secure proxy.</td>
	</tr>
	<tr>
		<td>Enable Elasticsearch HTTP Auth</td>
		<td>Click <strong>Yes</strong> only if you enabled authentication for your Elasticsearch server. If so, provide a user name and password in the provided fields.</td>
	</tr>
	</tbody>
	</table>
7. Click <strong>Test Connection</strong>.

For additional information, see [Configure Magento to use Elasticsearch]({{page.baseurl}}config-guide/elasticsearch/configure-magento.html).

<!-- The following info is from Platform.sh and may not be required for Magento Cloud:

## Add service to configuration file {#configuration-file}
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

When you create an index on Elasticsearch, you should not specify `number_of_shards` and `number_of_replicas` settings in your Elasticsearch API call. These values will be set automatically based on available resources. -->

#### Related topics
*	[`services.yaml`]({{page.baseurl}}cloud/project/project-conf-files_services.html)
* [`.magento.app.yaml`]({{page.baseurl}}cloud/project/project-conf-files_magento-app.html)
* [`routes.yaml`]({{page.baseurl}}cloud/project/project-conf-files_routes.html)
