---
group: installation-guide
subgroup: 99_contrib
title: Update the Magento application
menu_title: Update the Magento application
menu_order: 2
menu_node:
functional_areas:
  - Install
  - System
  - Setup
---

This topic discusses how a contributing developer can update the Magento application without reinstalling it. To perform an upgrade if you're *not* a contributing developer, see [Updating the Magento application and components]({{ page.baseurl }}/comp-mgr/bk-compman-upgrade-guide.html).

To update the Magento software if you're a contributing developer:

1.	Log in to your Magento server as, or switch to, the [Magento file system owner]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html).
3. Save any changes you made to `composer.json` because the following steps will overwrite it:

    ```bash
    cd <magento_root>
    ```

    ```bash
    cp composer.json composer.json.old
    ```

3.	Update your local repository to get the latest code:

    ```bash
    git pull origin develop
    ```

	{:.bs-callout .bs-callout-info}
    If `git pull origin develop` fails, see [troubleshooting]({{ page.baseurl }}/install-gde/trouble/git/tshoot_git-pull-origin.html).

3.	Diff and merge your `composer.json.old` with `composer.json` installed with the Magento software.
4.	Enter the following command:

    ```bash
    composer update
    ```

5.	Update the Magento database:

    ```bash
    <magento_root>/bin/magento setup:upgrade
    ```

6.  Clean the cache:

    ```bash
    bin/magento cache:clean
    ```
