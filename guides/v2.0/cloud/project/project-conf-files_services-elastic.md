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

## Update your configuration
This section discusses how to update your [integration]({{ page.baseurl }}cloud/discover-arch.html#cloud-arch-int) system to replace Solr with Elasticsearch. Currently, all Magento Enterprise Cloud Edition users must perform these tasks. 

To use Elasticsearch on a [staging]({{ page.baseurl }}cloud/discover-arch.html#cloud-arch-stage) or [production]({{ page.baseurl }}cloud/discover-arch.html#cloud-arch-prod) system, open a [Support ticket]({{ page.baseurl }}cloud/get-help.html) and request Elasticsearch 1.4.

To use Elasticsearch, you must perform all the tasks discussed in this section.

### Get started

{% collapsible To get started: %}

{% include cloud/cli-get-started.md %}

{% endcollapsible %}

### Step 1: Update .magento.app.yaml

{% collapsible To update .magento.app.yaml: %}

1.  Open `.magento.app.yaml` in a text editor.

    It's located in your Magento Enterprise Cloud Edition project root directory.
2.  In the `relationships:` section, delete `solr: "solr:solr"` if it exists.
3.  Add `elasticsearch: "elasticsearch:elasticsearch"`

    A sample follows:

        relationships:
           database: "mysql:mysql"
           elasticsearch: "elasticsearch:elasticsearch"
           redis: "redis:redis"
4.  Save your changes to `.magento.app.yaml` and exit the text editor.

{% endcollapsible %}

### Step 2: Update .magento/services.yaml

{% collapsible To update .magento/services.yaml: %}

1.  Open `.magento/services.yaml` in a text editor.
2.  Remove the entire `solr:` section.
3.  Add a new `elasticsearch:` section with the following contents:

        elasticsearch:
           type: elasticsearch:1.4
           disk: 1024
4.  Save your changes to `.magento/services.yaml` and exit the text editor.

{% endcollapsible %}

### Step 3: Push the changes and redeploy the environment

{% collapsible To push the changes: %}

1.  Add, commit, and push the changes:

        git add -A && git commit -m "Add Elasticsearch"
        git push origin <branch name>
2.  Wait for the project to deploy.

{% endcollapsible %}

### Step 4: Get Elasticsearch connection information {#cloud-es-config-mg}
This section discusses how to get connection information for Elasticsearch so you can configure the Magento application to use it as your search engine.

{% collapsible To get Elasticsearch connection information: %}

1.  Open an SSH tunnel to your integration environment.

        magento-cloud environment:ssh
2.  Enter the following command to get connection details:

        echo $MAGENTO_CLOUD_RELATIONSHIPS | base64 -d | json_pp
3.  Write down the connection information.
4.  Enter `exit` to close the SSH tunnel.
4.  Log in to the Magento Admin as an administrator.

    To view the Magento Admin connection details, enter the following command:

        magento-cloud variable:list
5.  Continue with the next section.

{% endcollapsible %}

### Step 5: Configure the Magento application to use Elasticsearch

{% collapsible To configure the Magento application: %}

{% include config/es-elasticsearch-magento.md %}

{% endcollapsible %}

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

