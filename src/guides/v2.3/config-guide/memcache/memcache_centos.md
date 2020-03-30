---
group: configuration-guide
title: Install, configure, verify memcached on CentOS
functional_areas:
  - Configuration
  - System
  - Setup
---

{% include config/php-memcache.md %}

## Install and configure memcached on CentOS {#config-memcache-install}

This section provides instructions to install memcached on CentOS and Ubuntu. For additional information, consult the [memcached wiki](https://github.com/memcached/old-wiki).

{:.bs-callout-info}
We recommend using the latest stable memcached version (currently 3.1.3 for memcached).

To install memcached on CentOS, perform the following tasks as a user with `root` privileges:

1. Install memcached and its dependencies:

   ```bash
   yum -y update
   ```

   ```bash
   yum install -y libevent libevent-devel
   ```

   ```bash
   yum install -y memcached
   ```

   ```bash
   yum install -y php-pecl-memcache
   ```

   {:.bs-callout-info}
   The syntax of the preceding commands might depend on what package repositories you use. For example, if you use webtatic and PHP 5.6, enter `yum install -y php56w-pecl-memcache`. Use `yum search memcache|grep php` to find the appropriate package name.

1. Change the memcached configuration setting for `CACHESIZE` and `OPTIONS`:

    1. Open `/etc/sysconfig/memcached` in a text editor.
    1. Locate the value for `CACHESIZE` and change it to at least 1GB. For example

        ```config
        CACHESIZE="1GB"
        ```

    1. Locate the value for `OPTIONS` and change it to `localhost` or `127.0.0.1`

    For more information about configuring memcached, see [the memcached wiki](https://code.google.com/p/memcached/wiki/NewConfiguringServer).

1. Save your changes to `memcached` and exit the text editor.
1. Restart memcached.

   ```bash
   service memcached restart
   ```

1. Restart your web server.

   For Apache:

   ```bash
   service httpd restart
   ```

1. Continue with the next section.

## Verify memcached works before installing Magento {#config-memcache-verify-its-cent}

We recommend testing memcached to make sure it works before you install Magento. Doing so takes only a few minutes and can simplify troubleshooting later.

### Verify memcached is recognized by the web server

To verify memcached is recognized by the web server:

1. Create a `phpinfo.php` file in the web server's docroot:

   ```php
   <?php
   // Show all information, defaults to INFO_ALL
   phpinfo();
   ```

1. Go to that page in your web browser.

   For example, `http://192.0.2.1/phpinfo.php`

1. Make sure memcache displays as follows:

  ![Confirm memcache is recognized by the web server]({{ site.baseurl }}/common/images/config_memcache.png)

  Verify you're using memcached version 3.0.5 or later.

  If memcache does not display, restart the web server and refresh the browser page. If it still does not display, verify you installed the `php-pecl-memcache` extension.

### Create a memcache test consisting of a MySQL database and PHP script

The test uses a MySQL database, table, and data to verify you can retrieve the database data and store it in memcache. A [PHP](https://glossary.magento.com/php) script first searches the [cache](https://glossary.magento.com/cache). If the result does not exist, the script queries database. After the query has been fulfilled by the original database, the script stores the result in memcache, using the `set` command.

[More details about this test](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-memcache-on-ubuntu-12-04)

Create the MySQL database:

```bash
mysql -u root -p
```

At the `mysql` prompt, enter the following commands:

```sql
create database memcache_test;
GRANT ALL ON memcache_test.* TO memcache_test@localhost IDENTIFIED BY 'memcache_test';
use memcache_test;
create table example (id int, name varchar(30));
insert into example values (1, "new_data");
exit
```

Create `cache-test.php` in your web server's docroot:

```php
$meminstance = new Memcached();

$meminstance->addServer('<memcached hostname or ip>', <memcached port>);

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
```

where `<memcached hostname or ip>` is either `localhost`, `127.0.0.1`, or the memcache hostname or IP address. `<memcached port>` is its listen port; by default, `11211`.

Run the script from the command line.

```bash
cd <web server docroot>
```

```bash
php cache-test.php
```

The first result is `got result from mysql`. This means that the key did not exist in memcached but it was retrieved from MySQL.

The second result is `got result from memcached`, which verifies that the value is stored successfully in memcached.

Finally, you can view the memcache keys using Telnet:

```bash
telnet localhost <memcache port>
```

At the prompt, enter

```bash
stats items
```

The result is similar to the following:

```terminal
STAT items:3:number 1
STAT items:3:age 1075
STAT items:3:evicted 0
STAT items:3:evicted_nonzero 0
STAT items:3:evicted_time 0
STAT items:3:outofmemory 0
STAT items:3:tailrepairs 0
```

Flush the memcache storage and quit Telnet:

```bash
flush_all
```

```bash
quit
```

[Additional information about the Telnet test](http://www.darkcoding.net/software/memcached-list-all-keys/)

{:.ref-header}
Related topics

[Configure Magento to use memcached]({{ page.baseurl }}/config-guide/memcache/memcache_magento.html)
