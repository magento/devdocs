---
group: configuration-guide
title: Configuration Guide
functional_areas:
  - Configuration
  - System
  - Setup
---

## Configure the Magento application {#configuration}

You can configure the Magento application in any of the following ways:

*  General configuration

   *  Using a [command-line utility]({{page.baseurl}}/config-guide/cli/config-cli.html) (for example, enable or disable cache types, run indexers, set up translations, and so on)
   *  Manually to set up [bootstrap parameters]({{page.baseurl}}/config-guide/bootstrap/magento-bootstrap.html)

*  Caching

   *  [Set up Varnish]({{page.baseurl}}/config-guide/varnish/config-varnish.html)
   *  [Set up caching]({{page.baseurl}}/config-guide/cache.html)
   *  [Use Redis for the Magento page and default cache]({{ page.baseurl}}/config-guide/redis/redis-pg-cache.html)
   *  [Use Redis for session storage]({{ page.baseurl }}/config-guide/redis/redis-session.html)
   *  [Set up database caching]({{ page.baseurl }}/extension-dev-guide/cache/partial-caching/database-caching.html)

*  Magento in production

   *  [pipeline deployment]({{page.baseurl}}/config-guide/deployment/pipeline/)
   *  [Magento ownership and permissions in development and production]({{page.baseurl}}/config-guide/prod/prod_file-sys-perms.html)
   *  [Single machine deployment]({{ page.baseurl }}/config-guide/deployment/single-machine.html)

*  Session storage
   *  [memcache]({{page.baseurl}}/config-guide/memcache/memcache.html)
   *  [Redis]({{page.baseurl}}/config-guide/redis/redis-session.html)
   *  [How to locate session files]({{page.baseurl}}/config-guide/sessions.html)

*  Search engine
   *  [Configure and maintain Elasticsearch]({{ page.baseurl }}/config-guide/elasticsearch/es-overview.html)

*  Message queues
   *  [RabbitMQ]({{page.baseurl}}/config-guide/mq/rabbitmq-overview.html)

*  {{site.data.var.ee}} only
   *  [Split databases]({{page.baseurl}}/config-guide/multi-master/multi-master.html)
