---
layout: default 
group: compman
subgroup: 15_UseUpgrade
title: Step 4. Upgrade
menu_title: Step 4. Upgrade
menu_node: 
menu_order: 20
github_link: comp-mgr/upgrader/upgrade.md
---

## Clear `var` directories (upgrade with sample data only) {#compman-upgr-var}
This section applies to you *only* if all of the following are true:

*	You're upgrading to Magento Enterprise Edition (EE) 2.1 Release Candidate 1 (RC1) or RC2
*	You installed sample data

If the preceding are not true, skip this section and continue with [Step 4. Upgrade](#upgrade-finish).

Before you continue your upgrade:

1.	Log in to your Magento server as, or switch to, the [Magento file system owner]({{ site.gdeurl }}install-gde/prereq/file-sys-perms-over.html).
2.	Change to your Magento installation directory.
2.	Clear the `var/cache`, `var/page_cache`, and `var/generation` directories.

	A sample command follows:

		rm -rf var/cache/* var/page_cache/* var/generation/*
3.	Continue with the next section.

## Step 4. Upgrade {#upgrade-finish}
The components you're upgrading display. The following figure shows an example.

<img src="{{ site.baseurl }}common/images/upgr_upgrade.png" width="550px" alt="Click upgrade to complete the task">


To complete the upgrade, click **Upgrade**. If the upgrade is successful, a page similar to the following displays.

<img src="{{ site.baseurl }}common/images/upgr_success.png" width="350px" alt="Your upgrade was successful">

Messages similar to the following display in the Console Log:

{% collapsible Click to view the Console Log %}

<img src="{{ site.baseurl }}common/images/upgrade-success-consolelog.png" width="650px">

{% endcollapsible %}

After the upgrade finishes, access your storefront.

The following error might display:

	We're sorry, an error has occurred while generating this email.
	
If the error displays, perform the following tasks:

1.	Reset [file system ownership and permissions]({{ site.gdeurl }}install-gde/prereq/file-system-perms.html).

	*	If you run the Magento application with one user account, enter the commands as that user.
	*	If you run the Magento application with two user accounts, you must enter the commands as `root`.

2.	Clear the following directories and try to access your storefront again:

		rm -rf var/cache/* var/page_cache/* var/generation/*
