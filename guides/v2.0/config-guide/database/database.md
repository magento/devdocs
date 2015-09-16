---
layout: default
group: config-guide
subgroup: Caching
title: Database caching
menu_title: Database caching
menu_order: 10
menu_node: 
github_link: config-guide/memcache/database.md
---

#### Contents
*	<a href="#mage-cache-db-over">Overview of database caching</a>
*	<a href="#mage-cache-db-prereq">Prerequisites</a>
*	<a href="#mage-cache-db-di">Modify `di.xml`</a>
*	<a href="#mage-cache-db-verify">Verify database caching is working</a>
*	<a href="#mage-cache-db-config">Configuration example</a>

<h2 id="mage-cache-db-over">Overview of database caching</h2>
This topic discusses how to use the Magento 2 database for caching. You can cache either the contents of the `var/cache` directory or both the `var/cache` and `var/page_cache` directories in the `cache` and `cache_tag` database tables.

This topic discusses how to set up caching, how to verify database caching is working, and we provide sample a `env.php` and `di.xml` for reference.

<h2 id="mage-cache-db-prereq">Prerequisites</h2>
Before you continue, if you're using your own frontend cache, make sure you <a href="{{ site.gdeurl }}config-guide/config/caching_frontend-cache-types.html">associate cache frontends with cache types</a>. If you're using the `default` frontend cache, you don't have to do that.

<h2 id="mage-cache-db-di">Modify <code>di.xml</code></h2>
To enable database caching, you must modify `<your Magento install dir>/app/etc/di.xml`, which is the global deployment injection configuration for the Magento application.

To modify `di.xml`:

1.	Log in to the Magento server as, or switch to, the <a href="{{ site.gdeurl }}install-gde/prereq/apache-user.html">Magento file system owner</a>.
2.	Enter the following commands to make a copy of `di.xml`:

		cd <your Magento install dir>/app/etc
		cp di.xml di.xml.bak

3.	Open `di.xml` in a text editor and locate the following block:

		<type name="Magento\Framework\App\Cache\Frontend\Pool">
           <arguments>
              <argument name="frontendSettings" xsi:type="array">
                  <item name="page_cache" xsi:type="array">
                      <item name="backend_options" xsi:type="array">
                        <item name="cache_dir" xsi:type="string">page_cache</item>
                      </item>
                  </item>
              </argument>
           </arguments>
        </type>
        <type name="Magento\Framework\App\Cache\Type\FrontendPool">
           <arguments>
              <argument name="typeFrontendMap" xsi:type="array">
                <item name="full_page" xsi:type="string">page_cache</item>
              </argument>
           </arguments>
        </type>

	The `<type name="Magento\Framework\App\Cache\Frontend\Pool">` node configures options for the in-memory pool of all frontend cache instances.

	The `<type name="Magento\Framework\App\Cache\Type\FrontendPool">` node configures cache frontend options specific to each cache type.

4.	Replace the entire block with the following:

		<type name="Magento\Framework\App\Cache\Frontend\Pool">
        <arguments>
            <argument name="frontendSettings" xsi:type="array">
                <item name="page_cache" xsi:type="array">
                  <item name="backend" xsi:type="string">database</item>
                    </item>
                  <item name="<your cache id>" xsi:type="array">
                  <item name="backend" xsi:type="string">database</item>
                  </item>
            </argument>
        </arguments>
    </type>
    <type name="Magento\Framework\App\Cache\Type\FrontendPool">
        <arguments>
            <argument name="typeFrontendMap" xsi:type="array">
                <item name="backend" xsi:type="string">database</item>
            </argument>
        </arguments>
    </type>

    where `<your cache id>` is your unique cache identifier.
    
5.	Save your changes to `di.xml` and exit the text editor.

7.	Continue with the next section.

<h2 id="mage-cache-db-verify">Verify database caching is working</h2>
To verify database caching is working, clear the current cache directories, go to any cacheable page in a web browser, and verify that data is written to the database and not to the file system.

Use the following steps:

1.	If you haven't done so already, log in to the Magento server as, or switch to, the <a href="{{ site.gdeurl }}install-gde/prereq/apache-user.html">Magento file system owner</a>.
2.	Clear the current cache directories:

		rm -rf <your Magento install dir>/var/cache/* <your Magento install dir>/var/page_cache/* <your Magento install dir>/var/di/* <your Magento install dir>/var/generation/*

3.	In a web browser, go to any cacheable page (such as the storefront front door page).

	If exceptions display, verify `di.xml` syntax and try again. (To see exceptions in the browser, you must <a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-mode.html##config-mode">enable developer mode</a>.)
4.	Enter the following commands:

		ls <your Magento install dir>/var/cache/*
		ls <your Magento install dir>/var/page_cache/*

3.	Verify both directories are empty; if not, edit `di.xml` again and correct any issues.
4.	Use a database tool such as <a href="{{ site.gdeurl }}install-gde/prereq/optional.html#install-optional-phpmyadmin">phpMyAdmin</a> to verify there is data in the `cache` and `cache_tag` tables.

	The following figures show examples. The important thing is that there are rows in the tables *The data in your tables will be different than the following*.

	`cache` table example.

	<img src="{{ site.baseurl }}common/images/config-db_cache-table.png" alt="Sample contents of the cache table with database caching enabled">

	`cache_tag` table example.

	<img src="{{ site.baseurl }}common/images/config-db_cache-tag-table.png" alt="Sample contents of the cache tag table with database caching enabled">


<h2 id="mage-cache-db-config">Configuration example</h2>
TBD

`env.php`

{% highlight PHP %}
<?php
return array (
  'backend' => 
  array (
    'frontName' => 'admin',
  ),
  'install' => 
  array (
    'date' => 'Mon, 24 Aug 2015 14:49:48 -0500',
  ),
  'crypt' => 
  array (
    'key' => '6d6ed6daaf625c2fe18e39f9bb51791f',
  ),
  'session' => 
  array (
    'save' => 'files',
  ),
  'db' => 
  array (
    'table_prefix' => '',
    'connection' => 
    array (
      'default' => 
      array (
        'host' => 'localhost',
        'dbname' => 'magento',
        'username' => 'magento',
        'password' => 'magento',
        'model' => 'mysql4',
        'engine' => 'innodb',
        'initStatements' => 'SET NAMES utf8;',
        'active' => '1',
      ),
    ),
  ),
  'resource' => 
  array (
    'default_setup' => 
    array (
      'connection' => 'default',
    ),
  ),
  'x-frame-options' => 'SAMEORIGIN',
  'cache_types' => 
  array (
    'config' => 1,
    'layout' => 1,
    'block_html' => 1,
    'view_files_fallback' => 1,
    'view_files_preprocessing' => 1,
    'collections' => 1,
    'db_ddl' => 1,
    'eav' => 1,
    'full_page' => 1,
    'translate' => 1,
    'config_integration' => 1,
    'config_integration_api' => 1,
    'config_webservice' => 1,
  ),
);
?>
{% endhighlight %}

`di.xml` (snippet):

{% highlight XML %}
 <type name="Magento\Framework\App\Cache\Frontend\Pool">
        <arguments>
            <argument name="frontendSettings" xsi:type="array">
                <item name="page_cache" xsi:type="array">
                  <item name="backend" xsi:type="string">database</item>
                    </item>
                  <item name="default" xsi:type="array">
                  <item name="backend" xsi:type="string">database</item>
                  </item>
            </argument>
        </arguments>
    </type>
    <type name="Magento\Framework\App\Cache\Type\FrontendPool">
        <arguments>
            <argument name="typeFrontendMap" xsi:type="array">
                <item name="backend" xsi:type="string">database</item>
            </argument>
        </arguments>
 </type>
{% endhighlight %}