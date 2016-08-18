---
layout: default 
group: compman
subgroup: 06_UseExtMan
title: Readiness check failure
menu_title: Readiness check failure
menu_node: 
menu_order: 7
level3_menu_node: level3child
level3_subgroup: readiness
version: 2.2
github_link: comp-mgr/extens-man/extensman-readiness-fail.md
---

## Readiness check failure {#compman-readiness-fail}
Messages similar to the following display if any readiness check fails. 

![You must resolve all readiness check failures before you continue]({{ site.baseurl }}common/images/cman_readiness-fail-ex.png)

<div class="bs-callout bs-callout-info" id="info">
	<p>If you're updating multiple extensions, see <a href="{{ page.baseurl }}comp-mgr/extens-man/extensman-readiness-multi.html#extensman-readiness-multi-fail">Readiness check with multiple extension updates</a> instead.</p>
</div>

In the event of failure, see one of the following sections:

*	<a href="{{page.baseurl}}comp-mgr/trouble/cman/updater.html">Updater check failure</a>
*	<a href="{{page.baseurl}}comp-mgr/trouble/cman/cron.html">Cron script check failure</a>
*	<a href="{{page.baseurl}}comp-mgr/trouble/cman/component-depend.html">Component dependency check failure</a>
*	<a href="{{page.baseurl}}comp-mgr/trouble/cman/php-version.html">PHP version readiness check issues</a>
*	<a href="{{page.baseurl}}install-gde/trouble/php/tshoot_php-set.html">PHP settings errors</a>
*	<a href="{{page.baseurl}}install-gde/system-requirements.html">PHP extensions check failure</a>
