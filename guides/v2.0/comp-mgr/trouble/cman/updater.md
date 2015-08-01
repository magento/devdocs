---
layout: default
group: compman
subgroup: ZZ_Troubleshooting
title: Troubleshoot the updater application
menu_title: Troubleshoot the updater application
menu_node: 
menu_order: 5
github_link: comp-mgr/trouble/cman/updater.md
---
<!-- This topic is referred to from Magento 2 code! Don't change the URL without informing engineering! -->
<!-- Referring file: TBD owned by Ogres -->

<h2 id="trouble-updater">Troubleshoot the updater application</h2>
If the updater application is not available, the following message displays in the readiness check:

	Updater application is not available. 
	Please, download and install Updater application.

To resolve this issue, see if there is a `<your Magento install dir>/update` directory that contains files and subdirectories. If not, see <a href="{{ site.gdeurl }}install-gde/prereq/prereq_updater.html">Set up the updater</a>.
