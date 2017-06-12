---
layout: default
group: extension-dev-guide
subgroup: Configuration
title: Sensitive and environment settings
menu_title: Sensitive and environment settings
menu_order: 1000
version: 2.2
github_link: extension-dev-guide/configuration/sensitive-and-environment-settings.md
---

This topic discusses how third-party developers can create Magento components that designate configuration settings as being sensitive, system-specific, or both.

## Guidelines for declaring sensitive or system-specific settings {#split-deploy-sens-guidelines}
We suggest you use the following guidelines to determine which settings to designate as sensitive or system-specific. You can optionally designate a setting as both.

Sensitive and system-specific values are stored in `<Magento root dir>/app/etc/env.php`, which should not be in source control.

### Sensitive values
_Sensitive_ configuration values are any that identify personally identifiable information or information you don't want to include in your source control repository.

The following values should be designated as sensitive:

*	Keys (such as API keys)
*	User names and passwords
*	E-mail addresses
*	Any Personally identifiable information (PII) (address, phone number, date of birth, government identification number, and so on)

### System-specific values
_System-specific_ values vary the system to which Magento is deployed, such as URLs, debug mode indicators, host names, IP addresses, and ports.

The following values should be designated as system-specific:

*	URLs
*	IP addresses
*	Ports
*	Host names
*	Domain names
*	Paths (for example, custom paths, proxy host, proxy port)
*	"modes" (for example, sandbox mode, debug mode, test mode)
*	SSL (only for non-payment)
*	E-mail recipients
*	Administrative settings between systems (for example, password expiration limits)

## Specify sensitive or system-specific configuration values
When you create custom components that require configuration settings, you can designate settings as sensitive, system-specific, or both. The following sections provide a detailed explanation.

{% include php-dev/typepool_sensitive-values.md %}

## Add PHP arrays to the configuration
The following sections discuss how you can optionally add custom components to the shared configuration, `config.php`, or the system-specific configuration, `env.php`.

{% include php-dev/config-importer.md %}

#### Related topics
*	[The di.xml file]({{ page.baseurl }}extension-dev-guide/build/di-xml-file.html)
*	[Developer roadmap]({{ page.baseurl }}extension-dev-guide/intro/developers_roadmap.html)
*	[Dependency injection]({{ page.baseurl }}extension-dev-guide/depend-inj.html)
