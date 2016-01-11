---
layout: default
group:  migration
subgroup: C_Data migration tool
title: Install the Data Migration Tool
menu_title: Install the Data Migration Tool
menu_node: 
menu_order: 2
github_link: migration/migration-tool-install.md
redirect_from: /guides/v1.0/migration/migration-tool-install.html
---

## Install the Data Migration Tool
This section discusses how to install the Magento Data Migration Tool. You can install it from either `repo.magento.com` or from the GitHub repository.

<div class="bs-callout bs-callout-info" id="info">
  <p>If you need to migrate to Magento Enterprise Edition (EE), contact <a href="http://support.magentocommerce.com" target="_blank">Magento Support</a>.</p>
</div>

Before you continue, make sure you completed all tasks discussed in <a href="{{ site.gdeurl }}migration/migration-tool-preconditions.html">Preconditions</a>.

<div class="bs-callout bs-callout-info" id="info">
  <p>You should install the Data Migration Tool the same way you installed the Magento software, as follows:</p>
  <ul><li>If you installed the Magento 2 compressed archive or using `composer create-project`, install the Data Migration tool using <a href="#install-repo"><code>repo.magento.com</code></a>.</li>
  	<li>If you cloned the Magento 2 GitHub repository because you're contributing code to Magento 2, install the Data Migration tool using <a href="#install-github">GitHub</a>.</li></ul>
</div>

### Install the tool from GitHub {#install-github}
To install the Data Migration Tool from GitHub, use the following steps:

1.	Log in to your Magento 2 server as a user with privileges to write to the Magento 2 file system or <a href="{{ site.gdeurl }}install-gde/prereq/apache-user.html#install-update-depend-user-switch">switch to the Magento file system owner</a>.
2.	Change to Magento 2 root directory.
3.	Enter the following commands in the order shown:

			composer config repositories.data-migration-tool git https://github.com/magento/data-migration-tool-ce
			composer require magento/data-migration-tool:dev-master
3.	Wait while dependencies are updated.

### Install the tool from `repo.magento.com` {#install-repo}
To install the Data Migration Tool, you must update `composer.json` in the Magento root installation directory to provide the location of the Data Migration Tool package. 

To install the Data Migration Tool, you must:

1.	Log in to your Magento 2 server as a user with privileges to write to the Magento 2 file system or <a href="{{ site.gdeurl }}install-gde/prereq/apache-user.html#install-update-depend-user-switch">switch to the Magento file system owner</a>.
2.	Change to Magento 2 root directory.

3.	Enter the following commands in the order shown:

			composer config repositories.data-migration-tool git https://github.com/magento/data-migration-tool-ce
			composer require magento/data-migration-tool:dev-master
3.  When prompted, enter your <a href="http://devdocs.magento.com/guides/v2.0/install-gde/prereq/connect-auth.html">authentication keys</a>. Your public key is your username; your private key is your password.

To update `composer.json`:

1.	Log in to your Magento server as the <a href="{{ site.gdeurl }}install-gde/prereq/apache-user.html#install-update-depend-user-switch">switch to the Magento file system owner</a> or as a user with privileges to write to the Magento 2 file system.

2.	Go to Magento 2 root directory.

7.	Enter the following command to reference Magento repo in `composer.json`:

		composer config repositories.magento composer https://repo.magento.com

8.	Enter the following command to require the current version of the package:

		composer require magento/data-migration-tool:<version>

	where `<version>` is either an exact version or next significant release syntax.

	Exact version example:

		composer require magento/data-migration-tool:2.0.0

	Next significant release example:

		composer require magento/data-migration-tool:~2.0.0

9.	Wait while dependencies are installed.

###Related topics

* <a href="{{ site.gdeurl }}migration/migration-tool-configure.html">Configure migration</a>

* <a href="{{ site.gdeurl }}migration/migration-tool-preconditions.html">Preconditions</a>
