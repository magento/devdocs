The Magento application uses Composer to manage PHP packages.
The `composer.json` file declares the list of packages, whereas the `composer.lock` file stores a complete list of the packages (a full version of each package and its dependencies) used to build a release version of the Magento application. The following tables list packages from the `composer.lock` file for {{ edition }} {{page.guide_version}}.

{% assign packages_by_type = packages | group_by:"type" | sort: "name" | reverse %}

{% for group in packages_by_type %}
## {{ group.name }}

<table>
  <thead>
    <tr>
      <th>Name</th>
    {% if group.name == 'metapackage' %}
      <th>Version</th>
    {% endif %}
      <th>License</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
{% for package in group.items %}
  <tr>
    <td>
  {% if package.source.url contains '://'%}
    <a href="{{ package.source.url }}">{{ package.name }}</a>
  {% else %}
    {{ package.name }}
  {% endif %}
    </td>
    {% if group.name == 'metapackage' %}
    <td>{{ package.version }}</td>
    {% endif %}
    <td>{{ package.license }}</td>
    <td>{{ package.description }}</td>
  </tr>
{% endfor %}
  </tbody>
</table>
{% endfor %}
