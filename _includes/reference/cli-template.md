{% assign app = file.application %}

{% assign commands = file.commands %}
{% if app %}
# {{ app.name }} (version {{ app.version }})
{% else %}
# Magento CLI
{% endif %}

This reference contains {{ commands | size }} commands available through the `bin/magento` command-line tool.
The initial list is auto generated using the `bin/magento list` command at the {{ site.data.var.ce }} edition. Use the ["Add CLI commands"]({{ page.baseurl }}/extension-dev-guide/cli-cmds/cli-add.html) guide to add a custom Magento CLI command.

{: .bs-callout-info }
You can call Magento CLI commands using shortcuts instead of the full command name. For example, you can call `bin/magento setup:upgrade` using `bin/magento s:up`, `bin/magento s:upg`, etc. See [shortcut syntax](https://symfony.com/doc/current/components/console/usage.html#shortcut-syntax) to understand how to use shortcuts with any Magento CLI command.

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
