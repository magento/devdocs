
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