---
layout: default
group: compman
subgroup: 50_trouble
title: "Sorry, we can't take that action right now"
menu_title: "Sorry, we can't take that action right now"
menu_node: 
menu_order: 2
version: 2.0
github_link: comp-mgr/trouble/cman/were-sorry.md
---

<h2 id="trouble-update-were-sorry">"Sorry, we can't take that action right now"</h2>
The following error might display at the start of your upgrade:

<img src="{{ site.baseurl }}common/images/upgr-sorry.png" width="600px">

See one of the following sections for possible solutions:

*	[Problem: you're not authenticated](#not-auth)
*	[Problem: the updater application isn't initialized](#updater)
*	[Problem: you cloned the Magento GitHub repository](#git-clone)

### Problem: you're not authenticated {#not-auth}
You might not have entered your authentication keys in the Magento Admin.

#### Solution
Enter your <a href="{{ site.gdeurl }}comp-mgr/prereq/prereq_auth-token.html">authentication keys</a> in the Admin. Try your upgrade again.

If that doesn't work, try generating <a href="{{ site.gdeurl }}install-gde/prereq/connect-auth.html">new authentication keys</a> and enter those in the Admin. Then try your upgrade again.

### Problem: the updater application isn't initialized {#updater}
In some cases (especially if you downloaded the Magento software from <a href="https://packagist.org/" target="_blank">packagist</a>), the updater application might not be initialized. (A common way for this to happen is to not specify our `https://repo.magento.com` repository in the `composer create-project` command.)

The updater application uses a cron job to run the upgrade; if it's not initialized, your update fails.

#### Solution
Modify Magento's `composer.json` to reference the `https://repo.magento.com` repository and run `composer install` in the updater's root directory to resolve dependencies and initialize it as follows:

1.	Log in to your Magento server as the <a href="{{ site.gdeurl }}install-gde/prereq/apache-user.html">Magento file system owner</a>.
2.	Change to your Magento installation directory.
3.	Back up your existing `composer.json`:

		cp composer.json composer.json.bak

4.	Open `composer.json` in a text editor.
5.	To the `repositories` section, add the following:

			{
				"type": "composer",
				"url": "https://repo.magento.com/"
			}

    Example:

		"repositories": [
				{
					"type": "composer",
					"url": "https://repo.magento.com/"
				}
			]

6.	Save your changes to `composer.json` and exit the text editor.
7.	Change to the `update` subdirectory, where the updater is located.
8.	Enter the following command:

		composer install
9.	After the command completes, try the upgrade again.

### You cloned the Magento GitHub repository {#git-clone}
If you installed the Magento software by cloning the Magento repository, you cannot use the System Upgrade utility to upgrade it.

Instead, see one of the options discussed in <a href="{{ site.gdeurl }}install-gde/install/cli/dev_options.html">Contributing developers&mdash;update, reinstall Magento</a>.
