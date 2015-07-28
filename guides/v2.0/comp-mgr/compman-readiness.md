---
layout: default 
group: compman
subgroup: C_UseCompMan
title: Readiness check
menu_title: Readiness check
menu_node: 
menu_order: 5
github_link: comp-mgr/compman-readiness.md
---


<h2 id="compman-readiness-over">Readiness check overview</h2>
The readiness check makes sure your server and environment are set up correctly for updating, enabling, or disabling components. In the event of errors, you can consult troubleshooting suggestions in this guide.

<h2 id="compman-readiness-start">Start the readiness check</h2>
To start, click either **Start Readiness Check** or **Next** on the Magento Component Manager page. A sample follows.

<img src="{{ site.baseurl }}common/images/cman_update_readiness.png" alt="The readiness check enables you to find out if your server and environment are ready to proceed">

### Success
The following figure shows an example of a successful readiness check. If all tests passed, click **Next** and continue with TBD.

<img src="{{ site.baseurl }}common/images/cman_readiness-success.png" alt="If all readiness checks pass, click Next and continue with the next step">

### Failure
Messages similar to the following display if any readiness check fails. 

<img src="{{ site.baseurl }}common/images/cman_readiness-fail-ex.png" alt="You must resolve all readiness check failures before you continue">

In the event of failure, see one of the following sections:

*	<a href="{{ site.gdeurl }}comp-mgr/trouble/cman/updater.html">Updater check failure</a>
*	<a href="{{ site.gdeurl }}comp-mgr/trouble/cman/cron.html">Cron script check failure</a>
*	<a href="{{ site.gdeurl }}comp-mgr/trouble/cman/component-depend.html">Component dependency check failure</a>
*	<a href="{{ site.gdeurl }}install-gde/system-requirements.html">PHP version check failure</a>
*	PHP settings check failure (<a href="{{ site.gdeurl }}install-gde/prereq/php-ubuntu.html#instgde-prereq-timezone">Ubuntu</a>, <a href="{{ site.gdeurl }}install-gde/prereq/php-centos.html#instgde-prereq-timezone">CentOS</a>)
*	<a href="{{ site.gdeurl }}install-gde/system-requirements.html">PHP extensions check failure</a>