{% assign app = file.application %}

{% assign commands = file.commands %}

{% if app.version %}
**Version**: {{ app.version }}
{: style="color:gray; font-size: 120%"}
{% endif %}

This reference contains {{ commands | size }} commands available through the `{{ tool }}` command-line tool.
The initial list is auto generated using the `{{ tool }} list` command at the {{ edition }} edition.

{{ intro }}

## Reference

{: .bs-callout-info }
This reference is generated from the Magento codebase. To add or update the content, you must update the source code for the corresponding CLI command in the [Magento 2 codebase](https://github.com/magento/magento2) repository and submit your changes for review.  For contribution guidelines, see [Magento Code Contributions]({{ page.baseurl] }}/contributor-guide/contributing.html).

{% for command in commands %}
  {% assign arguments = command.definition.arguments %}
  {% assign options = command.definition.options %}

### `{{ command.name }}`

{{ command.description }}

```bash
{{ tool }} {{ command.usage }}
```

{% unless arguments.size == 0 %}

#### Arguments

{% for argument in arguments %}
  {% for item in argument %}
    {% if item.name %}
      {% if item.default == empty %}
      {% endif %}

##### `{{ item.name }}`

-  Description: {{ item.description }}
   {% unless item.default == nil %}
   {% if item.default == false or (item.default == empty and item.default != '') %}
-  Default: `{{ item.default | inspect }}`
   {% else %}
-  Default: `{{ item.default }}`
   {% endif %}
   {% endunless %}
   {% if item.is_required %}
-  Required
   {% endif %}
   {% if item.is_array %}
-  Array
   {% endif %}
   {% endif %}
   {% endfor %}
   {% endfor %}

#### Options

 {% for option in options %}
 {% assign opt = option[1] %}

##### `{{ option[0] }}`

-  Option: `{{ opt.name }}`
   {% if opt.shortcut contains '-' %}
-  Shortcut: `{{ opt.shortcut }}`
   {% endif %}
-  Description: {{ opt.description }}
   {% unless opt.default == nil %}
   {% if opt.default == false or (opt.default == empty and opt.default != '') %}
-  Default: `{{ opt.default | inspect }}`
   {% else %}
-  Default: `{{ opt.default }}`
   {% endif %}
   {% endunless %}
   {% if opt.is_value_required %}
-  Requires a value
   {% elsif opt.accept_value and opt.is_multiple %}
-  Accepts multiple values
   {% elsif opt.accept_value and opt.is_multiple == false %}
-  Accepts a value
   {% else %}
-  Does not accept a value
   {% endif %}
   {% endfor %}

{% endunless %}
{% endfor %}
