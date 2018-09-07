---
group: configuration-guide
subgroup: 04_CLI
title: Set the Magento mode
menu_title: Set the Magento mode
menu_node:
menu_order: 200
functional_areas:
  - Configuration
  - System
  - Setup
---

{% include config/cli-intro.md %}

## Overview of setting Magento modes {#config-mode-over}

To improve security and ease-of-use, we added a command that switches [Magento modes]({{ page.baseurl }}/config-guide/bootstrap/magento-modes.html) from developer to production and vice versa.

Production mode also has better performance because static view files are populated in the `pub/static` directory and because of code compilation.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
-   In version 2.0.6 and later, Magento does not explicitly set file or directory permissions when you switch between default, develop, and production modes.
-   Unlike other Magento modes, developer and production modes are set in `env.php`.
-   [{{site.data.var.ece}}]({{ page.baseurl }}/cloud/bk-cloud.html) supports production mode only.
</div>

Refer to [Magento ownership and permissions in development and production]({{ page.baseurl }}/config-guide/prod/prod_file-sys-perms.html) for more information.

When you change to developer or production mode, we clear the contents of following directories:

	var/cache
	var/di
	var/generation
	var/view_preprocessed
	pub/static

Exceptions:

-   `.htaccess` files are not removed
-   `pub/static` contains a file that specifies the version of static content; this file is not removed

{: .bs-callout .bs-callout-info }
By default, Magento uses the `var` directories to store the cache, logs, and compiled code. You can customize this directory but in this guide, it's assumed to be `var`.

## Display the current mode {#config-mode-show}

The easiest way to do that is to run this command as the [Magento file system owner]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html). If you have shared hosting, this is the user your provider gives you to log in to the server. If you have a private server, it's typically a local user account on the Magento server.

Command usage:

	bin/magento deploy:mode:show

A message similar to the following displays:

	Current application mode: developer.

## Change modes {#config-mode-change}

Command usage:

	bin/magento deploy:mode:set {mode} [-s|--skip-compilation]

Where:

-   **`{mode}`** is required; it can be either `developer` or `production`

-   **`--skip-compilation`** is an optional parameter you can use to skip [code compilation]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-compiler.html) when you change to production mode.

<div class="bs-callout bs-callout-info" id="info" makrdown="1">
You cannot currently change from either developer or production mode to [default mode]({{ page.baseurl }}/config-guide/bootstrap/magento-modes.html#default-mode).
</div>

Examples follow.

### Change to production mode

	bin/magento deploy:mode:set production

Following is a summary of messages that display:

	Enabled maintenance mode
	Requested languages: en_US
	=== frontend -> Magento/luma -> en_US ===
	... more ...
	Successful: 1884 files; errors: 0
	---

	=== frontend -> Magento/blank -> en_US ===
	... more ...
	Successful: 1828 files; errors: 0
	---

	=== adminhtml -> Magento/backend -> en_US ===
	... more ...
	---

	=== Minify templates ===
	... more ...
	Successful: 897 files modified
	---

	New version of deployed files: 1440461332
	Static content deployment complete
Gathering css/styles-m.less sources.
Successfully processed LESS and/or {% glossarytooltip 45f1f76d-91cd-4789-a8b5-1e3f321a6280 %}SASS{% endglossarytooltip %} files
{% glossarytooltip 6c5cb4e9-9197-46f2-ba79-6147d9bfe66d %}CSS{% endglossarytooltip %} deployment complete
Generated classes:
        Magento\Sales\Api\Data\CreditmemoCommentInterfacePersistor
        Magento\Sales\Api\Data\CreditmemoCommentInterfaceFactory
        Magento\Sales\Api\Data\CreditmemoCommentSearchResultInterfaceFactory
        Magento\Sales\Api\Data\CreditmemoComment\Repository
        Magento\Sales\Api\Data\CreditmemoItemInterfacePersistor
        ... more ...
	Compilation complete
	Disabled maintenance mode
	Enabled production mode.

### Change to developer mode

When you change from production to developer mode, you should clear generated classes and Object Manager entities like proxies to prevent unexpected errors. After doing so, you can change modes. Use the following steps:

1.  If you're changing from production mode to developer mode, delete the contents of the `var/generation` and `var/di` directories:

		rm -rf <your Magento install dir>/var/di/* <your Magento install dir>/var/generation/*

2.  Set the mode:

		bin/magento deploy:mode:set developer

	The following message displays:

		Switched to developer mode.

### Run Magento CLI commands from anywhere
[Run Magento CLI commands from anywhere]({{ page.baseurl }}/config-guide/cli/config-cli.html#config-install-cli-first).

If you haven't added `<magento-install-directory>/bin` to your system `PATH`, then you can expect an error when running the Magento command by itself.

#### Related topics

-   [Manage the cache]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cache.html)
-   [Manage the indexers]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-index.html)
-   [Configure and run cron]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cron.html)
-   [Code compiler]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-compiler.html)
-   [URN highlighter]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-urn.html)
-   [Dependency reports]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-depen.html)
-   [Translation dictionaries and language packages]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-i18n.html)
-   [Deploy static view files]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-static-view.html)
-   [Create symlinks to LESS files]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-less-sass.html)
-   [Run unit tests]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-test.html)
-   [Convert layout XML files]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-layout-xml.html)
-   [Generate data for performance testing]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-perf-data.html)
