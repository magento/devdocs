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
*	[Configure Magento to use Elasticsearch]({{ site.gdeurl21 }}config-guide/elasticsearch/es-config-magento.html)
*	[Configure your web server to use Elasticsearch]({{ site.gdeurl21 }}config-guide/elasticsearch/es-config-web-server.html)
*	[Configure Elasticsearch stopwords]({{ site.gdeurl21 }}config-guide/elasticsearch/es-config-stopwords.html)
*	[Manage your Elasticsearch cluster]({{ site.gdeurl21 }}config-guide/elasticsearch/es-config-cluster.html)
*	[Upgrade to Elasticsearch 2.x]({{ site.gdeurl21 }}config-guide/elasticsearch/es-config-upgrade.html)


<h2 id="overview">Overview of Elasticsearch</h2>
TBD draft language TBD

*	Uses Elasticsearch to fulfill quick and advanced search on products in the catalog
*	Elasticsearch analyzers support multiple languages
*	Supports stop words and synonyms
*	Indexing does not impact customers until re-index is completed

	Solr can return odd results while reindexing

	Elasticsearch returns search results based on the last generated index until the new one has been completely indexed so there's no disruption to a merchant's customers

*	Accurate, performant, scalable
*	Works well out of the box 
*	Easier to horizontally scale
*	Supports real-time data and analysis
*	Can be used as a document-oriented data store
*	Applications in framework beyond search&mdash;reporting, personalization, performance, and storage

### Supported versions {#es-spt-versions}
Magento Enterprise Edition (EE) version 2.1.x supports Elasticsearch versions 1.7, 2.0, and 2.1.

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
			yum -y install Elasticsearch
			chkconfig --add Elasticsearch

	*	Ubuntu:

			wget -qO - https://packages.elastic.co/GPG-KEY-Elasticsearch | sudo apt-key add -
			echo "deb http://packages.elastic.co/Elasticsearch/2.x/debian stable main" | sudo tee -a /etc/apt/sources.list.d/Elasticsearch-2.x.list
			sudo apt-get -y update && sudo apt-get -y install Elasticsearch

	<a href="https://www.elastic.co/guide/en/elasticsearch/reference/2.1/setup-repositories.html" target="_blank">More information about Elasticsearch repositories</a>.
3.	Optionally configure the <a href="https://www.elastic.co/guide/en/Elasticsearch/reference/current/setup-service.html" target="_blank">Elasticsearch service</a>.
4.	<a href="https://www.elastic.co/guide/en/Elasticsearch/reference/current/setup.html" target="_blank">Start Elasticsearch</a>.



#### Next
TBD