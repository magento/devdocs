---
layout: default
group: config-guide
subgroup: Elastic
title: Install and configure Elasticsearch
menu_title: Install and configure Elasticsearch (Enterprise Edition only)
menu_order: 1
menu_node: parent
github_link: config-guide/solr/es-overview.md
---

<img src="{{ site.baseurl }}common/images/ee-only_large.png" alt="This topic applies to Enterprise Edition only">


#### Contents

*	<a href="#overview">Overview of Elasticsearch</a>
*	<a href="#dev">TBD</a>


<h2 id="overview">Overview of Elasticsearch</h2>
TBD

## Notes

### Java

{% include config/install-java.md %}




### elasticsearch

https://www.elastic.co/guide/en/elasticsearch/reference/current/setup.html

https://www.elastic.co/guide/en/elasticsearch/reference/current/setup-repositories.html

1.	rpm --import https://packages.elastic.co/GPG-KEY-elasticsearch
2.	vim /etc/yum.repos.d/elasticsearch.repo
3.	yum -y install elasticsearch
4.	chkconfig --add elasticsearch

Configure service: https://www.elastic.co/guide/en/elasticsearch/reference/current/setup-service.html

