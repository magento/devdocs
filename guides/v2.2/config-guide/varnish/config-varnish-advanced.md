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

Varnish provides several features that prevent customers from experiencing long delays and timeouts when the Magento backend is not functioning properly. These features can be configured in the `default.vcl` file. This topic describes the additions that Magento provides in the VCL file that is generated from Admin.

See the [Varnish Reference Manual](https://www.varnish-cache.org/docs/4.1/reference/index.html) for details about using the Varnish Configuration Language.

## Health check {#health}
Varnish's health check feature polls the Magento backend to determine whether it is responding as expected. If it is responding normally,
fresh content will be regenerated after TTL has expired. If not, Varnish always serves stale content.

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

Grace mode enables Varnish to keep an object in cache beyond its TTL (time to live) value. Varnish can then serve the expired (stale) content while it fetches a new version. This improves the flow of traffic and decreases load times. It's used in the following situations:

* When the Magento backend is healthy, but a request is taking longer than expected
* When the Magento backend is not healthy.

The `vcl_hit` subroutine defines how Varnish responds to a request.

### When the Magento backend is healthy {#grace-healthy}

When the health checks determine that the Magento backend is healthy, Varnish checks whether the time remains in the grace period. The default grace period is 300 seconds, but a merchant can set the value from Admin. If the grace period hasn't expired, Varnish delivers the stale content. If the grace period has expired, Varnish serves the stale content and synchronously refreshes the object from the Magento backend.

To change the default grace period, edit the following line in the `vcl_hit` subroutine:

`if (obj.ttl + 300s > 0s) {`

### When the Magento backend is not healthy {#grace-unhealthy}

If the Magento backend is not responsive, Varnish serves stale content from cache for 3 days, or as defined in `beresp.grace`, unless the cached content is manually purged. Varnish makes calls to update the cached content asynchronously.

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

The main Varnish package must be installed before you can install any vmods. See [Varnish module collection](https://github.com/varnish/varnish-modules) for information about installing the Saint mode module.

### Sample `vcl` file {#saint-sample}

The following example shows `.vcl` file in which saint mode is enabled. This example does not include grace mode, but the two modes can be configured at the same time.

{% collapsible Click to show/hide %}
{% highlight cpp %}

vcl 4.0;

import std;

# Begin saint mode configuration
import saintmode;
import directors;
# End saint mode configuration

# The minimal Varnish version is 4.0
# For SSL offloading, pass the following header in your proxy server or load balancer: 'X-Forwarded-Proto: https'
# Sample configuration with saint mode

# Begin saint mode configuration
backend default1 {
    .host = "192.168.0.1";
    .port = "8080";
    .first_byte_timeout = 600s;
        .probe = {
            .url = "/pub/health_check.php";
            .timeout = 5s;
            .interval = 5s;
            .window = 3;
            .threshold = 2;
        }
}

backend default2 {
    .host = "192.168.0.2";
    .port = "8080";
    .first_byte_timeout = 600s;
    .probe = {
        .url = "/pub/health_check.php";
        .timeout = 5s;
        .interval = 5s;
        .window = 3;
        .threshold = 2;
    }
}
# End saint mode configuration

acl purge {
    "192.168.0.1";
    "192.168.0.2";
}

# Begin saint mode configuration
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
# End saint mode configuration

sub vcl_recv {
    if (req.method == "PURGE") {
        if (client.ip !~ purge) {
            return (synth(405, "Method not allowed"));
        }
        if (!req.http.X-Magento-Tags-Pattern) {
            return (synth(400, "X-Magento-Tags-Pattern header required"));
        }
        ban("obj.http.X-Magento-Tags ~ " + req.http.X-Magento-Tags-Pattern);
        return (synth(200, "Purged"));
    }

    if (req.method != "GET" &&
        req.method != "HEAD" &&
        req.method != "PUT" &&
        req.method != "POST" &&
        req.method != "TRACE" &&
        req.method != "OPTIONS" &&
        req.method != "DELETE") {
          /* Non-RFC2616 or CONNECT which is weird. */
          return (pipe);
    }

    # We only deal with GET and HEAD by default
    if (req.method != "GET" && req.method != "HEAD") {
        return (pass);
    }

    # Bypass shopping cart, checkout and search requests
    if (req.url ~ "/checkout" || req.url ~ "/catalogsearch") {
        return (pass);
    }

    # normalize url in case of leading HTTP scheme and domain
    set req.url = regsub(req.url, "^http[s]?://", "");

    # collect all cookies
    std.collect(req.http.Cookie);

    # Compression filter. See https://www.varnish-cache.org/trac/wiki/FAQ/Compression
    if (req.http.Accept-Encoding) {
        if (req.url ~ "\.(jpg|jpeg|png|gif|gz|tgz|bz2|tbz|mp3|ogg|swf|flv)$") {
            # No point in compressing these
            unset req.http.Accept-Encoding;
        } elsif (req.http.Accept-Encoding ~ "gzip") {
            set req.http.Accept-Encoding = "gzip";
        } elsif (req.http.Accept-Encoding ~ "deflate" && req.http.user-agent !~ "MSIE") {
            set req.http.Accept-Encoding = "deflate";
        } else {
            # unkown algorithm
            unset req.http.Accept-Encoding;
        }
    }

    # Remove Google gclid parameters to minimize the cache objects
    set req.url = regsuball(req.url,"\?gclid=[^&]+$",""); # strips when QS = "?gclid=AAA"
    set req.url = regsuball(req.url,"\?gclid=[^&]+&","?"); # strips when QS = "?gclid=AAA&foo=bar"
    set req.url = regsuball(req.url,"&gclid=[^&]+",""); # strips when QS = "?foo=bar&gclid=AAA" or QS = "?foo=bar&gclid=AAA&bar=baz"

    # static files are always cacheable. remove SSL flag and cookie
        if (req.url ~ "^/(pub/)?(media|static)/.*\.(ico|css|js|jpg|jpeg|png|gif|tiff|bmp|mp3|ogg|svg|swf|woff|woff2|eot|ttf|otf)$") {
        unset req.http.Https;
        unset req.http.X-Forwarded-Proto;
        unset req.http.Cookie;
    }

    return (hash);
}

sub vcl_hash {
    if (req.http.cookie ~ "X-Magento-Vary=") {
        hash_data(regsub(req.http.cookie, "^.*?X-Magento-Vary=([^;]+);*.*$", "\1"));
    }

    # For multi site configurations to not cache each other's content
    if (req.http.host) {
        hash_data(req.http.host);
    } else {
        hash_data(server.ip);
    }

    # To make sure http users don't see ssl warning
    if (req.http.X-Forwarded-Proto) {
        hash_data(req.http.X-Forwarded-Proto);
    }

}

sub vcl_backend_response {

    # Begin saint mode configuration
    if (beresp.status >= 500) {
        # This marks the backend as sick for this specific
        # object for the next 20s.
        saintmode.blacklist(20s);
        # Retry the request. This will result in a different backend
        # being used.
        return (retry);
    }
    # End saint mode configuration

    if (beresp.http.content-type ~ "text") {
        set beresp.do_esi = true;
    }

    if (bereq.url ~ "\.js$" || beresp.http.content-type ~ "text") {
        set beresp.do_gzip = true;
    }

    # Cache only successfully responses and 404s
    if (beresp.status != 200 && beresp.status != 404) {
        set beresp.ttl = 0s;
        set beresp.uncacheable = true;
        return (deliver);
    } elsif (beresp.http.Cache-Control ~ "private") {
        set beresp.uncacheable = true;
        set beresp.ttl = 86400s;
        return (deliver);
    }

    if (beresp.http.X-Magento-Debug) {
        set beresp.http.X-Magento-Cache-Control = beresp.http.Cache-Control;
    }

    # Validate if we need to cache it and prevent from setting cookie
    # images, css and js are cacheable by default so we have to remove cookie also
    if (beresp.ttl > 0s && (bereq.method == "GET" || bereq.method == "HEAD")) {
        unset beresp.http.set-cookie;
        if (bereq.url !~ "\.(ico|css|js|jpg|jpeg|png|gif|tiff|bmp|gz|tgz|bz2|tbz|mp3|ogg|svg|swf|woff|woff2|eot|ttf|otf)(\?|$)") {
            set beresp.http.Pragma = "no-cache";
            set beresp.http.Expires = "-1";
            set beresp.http.Cache-Control = "no-store, no-cache, must-revalidate, max-age=0";
            #set beresp.grace = 1m;
        }
    }

   # If page is not cacheable, then bypass varnish for 2 minutes as Hit-For-Pass
   if (beresp.ttl <= 0s ||
        beresp.http.Surrogate-control ~ "no-store" ||
        (!beresp.http.Surrogate-Control && beresp.http.Vary == "*")) {
        # Mark as Hit-For-Pass for the next 2 minutes
        set beresp.ttl = 120s;
        set beresp.uncacheable = true;
   }
   return (deliver);
}

sub vcl_deliver {
    if (resp.http.X-Magento-Debug) {
        if (resp.http.x-varnish ~ " ") {
            set resp.http.X-Magento-Cache-Debug = "HIT";
        } else {
            set resp.http.X-Magento-Cache-Debug = "MISS";
        }
    } else {
        unset resp.http.Age;
    }

    unset resp.http.X-Magento-Debug;
    unset resp.http.X-Magento-Tags;
    unset resp.http.X-Powered-By;
    unset resp.http.Server;
    unset resp.http.X-Varnish;
    unset resp.http.Via;
    unset resp.http.Link;
}
{% endhighlight %}
{% endcollapsible %}

#### Final step
<a href="{{page.baseurl}}config-guide/varnish/config-varnish-final.html">Final verification</a>
