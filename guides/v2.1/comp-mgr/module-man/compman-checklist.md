---
group: compman
subgroup: 05_UseCompMan
title: Run the Component Manager
menu_title: Run the Component Manager
menu_node: parent
menu_order: 1
version: 2.1
redirect_from: /guides/v2.0/comp-mgr/compman-checklist.html
functional_areas:
  - Upgrade
---

## Overview of the Component Manager {#compman-overview}

This section discusses how to start the Component Manager, which updates or uninstalls Magento components:

*	Modules (extend Magento capabilities)
*	Themes (change the look and feel of your {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} and Admin)
*	Language packages (localize the storefront and Admin)

{:.bs-callout .bs-callout-warning}
If you installed the Magento application by [cloning the GitHub repository]({{ page.baseurl }}/install-gde/prereq/dev_install.html), you _cannot_ use the Component Manager utility to update components. Instead, you must [update them manually]({{ page.baseurl }}/install-gde/install/cli/dev_options.html).

## Prerequisites {#compman-prereq}

Before continuing, complete all tasks discussed in [Prerequisites]({{ page.baseurl }}/comp-mgr/prereq/prereq_compman.html).

## Component Manager checklist
{% include comp-man/checklist.md %}

#### Next step
[Run the Component Manager]({{ page.baseurl }}/comp-mgr/module-man/compman-start.html)
