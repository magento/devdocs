---
layout: default
group: config-guide
subgroup: 09_Varnish
title: Advanced Varnish configuration
menu_title: Advanced Varnish configuration
menu_order: 15
menu_node:
version: 2.2
github_link: config-guide/varnish/config-varnish-advanced.md
---

Varnish provides several features that prevent customers from experiencing long delays and timeouts when the Magento server is not functioning properly. You can download a `varnish.vcl` file from the Admin Magento has updated the `default`

## Health check {#health}
Varnish's health check feature polls the backend (Magento) to determine whether it is responding as expected. If it is responding normally, then Varnish can fetch resources normally. If not, Varnish responds as directed  within the `.vcl` file.

Magento defines the following default health check:

{% highlight json %}
.probe = {
    .url = "/pub/health_check.php";
    .timeout = 500 ms;
    .interval = 5s;
    .window = 10;
    .threshold = 8;
    }
{% endhighlight %}

Every 5 seconds, this health check calls the `pub/health_check.php` script, which checks the availability of the server, each database, and Redis (if installed). If the script determines that any of these resources are down, it returns a 500 HTTP error code. If this error code is received in 8 out of 10 attempts, the backend is considered unhealthy.

For more information, see <a href="https://www.varnish-cache.org/docs/4.1/users-guide/vcl-backends.html#health-checks" target="_blank">Varnish health checks</a> documenation.

## Grace mode {#grace}

Grace mode enables Varnish to serve expired (stale) content in the following situations:

* When the volume of requests could cause a logjam.
* When the backend is not healthy.

The Magento default grace period is 1 day. If Magento is not responsive, Varnish serves expired content for 1 day, (unless the cached content is manually purged). Varnish makes calls to update the cached content asynchronously. If Magento is healthy, Varnish calls Magento to generate fresh content when the TTL (time to live) setting is reached. You can configure the grace period and TTL value from Admin.

## Saint mode {#saint}

Saint mode specifies what Varnish should do when a Magento server is unable to deliver a successful response. Saint mode is often used to redirect requests when 50x HTTP error codes occur. When using Varnish as a load balancer, saint mode with grace mode can allow for the complex handling of unhealthy backend servers. For example, you can configure Varnish to mark one server as unhealthy, then retry the operation on another server, and finally, serve stale cache if the second backend server also gets marked as unhealthy.

The following example code

{% highlight json %}

{% endhighlight %}


## Health check {#health}
Varnish health check polls the backend to determine whether it is responding as expected.

Magento defines the following default health check:

{% highlight json %}
.probe = {
    .url = "/pub/health_check.php";
    .timeout = 500 ms;
    .interval = 5s;
    .window = 10;
    .threshold = 8;
    }
{% endhighlight %}

Every 5 seconds, this health check calls the `pub/health_check.php` script, which checks the availability of the server, Redis, as well as the databases. If the script determines that any of these resources are down, it returns a 500 HTTP error code. If this error code is received in 8 out of 10 attempts,


https://www.varnish-cache.org/docs/4.1/users-guide/vcl-backends.html#health-checks
