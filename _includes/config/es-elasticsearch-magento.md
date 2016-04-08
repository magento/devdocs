<div markdown="1">

## Configure Magento to use Elasticsearch {#elastic-m2-configure}
This section discusses the minimum settings you must choose to test Elasticsearch with Magento 2. For additional details about configuring Elasticsearch, see TBD cross-ref to User Guide.

To configure Magento to use Elasticsearch:

1.	Log in to the Magento Admin as an administrator.
2.	Click **Stores** > Settings > **Configuration** > **Catalog** > **Catalog** > **Catalog Search**.
3.	From the **Search Engine** list, click **Elasticsearch** as the following figure shows.

	<img src="{{ site.baseurl }}common/images/elastic_choose-in-admin.png" width="650px">
4.	The following table discusses only the configuration options required to test the connection with Magento.

	Unless you changed Elasticsearch server settings, the defaults should work. Skip to the next step.

	<table>
		<tbody>
		<tr><th>Option</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>Elasticsearch Server Hostname</td>
		<td>Enter the fully qualified host name or IP address of the machine running Elasticsearch. </td>
	</tr>
	<tr>
		<td>Elasticsearch Server Port</td>
		<td>Enter the Elasticsearch web server proxy port. In our example, the port is <code>8080</code> but if you're using a secure proxy, it's typically <code>443</code>.</td>
	</tr>
	<tr>
		<td>Enable Elasticsearch HTTP Auth</td>
		<td>Click <strong>Yes</strong> only if you enabled authentication for your Elasticsearch server. If so, provide a user name and password in the provided fields.</td>
	</tr>
	</tbody>
	</table>
5.	Click <strong>Test Connection</strong>.

One of the following displays:

<table>
<tbody>
	<tr><th>Result</th>
	<th>Meaning</th>
	</tr>
	<tr>
		<td><img src="{{ site.baseurl }}common/images/elastic_test-success.png"></td>
		<td>Magento successfully connected to the Elasticsearch server. Continue with <a href="{{ site.gdeurl21 }}config-guide/elasticsearch/es-config-web-server.html">Secure communications between your web server and Elasticsearch</a>.</td>
	</tr>
	<tr>
		<td><img src="{{ site.baseurl }}common/images/elastic_test-fail.png"></td>
		<td><p>Try the following:</p>
			<ul>
				<li>Make sure the Elasticsearch server is running.</li>
				<li>If the Elasticsearch server is on a different host from Magento, log in to the Magento server and ping the Elasticsearch host. Resolve network connectivity issues and test the connection again.</li>
				<li>Examine the command window in which you started Elasticsearch for stack traces and exceptions. You must resolve those before you continue.<br />
	In particular, make sure you started Elasticsearch as a user with <code>root</code> privileges.</li>
<li>Make sure that <a href="{{ site.gdeurl21 }}config-guide/elasticsearch/elasticsearch-overview.html#prereq-secy">UNIX firewall and SELinux</a> are both disabled, or set up rules to enable Elasticsearch and Magento to communicate with each other.</li>
	<li>Verify the value of the <strong>Elasticsearch Server Hostname</strong> field. Make sure the server is available. You can try the server's IP address instead.</li>
	<li>Use the command <code>netstat -an | grep <em>listen-port</em></code> command to verify that the port specified in the <strong>Elasticsearch Server Port</strong> field is not being used by another process.<br />
	For example, to see if Elasticsearch is running on its default port, use the following command:
	<pre>netstat -an | grep 9200</pre>
	If Elasticsearch is running on port 9200, it displays similar to the following:
	<pre>tcp        0      0 :::9200            :::*          LISTEN</pre></li></ul></td>
	</tr>
</tbody>
</table>

### Reindexing catalog search and refreshing the full page cache {#es-reindex}
After you change Magento's Elasticsearch configuration, you must reindex the catalog search index and refresh the full page using the Admin or command line.

To refresh the cache using the Admin:

1.  In the Admin, click <strong>System</strong> > <strong>Cache Management</strong>.
2.  Select the check box next to <strong>Page Cache</strong>. 
3.  From the <strong>Actions</strong> list in the upper right, click <strong>Refresh</strong>.<br />
		The following figure shows an example.<br />
		<img src="{{ site.baseurl }}common/images/solr_refresh-cache.png" width="600px">

To clean the cache using the command line, use the <a href="{{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands-cache.html#config-cli-subcommands-cache-clean">`magento cache:clean`</a> command.

To reindex using the command line:

1.	Log in to your Magento server as, or switch to, the <a href="{{ site.gdeurl21 }}install-gde/prereq/apache-user.html">Magento file system owner</a>.
2.	Enter any of the following commands:

	Enter the following command to reindex the catalog search index only:

		php <your Magento install dir>/bin magento indexer:reindex catalogsearch_fulltext

	Enter the following command to reindex all indexers:

		php <your Magento install dir>/bin magento indexer:reindex

3.	Wait while the reindexing completes.

<div class="bs-callout bs-callout-info" id="info">
	<p>Unlike the cache, indexers are updated by a cron job. Make sure <a href="{{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands-cron.html">cron is enabled</a> before you start using Elasticsearch.</p>
</div>