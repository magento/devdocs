---
layout: default 
group: compman
subgroup: 05_UseCompMan
title: Step 1. Readiness check
menu_title: Step 1. Readiness check
menu_node: 
menu_order: 5
version: 2.0
github_link: comp-mgr/compman-readiness.md
---


<h2 id="compman-readiness-over">Readiness check overview</h2>
The readiness check makes sure your server and environment are set up correctly for updating, enabling, or disabling components. In the event of errors, you can consult troubleshooting suggestions in this guide.

<h2 id="compman-readiness-start">Start the readiness check</h2>
To start, click either **Start Readiness Check** or **Next** on the Magento Component Manager page. A sample follows.

<img src="{{ site.baseurl }}common/images/cman_update_readiness.png" width="650px" alt="The readiness check enables you to find out if your server and environment are ready to proceed">

See one of the following:

*	<a href="#compman-readiness-success">Success</a>
*	<a href="#compman-readiness-fail">Failure</a>

<h3 id="compman-readiness-success">Success</h3>
The following figure shows an example of a successful readiness check. If all tests passed, click **Next** and continue with <a href="{{ site.gdeurl }}comp-mgr/compman-backup.html">Backup</a>.

<img src="{{ site.baseurl }}common/images/cman_readiness-success.png" width="700px" alt="If all readiness checks pass, click Next and continue with the next step">

<h3 id="compman-readiness-fail">Failure</h3>
Messages similar to the following display if any readiness check fails. 

<img src="{{ site.baseurl }}common/images/cman_readiness-fail-ex.png" alt="You must resolve all readiness check failures before you continue">

In the event of failure, see one of the following sections:

*	<a href="{{ site.gdeurl }}comp-mgr/trouble/cman/updater.html">Updater check failure</a>
*	<a href="{{ site.gdeurl }}comp-mgr/trouble/cman/cron.html">Cron script check failure</a>
*	<a href="{{ site.gdeurl }}comp-mgr/trouble/cman/component-depend.html">Component dependency check failure</a>
*	<a href="{{ site.gdeurl }}comp-mgr/trouble/cman/php-version.html">PHP version readiness check issues</a>
*	<a href="{{ site.gdeurl }}install-gde/trouble/php/tshoot_php-set.html">PHP settings errors</a>
*	<a href="{{ site.gdeurl }}install-gde/system-requirements.html">PHP extensions check failure</a>
*	<a href="{{ site.gdeurl }}comp-mgr/trouble/cman/doc.html">magento/theme-doc-blank failure</a>
