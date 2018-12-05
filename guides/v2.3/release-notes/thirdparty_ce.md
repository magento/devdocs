---
group: release-notes
title: Magento Open Source third-party licenses
---

This page contains links to the third party components used within {{site.data.var.ce}}.
Click the **Name** links to view the repository and the license agreement.

## Packages required for production

{% assign packages = site.data.codebase.composer-lock.packages %}

Name | Version |  License | Description
--- | --- | --- | --- {% for package in packages %}
[{{ package.name }}]({{ package.source.url }}) | {{ package.version }} | {{ package.license }} | {{ package.description }}{% endfor %}

## Packages required for development

{% assign packages-dev = site.data.codebase.composer-lock.packages-dev %}

Name | Version |  License | Description
--- | --- | --- | --- {% for package in packages-dev %}
[{{ package.name }}]({{ package.source.url }}) | {{ package.version }} | {{ package.license }} | {{ package.description }}{% endfor %}

## Other supported packages

Name                                                                      | Version | License
--------------------------------------------------------------------------|---------|---------
[ircmaxell/password-compat](https://github.com/ircmaxell/password_compat) | v1.0.4  | MIT
[seld/cli-prompt](https://github.com/Seldaek/cli-prompt)                  | 1.0.3   | MIT
[Swagger UI](https://github.com/swagger-api/swagger-ui)                   | 2.0     | Apache 2
[symfony/debug](https://github.com/symfony/debug)                         | v3.0.9  | MIT
[symfony/polyfill-php54](https://github.com/symfony/polyfill-php54)       | v1.6.0  | MIT
[symfony/polyfill-php55](https://github.com/symfony/polyfill-php55)       | v1.6.0  | MIT
[symfony/polyfill-xml](https://github.com/symfony/polyfill-xml)           | v1.6.0  | MIT