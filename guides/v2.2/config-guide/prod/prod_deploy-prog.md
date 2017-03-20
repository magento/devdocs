---
layout: default
group: config-guide
subgroup: 999_prod
title: PHP developer tasks
menu_title: PHP developer tasks
menu_node: 
menu_order: 90
version: 2.2
github_link: config-guide/prod/prod_deploy-prog.md
---

This topic discusses how third-party developers can create Magento components that designate configuration settings as being sensitive, system-specific, or both.

## Guidelines for declaring sensitive or system-specific settings
We suggest you use the following guidelines to determine which settings to designate as sensitive or system-specific. You can optionally designate a setting as both.

Sensitive and system-specific values are stored in `<Magento root dir>/app/etc/env.php`, which should not be in source control.

### Sensitive values
_Sensitive_ configuration values are any that identify personally identifiable information or information you don't want to include in your source control repository. 

The following values should be designated as sensitive:

*	Keys (such as API keys)
*	Passwords
*	E-mail Addresses
*	Physical Addresses

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
*	E-mail recepients
*	Admininistrative settings between environments (for example, password expiration limits)

## Implementation details
TBD



#### Related topics
*	[Other configuration paths reference]({{ page.baseurl }}config-guide/prod/config-reference-most.html)
*	[Payment configuration paths reference]({{ page.baseurl }}config-guide/prod/config-reference-payment.html)
*	[Sensitive and system-specific configuration paths reference]({{ page.baseurl }}config-guide/prod/config-reference-sens.html)
