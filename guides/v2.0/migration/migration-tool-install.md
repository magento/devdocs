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

Before you continue, make sure you completed all tasks discussed in <a href="{{ site.gdeurl }}migration/migration-tool-preconditions.html">Preconditions</a>.

<div class="bs-callout bs-callout-info" id="info">
  <p>You should install the Data Migration Tool the same way you installed the Magento software, as follows:</p>
  <ul><li>If you installed the Magento 2 compressed archive or using <a href="{{ site.gdeurl }}install-gde/prereq/integrator_install.html"><code>composer create-project</code></a>, install the Data Migration tool using <a href="#install-repo"><code>repo.magento.com</code></a>.</li>
  	<li>If you cloned the Magento 2 GitHub repository because you're contributing code to Magento 2, install the Data Migration tool using <a href="#install-github">GitHub</a>.</li></ul>
</div>

### Install the tool from GitHub {#install-github}
This section discusses how to install the migration tool if you cloned the Magento 2 and migration tool GitHub repositories.

<div class="bs-callout bs-callout-info" id="info">
  <p>You must use the <em>same version</em> of both Magento 2 and the Data Migration Tool. For example, if you're using Magento version 2.0.2, you must also use Data Migration Tool version 2.0.2. To find the version of the software, open its root <code>composer.json</code> and look for the value of <code>version</code>.</p>
</div>

To install the Data Migration Tool from GitHub, use the following steps:

1.	Log in to your Magento 2 server as a user with privileges to write to the Magento 2 file system or <a href="{{ site.gdeurl }}install-gde/prereq/apache-user.html#install-update-depend-user-switch">switch to the Magento file system owner</a>.
2.	Change to Magento 2 root directory.
3.	Clone the the Data Migration Tool repository:

		git clone git@github.com:magento/data-migration-tool-ce.git
4.	Check out the corresponding *tag* (it must match the Magento 2 software):

		git checkout tags/<version> -v <version>

	For example, for 2.0.2, enter:

		git checkout tags/2.0.2 -b 2.0.2

### Install the tool from `repo.magento.com` {#install-repo}
To install the Data Migration Tool, you must update `composer.json` in the Magento root installation directory to provide the location of the Data Migration Tool package. 

<div class="bs-callout bs-callout-info" id="info">
  <p>You must use the <em>same version</em> of both Magento 2 and the Data Migration Tool. For example, if you're using Magento version 2.0.2, you must also use Data Migration Tool version 2.0.2. To find the version of the software, open its root <code>composer.json</code> and look for the value of <code>version</code>.</p>
</div>

To install the Data Migration Tool:

1.	Log in to your Magento 2 server as a user with privileges to write to the Magento 2 file system or <a href="{{ site.gdeurl }}install-gde/prereq/apache-user.html#install-update-depend-user-switch">switch to the Magento file system owner</a>.
2.	Change to Magento 2 root directory.

3.	Enter the following commands in the order shown:

			composer config repositories.data-migration-tool git https://github.com/magento/data-migration-tool
			composer require magento/data-migration-tool:<version>

	For example, for version 2.0.2, enter:

			composer config repositories.data-migration-tool git https://github.com/magento/data-migration-tool
			composer require magento/data-migration-tool:<version>

	where `<version>` ix the version corresponding to your Magento 2 version
3.  When prompted, enter your <a href="http://devdocs.magento.com/guides/v2.0/install-gde/prereq/connect-auth.html">authentication keys</a>. Your public key is your username; your private key is your password.


###Related topics

* <a href="{{ site.gdeurl }}migration/migration-tool-configure.html">Configure migration</a>
* <a href="{{ site.gdeurl }}migration/migration-tool-preconditions.html">Preconditions</a>
