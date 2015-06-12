---
layout: default
group: install 
subgroup: T_Command-line installation
title: Uninstall themes
menu_title: Uninstall themes
menu_node: 
menu_order: 200
github_link: install-gde/install/install-cli-theme-uninstall.md
---

  
<h4>Contents</h4>

See one of the following sections:

*	<a href="#instgde-cli-before">First steps</a>
*	<a href="#instgde-install-magento-prereq">Prerequisite</a>

<h2 id="instgde-cli-before">First steps</h2>
{% include install/first-steps-cli.html %}
In addition to the command arguments discussed here, see <a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands.html#instgde-cli-subcommands-common">Common arguments</a>.

<h2 id="instgde-install-uninst-theme-prereq">Prerequisite</h2>
Before you use this command, you must know the relative path to your theme. Themes are located in a subdirectory of `<your Magento install dir>/app/design/frontend`. You must specify the path to the theme starting with `frontend`.

For example, the path to the Luma theme provided with Magento 2 is `frontend/Magento/luma`.

For more information about themes, see <a href="{{ site.gdeurl }}frontend-dev-guide/themes/theme-structure.html">Magento theme structure</a>.

<h2 id="instgde-install-uninst-theme-over">Overview of uninstalling themes</h2>
This command uninstalls themes in one of the following ways:

*	If the theme is specified as a Composer package, using information in `composer.json`
*	If the theme is *not* a Composer package, using the `parent` node information in `theme.xml`