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

[Fastly](https://www.fastly.com/why-fastly){:target="_blank"} is required for Magento Enterprise Cloud Edition. It works with Varnish to provide fast caching capabilities and a Content Delivery Network (CDN) for static assets.

### Get your Fastly credentials {#cloud-fastly-creds}
To get Fastly credentials, open a [support ticket]({{ page.baseurl }}cloud/get-help.html). You must provide your fully-qualified domain name.

We'll provide you with the following information so you can enable Fastly:

*	Fastly API key
*	Fastly service ID

## Get started {#cloud-fastly-start}
Fastly recommends you do your development in its own branch because fine-tuning Fastly can be a complex process, depending on your needs and eCommerce shop size.

In the procedure that follows, make sure you *branch* a new environment; don't use an existing one unless you know this is what you want to do.

{% collapsible To get started: %}

{% include cloud/cli-get-started.md %}

{% endcollapsible %}

<p id="cloud-fastly-setup"></p>{% collapsibleh3 Install Fastly in your new environment %}

1.	In your local environment root directory, enter the following commands in the order shown:

		composer config repositories.fastly-magento2 git "https://github.com/fastly/fastly-magento2.git"
		composer require fastly/magento2

2.	Wait for dependencies to be updated.
3.	Enter the following command:

		php bin/magento setup:upgrade && php bin/magento cache:clean
3.	Add, commit, and push the change:

		git add -A; git commit -m "Install Fastly"; git push origin <branch name>

{% endcollapsibleh3 %}

<p id="cloud-fastly-admin"></p>{% collapsibleh3 Enable Fastly using the Magento Admin %}

1.	Log in to your local Magento Admin as an administrator. 

	If you don't remember your login information, enter the following command:

		magento-cloud var:list
2.	Click **Stores** > Settings > **Configuration** > **Advanced** > **System**.
3.	In the right pane, expand **Full Page Cache**. 

	The page is displayed as follows.

	![Choose Fastly]({{ site.baseurl }}common/images/cloud_fastly_menu.png){:width="650px"}
4.	Next to the **Caching Application** list, clear the **Use system value** check box.
5.	From the **Caching Application** list, click **Fastly CDN** as the following figure shows.

	![Choose Fastly]({{ site.baseurl }}common/images/cloud-fastly_enable-admin.png){:width="550px"}
6.	Expand **Fastly Configuration**.
7.	If you haven't already created a Fastly account, follow the prompts on your screen to create one.
7.	After you receive them, enter your Fastly service ID and API key.
8.	Click **Test Credentials**.
9.	Make sure your credentials are correct before continuing.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
*	Ignore the link to create a free Fastly account; we'll provide your Fastly credentials.
*	With Fastly version 1.2.0 and later, you no longer need to upload your VCL to Fastly. The **Upload VCL to Fastly** button enables you to upload [VCL snippets](https://docs.fastly.com/guides/vcl-snippets/about-vcl-snippets){:target="_blank"}, which is an advanced option you can consider in a staging or production system.
</div>

<!-- After you receive a Magento VCL from Fastly, [upload it to your staging or production system]({{ page.baseurl }}cloud/live/stage-prod-migrate-prereq.html#cloud-live-migrate-fastly).
 -->

{% endcollapsibleh3 %}

<p id="cloud-fastly-config"></p>{% collapsibleh3 Configure Fastly %}

Configure Fastly using the following:

*	We provide your Fastly service ID and API key.
*	Set most other Fastly configuration options in the Magento Admin.
*	You can fine-tune the Fastly configuration as discussed in [Custom VCLs](#custom-vcl).

*	Set most other Fastly configuration options in the Magento Admin.
*	You can fine-tune the Fastly configuration as discussed in [Custom VCLs](#custom-vcl).

To configure Fastly in the Admin:

1.	Log in to the Magento Admin as an administrator.
2.	Click **Stores** > Settings > **Configuration** > **Advanced** > **System**.
3.	In the right pane, expand **Full Page Cache**. 
4.	Expand **Fastly Configuration**.

	You can then [choose caching options](https://github.com/fastly/fastly-magento2/blob/master/Documentation/CONFIGURATION.md#configure-the-module){:target="_blank"}.
5.	When you're done, click **Save Config** at the top of the page.

For details about Fastly configuration, see the [Fastly documentation](https://docs.fastly.com/guides){:target="_blank"}.

#### Advanced configuration options
For advanced configuration options, download and customize the [Fastly configuration](https://github.com/fastly/fastly-magento2/blob/master/etc/fastly.vcl){:target="_blank"}.

{% endcollapsibleh3 %}

<p id="cloud-fastly-merge"></p>{% collapsibleh3 Merge your Fastly branch %}
	
When you're done with development, [merge your environment]({{ page.baseurl }}cloud/howtos/environment-tutorial-env-merge.html) with its parent environment.

For Fastly to be used in production, you must merge with the `master` environment.

{% endcollapsibleh3 %}


## Custom VCLs {#custom-vcl}
You're free to customize your Fastly VCL however you want, provided you follow Fastly's guidelines for <a href="https://docs.fastly.com/guides/vcl/mixing-and-matching-fastly-vcl-with-custom-vcl" target="_blank">Mixing and matching Fastly VCL with custom VCL</a>.

Failure to follow these guidelines means your customizations won't work as expected.

Next steps

*	If you have issues with the Fastly extension, see [Troubleshoot Fastly]({{ page.baseurl}}cloud/trouble/trouble_fastly.html)

*	[Manage your environments]({{ page.baseurl }}cloud/env/environments.html)

	*	[Use the Project Web Interface]({{ page.baseurl }}cloud/project/project-webint-basic.html)
	*	Configure your project:

		*	[`.magento.app.yaml`]({{ page.baseurl }}cloud/project/project-conf-files_magento-app.html)
		*	[`routes.yaml`]({{ page.baseurl}}cloud/project/project-conf-files_routes.html)
		*	[`services.yaml`]({{ page.baseurl }}cloud/project/project-conf-files_services.html)



