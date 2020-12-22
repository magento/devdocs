{% if functional_tests %}

{% assign functional_tests_by_module = functional_tests | group_by: "module" | sort: "name"  %}

{% for entry in functional_tests_by_module %}

### {{ entry.name }}
{% for file in entry.items %}
#### {{ file.filename }}
{% for test in file.tests %}
{{ test.testname }}
  : {{ test.description }}
{: .mftf-dl}
{% endfor %} <!-- for test -->
{% endfor %} <!-- for file -->
{% endfor %} <!-- for entry -->

{% else %}

There is no data available for this reference at the moment.

{% endif %}
