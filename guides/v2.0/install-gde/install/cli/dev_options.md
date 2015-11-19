---
layout: default
group: install_cli 
subgroup: 99_contrib
title: Contributing developers&mdash;update, reinstall Magento
menu_title: Contributing developers&mdash;update, reinstall Magento
menu_order: 1
menu_node: parent
github_link: install-gde/install/cli/dev_options.md
redirect_from: guides/v2.0/install-gde/install/dev_updater.md
---

The following topics apply to you *only* if you used `git clone` to install the Magento software. This usually means you're interested in contributing to the Magento codebase.

Contributing developers must add or update components by specifying them in Magento's root `composer.json`. You *cannot* use the graphical Component Manager or System Upgrade utilities to do this.

Contributing developers update the Magento software by running 'composer update'.

See the following topics for more information:

*	<a href="{{ site.gdeurl }}install-gde/install/cli/dev_add-update.html">Add or update components</a>
*	<a href="{{ site.gdeurl }}install-gde/install/cli/dev_reinstall.html">Reinstall the Magento software</a>