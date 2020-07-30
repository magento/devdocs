---
group: mftf
---

# MFTF action group reference

Action groups are important building blocks for quickly creating tests for the Magento Functional Testing Framework.
This page lists all current action groups so developers can see what is available to them.

{% assign action_groups = site.data.codebase.v2_4.mftf.ce.action-groups %}

{% if action_groups %}

## Action group list

{% assign action_groups_by_module = action_groups | group_by: "module" | sort: "name"  %}
{% for item in action_groups_by_module %}

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

{% else %}

There is no data available for this reference at the moment.

{% endif %}