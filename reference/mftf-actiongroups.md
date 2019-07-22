---
layout: full-width
title: MFTF Action Group Reference
---

Action Groups are encapsulated pieces of functionality that can be used together to build MFTF tests.
For instance, the 'Admin Login' action group bundles all the admin login steps into a single action group that can be called by any test.
This reference lists all the Action Groups defined in the Magento2 codebase.

{% assign actiongroups = site.data.actiongroups | group_by: "module" | sort: "name" %}
{% for module in actiongroups %}

## {{ module.name }}
{% for item in module.items %}
- [{{item.page}}]({{item.repo}})
{% for group in item.actiongroups %}
    - {{group.actiongroup}}

{% endfor %}
{% endfor %}
{% endfor %}
