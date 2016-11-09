---
layout: default
group: config-guide
subgroup: 500_sites
title: Set up multiple websites with Apache
menu_title: Set up multiple websites with Apache
menu_order: 9
menu_node: 
version: 2.0
github_link: config-guide/multi-site/ms_apache.md
---

#### Contents
*	[Set values in an entry point script](#ms-entry-script)
*	[Set values in .htaccess](#ms-htaccess)

## Set values in an entry point script {#ms-entry-script}
If necessary, copy the existing `index.php` entry point script for your website or store view and add to it the following:

{% highlight php startinline=true %}
 $params = $_SERVER;
 $params[\Magento\Store\Model\StoreManager::PARAM_RUN_CODE] = '<code>';
 $params[\Magento\Store\Model\StoreManager::PARAM_RUN_TYPE] = '{store|website}';
 $bootstrap = \Magento\Framework\App\Bootstrap::create(BP, $params);
 $app = $bootstrap->createApplication('Magento\Framework\App\Http');
 $bootstrap->run($app);
 {% endhighlight %}

Sample `index.php` snippet that starts Magento with a website with the code `frenchsite.example.com`:

{% highlight php startinline=true %}
 $params = $_SERVER;
 $params[\Magento\Store\Model\StoreManager::PARAM_RUN_CODE] = 'frenchsite.example.com';
 $params[\Magento\Store\Model\StoreManager::PARAM_RUN_TYPE] = 'website';
 $bootstrap = \Magento\Framework\App\Bootstrap::create(BP, $params);
 $app = $bootstrap->createApplication('Magento\Framework\App\Http');
 $bootstrap->run($app);
{% endhighlight %}

## Set values in .htaccess {#ms-htaccess}
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
