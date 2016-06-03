---
layout: default
group: config-guide
subgroup: 10_mem
title: Install, configure, verify memcached on CentOS
menu_title: Install, configure, verify memcached on CentOS
menu_order: 3
menu_node: 
github_link: config-guide/memcache/memcache_ubuntu.md
---

#### Contents
*   <a href="#config-memcache-memcached">PHP memcache and memcached extensions</a>
*   <a href="#config-memcache-install">Install and configure memcached on CentOS</a>
*   <a href="#config-memcache-verify-its-cent">Verify memcached works before installing Magento</a>

{% include config/php-memcache.md %}

<h2 id="config-memcache-install">Install and configure memcached on CentOS</h2>
This section provides instructions to install memcached on CentOS and Ubuntu. For additional information, consult the <a href="https://code.google.com/p/memcached/wiki/NewStart" target="_blank">memcached wiki</a>.

<div class="bs-callout bs-callout-info" id="info">
   <span class="glyphicon-class">
   <p>We recommend using the latest stable memcache or memcached version (currently, 3.0.8 for memcache and 2.2.0 for memcached).</p></span>
</div>


To install memcached on CentOS, perform the following tasks as a user with `root` privileges:

1.  Install memcached and its dependencies:

        yum -y update
        yum install -y libevent libevent-devel
        yum install -y memcached
        yum install -y php-pecl-memcache

    <div class="bs-callout bs-callout-info" id="info">
        <span class="glyphicon-class">
        <p>The syntax of the preceding commands might depend on what package repositories you use. For example, if you use webtatic and PHP 5.6, enter <code>yum install -y php56w-pecl-memcache</code>. Use <code>yum search memcache|grep php</code> to find the appropriate package name.</p></span>
    </div>

3.  Change the memcached configuration setting for `CACHESIZE` and `OPTIONS`:

    1.  Open `/etc/sysconfig/memcached` in a text editor.
    2.  Locate the value for `CACHESIZE` and change it to at least 1GB.

        For example,

            CACHESIZE="1GB"
    3.  Locate the value for `OPTIONS` and change it to `localhost` or `127.0.0.1`

    For more information about configuring memcached, see <a href="https://code.google.com/p/memcached/wiki/NewConfiguringServer" target="_blank">the memcached wiki</a>.

4.  Save your changes to `memcached` and exit the text editor.
5.  Restart memcached.

        service memcached restart

2.  Restart your web server.

    For Apache, `service httpd restart`

6.  Continue with the next section.

<h2 id="config-memcache-verify-its-cent">Verify memcached works before installing Magento</h2>
We recommend testing memcached to make sure it works before you install Magento. Doing so takes only a few minutes and can simplify troubleshooting later.

### Verify memcached is recognized by the web server

To verify memcached is recognized by the web server:

1.  Create a `phpinfo.php` file in the web server's docroot:

        <?php

        // Show all information, defaults to INFO_ALL
        phpinfo();

2.  Go to that page in your web browser.

    For example, `http://192.0.2.1/phpinfo.php`

2.  Make sure memcache displays as follows:

    <img src="{{ site.baseurl }}common/images/config_memcache.png" alt="Confirm memcache is recognized by the web server">

    Verify you're using memcached version 3.0.5 or later.

    If memcache does not display, restart the web server and refresh the browser page. If it still does not display, verify you installed the `php-pecl-memcache` extension.

### Create a memcache test consisting of a MySQL database and PHP script

The test uses a MySQL database, table, and data to verify you can retrieve the database data and store it in memcache. A PHP script first searches the cache. If the result does not exist, the script queries database. After the query has been fulfilled by the original database, the script stores the result in memcache, using the `set` command.

<a href="https://www.digitalocean.com/community/tutorials/how-to-install-and-use-memcache-on-ubuntu-12-04" target="_blank">More details about this test</a>

Create the MySQL database:

    mysql -u root -p

At the `mysql` prompt, enter the following commands:

    create database memcache_test;
    GRANT ALL ON memcache_test.* TO memcache_test@localhost IDENTIFIED BY 'memcache_test';
    use memcache_test;
    create table example (id int, name varchar(30));
    insert into example values (1, "new_data");
    exit

Create `cache-test.php` in your web server's docroot:

{% highlight PHP %}
<?php
if (class_exists('Memcache')) {
    $meminstance = new Memcache();
} else {
    $meminstance = new Memcached();
}

$meminstance->addServer('<memcache host name or ip>', <memcache port>);

$query = "select id from example where name = 'new_data'";
$querykey = "KEY" . md5($query);

$result = $meminstance->get($querykey);

if (!$result) {
   try {
        $dbh = new PDO('mysql:host=localhost;dbname=memcache_test','memcache_test','memcache_test');
        $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $result = $dbh->query("select id from example where name = 'new_data'")->fetch();
        $meminstance->set($querykey, $result, 0, 600);
        print "got result from mysql\n";
        return 0;
    } catch (PDOException $e) {
        die($e->getMessage());
    }
}
print "got result from memcached\n";
return 0;
?>
{% endhighlight %}

where `<memcache host name or ip>` is either `localhost`, `127.0.0.1`, or the memcache host name or IP address. `<memcache port>` is its listen port; by default, `11211`.

Run the script from the command line.

    cd <web server docroot>
    php cache-test.php

The first result is `got result from mysql`. This means that the key didn't exist in memcache but it was retrieved from MySQL.

The second result is `got result from memcached`, which verifies that the value is stored successfully in memcache.

Finally, you can view the memcache keys using Telnet:

    telnet localhost <memcache port>

At the prompt, enter

    stats items

The result is similar to the following:

    STAT items:3:number 1
    STAT items:3:age 1075
    STAT items:3:evicted 0
    STAT items:3:evicted_nonzero 0
    STAT items:3:evicted_time 0
    STAT items:3:outofmemory 0
    STAT items:3:tailrepairs 0

Flush the memcache storage and quit Telnet:

    flush_all
    quit

<a href="http://www.darkcoding.net/software/memcached-list-all-keys/" target="_blank">Additional information about the Telnet test</a>

#### Next step
<a href="{{ site.gdeurl }}config-guide/memcache/memcache_magento.html">Configure Magento to use memcached</a>