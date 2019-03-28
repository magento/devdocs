## Magento packages

This section contains information about the [magento](https://github.com/magento/) packages used within {{ edition }}.
Click the **Name** links to view the repository and the license agreement.

### Required packages

{:style="table-layout:auto;"}
| Name | Version |  License | Description |
| --- | --- | --- | --- |{% for package in packages %}{% if package.name contains 'magento/' %}
| [{{ package.name }}]({{ package.source.url }}) | {{ package.version }} | {{ package.license }} | {{ package.description }} |{% endif %}{% endfor %}

### Supported packages for development

{:style="table-layout:auto;"}
| Name | Version |  License | Description |
| --- | --- | --- | --- |{% for package in packages-dev %}{% if package.name contains 'magento/' %}
| [{{ package.name }}]({{ package.source.url }}) | {{ package.version }} | {{ package.license }} | {{ package.description }} |{% endif %}{% endfor %}

## Third party packages

This section contains information about third party packages used within {{ edition }}.
Click the **Name** links to view the repository and the license agreement.

### Required packages

{:style="table-layout:auto;"}
| Name | Version |  License | Description |
| --- | --- | --- | --- |{% for package in packages %}{% unless package.name contains 'magento/' %}
| [{{ package.name }}]({{ package.source.url }}) | {{ package.version }} | {{ package.license }} | {{ package.description }} |{% endunless %}{% endfor %}

{% unless packages-dev == empty %}

### Supported packages for development

{:style="table-layout:auto;"}
| Name | Version |  License | Description |
| --- | --- | --- | --- |{% for package in packages-dev %}{% unless package.name contains 'magento/' %}
| [{{ package.name }}]({{ package.source.url }}) | {{ package.version }} | {{ package.license }} | {{ package.description }} |{% endunless %}{% endfor %}
{% endunless %}