---
layout: default
group: release-notes
subgroup: Technical Bulletin
title: Issues upgrading to 2.0.1 (Jan. 27, 2016)
menu_title: Issues upgrading to 2.0.1 (Jan. 27, 2016)
menu_node: 
menu_order: 1
github_link: release-notes/tech_bull_jan_22_16.md
---

## Issues upgrading to 2.0.1 (Jan. 27, 2016)
This bulletin informs of you of the following issues:

*	[Upgrade fails because of missing `.gitignore` files](#gitignore)
*	["We're sorry, we can't take that action right now"](#sorry)

### Upgrade fails because of missing `.gitignore` files {#gitignore}
Upgrades to Magento Community Edition (CE) and Enterprise Edition (EE) 2.0.1 failed if you got the Magento software <a href="{{ site.gdeurl }}install-gde/prereq/zip_install.html">compressed archive</a> (`.tar.gz`, `.zip`, and `.bz2`) *before* January 27, 2016.

<div class="bs-callout bs-callout-info" id="info">
  <ul><li>Other types of installations are <em>not</em> affected.</li>
  	<li>New installations of Magento 2 CE and EE have no issues because we fixed our compressed archives.</li></ul>
</div>

#### Detail
Our compressed archives for CE and EE were missing `.gitignore` files and, as a result, exceptions prevented the upgrade from completing successfully.

At the same time, we fixed a separate issue that prevented upgrading to 2.0.1 if you use PHP 7.

#### Solution
Download a compressed archive that contains the missing `.gitignore` files and the PHP 7 fix.

TBD

### "We're sorry, we can't take that action right now" {#sorry}
If this message displays during your upgrade, it can mean any of the following:

*	<a href="{{ site.gdeurl }}comp-mgr/trouble/cman/were-sorry.html#not-auth">You didn't authenticate</a> with the System Upgrade utility
*	<a href="{{ site.gdeurl }}comp-mgr/trouble/cman/were-sorry.html#updater">The updater application isn't initialized</a>

	This cause is relatively uncommon.