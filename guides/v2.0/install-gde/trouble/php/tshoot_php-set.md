---
layout: default
group: install_trouble
subgroup: PHP issues
title: PHP settings errors
menu_title: PHP settings errors
menu_node:
menu_order: 1
github_link: install-gde/trouble/php/tshoot_php-set.md
---

<h2 id="trouble-php-set">PHP settings errors</h2>
See one of the following sections:

*	<a href="#trouble-php-always">always_populate_raw_post_data error</a>
*	[PHP memory limit error](#trouble-php-memory)
*   <a href="#trouble-php-xdebug">xdebug maximum function nesting level error</a>
*   <a href="#trouble-php-asptags">Errors display when you access a PHTML template</a>

<h3 id="trouble-php-always">always_populate_raw_post_data error</h3>
If you're upgrading the Magento 2 software, the following error can display during the readiness check:

<img src="{{ site.baseurl }}common/images/upgr_readiness-success.png" width="700px" alt="If all readiness checks pass, click Next and continue with the next step">

To resolve the error:

1.	Locate your `php.ini` using a [`phpinfo.php`]({{ site.gdeurl }}install-gde/prereq/optional.html#install-optional-phpinfo) page.

	(Sometimes you have a different `php.ini` for the PHP command line and the web server. The `php.ini` you must change displays as **Loaded Configuration File**)

2.	As a user with `root` privileges, open `php.ini` in a text editor.
3.	Uncomment the following line:

		always_populate_raw_post_data = -1
4.	Save your changes to `php.ini` and exit the text editor.
5.	Wait for all steps in the readiness check to finish.
6.	Resolve any other issues displayed by the readiness check.
7.	As a user with `root` privileges, restart your web server. 

	Examples follow:

	*	Ubuntu: `service apache2 restart`
	*	CentOS: `service httpd restart`

8.	On the readiness check page, click **Try Again**.

### PHP memory limit error {#trouble-php-memory}
The readiness checks makes sure you have at least 1GB of memory set aside for PHP processes. This setting should be sufficient for most installations, including installing optional sample data. However, we recommend at least 2GB for debugging.

To increase your PHP memory limit:

1.	Log in to your Magento server.
2.	Locate your `php.ini` file using the following command:

		php --ini
3.	As a user with `root` privileges, use a text editor to open the `php.ini` specified by `Loaded Configuration File`.
4.	Locate `memory_limit`.
5.	Change it to a value of `1GB` for normal use or at least `2GB` for debugging.
6.	Save your changes to `php.ini` and exit the text editor.
7.	Restart your web server.

	Examples follow:

	*	CentOS: `service httpd restart`
	*	Ubuntu: `service apache2 restart`
	*	nginx (both CentOS and Ubuntu): `service nginx restart`
8.	Try the installation again.

<h3 id="trouble-php-xdebug">xdebug maximum function nesting level error</h3>

See <a href="{{ site.gdeurl }}install-gde/trouble/tshoot_xdebug.html">During installation, xdebug maximum function nesting level error</a>.

<h3 id="trouble-php-asptags">Errors display when you access a PHTML template</h3>
Error text is typically:

    Parse error: syntax error, unexpected 'data' (T_STRING)

#### Solution: Set <code>asp_tags = off</code> in <code>php.ini</code>
Multiple templates have syntax for support abstract level on templates (use different templates engines like Twig) wrapped in `<% %>` tags, like this <a href="{{ site.mage2000url }}app/code/Magento/Catalog/view/adminhtml/templates/product/edit/base_image.phtml" target="_blank">template</a> for displaying a product image:

{% highlight PHP %} 
<?php
<img
    class="product-image"
    src="<%- data.url %>"
    data-position="<%- data.position %>"
    alt="<%- data.label %>" />
?>
{% endhighlight %}

More information about <a href="http://php.net/manual/en/ini.core.php#ini.asp-tags" target="_blank">asp_tags</a>. 

Edit `php.ini` and set `asp_tags = off`. For more information, see <a href="{{ site.gdeurl }}install-gde/prereq/php-centos.html#instgde-prereq-timezone">Set PHP configuration options</a>.
