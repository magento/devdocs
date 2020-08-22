{% if action_groups %}

{% assign action_groups_by_module = action_groups | group_by: "module" | sort: "name"  %}
{% for item in action_groups_by_module %}

### {{ item.name }}

{% for file in item.items %}

#### {{ file.filename }}

{% for group in file.actiongroups %}
{{group.name}}
  : {% if group.description == '' %}No description.{% else %}{{group.description}}{% endif %}
{:.ref-list-dt}
{% endfor %} <!-- for group -->
{% endfor %} <!-- for file -->
{% endfor %} <!-- for item -->

{% else %}

There is no data available for this reference at the moment.

{% endif %}