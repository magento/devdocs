---
layout: default
group: config-guide
subgroup: 999_prod
title: Deploy Magento to production
menu_title: Deploy Magento to production
menu_node: parent
menu_order: 1
version: 2.2
github_link: config-guide/prod/prod.md
---

These topics discuss the process of deploying Magento to a production site for Magento version 2.2 and later. We recommend this deployment method for anyone with a large site who does not want downtime during deployment.

If you have a smaller site and can tolerate some downtime during deployment, see TBD instead.

The following topics are organized to help you get started quickly. If you're new to Magento or not familiar with the technical details, start by reading the overviews.

*	Overview of deployment

	*	[Deployment general overview]({{ page.baseurl }}config-guide/prod/prod_deploy-over.html)
	*	[Deployment technical overview (implementation details)]({{ page.baseurl }}config-guide/prod/prod_deploy-over-tech.html)

*	Set up your split deployment systems: development, build, and production 

	*	[Set up your development systems]({{ page.baseurl }}config-guide/prod/prod_deploy-setup-dev.html)
	*	[Set up your build system]({{ page.baseurl }}config-guide/prod/prod_deploy-setup-build.html)
	*	[Set up your production system]({{ page.baseurl }}config-guide/prod/prod_deploy-setup-prod.html)

*	Step-by-step examples of using split deployment

	*	[Example of managing the shared configuration]({{ page.baseurl }}config-guide/prod/prod_deploy-shared.html)
	*	[TBD]()
	*	[TBD]()
	*	[TBD]()

*	[PHP developer tasks for split deployment]({{ page.baseurl }}config-guide/prod/prod_deploy-prog.html)

*	Reference information

	*	[Sensitive and system-specific configuration paths reference]({{ page.baseurl }}config-guide/prod/config-reference-sens.html)
	*	[Payment configuration paths reference]({{ page.baseurl }}config-guide/prod/config-reference-payment.html)
	*	[Other configuration paths reference]({{ page.baseurl }}config-guide/prod/config-reference-most.html)
	*	[Magento Enteprise B2B Extension configuration paths reference]({{ page.baseurl }}config-guide/prod/config-reference-b2b.html)
	*	[How to name environment variables]({{ page.baseurl }}config-guide/prod/config-reference-var-name.html)
	*	[.gitignore reference]({{ page.baseurl }}config-guide/prod/config-reference-gitignore.html)
	*	[config.php reference]({{ page.baseurl }}config-guide/prod/config-reference-configphp.html)
	*	[env.php reference]({{ page.baseurl }}config-guide/prod/config-reference-envphp.html)