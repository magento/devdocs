{% assign supported_php_versions = site.data.codebase.v2_3.open-source.composer_lock.platform.php | split: "||" %}

{% for version in supported_php_versions %}
* {{ version }}
{% endfor %}

Magento 2.3.1 is certified and tested on PHP 7.2.11.