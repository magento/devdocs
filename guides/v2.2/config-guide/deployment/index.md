---
layout: default
group: config-guide
subgroup: 045_pipeline
title: Pipeline Deployment
menu_title: Pipeline Deployment
menu_node: parent
menu_order: 1
version: 2.2
github_link: config-guide/deployment/index.md
---

We're constantly learning from our community about how to deploy Magento into production. Our current topics on the subject are basic but we'd love to hear from you to make them better.

If you have advice or experience to share, open an [issue](https://github.com/magento/devdocs/issues){:target=_"blank"} or [pull request](https://github.com/magento/devdocs/pulls){:target=_"blank"}  in our GitHub repository. Also see our [contribution guidelines]({{page.baseurl}}contributor-guide/contributing.html).

Current topics include:

*	[Deployment steps]({{page.baseurl}}config-guide/prod/prod_deploy.html)
*	[Magento ownership and permissions in development and production]({{page.baseurl}}config-guide/prod/prod_file-sys-perms.html)
* [Magento performance optimization for production deployments]({{page.baseurl}}config-guide/prod/prod_perf-optimize.html)

These topics discuss the process of deploying Magento to a production site for Magento version 2.2 and later. We recommend this deployment method for anyone with a large site who does not want downtime during deployment.

If you deploy Magento on a single machine and can tolerate some downtime during deployment, see [Single-machine deployment]({{ page.baseurl }}config-guide/deployment/single-machine.html) instead.

The following topics are organized to help you get started quickly. If you're new to Magento or not familiar with the technical details, start by reading the overviews.

*	Overview of deployment

	*	[Deployment general overview]({{ page.baseurl }}config-guide/deployment/pipeline/)
	*	[Deployment technical overview (implementation details)]({{ page.baseurl }}config-guide/deployment/pipeline/technical-details.md)

*	Set up your pipeline deployment systems: development, build, and production

	*	[Set up your development systems]({{ page.baseurl }}config-guide/deployment/pipeline/development-system.html)
	*	[Set up your build system]({{ page.baseurl }}config-guide/deployment/pipeline/build-system.html)
	*	[Set up your production system]({{ page.baseurl }}config-guide/deployment/pipeline/production-system.html)

*	Step-by-step examples of using pipeline deployment

	*	[Simple example&mdash;manage the shared configuration]({{ page.baseurl }}config-guide/deployment/pipeline/example/shared-configuration.html)

*	Reference information

	*	[Sensitive and system-specific configuration paths reference]({{ page.baseurl }}config-guide/prod/config-reference-sens.html)
	*	[Payment configuration paths reference]({{ page.baseurl }}config-guide/prod/config-reference-payment.html)
	*	[Other configuration paths reference]({{ page.baseurl }}config-guide/prod/config-reference-most.html)
	*	[Magento Enteprise B2B Extension configuration paths reference]({{ page.baseurl }}config-guide/prod/config-reference-b2b.html)
	*	[Use environment variables to override configuration settings]({{ page.baseurl }}config-guide/prod/config-reference-var-name.html)
	*	[.gitignore reference]({{ page.baseurl }}config-guide/prod/config-reference-gitignore.html)
	*	[config.php reference]({{ page.baseurl }}config-guide/prod/config-reference-configphp.html)
	*	[env.php reference]({{ page.baseurl }}config-guide/prod/config-reference-envphp.html)
