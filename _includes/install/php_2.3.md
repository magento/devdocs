{% assign supported_php_versions = site.data.codebase.v2_3.open-source.composer_lock.platform.php | split: "||" %}

{% for version in supported_php_versions %}
* {{ version }}
{% endfor %}