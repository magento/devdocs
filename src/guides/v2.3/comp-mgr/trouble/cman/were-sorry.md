---
group: software-update-guide
subgroup: 50_trouble
title: Sorry, we can't take that action right now
menu_title: Sorry, we can't take that action right now
menu_node:
menu_order: 2
functional_areas:
  - Upgrade
---

The following error might display at the start of your upgrade:

![]({{ site.baseurl }}/common/images/upgr-sorry.png){:width="600px"}

See one of the following sections for possible solutions:

*  [Problem: you're not authenticated](#not-auth)
*  [Problem: the updater application isn't initialized](#updater)
*  [Problem: you cloned the Magento GitHub repository](#git-clone)

### Problem: you're not authenticated {#not-auth}

You might not have entered your authentication keys in the [Magento Admin](https://glossary.magento.com/magento-admin).

#### Solution

Enter your [authentication keys]({{ page.baseurl }}/install-gde/prereq/connect-auth.html) in the [Admin](https://glossary.magento.com/admin). Try your upgrade again.

If that doesn't work, try generating [new authentication keys]({{ page.baseurl }}/install-gde/prereq/connect-auth.html) and enter those in the Admin. Then try your upgrade again.

### Problem: the updater application isn't initialized {#updater}

In some cases (especially if you downloaded the Magento software from [packagist](https://packagist.org/){:target="_blank"}), the updater application might not be initialized. (A common way for this to happen is to not specify our `https://repo.magento.com` repository in the `composer create-project` command.)

The updater application uses a cron job to run the upgrade; if it's not initialized, your update fails.

#### Solution

Modify Magento's `composer.json` to reference the `https://repo.magento.com` repository and run `composer install` in the updater's root directory to resolve dependencies and initialize it as follows:

1. Log in to your Magento server as the [Magento file system owner]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html).
1. Change to your Magento installation directory.
1. Back up your existing `composer.json`:

   ```bash
   cp composer.json composer.json.bak
   ```

1. Open `composer.json` in a text editor.
1. To the `repositories` section, add the following:

   ```json
   {
       "type": "composer",
       "url": "https://repo.magento.com/",
   }
   ```

   Example:

   ```json
   "repositories": [
        {
          "type": "composer",
          "url": "https://repo.magento.com/"
        }
   ]
   ```

1. Save your changes to `composer.json` and exit the text editor.
1. Change to the `update` subdirectory, where the updater is located.
1. Enter the following command:

   ```bash
   composer install
   ```

1. After the command completes, try the upgrade again.

### You cloned the Magento GitHub repository {#git-clone}

If you installed the Magento software by cloning the Magento repository, you cannot use the System Upgrade utility to upgrade it.

Instead, see one of the options discussed in [Contributing developers—update, reinstall Magento]({{ page.baseurl }}/install-gde/install/cli/dev_options.html).
