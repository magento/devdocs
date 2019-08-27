---
group: software-update-guide
subgroup: 06_UseExtMan
title: Readiness check failure
menu_title: Readiness check failure
menu_node:
menu_order: 7
level3_menu_node: level3child
level3_subgroup: readiness
functional_areas:
  - Upgrade
---

## Readiness check failure {#compman-readiness-fail}

Messages similar to the following display if any readiness check fails.

![You must resolve all readiness check failures before you continue]({{ site.baseurl }}/common/images/cman_readiness-fail-ex.png)

{: .bs-callout-info }
If you're updating multiple extensions, see [Readiness check with multiple extension updates]({{ page.baseurl }}/comp-mgr/extens-man/extensman-readiness-multi.html#extensman-readiness-multi-fail) instead.

In the [event](https://glossary.magento.com/event) of failure, see one of the following sections:

*	<a href="{{ page.baseurl }}/comp-mgr/trouble/cman/updater.html">Updater check failure</a>
*	<a href="{{ page.baseurl }}/comp-mgr/trouble/cman/cron.html">Cron script check failure</a>
*	<a href="{{ page.baseurl }}/comp-mgr/trouble/cman/component-depend.html">Component dependency check failure</a>
*	<a href="{{ page.baseurl }}/comp-mgr/trouble/cman/php-version.html">PHP version readiness check issues</a>
*	<a href="{{ page.baseurl }}/install-gde/trouble/php/tshoot_php-set.html">PHP settings errors</a>
*	<a href="{{ page.baseurl }}/install-gde/system-requirements.html">PHP extensions check failure</a>
