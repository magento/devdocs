---
layout: default
group: howdoi
subgroup: clear-static-files
title: Clean static files cache 
menu_title: Clean static files cache 
menu_node: parent
menu_order: 1
version: 2.0
github_link: howdoi/clean_static_cache.md
---

You can clean generated static view files in any of the following ways:

*   In the Magento Admin. Go to **System** > Tools > **Cache Management** and click **Flush Static Files Cache**.

*   Manually by clearing the `pub/static` and `var/view_preprocessed` directories and subdirectories _except_ for `pub/static/.htaccess`.

        
*   Using the Magento command line. 
	*   To clear the `pub/static` directory of all files except `.htaccess` (which is a hidden file), enter the following command:


       ` rm -R pub/static/*`

	*  Several commands support an optional parameter `--clear-static-content`, which cleans generated static view files:

    	*   [`magento module:enable` and `magento module:disable`]({{ page.baseurl }}install-gde/install/cli/install-cli-subcommands-enable.html)
    	*   [`magento theme:uninstall`]({{ page.baseurl }}install-gde/install/cli/install-cli-theme-uninstall.html)
    	*   [`magento module:uninstall`]({{ page.baseurl }}install-gde/install/cli/install-cli-uninstall-mods.html)