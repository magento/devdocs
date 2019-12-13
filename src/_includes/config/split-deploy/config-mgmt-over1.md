*  _Shared configuration_, which is all settings that are neither system-specific nor sensitive.

   Shared settings are settings you want to be consistent on development and production systems. Set the shared configuration in the Magento Admin in your development (or {{site.data.var.ece}} _integration_) system.

   The shared configuration file, `app/etc/config.php`, should be included in source control so it can be shared between development, build, and production systems.

*  _System-specific_ configuration, which is all settings that vary by system; for example, search engine hostnames and ports.

*  _Sensitive_ configuration, which is all settings that should not be in source control because they expose personally-identifiable information (PII) or settings such as API keys or passwords.

   The system-specific configuration file, `app/etc/env.php`, should _not_ be included in source control or otherwise shared between systems. Instead, use the [`magento config:set` and `magento:sensitive:set` commands]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-config-mgmt-set.html) to provide values for those settings in your production system.

 {:.bs-callout-info}
These new methods to manage your configuration are optional. You don't have to use them, although we strongly recommend you do.

Most of the time, the configuration options you set in the shared, system-specific, or sensitive configuration cannot be edited in the Magento Admin. This helps keep your settings consistent across all systems. (You can optionally use the [`magento config:set` command]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-config-mgmt-set.html) without the `--lock` option to configure settings that are editable in the Admin.)

Each Magento configuration option has a unique _configuration path_. To set a value for a configuration option, you can use either a CLI command or an environment variable to set the value for that configuration path on a specific system.
