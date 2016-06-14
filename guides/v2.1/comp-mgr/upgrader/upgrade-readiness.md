---
layout: default 
group: compman
subgroup: 15_UseUpgrade
title: Step 2. Readiness check
menu_title: Step 2. Readiness check
menu_node: 
menu_order: 10
version: 2.1
github_link21: comp-mgr/upgrader/upgrade-readiness.md
---


<h2 id="upgrade-readiness-over">Readiness check overview</h2>
The readiness check makes sure your server and environment are set up correctly for upgrading components. In the event of errors, you can consult troubleshooting suggestions in this guide.

<h2 id="compman-readiness-start">Start the readiness check</h2>
To start, click either **Start Readiness Check** or **Next** on the System Upgrade page. A sample follows.

<img src="{{ site.baseurl }}common/images/upgr_readiness.png" width="650px" alt="The readiness check enables you to find out if your server and environment are ready to proceed">

See one of the following:

*	<a href="#compman-readiness-success">Success</a>
*	<a href="#compman-readiness-fail">Failure</a>

<h3 id="compman-readiness-success">Success</h3>
The following figure shows an example of a successful readiness check. If all tests passed, click **Next** and continue with <a href="{{ site.gdeurl21 }}comp-mgr/upgrader/upgrade-backup.html">Step 3. Backup</a>.

<img src="{{ site.baseurl }}common/images/upgr_readiness-success.png" width="700px" alt="If all readiness checks pass, click Next and continue with the next step">

<h3 id="compman-readiness-fail">Failure</h3>
Messages similar to the following display if any readiness check fails. 

<img src="{{ site.baseurl }}common/images/upgr_readiness-fail.png" alt="You must resolve all readiness check failures before you continue">

In the event of failure, see one of the following sections:

*	<a href="{{ site.gdeurl21 }}comp-mgr/trouble/cman/updater.html">Updater check failure</a>
*	<a href="{{ site.gdeurl21 }}comp-mgr/trouble/cman/cron.html">Cron script check failure</a>
*	<a href="{{ site.gdeurl21 }}comp-mgr/trouble/cman/component-depend.html">Component dependency check failure</a>
*	<a href="{{ site.gdeurl21 }}comp-mgr/trouble/cman/php-version.html">PHP version readiness check issues</a>
*	<a href="{{ site.gdeurl21 }}install-gde/trouble/php/tshoot_php-set.html">PHP settings check failure</a>
*	<a href="{{ site.gdeurl21 }}install-gde/system-requirements.html">PHP extensions check failure</a>
