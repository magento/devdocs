{% assign app = file.application %}

{% assign commands = file.commands %}
{% if app %}
# {{ app.name }} (version {{ app.version }})
{% else %}
# Magento CLI
{% endif %}

This reference contains {{ commands | size }} commands available through the `bin/magento` command-line tool.
The initial list is auto generated using `bin/magento list` command at the {{ site.data.var.ce }} edition.

Please note, Magento CLI allows a short command name instead of a full one. For example, `bin/magento setup:upgrade` can be called via `bin/magento s:up`, `bin/magento s:upg`, etc.

{% for command in commands %}
  {% assign arguments = command.definition.arguments %}
  {% assign options = command.definition.options %}

## `{{ command.name }}`

{{ command.description }}

```bash
bin/magento {{ command.usage }}
```

  {% unless arguments.size == 0 %}

### Arguments
{: .no_toc}

  {% for argument in arguments %}
  {% for item in argument %}
  {% if item.name %}
  
  {% if item.default == empty %}
  {% endif %}

#### `{{ item.name }}`

- Description: {{ item.description }}
{% unless item.default == nil %}
  {% if item.default == false or (item.default == empty and item.default != '') %}
- Default: `{{ item.default | inspect }}`
  {% else %}
- Default: `{{ item.default }}`
  {% endif %}
{% endunless %}
  {% if item.is_required %}
- Required
  {% endif %}
  {% if item.is_array %}
- Array
  {% endif %}
  {% endif %}
  {% endfor %}
  {% endfor %}

### Options
{: .no_toc}

 {% for option in options %}
 {% assign opt = option[1] %}
#### {{ option[0] }}

- Option: `{{ opt.name }}`
{% if opt.shortcut contains '-' %}
- Shortcut: `{{ opt.shortcut }}`
{% endif %}
- Description: {{ opt.description }}
{% unless opt.default == nil %}
  {% if opt.default == false or (opt.default == empty and opt.default != '') %}
- Default: `{{ opt.default | inspect }}`
  {% else %}
- Default: `{{ opt.default }}`
  {% endif %}
{% endunless %}
{% if opt.is_value_required %}
- Requires a value
{% elsif opt.accept_value and opt.is_multiple %}
- Accepts multiple values
{% elsif opt.accept_value and opt.is_multiple == false %}
- Accepts a value
{% else %}
- Does not accept a value
{% endif %}
{% endfor %}

{% endunless %}
{% endfor %}
