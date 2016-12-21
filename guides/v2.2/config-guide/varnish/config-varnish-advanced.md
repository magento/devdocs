---
layout: default
group: config-guide
subgroup: 09_Varnish
title: Advanced Varnish configuration
menu_title: Advanced Varnish configuration
menu_order: 16
menu_node:
version: 2.2
github_link: config-guide/varnish/config-varnish-advanced.md
---

Varnish provides several features that prevent customers from experiencing long delays and timeouts when the Magento server is not functioning properly. These features can be configured in the `default.vcl` file. This topic describes the additions that Magento provides in the VCL (Varnish Configuration Language) file you download from Magento Admin.

See the [Varnish Reference Manual](https://www.varnish-cache.org/docs/4.1/reference/index.html) for details about using the Varnish Configuration Language.

## Health check {#health}
Varnish's health check feature polls the Magento server to determine whether it is responding in a timely manner. If it is responding normally, fresh content will be regenerated after the Time to Live (TTL) period has expired. If not, Varnish always serves stale content.

Magento defines the following default health check:

{% highlight json %}
.probe = {
    .url = "/pub/health_check.php";
    .timeout = 2s;
    .interval = 5s;
    .window = 10;
    .threshold = 5;
    }
{% endhighlight %}

Every 5 seconds, this health check calls the `pub/health_check.php` script. This script checks the availability of the server, each database, and Redis (if installed). The script must return a response within 2 seconds. If the script determines that any of these resources are down, it returns a 500 HTTP error code. If this error code is received in 6 out of 10 attempts, the backend is considered unhealthy.

For more information, see the <a href="https://www.varnish-cache.org/docs/4.1/users-guide/vcl-backends.html#health-checks" target="_blank">Varnish health checks</a> documentation.

## Grace mode {#grace}

Grace mode enables Varnish to keep an object in cache beyond its TTL value. Varnish can then serve the expired (stale) content while it fetches a new version. This improves the flow of traffic and decreases load times. It's used in the following situations:

* When the Magento backend is healthy, but a request is taking longer than normal
* When the Magento backend is not healthy.

The `vcl_hit` subroutine defines how Varnish responds to a request for objects that have been cached.

### When the Magento backend is healthy {#grace-healthy}

When the health checks determine that the Magento backend is healthy, Varnish checks whether the time remains in the grace period. The default grace period is 300 seconds, but a merchant can set the value from Admin as described in []. If the grace period hasn't expired, Varnish delivers the stale content. If the grace period has not expired, Varnish serves the stale content and asynchronously refreshes the object from the Magento backend.

To change the default grace period, edit the following line in [Configure Magento to use Varnish]({{page.baseurl}}config-guide/varnish/config-varnish-magento.html) the `vcl_hit` subroutine:

`if (obj.ttl + 300s > 0s) {`

### When the Magento backend is not healthy {#grace-unhealthy}

If the Magento backend is not responsive, Varnish serves stale content from cache for three days (or as defined in `beresp.grace`) plus the remaining TTL (which by default is one day), unless the cached content is manually purged.

## Saint mode {#saint}

Saint mode blacklists unhealthy backends for a configurable amount of time. As a result, unhealthy backends cannot serve traffic when using Varnish as a load balancer. Saint mode can be used in conjunction with grace mode to allow for complex handling of unhealthy backend servers. For example, if one backend server is unhealthy, retries can be routed to another server. If all other servers are down, then serve stale cached objects. The saint mode backend hosts and blackout periods are defined in the `default.vcl` file.

Saint mode can also be used when Magento instances are individually taken offline to perform maintenance and upgrade tasks without affecting the availability of the Magento site.

### Saint mode prerequisites {#saint-prereq}
You should designate one machine as the primary installation. On this machine, install the main instance of Magento, mySQL database, and Varnish. On this installation of Magento, you must turn off static file versioning. From Admin, set **Stores > Configuration > Advanced > Developer > Static Files Settings > Sign Static Files** to **No**.

On all other machines, the Magento instance must have access the primary machine's mySQL database. On these instances, make sure **Sign Static Files** is set to **No**.

Finally, all Magento instances must be in production mode. Before Varnish starts, clear the cache on each instance. In Admin, go to **System > Cache Management** and click **Flush Magento Cache**. You can also run the following command to clear the cache:

`bin/magento cache:flush`

### Installation {#saint-install}

Saint mode is not part of the main Varnish package. It is a separately-versioned vmod that must be downloaded and installed. As a result, you should re-compile Varnish from source, as described in the following articles:

* [Installing Varnish 5.0](https://www.varnish-cache.org/docs/5.0/installation/install.html)
* [Installing Varnish 4.1](https://www.varnish-cache.org/docs/4.1/installation/install.html)
* [Installing Varnish 4.0](https://www.varnish-cache.org/docs/4.0/installation/install.html)

After you've recompiled, you can install the Saint mode module. See [Varnish module collection](https://github.com/varnish/varnish-modules) for information about installing this module.

### Sample `vcl` file {#saint-sample}

The following code example shows the code that must be added to your `.vcl` file to enable saint mode. Place the `import` statements and `backend` definitions at the top of the file.

{% collapsible Click to show/hide %}
{% highlight cpp %}

import saintmode;
import directors;

backend default1 {
    .host = "192.168.0.1";
    .port = "8080";
    .first_byte_timeout = 600s;
        .probe = {
            .url = "/pub/health_check.php";
            .timeout = 2s;
            .interval = 5s;
            .window = 10;
            .threshold = 5;
        }
}

backend default2 {
    .host = "192.168.0.2";
    .port = "8080";
    .first_byte_timeout = 600s;
    .probe = {
        .url = "/pub/health_check.php";
        .timeout = 2s;
        .interval = 5s;
        .window = 10;
        .threshold = 5;
    }
}

sub vcl_init {
    # Instantiate sm1, sm2 for backends tile1, tile2
    # with 10 blacklisted objects as the threshold for marking the
    # whole backend sick.
    new sm1 = saintmode.saintmode(default1, 10);
    new sm2 = saintmode.saintmode(default2, 10);

    # Add both to a director. Use sm0, sm1 in place of tile1, tile2.
    # Other director types can be used in place of random.
    new magedirector = directors.random();
    magedirector.add_backend(sm1.backend(), 1);
    magedirector.add_backend(sm2.backend(), 1);
}

sub vcl_backend_fetch {
    # Get a backend from the director.
    # When returning a backend, the director will only return backends
    # saintmode says are healthy.
    set bereq.backend = magedirector.backend();
}

sub vcl_backend_response {
    if (beresp.status >= 500) {
        # This marks the backend as sick for this specific
        # object for the next 20s.
        saintmode.blacklist(20s);
        # Retry the request. This will result in a different backend
        # being used.
        return (retry);
    }
}

{% endhighlight %}
{% endcollapsible %}

#### Final step
<a href="{{page.baseurl}}config-guide/varnish/config-varnish-final.html">Final verification</a>
