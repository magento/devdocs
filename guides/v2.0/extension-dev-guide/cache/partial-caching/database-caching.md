---
group: extension-dev-guide
subgroup: 08_Partial caching
title: Create custom cache engines
menu_title: Create custom cache engines
menu_order: 9
menu_node:
version: 2.0
redirect_from:
  -  /guides/v2.0/config-guide/database/database.html
  -  /guides/v2.1/config-guide/database/database.html
  -  /guides/v2.2/config-guide/database/database.html
---

This topic discusses how to use the Magento 2 database for caching. After you complete these tasks, cached objects are stored in the `cache` and `cache_tag` Magento 2 database tables. Nothing is stored in `var/cache` or `var/page_cache`.

This topic discusses how to set up database caching and how to verify database caching is working. We discuss the following options:

*	Using the `default` cache frontend, in which case you modify `di.xml` only.
*	Using a custom {% glossarytooltip 0bc9c8bc-de1a-4a06-9c99-a89a29c30645 %}cache{% endglossarytooltip %} frontend, in which case you modify `env.php` only.

<div class="bs-callout bs-callout-warning">
    <p>Database caching&mdash;like file-based caching&mdash; works well in a development environment but we <em>strongly recommend</em> you use <a href="{{ page.baseurl }}/config-guide/varnish/config-varnish.html">Varnish</a> in production instead.</p>
    <p>Varnish is designed to accelerate the HTTP protocol.</p>
</div>

## Prerequisites   {#mage-cache-db-prereq}

Before you continue, if you're using your own frontend cache, make sure you <a href="{{ page.baseurl }}/config-guide/config/caching_frontend-cache-types.html">associate cache frontends with cache types</a>. If you're using the `default` {% glossarytooltip b00459e5-a793-44dd-98d5-852ab33fc344 %}frontend{% endglossarytooltip %} cache, you don't have to do that.

We provide <a href="#mage-cache-db-config">sample configurations</a> at the end of this topic.

## Database caching using the `default` cache frontend   {#mage-cache-db-di}

To enable database caching using the `default` frontend, you must modify `<your Magento install dir>/app/etc/di.xml`, which is the global deployment injection configuration for the Magento application.

To modify `di.xml`:

1.	Log in to the Magento server as, or switch to, the <a href="{{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html">Magento file system owner</a>.
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

7.	Continue with <a href="#mage-cache-db-verify">Verify database caching is working</a>.

## Database caching using a custom cache frontend   {#mage-cache-db-env}

This section discusses how to set up database caching with a custom {% glossarytooltip ca5ad9ac-9d39-45b5-80b1-e90d192f20d0 %}cache frontend{% endglossarytooltip %}.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Due to a known issue, a custom cache frontend still results in some objects being cached to the file system; however, fewer assets are cached compared to file system caching.</p></span>
</div>

To enable database caching using a custom cache frontend, you must modify `<your Magento install dir>/app/etc/env.php` as follows:

1.	Log in to the Magento server as, or switch to, the <a href="{{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html">Magento file system owner</a>.
2.	Enter the following commands to make a copy of `env.php`:

		cd <your Magento install dir>/app/etc
		cp env.php env.php.bak

3.	Open `env.php` in a text editor and add the following anywhere, such as before `'cache_types' =>`:

		'cache' => [
		    'frontend' => [
		        '<unique frontend id>' => [
		             <cache options>
		        ],
		    ],
		    'type' => [
		         <cache type 1> => [
		             'frontend' => '<unique frontend id>'
		        ],
		    ],
		    'type' => [
		         <cache type 2> => [
		             'frontend' => '<unique frontend id>'
		        ],
		    ],
		],

	An example is shown in <a href="#mage-cache-db-config">Configuration examples</a>.

4.	Save your changes to `env.php` and exit the text editor.
5.	Continue with the next section.

## Verify database caching is working   {#mage-cache-db-verify}

To verify database caching is working, clear the current cache directories, go to any cacheable page in a web browser, and verify that data is written to the database and not to the file system.

Use the following steps:

1.	If you haven't done so already, log in to the Magento server as, or switch to, the <a href="{{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html">Magento file system owner</a>.
2.	Clear the current cache directories:

		rm -rf <your Magento install dir>/var/cache/* <your Magento install dir>/var/page_cache/* <your Magento install dir>/var/di/* <your Magento install dir>/var/generation/*

3.	In a web browser, go to any cacheable page (such as the {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} front door page).

	If exceptions display, verify `di.xml` syntax and try again. (To see exceptions in the browser, you must <a href="{{ page.baseurl }}/config-guide/cli/config-cli-subcommands-mode.html#change-to-developer-mode">enable developer mode</a>.)
4.	Enter the following commands:

		ls <your Magento install dir>/var/cache/*
		ls <your Magento install dir>/var/page_cache/*

    <div class="bs-callout bs-callout-info" id="info">
      <span class="glyphicon-class">
      <p>Due to a known issue, a custom cache frontend still results in some objects being cached to the file system; however, fewer assets are cached compared to file system caching.</p>
      <p>If you use the <code>default</code> cache frontend, you don't have this issue.</p></span>
    </div>
3.	Verify both directories are empty; if not, edit `di.xml` again and correct any issues.
4.	Use a database tool such as <a href="{{ page.baseurl }}/install-gde/prereq/optional.html#install-optional-phpmyadmin">phpMyAdmin</a> to verify there is data in the `cache` and `cache_tag` tables.

	The following figures show examples. The important thing is that there are rows in the tables. *The data in your tables will be different than the following*.

	`cache` table example.

	<img src="{{ site.baseurl }}/common/images/config-db_cache-table.png" alt="Sample contents of the cache table with database caching enabled">

	`cache_tag` table example.

	<img src="{{ site.baseurl }}/common/images/config-db_cache-tag-table.png" alt="Sample contents of the cache tag table with database caching enabled">

## Configuration examples   {#mage-cache-db-config}

This section contains code sample snippets to refer to when configuring database caching.

### Sample `di.xml` for the default cache frontend   {#mage-cache-db-config-default}

`di.xml` snippet:

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

### Sample `env.php` for a custom cache frontend   {#mage-cache-db-config-custom}

`env.php` snippet that enables all cache types with a custom frontend named `magento_cache`:

{% highlight php startinline=true %}
 'cache' => [
     'frontend' => [
        'magento_cache' => [
             'backend' => 'database'
         ],
      ],
      'type' => [
         'config' => [
            'frontend' => 'magento_cache'
          ],
         'layout' => [
            'frontend' => 'magento_cache'
          ],
         'block_html' => [
            'frontend' => 'magento_cache'
          ],
         'view_files_fallback' => [
            'frontend' => 'magento_cache'
          ],
         'view_files_preprocessing' => [
            'frontend' => 'magento_cache'
          ],
         'collections' => [
            'frontend' => 'magento_cache'
          ],
         'db_ddl' => [
            'frontend' => 'magento_cache'
          ],
         'eav' => [
            'frontend' => 'magento_cache'
          ],
         'full_page' => [
            'frontend' => 'magento_cache'
          ],
         'translate' => [
            'frontend' => 'magento_cache'
          ],
         'config_integration' => [
            'frontend' => 'magento_cache'
          ],
         'config_integration_api' => [
            'frontend' => 'magento_cache'
          ],
         'config_webservice' => [
            'frontend' => 'magento_cache'
          ],
      ],
  ],
{% endhighlight %}
