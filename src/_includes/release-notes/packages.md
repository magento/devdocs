The Magento application uses Composer to manage PHP packages.

The `composer.json` file declares the list of packages, whereas the `composer.lock` file stores a complete list of the packages (a full version of each package and its dependencies) used to build an installation of the Magento application.

The following reference documentation is generated from the `composer.lock` file, and it covers required packages included in {{ edition }} {{ product.version }}.

## Dependencies

`{{ product.name }} {{ product.version }}` has the following dependencies:

```config
{%- for dependency in product.require %}
{{ dependency[0] }}: {{ dependency[1] }}
{%- endfor %}
```

{% assign packages_by_license = packages | group_by:"license" | sort: 'name' %}

## Third-party licenses

{% for group in packages_by_license %}
{% unless group.name == "" %}

### {{ group.name | remove: '[' | remove: '"' | remove: ']'}}

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
  {% for package in group.items %}
    {% unless package.name contains 'magento/' %}
  <tr>
    <td>
    {% if package.source.url contains '://'%}
      <a href="{{ package.source.url }}">{{ package.name }}</a>
    {% else %}
      {{ package.name }}
    {% endif %}
    </td>
    <td>{{ package.type }}</td>
    <td>{{ package.description }}</td>
  </tr>
    {%endunless%}
  {% endfor %}
  </tbody>
</table>
{% endunless %}
{% endfor %}
