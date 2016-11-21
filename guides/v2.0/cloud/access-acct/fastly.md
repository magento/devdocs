---
layout: default
group: cloud
subgroup: 08_setup
title: Set up Fastly
menu_title: Set up Fastly
menu_order: 70
menu_node: 
version: 2.0
github_link: cloud/access-acct/fastly.md
---

## Set up Fastly
[Fastly](https://www.fastly.com/why-fastly){:target="_blank"} is required for Magento Enterprise Cloud Edition. It works with Varnish to provide fast caching capabilities and a Content Delivery Network (CDN) for static assets.

See the following sections for more information:

*	[Get your Fastly credentials](#cloud-fastly-creds)
*	[Get started](#cloud-fastly-start)
*	[Install Fastly in your new environment](#cloud-fastly-setup)
*	[Enable Fastly using the Magento Admin](#cloud-fastly-admin)
*	[Configure Fastly](https://github.com/fastly/fastly-magento2/blob/master/Documentation/CONFIGURATION.md#further-configuration-options){:target="_blank"}
*	[Merge your Fastly branch](#cloud-fastly-merge})

### Get your Fastly credentials {#cloud-fastly-creds}
To get Fastly credentials, open a [support ticket]({{ page.baseurl }}cloud/get-help.html). We'll provide you with the following information so you can enable Fastly:

*	Fastly API key
*	Fastly service ID

### Get started {#cloud-fastly-start}
Fastly recommends you do your development in its own branch because fine-tuning Fastly can be a complex process, depending on your needs and eCommerce shop size.

In the procedure that follows, make sure you *branch* a new environment; don't use an existing one unless you know this is what you want to do.

{% collapsible To get started: %}

{% include cloud/cli-get-started.md %}

{% endcollapsible %}

### Install Fastly in your new environment {#cloud-fastly-setup}

{% collapsible To install Fastly: %}

1.	In your local environment root directory, enter the following commands in the order shown:

		composer config repositories.fastly-magento2 git "https://github.com/fastly/fastly-magento2.git"
		composer require fastly/magento2

2.	Wait for dependencies to be updated.
3.	Enter the following commands:

		php bin/magento setup:upgrade
		php bin/magento cache:clean
3.	Enter the following commands in the order shown:

		git add -A; git commit -m "Install Fastly"; git push origin <branch name>

{% endcollapsible %}

### Enable Fastly using the Magento Admin {#cloud-fastly-admin}
{% collapsible To enable Fastly using the Magento Admin: %}

1.	Log in to the Magento Admin as an administrator. 
2.	Click **Stores** > **Configuration** > **Advanced** > **System** as the following figure shows:

	![Choose Fastly]({{ site.baseurl }}common/images/cloud_fastly_menu.png){:width="650px"}
3.	In the right pane, expand **Full Page Cache**. 
4.	Next to the **Caching Application** list, clear the **Use system value** check box.
5.	From the **Caching Application** list, click **Fastly CDN** as the following figure shows.

	![Choose Fastly]({{ site.baseurl }}common/images/cloud-fastly_enable-admin.png){:width="650px"}

{% endcollapsible %}

### Configure Fastly {#cloud-fastly-config}

{% collapsible To configure Fastly: %}

Configure Fastly using the following:

*	We provide your Fastly service ID and API key.
*	Set most other Fastly configuration options in the Magento Admin.
*	Additional advanced options are in the Fastly configuration file, `fastly.vcl`.

To configure Fastly in the Admin:

1.	Log in to the Magento Admin as an administrator.
2.	Click **Stores** > **Configuration** > **Advanced** > **System**.
3.	In the right pane, expand **Full Page Cache**. 
4.	Expand **Fastly Configuration**.

	You can then [choose caching options](https://github.com/fastly/fastly-magento2/blob/master/Documentation/CONFIGURATION.md#configure-the-module){:target="_blank"}.
5.	When you're done, click **Save Config** at the top of the page.

For details about Fastly configuration, see the [Fastly documentation](https://github.com/fastly/fastly-magento2/blob/master/Documentation/CONFIGURATION.md#further-configuration-options){:target="_blank"}.

#### Advanced configuration options
For advanced configuration options, download and customize the [Fastly configuration](https://github.com/fastly/fastly-magento2/blob/master/etc/fastly.vcl){:target="_blank"}.

{% endcollapsible %}
	
### Merge your Fastly branch {#cloud-fastly-merge}
When you're done with development, [merge your environment]({{ page.baseurl }}cloud/howtos/environment-tutorial-env-merge.html) with its parent environment.

For Fastly to be used in production, you must merge with the `master` environment.

#### Next steps
*   [Manage your environments]({{ page.baseurl }}cloud/env/environments.html)
*   [Use the Project Web Interface]({{ page.baseurl }}cloud/project/project-webint-basic.html)
*   Configure your project:

    *   [`.magento.app.yaml`]({{ page.baseurl }}cloud/project/project-conf-files_magento-app.html)
    *   [`routes.yaml`]({{ page.baseurl}}cloud/project/project-conf-files_routes.html)
    *   [`services.yaml`]({{ page.baseurl }}cloud/project/project-conf-files_services.html)

