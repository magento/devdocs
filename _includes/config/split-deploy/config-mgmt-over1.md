<div markdown="1">

*	_Shared configuration_, which is all settings that are neither system-specific nor sensitive.

	Set the shared configuration in the Magento Admin in your development (or Magento Enterprise Cloud Edition _integration_) system.

*	_System-specific_ configuration, which is all settings that vary by system; for example, search engine host names and ports.

*	_Sensitive_ configuration, which is all settings that should not be in source control because they expose personally-identifiable information (PII) or settings such as API keys or passwords.

<div class="bs-callout bs-callout-info" markdown="1">
These new methods to manage your configuration are optional. You don't have to use them, although we strongly recommend you do.
</div>

Each Magento configuration option has a unique _configuration path_. To set a value for a configuration option, you can use either a CLI command or an environment variable on a specific system.


