<div markdown="1">

*	Manage the shared configuration using `app/etc/config.php`, which is in source control.

	The _shared configuration_ is defined as all settings that are neither system-specific nor sensitive.

	Set the shared configuration in the Magento Admin in your development (or Magento Enterprise Cloud Edition _integration_) system and write the configuration to `config.php` using the [`magento app:config:dump` command]({{ page.baseurl }}config-guide/cli/config-cli-subcommands-config-export.html).

	All of the shared configuration settings are listed in the following references:

	*	[Other configuration paths reference]({{ page.baseurl }}config-guide/prod/config-reference-most.html)
	*	[Payment configuration paths reference]({{ page.baseurl }}config-guide/prod/config-reference-payment.html)

*	Manage the system-specific configuration using `app/config/env.php`, which should _not_ be in source control.

	The _system-specific_ configuration is defined as all settings that vary by system; for example, search engine host names and ports.

	Set the system-specific configuration in the Magento Admin in your development (or Cloud integration) system and write the configuration to `env.php` using the [`magento app:config:dump` command]({{ page.baseurl }}config-guide/cli/config-cli-subcommands-config-export.html).

*	Manage the sensitive configuration using `app/etc/env.php`.

	Sensitive data, such as payment processor passwords and API keys, are managed using either environment variables or using the Magento Admin only.

<div class="bs-callout bs-callout-info" markdown="1">
These new methods to manage your configuration are optional. You don't have to use them, although we strongly recommend you do.
</div>

### Managing the configuration {#cloud-confman-over}
We help you protect sensitive settings and  make it easy to manage system-specific settings as follows:

*	A new method to manage sensitive settings (such as payment gateway passwords).

 *	An improved method to manage system configuration settings (such as store locale settings and static file optimization settings) in a new configuration file, `app/etc/config.php`, which is in source control.

*	In your [staging]({{ page.baseurl }}cloud/discover-arch.html#cloud-arch-stage) and [production]({{ page.baseurl }}cloud/discover-arch.html#cloud-arch-prod) systems, you manage sensitive settings by defining environment variables. 

	You can change sensitive variables using the Magento Enterprise Cloud Edition [Web Interface]({{ page.baseurl }}cloud/project/project-webint-basic.html).  
*	System values related to static content deployment (for example, static file optimization) are also stored in `app/etc/config.php`.

	Sensitive values are _not_ stored in `app/etc/config.php`.

	`config.php` is a convenient way to move settings between systems. Managing `config.php` in source control means your settings for staging and production are always consistent. For example, you can disable static file optimization in your [integration]({{ page.baseurl }}cloud/discover-arch.html#cloud-arch-int) system but enable it in both staging and production. After initially setting up the configuration, you don't need to touch it again because it's in source control.

	(_Static file optimization_ means merging and minifying JavaScript and Cascading Style Sheets, and minifying HTML templates.)