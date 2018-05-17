---
group: config-guide
subgroup: 07_conf
title: Magento Enterprise B2B Extension configuration paths reference
menu_title: Magento Enterprise B2B Extension configuration paths reference
menu_order: 5500
menu_node:
level3_menu_node: level3child
level3_subgroup: config-ref
version: 2.2
github_link: config-guide/prod/config-reference-b2b.md
functional_areas:
  - Configuration
  - System
  - Setup
---

This topic lists configuration paths for Magento Enterprise B2B Extension. The [`magento app:config:dump` command]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-config-mgmt-export.html) writes these values to the shared configuration file, `app/etc/config.php`, which should be in source control.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
This reference lists _only_ configuration paths unique to Magento Enterprise B2B Extension. Magento Enterprise B2B Extension includes all configuration paths for {{site.data.var.ce}} and {{site.data.var.ee}} as well.
</div>

For those configuration paths, see:

*	[Payment configuration paths]({{ page.baseurl }}/config-guide/prod/config-reference-payment.html)
*	[Sensitive and system-specific configuration paths reference]({{ page.baseurl }}/config-guide/prod/config-reference-sens.html)

To optionally override any configuration settings or to set sensitive settings, see [Use environment variables to override configuration settings]({{ page.baseurl }}/config-guide/prod/config-reference-var-name.html).

{% include config/config-reference-b2b.md %}
