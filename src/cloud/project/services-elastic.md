---
group: cloud-guide
title: Set up Elasticsearch service
functional_areas:
  - Cloud
  - Setup
  - Search
redirect_from:
  - /cloud/project/project-conf-files_services-elastic.html
---

[Elasticsearch](https://www.elastic.co) is an open source product that enables you to take data from any source, any format, and search and visualize it in real time.

-  Elasticsearch performs quick and advanced searches on products in the product catalog
-  Elasticsearch Analyzers support multiple languages
-  Supports stop words and synonyms
-  Indexing does not impact customers until the reindex operation completes

{% include cloud/service-config-integration-starter.md %}

{:.bs-callout-tip}
Magento recommends that you always set up Elasticsearch for your {{ site.data.var.ece }} project even if you plan to configure a third-party search tool for your {{ site.data.var.ee }} application. Setting up Elasticsearch provides a fallback option in the event that the third-party search tool fails.

{:.procedure}
To enable Elasticsearch:

1. For Starter projects, add the `elasticsearch` service to the `.magento/services.yaml` file with the Elasticsearch version and allocated disk space in MB.

   ```yaml
   elasticsearch:
       type: elasticsearch:<version>
       disk: 1024
   ```

   For Pro projects, you must submit a Magento Support ticket to change the Elasticsearch version.

   For details on determining the correct version to install, see [Elasticsearch software compatibility](#elasticsearch-software-compatibility).

1. Set the `relationships` property in the `.magento.app.yaml` file.

   ```yaml
   relationships:
       elasticsearch: "elasticsearch:elasticsearch"
   ```

1. Add, commit, and push code changes.

   ```bash
   git add -A && git commit -m "Enable Elasticsearch" && git push origin <branch-name>
   ```

   For information on how these changes affect your environments, see [Services]({{ site.baseurl }}/cloud/project/services.html).

1. [Verify the service relationships]({{ site.baseurl }}/cloud/project/services.html#service-relationships) and configure Elasticsearch in the Admin UI.

1. Reindex the Catalog Search index.

   ```bash
   bin/magento indexer:reindex catalogsearch_fulltext
   ```

1. Clean the cache.

   ```bash
   bin/magento cache:clean
   ```

{%include cloud/tip-change-installed-service-version.md%}

## Elasticsearch software compatibility

When you install or upgrade your {{ site.data.var.ece }} project, always check for compatibility between the Elasticsearch service version and the [Elasticsearch PHP](https://github.com/elastic/elasticsearch-php) client for {{ site.data.var.ee }}.

-  **First time setup**–Confirm that the Elasticsearch version specified in the `services.yaml` file is compatible with the Elasticsearch PHP client configured for {{ site.data.var.ee }}.

-  **Project upgrade**–Verify that the Elasticsearch PHP client in the new Magento version is compatible with the Elasticsearch service version installed on the Cloud infrastructure.

{% include cloud/cloud-elasticsearch-client-compatibility.md %}

{%include cloud/note-cloud-services-compatibility.md%}

{:.procedure}
To check Elasticsearch software compatibility:

1. Use SSH to log in to the remote environment.

1. Check the Composer package version for `elasticsearch/elasticsearch`.

   ```bash
   composer show elasticsearch/elasticsearch
   ```

   In the response, check the installed version in the `versions` property.

   ```terminal
   name     : elasticsearch/elasticsearch
   descrip. : PHP Client for Elasticsearch
   keywords : client, elasticsearch, search
   versions : * v6.7.1
   type     : library
   license  : Apache License 2.0 (Apache-2.0) (OSI approved) https://spdx.org    licensesApache-2.0.html#licenseText
   source   : [git] https://github.com/elastic    elasticsearch-php.git7be453dd36d1b141b779f2cb956715f8e04ac2f4
   dist     : [zip] https://api.github.com/repos/elastic/elasticsearch-php/zipball/     7be453dd36d1b141b779f2cb956715f8e04ac2f4 7be453dd36d1b141b779f2cb956715f8e04ac2f4
   path     : /app/vendor/elasticsearch/elasticsearch
   names    : elasticsearch/elasticsearch
   ```

   Also, you can find the Elasticsearch PHP client version in the  `composer.lock` file in the environment root directory.

1. From the command line, retrieve the Elasticsearch service connection details.

   ```bash
   vendor/bin/ece-tools env:config:show services
   ```

   In the response, find the IP address for the Elasticsearch service endpoint:

   ```terminal
   | elasticsearch:                                                                                                  |
   +------------------------------------------+----------------------------------------------------------------------+
   | username                                 | null                                                                 |
   | scheme                                   | http                                                                 |
   | service                                  | elasticsearch                                                        |
   | fragment                                 | null                                                                 |
   | ip                                       | 169.254.220.11                                                       |
   | hostname                                 | dzggu33f75wi3sd24lgwtoupxm.elasticsearch.service._.magentosite.cloud |
   | public                                   | false                                                                |
   | cluster                                  | fo3qdoxtla4j4-master-7rqtwti                                         |
   | host                                     | elasticsearch.internal                                               |
   | rel                                      | elasticsearch                                                        |
   | query                                    |                                                                      |
   | path                                     | null                                                                 |
   | password                                 | null                                                                 |
   | type                                     | elasticsearch:6.5                                                    |
   | port                                     | 9200                                                                 |
   +------------------------------------------+----------------------------------------------------------------------+
   ```

1. Retrieve the installed Elasticsearch service `version:number` from the service endpoint.

   ```bash
   curl -XGET <elasticsearch-service-endopint-ip-address>:9200/
   ```

   ```terminal
   {
      "name" : "-AqGi9D",
      "cluster_name" : "elasticsearch",
      "cluster_uuid" : "_yze6-ywSEW1MaAF8ZPWyQ",
      "version" : {
        "number" : "6.5.4",
        "build_flavor" : "default",
        "build_type" : "deb",
        "build_hash" : "82a8aa7",
        "build_date" : "2019-01-23T12:07:18.760675Z",
        "build_snapshot" : false,
        "lucene_version" : "7.5.0",
        "minimum_wire_compatibility_version" : "5.6.0",
        "minimum_index_compatibility_version" : "5.0.0"
   },
   "  tagline" : "You Know, for Search"
   }
   ```

1. Check version compatibility between the Elasticsearch service and the PHP client.

   If the versions are incompatible, make one of the following updates to your environment configuration:

   -  [Change the Elasticsearch PHP client]({{ site.baseurl }}/guides/v2.3/config-guide/elasticsearch/es-downgrade.html) to a version that is compatible with the Elasticsearch service version.

   -  Change the Elasticsearch service version in the `services.yaml` file to a version that is compatible with the Elasticsearch PHP client.

      {%include /cloud/note-pro-using-yaml-support.md%}

## Restart the Elasticsearch service

If you need to restart the [Elasticsearch](https://www.elastic.co) service, you must contact Magento support.

## Additional search configuration

-  By default, the search configuration for Cloud environments regenerates each time you deploy. You can use the `SEARCH_CONFIGURATION` deploy variable to retain custom search settings between deployments. See [Deploy variables]({{ site.baseurl }}/cloud/env/variables-deploy.html#search_configuration).

-  After you set up the Elasticsearch service for your project, use the Magento Admin UI to test the Elasticsearch connection and customize Elasticsearch settings for {{ site.data.var.ee }}.

### Elasticsearch plugins

Optionally, you can add Elasticsearch plugins by adding the `configuration:plugins` section to the `.magento/services.yaml` file. For example, the following code enables the ICU analysis and Phonetic analysis plugins.

```yaml
elasticsearch:
    type: elasticsearch:<service-version>
    disk: 1024
    configuration:
        plugins:
            - analysis-icu
            - analysis-phonetic
```

If you use the ElasticSuite third-party plugin, you must [update the `{{site.data.var.ct}}` package]({{ site.baseurl }}/cloud/project/ece-tools-update.html) to version 2002.0.19 or later.
When setting up ElasticSuite, add the configuration settings to the `ELASTICSUITE_CONFIGURATION` deploy variable. This configuration saves the settings across deployments.

{:.bs-callout-tip}
For details on using or troubleshooting the Elasticsuite plugin with Magento, see the [Elasticsuite documentation](https://github.com/Smile-SA/elasticsuite).
