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
redirect_to: https://support.magento.com/hc/en-us/articles/360034599631
---

## PHP memory limit error {#trouble-php-memory}

The readiness checks makes sure you have at least 1GB of memory set aside for [PHP](https://glossary.magento.com/php) processes. This setting should be sufficient for most installations, including installing optional sample data. However, we recommend at least 2GB for debugging.

To increase your PHP memory limit:

1. Log in to your Magento server.
1. Locate your `php.ini` file using the following command:

   ```bash
   php --ini
   ```

1. As a user with `root` privileges, use a text editor to open the `php.ini` specified by `Loaded Configuration File`.
1. Locate `memory_limit`.
1. Change it to a value of `2GB` for normal use and debugging.
1. Save your changes to `php.ini` and exit the text editor.
1. Restart your web server.

   Examples follow:

   *  CentOS: `service httpd restart`
   *  Ubuntu: `service apache2 restart`
   *  nginx (both CentOS and Ubuntu): `service nginx restart`

1. Try the installation again.

## max-input-vars error due to large forms

Configurations with a high number of storeviews, products, attributes, or options can generate forms that exceed the preset PHP limit.
If the number of values sent surpasses the `max-input-vars` limit set within `php.ini` (default is 1000), the remaining data is not transferred and those database values do not get updated.
When this occurs, a warning appears in the PHP log:

```terminal
PHP message: PHP Warning: Unknown: Input variables exceeded 1000. To increase the limit change max_input_vars in php.ini.
```

There is no 'proper' value for `max-input-vars`; it depends on the size and complexity of your configuration. Modify the value in the `php.ini` file as needed. See [Required PHP settings][].

## xdebug maximum function nesting level error {#trouble-php-xdebug}

See [During installation, xdebug maximum function nesting level error](https://support.magento.com/hc/en-us/articles/360034238512).

## Errors display when you access a PHTML template {#trouble-php-asptags}

Error text is typically:

```terminal
Parse error: syntax error, unexpected 'data' (T_STRING)
```

Multiple templates have syntax for support abstract level on templates (use different templates engines like Twig) wrapped in `<% %>` tags, like this [template][]{:target="_blank"} for displaying a product image:

```php
<img
    class="product-image"
    src="<%- data.url %>"
    data-position="<%- data.position %>"
    alt="<%- data.label %>" />
```

More information about [asp_tags][]{:target="_blank"}.

Edit `php.ini` and set `asp_tags = off`. For more information, see [Required PHP settings][].

<!-- Link Reference -->

[Required PHP settings]: {{ page.baseurl }}/install-gde/prereq/php-settings.html
[asp_tags]: http://php.net/manual/en/ini.core.php#ini.asp-tags
[template]: {{ site.mage2bloburl }}/2.0/app/code/Magento/Catalog/view/adminhtml/templates/product/edit/base_image.phtml
[`phpinfo.php`]: {{ page.baseurl }}/install-gde/prereq/optional.html#install-optional-phpinfo
