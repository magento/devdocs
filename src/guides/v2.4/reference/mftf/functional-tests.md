---
group: mftf
---
<style>
.mftf-dl {
  margin-bottom: 2.5em;
}
dl dt{
  font-weight:400;
}
</style>

# MFTF functional test reference

The Magento Functional Testing Framework runs tests on every Module within Magento. These files are stored within each Module folder in the Magento repo.
This page lists all those tests so that developers can have a good sense of what is covered.

{% assign functional_tests = site.data.codebase.v2_4.mftf.functional-tests  %}

{% if functional_tests %}

## Functional test list

{% assign functional_tests_by_module = functional_tests | group_by: "module" | sort: "name"  %}

{% for entry in functional_tests_by_module %}

### {{ entry.name }}
{% for file in entry.items %}
#### [{{ file.filename }}]({{file.repo}})
{: .mftf-test-link}

{% for test in file.tests %}
{{ test.testname }}
  : {{ test.description }}
{: .mftf-dl}
{% endfor %}
{% endfor %}
{% endfor %}

{% else %}

There is no data available for this reference at the moment.

{% endif %}