<div class="bs-callout bs-callout-info" markdown="1">
[Find out your version]({{site.baseurl}}/mftf/2.3/introduction.html#find-version) of the MFTF.
If your version is 2.2, see the [MFTF 2.2 documentation]({{site.baseurl}}/mftf/2.2/introduction.html).

{% assign packages_2_3 = site.data.codebase.v2_3.open-source.composer_lock.packages-dev %}
{% assign packages_2_2 = site.data.codebase.v2_2.open-source.composer_lock.packages-dev %}

{% for package in packages_2_3 %}
{% if package.name contains 'magento2-functional-testing-framework'  %}
The latest Magento 2.2 release supports MFTF {{ package.version }}.
{% endif %}
{% endfor %}

{% for package in packages_2_2 %}
{% if package.name contains 'magento2-functional-testing-framework'  %}
The latest Magento 2.3 release supports MFTF {{ package.version }}.
{% endif %}
{% endfor %}
</div>