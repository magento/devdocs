---
group: cli-reference
title: magento-cloud
functional_areas:
  - Configuration
  - System
  - Setup
---
<!-- All the assigned and captured content is used in the included template -->
{% assign tool = 'magento-cloud' %}

{% assign file = site.data.codebase.cloud.magento-cloud %}

{% assign edition = site.data.var.ece %}

{% capture intro %}
{: .bs-callout-info }
You can call Magento CLI commands using shortcuts instead of the full command name. For example, you can call `{{ tool }} setup:upgrade` using `{{ tool }} s:up`, `{{ tool }} s:upg`. See [shortcut syntax](https://symfony.com/doc/current/components/console/usage.html#shortcut-syntax) to understand how to use shortcuts with any Magento CLI command.
{% endcapture %}

<!-- The template to render with above values -->
{% include reference/cli-template.md %}
