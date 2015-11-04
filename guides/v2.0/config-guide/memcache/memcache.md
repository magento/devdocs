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
*	<a href="#config-memcache-over">Overview of memcache session storage</a>
*	<a href="#config-memcache-install">Install memcache</a>
*	<a href="#config-memcache-conf">Configure Magento to use memcache</a>
*	<a href="#config-memcache-verify">Verify memcache is working</a>

<h2 id="config-memcache-over">Overview of memcache session storage</h2>
TBD
<h2 id="config-memcache-install">Install memcache</h2>
CentOS:
yum install -y libevent libevent-devel

yum -y install memcached
yum -y install php-pecl-memcache
service httpd restart

config:

/etc/sysconfig/memcached
change CACHESIZE > 1024 or 1GB

Ubuntu:

apt-get -y install php5-memcached memcached
service apache2 restart

config: /etc/memcached.conf

change -m 1GB

restart

https://code.google.com/p/memcached/wiki/NewConfiguringServer

<h2 id="config-memcache-verify-its">Verify memcache works by itself</h2>
By itself: https://www.digitalocean.com/community/tutorials/how-to-install-and-use-memcache-on-ubuntu-14-04

Use phpinfo.php to verify memcached is recognized by the web server

From digital ocean:

<?php
$mem = new Memcached();
$mem->addServer("127.0.0.1", 11211);

$result = $mem->get("blah");

if ($result) {
    echo $result;
} else {
    echo "No matching key found.  I'll add that now!";
    $mem->set("blah", "I am data!  I am held in memcached!") or die("Couldn't save anything to memcached...");
}
?>

Hit browser twice, second time you'll see the message.

<h2 id="config-memcache-conf">Configure Magento to use memcache</h2>
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
             'save' => 'memcache',
             'save_path' => 'tcp://<memcache ip or host>:<memcache port>?persistent=1&weight=2&timeout=10&retry_interval=10'
       )



<h2 id="config-memcache-verify">Verify memcache is working</h2>



TBD