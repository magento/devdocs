The Magento application uses Composer to manage PHP packages.
The `composer.json` file declares the list of packages, whereas the `composer.lock` file stores a complete list of the packages (a full version of each package and its dependencies) used to build a release version of the Magento application. The following tables list packages from the `composer.lock` file for {{ edition }} {{page.guide_version}}.

## Magento packages

This section contains information about the `magento` dependencies for the latest {{ edition }} {{page.guide_version}} release.
Click the **Name** links to view the repository and the license agreement.

### Required packages

| Name | Version |  License | Description |
| --- | --- | --- | --- |{% for package in packages %}{% if package.name contains 'magento/' %}
| [{{ package.name }}]({{ package.source.url }}) | {{ package.version }} | {{ package.license }} | {{ package.description }} |{% endif %}{% endfor %}

{% assign magento-packages-dev = packages-dev | where_exp: "package", "package.name contains 'magento/'" %}

{% unless magento-packages-dev == empty %}

### Supported packages for development

| Name | Version |  License | Description |
| --- | --- | --- | --- |{% for package in magento-packages-dev %}
| [{{ package.name }}]({{ package.source.url }}) | {{ package.version }} | {{ package.license }} | {{ package.description }} |{% endfor %}
{% endunless %}

## Third party packages

This section contains information about third party packages for the latest {{ edition }} {{page.guide_version}} release.
Click the **Name** links to view the repository and the license agreement.

### Required packages

| Name | Version |  License | Description |
| --- | --- | --- | --- |{% for package in packages %}{% unless package.name contains 'magento/' %}
| [{{ package.name }}]({{ package.source.url }}) | {{ package.version }} | {{ package.license }} | {{ package.description }} |{% endunless %}{% endfor %}

{% unless packages-dev == empty %}

### Supported packages for development

| Name | Version |  License | Description |
| --- | --- | --- | --- |{% for package in packages-dev %}{% unless package.name contains 'magento/' %}
| [{{ package.name }}]({{ package.source.url }}) | {{ package.version }} | {{ package.license }} | {{ package.description }} |{% endunless %}{% endfor %}
{% endunless %}
