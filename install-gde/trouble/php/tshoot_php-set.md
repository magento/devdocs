---
group: installation-guide
subgroup: 10_php
title: PHP settings errors
menu_title: PHP settings errors
menu_node:
menu_order: 350
functional_areas:
  - Install
  - System
  - Setup
---

### always\_populate\_raw\_post\_data error   {#trouble-php-always}

If you're upgrading the Magento 2 software, the following error can display during the readiness check:

![If all readiness checks pass, click Next and continue with the next step]({{ site.baseurl }}/common/images/upgr_readiness-success.png){: width="700px"}

To resolve the error:

1.	Locate your `php.ini` using a [`phpinfo.php`]({{ page.baseurl }}/install-gde/prereq/optional.html#install-optional-phpinfo) page.

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

The readiness checks makes sure you have at least 1GB of memory set aside for {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} processes. This setting should be sufficient for most installations, including installing optional sample data. However, we recommend at least 2GB for debugging.

To increase your PHP memory limit:

1.	Log in to your Magento server.
2.	Locate your `php.ini` file using the following command:

		php --ini
3.	As a user with `root` privileges, use a text editor to open the `php.ini` specified by `Loaded Configuration File`.
4.	Locate `memory_limit`.
5.	Change it to a value of `2GB` for normal use and debugging.
6.	Save your changes to `php.ini` and exit the text editor.
7.	Restart your web server.

	Examples follow:

	*	CentOS: `service httpd restart`
	*	Ubuntu: `service apache2 restart`
	*	nginx (both CentOS and Ubuntu): `service nginx restart`
8.	Try the installation again.

### xdebug maximum function nesting level error   {#trouble-php-xdebug}

See [During installation, xdebug maximum function nesting level error]({{ page.baseurl }}/install-gde/trouble/php/tshoot_xdebug.html).

### Errors display when you access a PHTML template   {#trouble-php-asptags}

Error text is typically:

    Parse error: syntax error, unexpected 'data' (T_STRING)

#### Solution: Set <code>asp_tags = off</code> in <code>php.ini</code>

Multiple templates have syntax for support abstract level on templates (use different templates engines like Twig) wrapped in `<% %>` tags, like this [template]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Catalog/view/adminhtml/templates/product/edit/base_image.phtml){: target="_blank"} for displaying a product image:

{% highlight PHP inline=true %}
<img
    class="product-image"
    src="<%- data.url %>"
    data-position="<%- data.position %>"
    alt="<%- data.label %>" />
{% endhighlight %}

More information about [asp\_tags](http://php.net/manual/en/ini.core.php#ini.asp-tags){: target="_blank"}.

Edit `php.ini` and set `asp_tags = off`. For more information, see [Required PHP settings]({{ page.baseurl }}/install-gde/prereq/php-settings.html).
