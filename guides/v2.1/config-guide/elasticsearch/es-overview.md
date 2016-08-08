---
layout: default
group: config-guide
subgroup: 14_Elastic
title: Install and configure Elasticsearch
menu_title: Install and configure Elasticsearch (Enterprise Edition only)
menu_order: 1
menu_node: parent
version: 2.1
github_link: config-guide/elasticsearch/es-overview.md
---

<img src="{{ site.baseurl }}common/images/ee-only_large.png" alt="This topic applies to Enterprise Edition only">


#### Contents

*	<a href="#overview">Overview of Elasticsearch</a>
*	<a href="#es-prereq">Prerequisites</a>
*	<a href="#es-resources">Additional resources</a>
*	[Configure nginx and Elasticsearch]({{page.baseurl}}config-guide/elasticsearch/es-config-nginx.html)
*	[Configure Apache and Elasticsearch]({{page.baseurl}}config-guide/elasticsearch/es-config-apache.html)
*	[Configure Elasticsearch stopwords]({{page.baseurl}}config-guide/elasticsearch/es-config-stopwords.html)

<h2 id="overview">Overview of Elasticsearch</h2>
In Magento 2.1 for the first time, you can use [Elasticsearch](https://www.elastic.co){:target="_blank"} for searching your catalog.

*	Elasticsearch performs quick and advanced searches on products in the catalog
*	Elasticsearch analyzers support multiple languages
*	Supports stop words and synonyms
*	Indexing does not impact customers until reindex is completed

	Elasticsearch returns search results based on the last generated index until the new one has been completely indexed so there's no disruption to customers

*	Accurate, performant, scalable
*	Works well out of the box 
*	Easy to horizontally scale
*	Supports real-time data and analysis
*	Can be used as a document-oriented data store
*	Applications in framework beyond search&mdash;reporting, personalization, performance, and storage

### Supported versions {#es-spt-versions}
Magento Enterprise Edition (EE) version 2.1.x supports the following Elasticsearch versions:

*	If you get the Elasticsearch software from the Elasticsearch Linux repository, we support versions 1.0 and later, up to 5.0&mdash;including all 2.x versions.
*	If you get the Elasticsearch software from their [Elasticsearch-PHP repository](https://github.com/elastic/elasticsearch-php){:target="_blank"}, we support the `1.0` and `2.0` branches.

### Recommended configuration {#es-arch}
The following figure shows our recommended configuration. All of the tasks we discuss assume you've configured your system this way.

<img src="{{ site.baseurl }}common/images/elastic_config.png" width="500px">

The preceding diagram shows:

*	The Magento application and Elasticsearch are installed on different hosts.

	Running on separate hosts is secure, enables Elasticsearch to be scaled, and is necessary for proxying to work. (Clustering Elasticsearch is beyond the scope of this guide but you can find more information in the [Elasticsearch documentation](https://www.elastic.co/guide/en/elasticsearch/guide/current/distributed-cluster.html){:target="_blank"}.)
*	Each host has its own web server; the web servers don't have to be the same.

	For example, the Magento application can run Apache and Elasticsearch can run nginx.
*	Both web servers use Transport Layer Security (TLS).

	Setting up TLS is beyond the scope of our documentation.

Search requests are processed as follows:

1.	A search request from a user is received by the Magento web server, which forwards it to the Elasticsearch server.

	You configure Elasticsearch in the Magento Admin to connect to the proxy's host and port. We recommend the web server's SSL port (by default, 443).
2.	The Elasticsearch web server (listening on port 443) proxies the request to the Elasticsearch server (by default, it listens on port 9200).
3.	Access to Elasticsearch is further protected by HTTP Basic authentication.

	For any request to reach Elasticsearch, it must travel over SSL *and* provide a valid user name and password.
4.	Elasticsearch processes the search request.
5.	Communication returns along the same route, with the Elasticsearch web server acting as a secure reverse proxy.

## Prerequisites {#es-prereq}
The tasks discussed in this section require the following:

*	[Firewall and SELinux](#firewall-selinux)
*	<a href="#prereq-java">Install the Java Software Development Kit (JDK)</a>
*	[Install Elasticsearch](#es-install-es)

{% include config/solr-elastic-selinux.md %}

{% include config/install-java.md %}

### Install Elasticsearch {#es-install-es}
Magento Enterprise Edition (EE) version 2.1.x supports Elasticsearch versions 1.7, 2.0, and 2.1.

This section discusses how to install the latest version. To install older versions, see the <a href="https://www.elastic.co/guide/en/Elasticsearch/reference/index.html" target="_blank">Elasticsearch reference</a> (for example, the <a href="https://www.elastic.co/guide/en/Elasticsearch/reference/2.0/setup.html" target="_blank">2.0 reference</a>).

To install Elasticsearch:

1.	Log in to your Magento server as a user with `root` privileges.
2.	Enter the following commands in the order shown:

	*	CentOS:

			rpm --import https://packages.elastic.co/GPG-KEY-Elasticsearch
			vim /etc/yum.repos.d/Elasticsearch.repo

		Add the following:

			[elasticsearch-2.x]
			name=Elasticsearch repository for 2.x packages
			baseurl=http://packages.elastic.co/elasticsearch/2.x/centos
			gpgcheck=1
			gpgkey=http://packages.elastic.co/GPG-KEY-elasticsearch
			enabled=1

		Enter the following commands:

			yum -y install elasticsearch
			chkconfig --add elasticsearch

	*	Ubuntu:

			wget -qO - https://packages.elastic.co/GPG-KEY-Elasticsearch | sudo apt-key add -
			echo "deb http://packages.elastic.co/Elasticsearch/2.x/debian stable main" | sudo tee -a /etc/apt/sources.list.d/Elasticsearch-2.x.list
			sudo apt-get -y update && sudo apt-get -y install Elasticsearch

	<a href="https://www.elastic.co/guide/en/elasticsearch/reference/2.1/setup-repositories.html" target="_blank">More information about Elasticsearch repositories</a>.
3.	Optionally configure the <a href="https://www.elastic.co/guide/en/elasticsearch/reference/2.x/setup-service.html" target="_blank">Elasticsearch service</a>.
4.	Start Elasticsearch:

		service elasticsearch start
5.	Verify that Elasticsearch is working by entering the following command on the server on which it's running:

		curl -i http://127.0.0.1:9200/_cluster/health

	Messages similar to the following display if Elasticsearch is running:

		{"cluster_name":"elasticsearch","status":"green","timed_out":false,"number_of_nodes":1,"number_of_data_nodes":1,"active_primary_shards":0,"active_shards":0,"relocating_shards":0,"initializing_shards":0,"unassigned_shards":0,"delayed_unassigned_shards":0,"number_of_pending_tasks":0,"number_of_in_flight_fetch":0,"task_max_waiting_in_queue_millis":0,"active_shards_percent_as_number":100.0}

## Additional resources {#es-resources}
*	<a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/_basic_concepts.html" target="_blank">Elasticsearch Basic Concepts</a>
*	<a href="https://www.elastic.co/guide/en/elasticsearch/guide/current/distributed-cluster.html" target="_blank">Life Inside a Cluster</a>
*	<a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/setup-configuration.html" target="_blank">Elasticsearch Configuration</a>

#### Next

*	[Configure nginx and Elasticsearch]({{page.baseurl}}config-guide/elasticsearch/es-config-nginx.html)
*	[Configure Apache and Elasticsearch]({{page.baseurl}}config-guide/elasticsearch/es-config-apache.html)
