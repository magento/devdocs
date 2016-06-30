---
layout: default
group: 
subgroup: 14_Elastic
title: Upgrade Elasticsearch major version
menu_title: Upgrade Elasticsearch major version
menu_order: 100
menu_node: 
version: 2.1
github_link: config-guide/elasticsearch/es-config-upgrade.md
---

<img src="{{ site.baseurl }}common/images/ee-only_large.png" alt="This topic applies to Enterprise Edition only">


#### Contents

[wiki page](https://magento2.atlassian.net/wiki/display/PRD/Upgrade+Elasticsearch+1.7+%3D%3E+2.x)

Chuck:

You switch to the version upgraded server/cluster and then do a full reindex.  At that point you'll impact customers ( as there's no old working index ); so the merchant will be down for a while; then the index is done and everything is working correctly.

This would apply if the merchant is changing from Solr to Elasticsearch , or if the merchant is upgrading from ES 1.7 to ES 2.0 or ES 2.1 or some combination there off.

For the Elastic Config / Elastic Cluster configuration our ECG guy shave some experience there, might want to ping them to get their thoughts.

