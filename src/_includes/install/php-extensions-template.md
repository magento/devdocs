{% assign product = packages | where_exp: 'package', "package.name contains 'magento/product-'" | first %}

{% for item in product.require %}
  {% if item[0] contains 'ext-' %}
* {{ item[0] }}
  {% endif %}
{% endfor %}
