---
layout: default
group: cloud
subgroup: 40_live
title: Testing
menu_title: Testing
menu_order: 99
menu_node: 
level3_menu_node: level3child
level3_subgroup: stage-prod
version: 2.0
github_link: cloud/live/stage-prod-test.md
---

When your code, database, and data is successfully migrated to staging or production, use
the URLs in your onboarding document to test your application. (The onboarding document is available in your Magento Enterprise Cloud Edition OneDrive account.)

The URLs have the following format:

*	Staging: `http[s]://staging.<domain>.<project ID>.ent.magento.cloud`
*	Production: 

	*	Load balancer URL: `http[s]://<your domain>.c.<project ID>.ent.magento.cloud`
	*	Direct access to one of the three redundant servers: `http[s]://<your domain>.{1|2|3}.<project ID>.ent.magento.cloud`

	The production URL is used by the content delivery network (CDN).

## Log files
To assist you in troubleshooting issues, log files are located under the `var/log` directory. The deployment log is located in `/var/log/platform/<project ID>`.

	