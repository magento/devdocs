---
layout: default
group: config-guide
subgroup: 15_Solr
title: Configure Solr and Magento
menu_title: Configure Solr and Magento
menu_order: 2
menu_node:
version: 2.0
github_link: config-guide/solr/solr-magento.md
---

<img src="{{ site.baseurl }}common/images/ee-only_large.png" alt="This topic applies to Enterprise Edition only">


#### Contents

*	<a href="#config-solr">Configure Solr to work with Magento</a>
*	<a href="#solr-reindex">Reindexing catalog search and refreshing the full page cache</a>
*	<a href="#solr-verify">Verify Solr is working</a>

<h2 id="config-solr">Configure Solr to work with Magento</h2>
The following topics discuss how to configure Solr to work with Magento EE:

* <a href="#config-solr-copy-config-files">Copy the Magento Solr configuration and start Solr</a>
* <a href="#config-solr-magento">Configure Magento to work with Solr</a>

<h3 id="config-solr-copy-config-files">Copy the Magento Solr configuration and start Solr</h3>
Magento comes packaged with a sample Solr configuration you can use and customize. To get started, you'll copy the Magento configuration to Solr, replacing any existing files. After that you can start Solr and begin configuring Magento to work with it.

<div class="bs-callout bs-callout-info" id="info">
	<p>The example Solr configuration is <em>not</em> intended to be used in a production site. It's for testing and development only. It's simple to use which makes it a great way for you to learn more about Solr.</p>
</div>

1.  As a user with <code>root</code> privileges, enter the following commands in the order shown to copy over the Solr configuration with the one packaged with Magento EE:

		cd <your Solr install dir>/example/solr
		cp -R collection1 magento2
		cd magento2
		cp -R <your Magento EE install dir>/vendor/magento/module-solr/conf/* ./conf/

	For example, if Solr is installed in <code>/opt/solr/solr-4.10.4</code> and Magento EE is installed in <code>/var/www/magento/html/magento2ee</code>, enter:

		cd /opt/solr/solr/solr-4.10.4/example/solr
		cp -R collection1 magento2
		cd magento2
		cp -R /var/www/html/magento2ee/vendor/magento/module-solr/conf/* ./conf/

	<div class="bs-callout bs-callout-info" id="info">
	 <p>If you're prompted to overwrite files, try the command <code>\cp -R &lt;your Magento EE install dir>/vendor/magento/module-solr/conf/* .</code></p>
	</div>

2.  After copying files, open `example/solr/magento2/core.properties` in a text editor and change:

		name=collection1

	to

		name=magento2

	<a href="https://wiki.apache.org/solr/Core%20Discovery%20%284.4%20and%20beyond%29?action=show&redirect=Core+Discovery+%284.3+and+beyond%29" target="_blank">More information about core.properties</a>
3.	Save your changes to `core.properties` and exit the text editor.

3.  *Task for Tomcat 6 with CentOS only*

	If you're using Tomcat 6 on CentOS, you must modify `<your Solr install dir>/example/solr/conf/solrconfig.xml`

	Locate the following line:

		<dataDir>${solr.data.dir:./solr/data}</dataDir>

	Change it to:

		<dataDir>${solr.data.dir:}</dataDir>

4.  Start Solr.

	As a user with <code>root</code> privileges, enter the following command to start Solr:

		java -jar <your Solr install dir>/example/start.jar

	<div class="bs-callout bs-callout-warning">
			<p>This method for starting Solr is for convenience and testing purposes only. In a production environment, you should start and stop Solr using a script as discussed in <a href="{{page.baseurl}}config-guide/solr/solr-script.html#solr-script">Script Solr startup and shutdown</a>.</p>
	</div>

<h3 id="config-solr-magento">Configure Magento to work with Solr</h3>
This section discusses how to configure Magento EE to use the Solr search engine.

To configure Magento to work with Solr:

1.  Log in to the Magento Admin as an administrator.
2.  Click <strong>STORES</strong> > <strong>Configuration</strong> > CATALOG > <strong>Catalog</strong> > <strong>Catalog Search</strong>.
3.  In the right pane, expand <strong>Catalog Search</strong>.
4.  The following table shows the minimum amount of information to enter to test the connection to your Solr search engine. Leave all other values at their defaults.<br />
<table>
<col width="30%">
<col width="70%">
<tbody>
	<tr><th>Option</th>
	<th>Description</th>
</tr>
<tr>
	<td>Search Engine</td>
	<td>Click <strong>Solr</strong></td>
</tr>
<tr>
	<td>Solr Server Hostname</td>
	<td>Enter the fully qualified host name or IP address of the machine running Solr. (If Solr is running on the same host as Magento, you can optionally use <code>localhost</code>.)</td>
</tr>
<tr>
	<td>Solr Server Port</td>
	<td>Enter Solr's listen port. (The example Jetty servlet container uses 8983. The default for Tomcat is usually 8080.)</td>
</tr>
<tr>
	<td>Solr Server Username</td>
	<td><em>Optional.</em> Enter a user name for <a href="http://wiki.apache.org/solr/SolrSecurity" target="_blank">Solr authentication</a>, if desired.</td>
</tr>
<tr>
	<td>Solr Server Password</td>
	<td><em>Optional.</em> Enter the user's password, if required.</td>
</tr>
<tr>
	<td>Solr Server Timeout</td>
	<td>Enter a connection timeout value, in seconds.</td>
</tr>
<tr>
	<td>Solr Server Path</td>
	<td><p>Specifies the path and name of the Solr web application. The path used by the example Solr configuration is <code>solr/magento2</code>.</p>
	<p>If you customized Solr, the value you enter in this field must exactly match the value of <code>webapp_name=&lt;value></code> in <code>&lt;your Solr install dir>/example/solr/magento2/conf/conf/scripts.conf</code></p>.
</td>
</tr>
</tbody>
</table>

The following figure shows an example.
<img src="{{ site.baseurl }}common/images/solr_config-admin.png" alt="Configure Magento to use Solr">

Click <strong>Test Connection</strong>.

The button changes as follows.

<table>
<col width="20%">
<col width="80%">
<tbody>
<tr>
	<th>Button state</th>
	<th>Meaning</th>
</tr>
<tr>
	<td><img src="{{ site.baseurl }}common/images/solr_test-success.png" width="140px" height="17px"></td>
	<td>The test connection succeeded. Click <strong>Save Config</strong> and continue with the next section.</td>
</tr>
<tr>
 <td><img src="{{ site.baseurl }}common/images/solr_test-fail.png" width="160px" height="16px"></td>
 <td><p>The test connection failed. Try the following:</p>
	<ul><li>Examine the command window in which you started Solr for stack traces and exceptions. You must resolve those before you continue.<br />
	In particular, make sure you started Solr as a user with <code>root</code> privileges.</li>
	<li>Verify that <a href="http://php.net/manual/en/filesystem.configuration.php" target="_blank"><code>allow_url_fopen = On</code></a> is present in your server's <code>php.ini</code>.<br />
	If you are not sure where <code>php.ini</code> is located, you can <a href="http://kb.mediatemple.net/questions/764/How+can+I+create+a+phpinfo.php+page%3F#gs" target="_blank">create a <code>phpinfo.php</code> page</a> to locate it.</li>
	<li>Make sure that <a href="{{page.baseurl}}config-guide/solr/solr-overview.html#prereq-secy">UNIX firewall and SELinux</a> are both disabled, or set up rules to enable Solr and Magento to communicate with each other.</li>
	<li>Verify the value of the <strong>Solr Server Hostname</strong> field. Make sure the server is available. You can try the server's IP address instead.</li>
	<li>Use the command <code>netstat -an | grep <em>listen-port</em></code> command to verify that the port specified in the <strong>Solr Server Port</strong> field is not being used by another process.<br />
	For example, to see if Solr is running on its default port, use the following command:
	<pre>netstat -an | grep 8983</pre>
	If Solr is running on port 8983, it displays similar to the following:
	<pre>tcp        0      0 :::8983            :::*          LISTEN</pre></li>
	<li>If Solr is installed on a remote machine, use the <code>ping</code> command to verify that machine is reachable from your Magento server.</li></ul>
	</td>
</tr>
</tbody>
</table>

Only after the test connection succeeds, click <strong>Save Config</strong> and continue with the next section.

<h2 id="solr-reindex">Reindexing catalog search and refreshing the full page cache</h2>
After you change Magento's Solr configuration, you must reindex the catalog search index and refresh the full page using the Admin or command line.

To refresh the cache using the Admin:

1.  In the Admin, click <strong>System</strong> > <strong>Cache Management</strong>.
2.  Select the check box next to <strong>Page Cache</strong>.
3.  From the <strong>Actions</strong> list in the upper right, click <strong>Refresh</strong>.<br />
		The following figure shows an example.<br />
		<img src="{{ site.baseurl }}common/images/solr_refresh-cache.png" width="600px">

To clean the cache using the command line, use the <a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-cache.html#config-cli-subcommands-cache-clean">`magento cache:clean`</a> command.

To reindex using the command line:

1.	Log in to your Magento server as, or switch to, the <a href="{{page.baseurl}}install-gde/prereq/file-sys-perms-over.html">Magento file system owner</a>.
2.	Enter the following command to reindex all indexers:

		php <your Magento install dir>/bin magento indexer:reindex

	Enter the following command to reindex the catalog search index only:

		php <your Magento install dir>/bin magento indexer:reindex catalogsearch_fulltext

3.	Wait while the indexers are reindexed.

<div class="bs-callout bs-callout-info" id="info">
	<p>Unlike the cache, indexers are updated by a cron job. Make sure <a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-cron.html">cron is enabled</a> before you start using Solr.</p>
</div>

<h2 id="solr-verify">Verify Solr is working</h2>
To verify Solr works, go to the storefront and search for any term (including one that won't return results) and look for the search in the Solr command window.

The following figure shows an example of a storefront search.

<img src="{{ site.baseurl }}common/images/solr_verify.png" width="750px" alt="Verify Solr works by searching the storefront">

The following excerpt from the Solr command window shows the same search:

	497008 [qtp2032251042-13] INFO  org.apache.solr.core.SolrCore  – [magento2] webapp=/solr path=/select params={facet.field={!key%3Dcategory_bucket}category_ids&json.nl=flat&fl=id,score&start=0&fq=store_id:1&rows=10000&q=sku:((hello*+hello))+OR+fulltext_en:((hello*+hello))+OR+attr_color_en:((hello*+hello))+OR+attr_description_en:((hello*+hello))+OR+attr_manufacturer_en:((hello*+hello))+OR+attr_name_en:((hello*+hello))+OR+attr_short_description_en:((hello*+hello))+OR+attr_status_en:((hello*+hello))+OR+attr_tax_class_id_en:((hello*+hello))&f.category_ids.facet.mincount=1&omitHeader=true&stats=true&wt=json&facet=true&stats.field=price_0_1} hits=0 status=0 QTime=58


#### Next step
<a href="{{page.baseurl}}config-guide/solr/solr-script.html">Prepare Solr for production</a>
