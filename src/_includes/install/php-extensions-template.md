{% assign product = packages | where_exp: 'package', "package.name contains 'magento/product-'" | first %}

{% for item in product.require %}
  {% if item[0] contains 'ext-' %}

*  {{ item[0] }}
  {% endif %}
{% endfor %}
{% unless page.guide_version == '2.3' %}
*  ext-sockets
{% else %}

{:.bs-callout-warning}
If you install Magento via cloning from the [GitHub](https://github.com/magento/magento2) repository then make sure you have the [ext-sockets](https://github.com/php-amqplib/php-amqplib/blob/master/CHANGELOG.md#281---2018-11-13) installed on your instance.
{% endunless %}