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

## Functional test list

{% assign mftf = site.data.codebase.mftf.functional-tests | group_by: "module" | sort: "name"  %}

{% for item in mftf %}

### {{ item.name }}
{% for file in item.items %}
#### [{{ file.filename }}]({{file.repo}})
{: .mftf-test-link}

{% for test in file.tests %}
{{test.testname}}
  : {{test.description}}
{: .mftf-dl}
{% endfor %}
{% endfor %}
{% endfor %}
