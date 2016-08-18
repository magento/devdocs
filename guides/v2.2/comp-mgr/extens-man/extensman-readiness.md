---
layout: default 
group: compman
subgroup: 06_UseExtMan
title: Step 1. Readiness check
menu_title: Step 1. Readiness check
menu_node: 
menu_order: 5
version: 2.2
github_link: comp-mgr/extens-man/extensman-readiness.md
---

## Step 1: Readiness check
The readiness check makes sure your server and environment are set up correctly for installing, uninstalling, or updating. In the event of errors, you can consult troubleshooting suggestions in this guide.

To start, click either **Start Readiness Check** or **Next**. A sample follows.

![The readiness check enables you to find out if your server and environment are ready to proceed]({{ site.baseurl }}common/images/extensman_update_readiness.png){:width="650px"}

After the readiness check completes, see one of the following:

*	[Readiness check success](#compman-readiness-success)
*	[Readiness check with multiple extension updates](#extensman-readiness-multi)
*	[Readiness check failure](#compman-readiness-fail)

### Readiness check success {#compman-readiness-success}
The following figure shows an example of a successful readiness check. If all tests passed, click **Next** and continue with the next step.

![If all readiness checks pass, click Next and continue with the next step]({{ site.baseurl }}common/images/extensman_readiness-success.png)

### Readiness check with multiple extension updates {#extensman-readiness-multi}
If you're updating multiple extensions, the readiness check displays success and failure as discussed in this section.

### Successful readiness check
A successful readiness check displays as follows:

![Readiness check with multiple extension updates]({{ site.baseurl }}common/images/extensman_read-upd-multi-success.png){:width="600px"}

You have the following options:

*	Click **Update** or **Next** to continue without any changes
*	To update the extension to a different version, select the desired version from the list 
*	To remove the extension from the list and *not* update it, click ![Remove extension from the list]({{ site.baseurl }}common/images/extensman_delete.png) (delete)

If you make changes, click **Try Again**.

### Readiness check failure
TBD

### Readiness check failure {#compman-readiness-fail}
Messages similar to the following display if any readiness check fails. 

![You must resolve all readiness check failures before you continue]({{ site.baseurl }}common/images/cman_readiness-fail-ex.png)

In the event of failure, see one of the following sections:

*	<a href="{{page.baseurl}}comp-mgr/trouble/cman/updater.html">Updater check failure</a>
*	<a href="{{page.baseurl}}comp-mgr/trouble/cman/cron.html">Cron script check failure</a>
*	<a href="{{page.baseurl}}comp-mgr/trouble/cman/component-depend.html">Component dependency check failure</a>
*	<a href="{{page.baseurl}}comp-mgr/trouble/cman/php-version.html">PHP version readiness check issues</a>
*	<a href="{{page.baseurl}}install-gde/trouble/php/tshoot_php-set.html">PHP settings errors</a>
*	<a href="{{page.baseurl}}install-gde/system-requirements.html">PHP extensions check failure</a>




#### Next step
[Step 2. Backup]({{ page.baseurl }}comp-mgr/extens-man/extensman-backup.html)