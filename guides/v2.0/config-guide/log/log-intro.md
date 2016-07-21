---
layout: default
group: config-guide 
subgroup: 05_log
title: Custom logging
menu_title: Custom logging
menu_node: parent
menu_order: 1
version: 2.0
github_link: config-guide/log/log-intro.md
---


#### Contents

*	[Logging overview](#config-log-over)
*	[Magento logging in more detail]({{ page.baseurl }}config-guide/log/log-magento.html)
*	[Example&mdash;logging database activity]({{ page.baseurl }}config-guide/log/log-db.html)

## Logging overview {#config-log-over}
Logs provide visibility into Magento system processes; for example, debugging information that assists you with understanding when an error occurred or what lead to the error.

This topic focuses on file-based logging, although Magento provides the flexibility to store logs in the database as well.

We recommend using centralized application logging for the following reasons:

*	It allows storage of logs on a server other than the application server and decreases disk I/O operations, simplifying support of the application server.

*	It makes processing of logs data more effective by using special tools without impact to a production server (for example, [logstash](https://www.elastic.co/products/logstash){:target="_blank"}, [logplex](https://devcenter.heroku.com/articles/logplex){:target="_blank"}, or [fluentd](http://www.fluentd.org){:target="_blank"}).

<div class="bs-callout bs-callout-info" id="info">
  <p>Magento does not recommend or endorse any particular logging solution.</p>
</div>

### Magento PSR-3 compliance
The [PSR-3 standard](https://zendframework.github.io/zend-log/psr3){:target="_blank"} defines a common PHP interface for logging libraries. The main goal of PSR-3 is to allow libraries to receive a `Psr\Log\LoggerInterface` object and write logs to it in a simple and universal way.

This provides the ability for the implementation to be replaced easily without worry that such replacement may break the application code. It also guarantees a custom component will work even when the Magento log implementation is changed in a future version of the system.

#### Next
[Magento logging in more detail]({{ page.baseurl }}config-guide/log/log-magento.html)
