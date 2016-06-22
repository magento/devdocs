---
layout: default
group: compman
subgroup: 50_trouble
title: magento/theme-doc-blank failure
menu_title: magento/theme-doc-blank failure
menu_node: 
menu_order: 500
version: 2.0
github_link: comp-mgr/trouble/cman/doc.md
---

<h2 id="trouble-doc"><code>magento/theme-doc-blank</code> failure</h2>
When installing new purchases, you might see an error like the following during readiness check:

	Command "update" failed: Loading composer repositories with package information
	Updating dependencies (including require-dev)
	Your requirements could not be resolved to an installable set of packages.

	Problem 1
	- Installation request for magento/theme-doc-blank 100.0.2 -> satisfiable by magento/theme-doc-blank[100.0.2].
	- magento/theme-doc-blank 100.0.2 requires magento/framework 0.1.0 -> no matching package found.

	Potential causes:
	- A typo in the package name
	- The package is not available in a stable-enough version according to your minimum-stability setting
	see <https://groups.google.com/d/topic/composer-dev/_g3ASeIFlrc/discussion> for more details.

	Read <http://getcomposer.org/doc/articles/troubleshooting.md> for further common problems.

### Workaround
This issue is caused by two `doc`-related components we published by mistake. They can't be installed. 

The workaround is to go back to the Component Manager and unselect the following components:

*	magento/theme-doc-blank
*	magento/module-doc

Your new purchase installation should proceed without issue.
