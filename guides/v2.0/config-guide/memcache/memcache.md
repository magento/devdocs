---
layout: default
group: config-guide
subgroup: Caching
title: Use memcache for session storage
menu_title: Use memcache for session storage
menu_order: 50
menu_node: 
github_link: config-guide/memcache/memcache.md
---

#### Contents
*	<a href="#config-memcache-over">Overview of memcached session storage</a>
*	<a href="#config-memcache-install">Install memcached</a>
*   <a href="config-memcache-verify-its">Verify memcached works before installing Magento</a>
*	<a href="#config-memcache-conf">Configure Magento to use memcached</a>
*	<a href="#config-memcache-verify">Verify memcached is working</a>

<h2 id="config-memcache-over">Overview of memcached session storage</h2>
TBD

<h2 id="config-memcache-install">Install memcache</h2>
This section provides instructions to install memcached on CentOS and Ubuntu. For additional information, consult the <a href="https://code.google.com/p/memcached/wiki/NewStart" target="_blank">memcached wiki</a>.

See the following:

*   <a href="#config-memcache-install-centos">Install memcache on CentOS</a>
*   <a href="#config-memcache-install-ubuntu">Install memcached on Ubuntu</a>

<h3 id="config-memcache-install-centos">Install memcache on CentOS</h3>
To install memcached on CentOS, perform the following tasks as a user with `root` privileges:

1.  Install memcached and its dependencies:

        yum -y update
        yum install -y libevent libevent-devel
        yum install -y memcached
        yum install -y php-pecl-memcache

    <div class="bs-callout bs-callout-info" id="info">
        <span class="glyphicon-class">
        <p>The syntax of the preceding commands might depend on what package repositories you use. For example, if you use webtatic and PHP 5.6, enter <code>yum install -y php56w-pecl-memcache</code>. Use <code>yum list</code> to find the appropriate package name.</p></span>
    </div>

2.  Restart your web server.

    For Apache, `service httpd restart`

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

6.  Continue with the next section.

<h3 id="config-memcache-verify-its-cent">CentOS&mdash;Verify memcached works before installing Magento</h3>
We recommend testing memcached to make sure it works before you install Magento. Doing so takes only a few minutes and can simplify troubleshooting later.

To verify memcached works:

1.  Create a `phpinfo.php` file in the web server's docroot:

        <?php

        // Show all information, defaults to INFO_ALL
        phpinfo();

2.  Go to that page in your web browser.

    For example, `http://192.0.2.1/phpinfo.php`

2.  Make sure memcache displays as follows:

    <img src="{{ site.baseurl }}common/images/config_memcache.png" alt="Confirm memcache is recognized by the web server">

    If memcache does not display, restart the web server and refresh the browser page. If it still does not display, verify you installed the `php-pecl-memcache` extension.

#### Create a memcache test consisting of a MySQL database and PHP script.

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
$meminstance = new Memcache();
$meminstance->pconnect('<memcache host name or ip>', <memcache port>);

mysql_connect("localhost", "memcache_test", "memcache_test") or die(mysql_error());
mysql_select_db("memcache_test") or die(mysql_error());

$query = "select id from example where name = 'new_data'";
$querykey = "KEY" . md5($query);

$result = $meminstance->get($querykey);

if (!$result) {
   $result = mysql_fetch_array(mysql_query("select id from example where name = 'new_data'")) or die('mysql error');
   $meminstance->set($querykey, $result, 0, 600);
   print "got result from mysql\n";
   return 0;
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

<a href="http://www.darkcoding.net/software/memcached-list-all-keys/" target="_blank">Additional information about the Telnet test</a>

Continue with <a href="#config-memcache-verify">Verify memcached is working</a>.

<h3 id="config-memcache-install-ubuntu">Install memcached on Ubuntu</h3>
To install and configure memcached on Ubuntu:

1.  As a user with `root` privileges, enter the following command:

      apt-get -y update
      apt-get -y install php5-memcached memcached

2.  Restart your web server.

    For Apache, `service apache2 restart`

3.  Change the memcached configuration setting for `CACHESIZE` and `-l`:

    1.  Open `/etc/memcached.conf` in a text editor.
    2.  Locate the `-m` parameter.
    3.  Change its value to at least `1GB`
    4.  Locate the `-l` parameter.
    5.  Change its value to `127.0.0.1` or `localhost`
    6.  Save your changes to `memcached.conf` and exit the text editor.
    7.  Restart memcached.

            service memcached restart

4.  Continue with the next section.

<h3 id="config-memcache-verify-its-ub">Ubuntu&mdash;Verify memcached works before installing Magento</h3>
We recommend testing memcached to make sure it works before you install Magento. Doing so takes only a few minutes and can simplify troubleshooting later.

#### Verify memcached is recognized by the web server

To verify memcached works:

1.  Create a `phpinfo.php` file in the web server's docroot:

        <?php

        // Show all information, defaults to INFO_ALL
        phpinfo();

2.  Go to that page in your web browser.

    For example, `http://192.0.2.1/phpinfo.php`

2.  Make sure memcached displays as follows:

    <img src="{{ site.baseurl }}common/images/config_memcache-ubuntu.png" alt="Confirm memcache is recognized by the web server">

    If memcache does not display, restart the web server and refresh the browser page. If it still does not display, verify you installed the `php-pecl-memcache` extension.

#### Verify memcached can cache data
This test uses a PHP script to verify that memcached can store and retrieve cache data.

For more information about this test, see <a href="https://www.digitalocean.com/community/tutorials/how-to-install-and-use-memcache-on-ubuntu-14-04" target="_blank">this digitalocean tutorial</a>.

Create `cache-test.php` in the web server's docroot with the following contents:

{% highlight php %}
<?php
$mem = new Memcached();
$mem->addServer("<memcache host name or ip>", <memcache port>);

$result = $mem->get("test");

if ($result) {
    echo $result;
} else {
    echo "No matching key found.  Refresh the browser to add it!";
    $mem->set("test", "Succesfully retrieved the data!") or die("Couldn't save anything to memcached...");
}
?>
{% endhighlight %}

where `<memcache host name or ip>` is either `localhost`, `127.0.0.1`, or the memcache host name or IP address. `<memcache port>` is its listen port; by default, `11211`.

Go to that page in a web browser.

For example, `http://192.0.2.1/cache-test.php`

The first time you go to the page, the following displays: `No matching key found. Refresh the browser to add it!`

Refresh the browser. The message changes to `Succesfully retrieved the data!`

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

<a href="http://www.darkcoding.net/software/memcached-list-all-keys/" target="_blank">Additional information about the Telnet test</a>

<h2 id="config-memcache-conf">Configure Magento to use memcached</h2>
To configure Magento to use memcache:

1.	Open `<your Magento install dir>/app/etc/env.php` in a text editor.
2.	Locate the following:

        'session' =>
            array (
            'save' => 'files',
        ),

3.	Change it as follows:

        'session' =>
           array (
              'save' => '{memcache|memcached}',
              'save_path' => 'tcp://<memcache ip or host>:<memcache port>?persistent=1&weight=2&timeout=10&retry_interval=10'
        ),

    use `memcache` on CentOS or `memcached` on Ubuntu.

For more information about memcached parameters, see the <a href="http://php.net/manual/en/memcache.addserver.php" target="_blank">PHP documentation</a>.

<h2 id="config-memcache-verify">Verify memcached is working</h2>
To verify memcached works with Magento:

1.  Delete the contents of the following directories under your Magento installation directory:

        rm -rf var/cache/* var/page_cache/* var/session/*

2.  Go to any page on the storefront.

3.  Log in to the Magento Admin and browse to serveral pages.

    If no errors display, congratulations! memcache is working! You can optionally look at the cache as discussed in the following paragraphs.

    If errors display (such as an HTTP 500 (TBD), enable developer mode and diagnose the issue. Make sure memcached is running, configured properly, and that `env.php` has no syntax errors. 

