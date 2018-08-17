---
group: config-guide
subgroup: 10_mem
title: Install, configure, verify memcached on Ubuntu
menu_title: Install, configure, verify memcached on Ubuntu
menu_order: 2
menu_node:
version: 2.0
functional_areas:
  - Configuration
  - System
  - Setup
---


{% include config/php-memcache.md %}

## Install and configure memcached on Ubuntu   {#config-memcache-install}

This section provides instructions to install memcached on Ubuntu. For additional information, consult the <a href="https://code.google.com/p/memcached/wiki/NewStart" target="_blank">memcached wiki</a>.

<div class="bs-callout bs-callout-info" id="info">
   <span class="glyphicon-class">
   <p>We recommend using memcached version 3.0.5 or later.</p></span>
</div>

To install and configure memcached on Ubuntu:

1.  As a user with `root` privileges, enter the following command:

        apt-get -y update
        apt-get -y install php5-memcache memcached

2.  Change the memcached configuration setting for `CACHESIZE` and `-l`:

    1.  Open `/etc/memcached.conf` in a text editor.
    2.  Locate the `-m` parameter.
    3.  Change its value to at least `1GB`
    4.  Locate the `-l` parameter.
    5.  Change its value to `127.0.0.1` or `localhost`
    6.  Save your changes to `memcached.conf` and exit the text editor.
    7.  Restart memcached.

            service memcached restart

3.  Restart your web server.

    For Apache, `service apache2 restart`

4.  Continue with the next section.

## Verify memcached works before installing Magento   {#config-memcache-verify-its-ub}

We recommend testing memcached to make sure it works before you install Magento. Doing so takes only a few minutes and can simplify troubleshooting later.

### Verify memcached is recognized by the web server

To verify memcached is recognized by the web server:

1.  Create a `phpinfo.php` file in the web server's docroot:

        <?php

        // Show all information, defaults to INFO_ALL
        phpinfo();

2.  Go to that page in your web browser.

    For example, `http://192.0.2.1/phpinfo.php`

2.  Make sure memcached displays as follows:

    <img src="{{ site.baseurl }}/common/images/config_memcache-ubuntu.png" alt="Confirm memcache is recognized by the web server">

    Verify you're using memcached version 3.0.5 or later.

    If memcache does not display, restart the web server and refresh the browser page. If it still does not display, verify you installed the `php-pecl-memcache` extension.

### Verify memcached can cache data

This test uses a {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} script to verify that memcached can store and retrieve {% glossarytooltip 0bc9c8bc-de1a-4a06-9c99-a89a29c30645 %}cache{% endglossarytooltip %} data.

For more information about this test, see <a href="https://www.digitalocean.com/community/tutorials/how-to-install-and-use-memcache-on-ubuntu-14-04" target="_blank">this digitalocean tutorial</a>.

Create `cache-test.php` in the web server's docroot with the following contents:

{% highlight php startinline=true %}
if (class_exists('Memcache')) {
    $meminstance = new Memcache();
} else {
    $meminstance = new Memcached();
}

$meminstance->addServer("<memcache hostname or ip>", <memcache port>);

$result = $meminstance->get("test");

if ($result) {
    echo $result;
} else {
    echo "No matching key found.  Refresh the browser to add it!";
    $meminstance->set("test", "Successfully retrieved the data!") or die("Couldn't save anything to memcached...");
}
{% endhighlight %}

where `<memcache hostname or ip>` is either `localhost`, `127.0.0.1`, or the memcache hostname or IP address. `<memcache port>` is its listen port; by default, `11211`.

Go to that page in a web browser.

For example, `http://192.0.2.1/cache-test.php`

The first time you go to the page, the following displays: `No matching key found. Refresh the browser to add it!`

Refresh the browser. The message changes to `Successfully retrieved the data!`

Finally, you can view the memcache keys using Telnet:

    telnet localhost <memcache port>

At the prompt, enter

    stats items

The result is similar to the following:

    STAT items:2:number 1
    STAT items:2:age 106
    STAT items:2:evicted 0
    STAT items:2:evicted_nonzero 0
    STAT items:2:evicted_time 0
    STAT items:2:outofmemory 0
    STAT items:2:tailrepairs 0
    STAT items:2:reclaimed 0
    STAT items:2:expired_unfetched 0
    STAT items:2:evicted_unfetched 0

Flush memcache storage and quit Telnet:

    flush_all
    quit

<a href="http://www.darkcoding.net/software/memcached-list-all-keys/" target="_blank">Additional information about the Telnet test</a>

#### Next step

<a href="{{ page.baseurl }}/config-guide/memcache/memcache_magento.html">Configure Magento to use memcached</a>
