---
layout: default 
group: compman
subgroup: A_Introduction
title: Updating the Magento application and components
menu_title: Updating the Magento application and components
menu_node: parent
menu_order: 1
github_link: comp-mgr/bk-compman-upgrade-guide.md
---

<h2>Updating the Magento application and components</h2>   
This topic discusses the ways you can:

*	Upgrade (that is, *patch*) the Magento software
*	Update *components*, which can be any of the following:

	*	Modules (extend Magento capabilities)
	*	Themes (change the look and feel of your storefront and Admin)
	*	Language packages (localize the storefront and Admin)
	*	Libraries (common code)

<h2>Upgrade the Magento software</h2>
The way you upgrade (that is, patch) the Magento software depends on how you installed it:

*	Magento CE or EE: If you used <a href="{{ site.gdeurl }}install-gde/prereq/integrator_install.html">Composer</a> to install or if you downloaded an <a href="{{ site.gdeurl }}install-gde/prereq/zip_install.html">archive</a>, use the <a href="{{ site.gdeurl }}comp-mgr/upgrader/upgrade-start.html">System Upgrade utility</a>
*	Magento CE only: If you cloned the Magento 2 GitHub repository because you are contributing code to the Magento CE codebase, <a href="{{ site.gdeurl }}install-gde/install/cli/dev_options.html">upgrade the software manually</a>

<div class="bs-callout bs-callout-info" id="info">
		<p><em>System upgrade</em> refers to updating the Magento 2.x core components and other installed components. To migrate from Magento 1.x to Magento 2, see the <a href="{{ site.gdeurl }}migration/bk-migration-guide.html">Migration Guide</a>.</p>
	</div>

<h2>Update components</h2>
To update Magento components, use the <a href="{{ site.gdeurl }}comp-mgr/compman-start.html">Component Manager</a>.

### Next step
Complete the tasks discussed in <a href="{{ site.gdeurl }}comp-mgr/prereq/prereq_compman.html">Prerequisites</a>.