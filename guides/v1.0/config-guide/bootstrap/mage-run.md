---
layout: default
group: config-guide
subgroup: Bootstrap
title: Multiple websites or stores (MAGE_RUN_TYPE, MAGE_RUN_CODE)
menu_title: Multiple websites or stores (MAGE_RUN_TYPE, MAGE_RUN_CODE)
menu_order: 500
menu_node: 
github_link: config-guide/bootstrap/mage-run.md
---

#### Contents
*	<a href="#magerun-introduction">Introduction to multiple Magento stores and websites</a>
*	<a href="#magerun-conf">Configure Magento</a>
*	<a href="#magerun-set">Set values for MAGE_RUN_TYPE and MAGE_RUN_CODE</a>


<h2 id="magerun-introduction">Introduction to multiple Magento stores and websites</h2>
One instance of the Magento software can enable you to start multiple websites or store views that use different:

*   Default languages
*   Domain names
*   Categories

This flexible solution enables one Magento codebase and Magento Admin to administer and display different stores.

You configure the websites, stores, and store views in the Magento Admin. You use the `MAGE_RUN_TYPE` and `MAGE_RUN_CODE` variables in entry point scripts or `.htaccess` files to start the Magento application using these websites or store views. 

A typical use of `MAGE_RUN_TYPE` and `MAGE_RUN_CODE` is to set up stores with different options in different domains. For example, you could have one set of categories and products on one domain and another domain that has categories and products for a different language.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>This topic discusses only the basics of configuring multiple sites using the Admin and variables. Details about deploying the Magento application in multiple domains is beyond the scope of this topic.</p></span>
</div>

<h2 id="magerun-conf">Configure Magento websites and stores</h2>
This section discusses the minimum tasks required to use the `MAGE_RUN_TYPE` and `MAGE_RUN_CODE` variables. 

We use the following terms:

*	*Website* is the top-level container for sites, shipping methods, payment methods, and so on. To create completely separate sites that do not share cart, shipping methods, and so on,  you must create separate websites. 

*	*Store* is contained by a website. In turn, a store contains at least one *store view*. 

	Multiple stores can share cart, user sessions, payment gateways, and so on, but they have separate catalog structures. 

	Store views change the way pages are presented, and are typically used to display a store with different layouts or languages. 

Each website and each store view must have a unique identifer. This identifier is required to use `MAGE_RUN_TYPE` and `MAGE_RUN_CODE`.

To create websites and stores:

1.	Log in to the Magento Admin as a user authorized to create websites, stores, and store views.
2.	Click **Stores** > **All Stores**.
3.	To create a website, click **Create Website**.
4.	To create a store, click **Create Store**.
5.	To create a store view, click **Create Store View**.
5.	When you create your website or store view, make note of its unique identifier because you'll use it later.

<h2 id="magerun-set">Set values for MAGE_RUN_TYPE and MAGE_RUN_CODE</h2>
The following sections discuss alternatives for setting values for `MAGE_RUN_TYPE` and `MAGE_RUN_CODE`:

*   <a href="#magerun-set-index">Set values in an entry point script</a>
*   <a href="#magerun-set-htaccess">Set values in .htaccess</a>

<h3 id="magerun-set-index">Set values in an entry point script</h3>
If necessary, copy the existing `index.php` entry point script for your website or store view and add to it the following:

{% highlight php %}
<?php
 $params = $_SERVER;
 $params[\Magento\Store\Model\StoreManager::MAGE_RUN_CODE] = '<code>';
 $params[\Magento\Store\Model\StoreManager::MAGE_RUN_TYPE] = '{store|website}';
 $bootstrap = \Magento\Framework\App\Bootstrap::create(BP, $params);
 $app = $bootstrap->createApplication('Magento\Framework\App\Http');
 $bootstrap->run($app);
 ?>
 {% endhighlight %}

Sample `index.php` snippet that starts Magento with a website with the code `frenchsite.example.com`:

{% highlight php %}
<?php
 $params = $_SERVER;
 $params[\Magento\Store\Model\StoreManager::MAGE_RUN_CODE] = 'frenchsite.example.com';
 $params[\Magento\Store\Model\StoreManager::MAGE_RUN_TYPE] = 'website';
 $bootstrap = \Magento\Framework\App\Bootstrap::create(BP, $params);
 $app = $bootstrap->createApplication('Magento\Framework\App\Http');
 $bootstrap->run($app);
 ?>

{% endhighlight %}

<h3 id="magerun-set-htaccess">Set values in .htaccess</h3>
This section discusses how to set values for `MAGE_RUN_TYPE` and `MAGE_RUN_CODE` using Apache server variables `SetEnvIf` or `RewriteCond`. If you're not sure what environment variable to use, consult a network administrator.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Additional tasks required to set up the Magento 2 file system for this type of environment are beyond the scope of this topic.</p></span>
</div>

For more information about `SetEnvIf` or `RewriteCond`, see:

*   Apache 2.2: <a href="http://httpd.apache.org/docs/2.2/mod/mod_setenvif.html" target="_blank">SetEnvIf</a>, <a href="http://httpd.apache.org/docs/2.2/mod/mod_rewrite.html#rewritecond" target="_blank">RewriteCond</a>
*   Apache 2.4: <a href="http://httpd.apache.org/docs/2.4/mod/mod_setenvif.html" target="_blank">SetEnvIf</a>, <a href="http://httpd.apache.org/docs/2.4/mod/mod_rewrite.html#rewritecond" target="_blank">RewriteCond</a>

#### SetEnvIf example
Add the following after `RewriteEngine on` in `.htaccess`:

    SetEnvIf Host .*<your domain>.* MAGE_RUN_CODE=<code>
    SetEnvIf Host .*<your domain>.* MAGE_RUN_TYPE={store|website}

For example, to use a website with the code `frenchsite.example.com`:

    SetEnvIf Host .*example.com.* MAGE_RUN_CODE=frenchsite.example.com
    SetEnvIf Host .*example.com.* MAGE_RUN_TYPE=website

#### RewriteCond example
Add code similar to the following after `RewriteBase /magento/` in `.htaccess`:

    RewriteCond %{HTTP_HOST} ^(.*)<your domain>\<domain suffix>
    RewriteRule .* – [E=MAGE_RUN_CODE:<code>]
    RewriteCond %{HTTP_HOST} ^(.*)<your domain>\<domain suffix>
    RewriteRule .* – [E=MAGE_RUN_TYPE:{store|website}]

For example, to use a website with the code `frenchsite.example.com`:

    RewriteCond %{HTTP_HOST} ^(.*)example\.com
    RewriteRule .* – [E=MAGE_RUN_CODE:frenchsite.example.com]
    RewriteCond %{HTTP_HOST} ^(.*)example\.com
    RewriteRule .* – [E=MAGE_RUN_TYPE:website]

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>The preceding is an example only. There is more than one way to configure the <code>RewriteCond</code> rule. Consult a system integrator or network administrator for more information.</p></span>
</div>
