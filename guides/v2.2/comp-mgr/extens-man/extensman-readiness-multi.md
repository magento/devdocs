---
group: compman
subgroup: 06_UseExtMan
title: Readiness check with multiple extension updates
menu_title: Readiness check with multiple extension updates
menu_node:
menu_order: 8
level3_menu_node: level3child
level3_subgroup: readiness
version: 2.2
functional_areas:
  - Upgrade
---

## Readiness check with multiple extension updates {#extensman-readiness-multi}

If you're updating multiple extensions, the readiness check displays success and failure as discussed in this topic.

### Successful readiness check {#extensman-readiness-multi-success}

{% collapsible Successful readiness check %}

![Readiness check with multiple extension updates]({{ site.baseurl }}/common/images/extensman_read-upd-multi-success.png){:width="600px"}

You have the following options:

*	Click **Update** or **Next** to continue to [Step 2. Backup]({{ page.baseurl }}/comp-mgr/extens-man/extensman-backup.html) with no changes
*	To update the extension to a different version, select the desired version from the list 
*	To remove the extension from the list and *not* update it, click ![Remove extension from the list]({{ site.baseurl }}/common/images/extensman_delete.png) (delete)

If you make changes, click **Try Again**.

{% endcollapsible %}

### Readiness check failure (conflicting dependencies) {#extensman-readiness-multi-fail}

{% collapsible Readiness check failure (conflicting dependencies) %}

If the readiness check fails because of version conflicts, you must resolve the conflicts before you continue your update. The following figure shows an example:

![Readiness check failure with multiple updates]({{ site.baseurl }}/common/images/extensman_read-upd-multi-fail.png)

You have the following options:

*	Click **Back** and select different extensions to update
*	From the list, click different versions of the selected extensions
*	To remove the extension from the list and *not* update it, click ![Remove extension from the list]({{ site.baseurl }}/common/images/extensman_delete.png) (delete)

After you make your changes, click **Try Again**. Repeat the process as necessary to resolve the conflicts.

{% endcollapsible %}

### Readiness check failure (other failures) {#compman-readiness-fail}

{% collapsible Readiness check failure (other failures) %}

Messages similar to the following display if a readiness check fails. 

![You must resolve all readiness check failures before you continue]({{ site.baseurl }}/common/images/cman_readiness-fail-ex.png)

In the event of failure, see one of the following sections:

*	<a href="{{ page.baseurl }}/comp-mgr/trouble/cman/updater.html">Updater check failure</a>
*	<a href="{{ page.baseurl }}/comp-mgr/trouble/cman/cron.html">Cron script check failure</a>
*	<a href="{{ page.baseurl }}/comp-mgr/trouble/cman/component-depend.html">Component dependency check failure</a>
*	<a href="{{ page.baseurl }}/comp-mgr/trouble/cman/php-version.html">PHP version readiness check issues</a>
*	<a href="{{ page.baseurl }}/install-gde/trouble/php/tshoot_php-set.html">PHP settings errors</a>
*	<a href="{{ page.baseurl }}/install-gde/system-requirements.html">PHP extensions check failure</a>

{% endcollapsible %}

#### Next step
[Step 2. Backup]({{ page.baseurl }}/comp-mgr/extens-man/extensman-backup.html)