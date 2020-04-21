This section discusses the minimum settings you must choose to test Elasticsearch with Magento 2.
For additional details about configuring Elasticsearch, see the [{{site.data.var.ee}} User Guide](http://docs.magento.com/m2/ee/user_guide/catalog/search-elasticsearch.html).

## Configure Elasticsearch within Magento

To configure Magento to use Elasticsearch:

1. Log in to the Magento Admin as an administrator.
1. Click **Stores** > Settings > **Configuration** > **Catalog** > **Catalog** > **Catalog Search**.
1. From the **Search Engine** list, select your Elasticsearch version.

The following table lists the required configuration options to configure and test the connection with Magento.
Unless you changed Elasticsearch server settings, the defaults should work. Skip to the next step.

|Option|Description|
|--- |--- |
|**Elasticsearch Server Hostname**|Enter the fully qualified hostname or IP address of the machine running Elasticsearch.</br>{{site.data.var.ece}}: Get this value from your integration system.|
|**Elasticsearch Server Port**|Enter the Elasticsearch web server proxy port. The default is 9200.</br>{{site.data.var.ece}}: Get this value from your integration system.|
|**Elasticsearch Index Prefix**|Enter the Elasticsearch index prefix. If you use a single Elasticsearch instance for more than one Magento installation (Staging and Production environments), you must specify a unique prefix for each installation. Otherwise, you can use the default prefix magento2.|
|**Enable Elasticsearch HTTP Auth**|Click **Yes** only if you enabled authentication for your Elasticsearch server. If so, provide a username and password in the provided fields.|

{:start="4"}

1. Click **Test Connection**.

You will see either:

![]({{ site.baseurl }}/common/images/elastic_test-success.png)

Continue with:

*  [Configure Apache and Elasticsearch]({{ page.baseurl }}/install-gde/prereq/es-config-apache.html)
*  [Configure nginx and Elasticsearch]({{ page.baseurl }}/install-gde/prereq/es-config-nginx.html)

or you will see:

![]({{ site.baseurl }}/common/images/elastic_test-fail.png)

If so, try the following:

*  Make sure the Elasticsearch server is running.
*  If the Elasticsearch server is on a different host from Magento, log in to the Magento server and ping the Elasticsearch host. Resolve network connectivity issues and test the connection again.
*  Examine the command window in which you started Elasticsearch for stack traces and exceptions. You must resolve those before you continue. In particular, make sure you started Elasticsearch as a user with `root` privileges.
*  Make sure that [UNIX firewall and SELinux]({{ page.baseurl }}/install-gde/prereq/elasticsearch.html#firewall-selinux) are both disabled, or set up rules to enable Elasticsearch and Magento to communicate with each other.
*  Verify the value of the **Elasticsearch Server Hostname** field. Make sure the server is available. You can try the server's IP address instead.
*  Use the `netstat -an | grep **listen-port**` command to verify that the port specified in the **Elasticsearch Server Port** field is not being used by another process.

  For example, to see if Elasticsearch is running on its default port, use the following command:

  ```bash
  netstat -an | grep 9200
  ```

  If Elasticsearch is running on port 9200, it displays similar to the following:
  `tcp        0      0 :::9200            :::*          LISTEN`

## Reindexing catalog search and refreshing the full page cache {#es-reindex}

After you change Magento's Elasticsearch configuration, you must reindex the catalog search index and refresh the full page cache using the Admin or command line.

To refresh the cache using the Admin:

1. In the Admin, click **System** > **Cache Management**.
1. Select the checkbox next to **Page Cache**.
1. From the **Actions** list in the upper right, click **Refresh**.
   The following figure shows an example.
   ![]({{ site.baseurl }}/common/images/solr_refresh-cache.png){:width="600px"}

To clean the cache using the command line, use the [`magento cache:clean`]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cache.html#config-cli-subcommands-cache-clean) command.

To reindex using the command line:

1. Log in to your Magento server as, or switch to, the [Magento file system owner]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html).
1. Enter any of the following commands:

   Enter the following command to reindex the catalog search index only:

   ```bash
   bin/magento indexer:reindex catalogsearch_fulltext
   ```

   Enter the following command to reindex all indexers:

   ```bash
   bin/magento indexer:reindex
   ```

1. Wait until reindexing completes.

   {:.bs-callout-info}
   Unlike the cache, indexers are updated by a cron job. Make sure [cron is enabled]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cron.html) before you start using Elasticsearch.
