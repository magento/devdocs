---
layout: default
group: config-guide
subgroup: Elastic
title: Install and configure Elasticsearch
menu_title: Install and configure Elasticsearch (Enterprise Edition only)
menu_order: 1
menu_node: parent
github_link: config-guide/elasticsearch/es-overview.md
---

<img src="{{ site.baseurl }}common/images/ee-only_large.png" alt="This topic applies to Enterprise Edition only">


#### Contents

*	<a href="#overview">Overview of Elasticsearch</a>
*	<a href="#es-prereq">Prerequisites</a>
*	[Configure Magento to use elasticsearch](#elastic-m2-configure)


<h2 id="overview">Overview of Elasticsearch</h2>
TBD - Features, advantages - TBD

### Supported versions {#es-spt-versions}
Magento Enterprise Edition (EE) version 2.1.x supports elasticsearch versions 1.7, 2.0, and 2.1.

## Prerequisites {#es-prereq}
The tasks discussed in this section require the following:

*	[Firewall and SELinux](#firewall-selinux)
*	<a href="#prereq-java">Install the Java Software Development Kit (JDK)</a>
*	[Install elasticsearch](#es-install-es)

{% include config/solr-elastic-selinux.md %}

{% include config/install-java.md %}

### Install elasticsearch {#es-install-es}
Magento Enterprise Edition (EE) version 2.1.x supports elasticsearch versions 1.7, 2.0, and 2.1.

This section discusses how to install the latest version. To install older versions, see the <a href="https://www.elastic.co/guide/en/elasticsearch/reference/index.html" target="_blank">elasticsearch reference</a> (for example, the <a href="https://www.elastic.co/guide/en/elasticsearch/reference/2.0/setup.html" target="_blank">2.0 reference</a>).

To install elasticsearch:

1.	Log in to your Magento server as a user with `root` privileges.
2.	Enter the following commands in the order shown:

	*	CentOS:

			rpm --import https://packages.elastic.co/GPG-KEY-elasticsearch
			vim /etc/yum.repos.d/elasticsearch.repo
			yum -y install elasticsearch
			chkconfig --add elasticsearch

	*	Ubuntu:

			TBD

	<a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/setup-repositories.html" target="_blank">More information about elasticsearch repositories</a>.
3.	Optionally configure the <a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/setup-service.html" target="_blank">elasticsearch service</a>.
4.	<a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/setup.html" target="_blank">Start elasticsearch</a>.

## Configure Magento to use elasticsearch {#elastic-m2-configure}
This section discusses the minimum settings you must choose to test elasticsearch with Magento 2. For additional details, see TBD cross-ref to User Guide.

To configure Magento to use elasticsearch:

1.	Log in to the Magento Admin as an administrator.
2.	Click **Stores** > Settings > **Configuration** > **Catalog** > **Catalog** > **Catalog Search**.
3.	From the **Search Engine** list, click **Elasticsearch** as the following figure shows.

	<img src="{{ site.baseurl }}common/images/elastic_choose-in-admin.png">
4.	The following table discusses only the configuration options required to test the connection with Magento.

	Unless you changed elasticsearch server settings, the defaults should work. Skip to the next step.

	<table>
		<tbody>
		<tr><th>Option</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>Elasticsearch Server Hostname</td>
		<td>Enter the fully qualified host name or IP address of the machine running elasticsearch. (If elasticsearch is running on the same host as Magento, you can use <code>localhost</code>.)</td>
	</tr>
	<tr>
		<td>Elasticsearch Server Port</td>
		<td>Enter elasticsearch's listen port. </td>
	</tr>
	<tr>
		<td>Enable Elasticsearch HTTP Auth</td>
		<td>Click <strong>Yes</strong> only if you enabled authentication for your elasticsearch server. If so, provide a user name and password in the provided fields.</td>
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
		<td>Magento successfully connected to the elasticsearch server. Continue with TBD.</td>
	</tr>
	<tr>
		<td><img src="{{ site.baseurl }}common/images/elastic_test-fail.png"></td>
		<td><p>Try the following:</p>
			<ul><li>Make sure the elasticsearch server is running.</li>
				<li>If the elasticsearch server is on a different host from Magento, log in to the Magento server and ping the elasticserver host. Resolve network connectivity issues and test the connection again.</li>
				<li>Examine the command window in which you started elasticsearch for stack traces and exceptions. You must resolve those before you continue.<br />
	In particular, make sure you started elasticsearch as a user with <code>root</code> privileges.</li>
<li>Make sure that <a href="{{ site.gdeurl21 }}config-guide/elasticsearch/elasticsearch-overview.html#prereq-secy">UNIX firewall and SELinux</a> are both disabled, or set up rules to enable elasticsearch and Magento to communicate with each other.</li>
	<li>Verify the value of the <strong>elasticsearch Server Hostname</strong> field. Make sure the server is available. You can try the server's IP address instead.</li>
	<li>Use the command <code>netstat -an | grep <em>listen-port</em></code> command to verify that the port specified in the <strong>elasticsearch Server Port</strong> field is not being used by another process.<br />
	For example, to see if elasticsearch is running on its default port, use the following command:
	<pre>netstat -an | grep 9200</pre>
	If elasticsearch is running on port 9200, it displays similar to the following:
	<pre>tcp        0      0 :::9200            :::*          LISTEN</pre></li></ul></td>
	</tr>
</tbody>
</table>