---
group: mftf
---

# MFTF action group reference

Action groups are important building blocks for quickly creating tests for the Magento Functional Testing Framework.
This page lists all current action groups so developers can see what is available to them.

## Action group list

{% assign actiongroups = site.data.codebase.mftf.action-groups | group_by: "module" | sort: "name"  %}
{% for item in actiongroups %}

### {{ item.name }}

{% for file in item.items %}

#### [{{ file.filename }}]({{file.repo}})

{% for test in file.actiongroups %}
{{test.name}}
  : {% if test.description == '' %}No description.{% else %}{{test.description}}{% endif %}
{:.ref-list-dt}
{% endfor %}
{% endfor %}
{% endfor %}
