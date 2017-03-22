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

	The _sensitive_ configuration is defined as all settings that should not be in source control because they expose personally-identifiable information (PII) or settings such as API keys or passwords.

	You can manage the sensitive configuration in any of the following ways:

	*	_Magento and Magento Enterprise Cloud Edition_. Environment variables
	*	_Magento only_. Write the sensitive configuration to `env.php` on your production system using the [`magento config:set:sensitive` command]({{ page.baseurl }}config-guide/cli/config-cli-subcommands-config.html)

<div class="bs-callout bs-callout-info" markdown="1">
These new methods to manage your configuration are optional. You don't have to use them, although we strongly recommend you do.
</div>