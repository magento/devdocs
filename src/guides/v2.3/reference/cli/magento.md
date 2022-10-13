---
group: cli-reference
title: bin/magento (Open Source)
functional_areas:
  - Configuration
  - System
  - Setup
---
<!-- All the assigned and captured content is used in the included template -->
{% assign tool = 'bin/magento' %}

{% assign file = site.data.codebase.v2_3.open-source.bin-magento %}

{% assign edition = site.data.var.ce %}

{% capture intro %}
Use the ["Add CLI commands"]({{ page.baseurl }}/extension-dev-guide/cli-cmds/cli-add.html) guide to add a custom Magento CLI command.

 {:.bs-callout-info}
You can call Magento CLI commands using shortcuts instead of the full command name. For example, you can call `{{ tool }} setup:upgrade` using `{{ tool }} s:up`, `{{ tool }} s:upg`. See [shortcut syntax](https://symfony.com/doc/current/components/console/usage.html#shortcut-syntax) to understand how to use shortcuts with any Magento CLI command.
{% endcapture %}

<!-- The template to render with above values -->
{% include reference/cli-template.md %}