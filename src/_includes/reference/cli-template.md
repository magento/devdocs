{% assign app = file.application %}

{% assign commands = file.commands %}

{% if file %}

{% if app.version %}
**Version**: {{ app.version }}
{:style="color:gray; font-size: 120%"}
{% endif %} <!-- app.version -->

This reference contains {{ commands | size }} commands available through the `{{ tool }}` command-line tool.
The initial list is auto generated using the `{{ tool }} list` command at the {{ edition }} edition.

{{ intro }}

## Reference

 {:.bs-callout-info}
This reference is generated from the Magento codebase. To change the content, you can update the source code for the corresponding command implementation in [Magento codebase](https://github.com/magento) repository and submit your changes for review. Another way is to _Give us feedback_ (find the link at the upper right). For contribution guidelines, see [Magento Code Contributions]({{ site.baseurl] }}/contributor-guide/contributing.html).

{% for command in commands %}
  {% assign arguments = command.definition.arguments %}
  {% assign options = command.definition.options %}

### `{{ command.name }}`

{{ command.description }}

{% for usage in command.usage %}
{% if app.name contains 'Cloud' %}

```bash
{{ usage }}
```

{% else %}

```bash
{{ tool }} {{ usage }}
```

{% endif %} <!-- app.name -->
{% endfor %} <!-- command.usage -->

{% unless arguments.size == 0 %}

#### Arguments

{% for argument in arguments %}
  {% for item in argument %}
    {% if item.name %}

##### `{{ item.name }}`

{{ item.description }}

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

  {% endfor %} <!-- argument -->
{% endfor %} <!-- arguments -->

{% endunless %} <!-- arguments.size -->

{% unless options.size == 0 %}

#### Options

 {% for option in options %}
 {% assign opt = option[1] %}

{% if opt.shortcut contains '-' %}

##### `{{ opt.name }}`, `{{ opt.shortcut }}`
{% else %}
##### `{{ opt.name }}`

{% endif %}

{{ opt.description | replace: '|', '\|'}}

   {% unless opt.default == nil %}
   {% if opt.default == false or opt.default == empty and opt.default != '' %}

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

{% endfor %} <!-- options -->

{% endunless %} <!-- options.size -->
{% endfor %} <!-- commands -->

{% else %} <!-- file -->

There is no data available for this reference at the moment.

{% endif %} <!-- file -->