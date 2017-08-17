---
layout: default
group: cloud
subgroup: 100_project
title: Set up Fastly
menu_title: Set up Fastly
menu_order: 30
menu_node:
version: 2.0
github_link: cloud/access-acct/fastly.md
---

[Fastly](https://www.fastly.com/why-fastly){:target="_blank"} is required for Magento Enterprise Cloud Edition, and is used in Staging and Production environments. It works with Varnish to provide fast caching capabilities and a {% glossarytooltip f83f1fa7-7a64-467b-b629-c2d0c25d2e7f %}Content Delivery Network{% endglossarytooltip %} (CDN) for static assets. Fastly is not available in Integration environments.

## Get your Fastly credentials {#cloud-fastly-creds}
To get Fastly credentials, open a [support ticket]({{ page.baseurl }}cloud/welcome/get-help.html). You must provide your fully-qualified {% glossarytooltip 41aee03b-a5d5-49c2-8839-894090ef4e86 %}domain{% endglossarytooltip %} name.

We'll provide you with the following information so you can enable Fastly:

*	Fastly {% glossarytooltip 786086f2-622b-4007-97fe-2c19e5283035 %}API{% endglossarytooltip %} key
*	Fastly service ID

## Get started {#cloud-fastly-start}
Fastly recommends you do your development in its own branch because fine-tuning Fastly can be a complex process, depending on your needs and eCommerce shop size.

In the procedure that follows, make sure you *branch* a new environment; don't use an existing one unless you know this is what you want to do.

{% collapsible To get started: %}

{% include cloud/cli-get-started.md %}

{% endcollapsible %}

## Install Fastly in your new environment {#cloud-fastly-setup}
Fastly is only available and supported in the Staging and Production environments. You cannot use Fastly in Intergration.

1.	In your local environment root directory, enter the following commands in the order shown:

		composer config repositories.fastly-magento2 git "https://github.com/fastly/fastly-magento2.git"
		composer require fastly/magento2

2.	Wait for dependencies to be updated.
3.	Enter the following command:

		php bin/magento setup:upgrade && php bin/magento cache:clean
3.	Add, commit, and push the change:

		git add -A; git commit -m "Install Fastly"; git push origin <branch name>

## Enable Fastly using the Magento Admin {#cloud-fastly-admin}
1.	Log in to your local {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %} as an administrator.

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

## Configure Fastly {#cloud-fastly-config}
Configure Fastly using the following:

*	We provide your Fastly service ID and API key.
*	Set most other Fastly configuration options in the Magento {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %}.
*	You can fine-tune the Fastly configuration as discussed in [Custom VCLs](#custom-vcl).

To configure Fastly in the Admin:

1.	Log in to the Magento Admin as an administrator.
2.	Click **Stores** > Settings > **Configuration** > **Advanced** > **System**.
3.	In the right pane, expand **Full Page Cache**.
4.	Expand **Fastly Configuration**.

	You can then [choose caching options](https://github.com/fastly/fastly-magento2/blob/master/Documentation/CONFIGURATION.md#configure-the-module){:target="_blank"}.
5.	When you're done, click **Save Config** at the top of the page.

For details about Fastly configuration, see the [Fastly documentation](https://docs.fastly.com/guides){:target="_blank"}.

### Create a custom error/maintenance page {#fastly-errpg}
You can optionally create a custom {% glossarytooltip a2aff425-07dd-4bd6-9671-29b7edefa871 %}HTML{% endglossarytooltip %} page for errors or when your site is down for maintenance. This page can give confidence to your customers; instead of seeing HTTP error codes, they'll see a page that explains that your site is down temporarily.

To create a custom error/maintenance page:

1.	In the Admin, in the Fastly Configuration section, expand **Error/Maintenance Page** as the following figure shows.

	![Custom Fastly error page]({{ site.baseurl }}common/images/cloud-fastly_err-pg.png){:width="650px"}
2.	Click **Set HTML**.
3.	In the provided field, enter your HTML.

	The HTML you enter can be a maximum of 65,535 bytes in length.

	<div class="bs-callout bs-callout-info" id="info" markdown="1">
	Avoid using images on your site in the event Fastly is not available. To use images, refer to [Data URIs on the css-tricks site](https://css-tricks.com/data-uris/){:target="_blank"}.
	</div>
4.	When you're done, click **Upload**.
5.	In the Magento Admin, click **Save Config**.

### Upload any Fastly VCL snippets {#cloud-live-migrate-fastly-snip}
A [Fastly VCL snippet](https://docs.fastly.com/guides/vcl-snippets/about-vcl-snippets){:target="_blank"} is an advanced option that enables you to modify Fastly behavior with service-oriented or versionless objects.

To use snippets, you must upload the Fastly VCL using the Magento Admin as follows:

1.	Log in to the Magento Admin as an administrator.
2.	Click **Stores** > Settings > **Configuration** > **Advanced** > **System** as the following figure shows:

	![Choose Fastly]({{ site.baseurl }}common/images/cloud_fastly_menu.png){:width="650px"}
3.	In the right pane, expand **Full Page Cache**.
4.	Click **Upload VCL to Fastly** as the following figure shows.

	![Upload a Magento VCL to Fastly]({{ site.baseurl }}common/images/cloud_upload-vcl-to-fastly.png)

	<div class="bs-callout bs-callout-info" id="info" markdown="1">
  		If the **Upload VCL to Fastly** button does not display, you should upgrade the Fastly extension to version 1.2.0 or later. For details, see [Update extensions]({{ page.baseurl}}cloud/howtos/update-components.html). Fastly's Composer name is `fastly/magento2`.
	</div>

5.	Follow the prompts on your screen to complete the task.

### Advanced configuration options
For advanced configuration options, customize the [Fastly configuration](https://github.com/fastly/fastly-magento2/blob/master/etc/fastly.vcl){:target="_blank"}.

For more information, see [Fastly documentation](https://docs.fastly.com/guides/vcl/guide-to-vcl){:target="_blank"}.

## Merge your Fastly branch {#cloud-fastly-merge}
When you're done with development, [merge your environment]({{ page.baseurl }}cloud/howtos/environment-tutorial-env-merge.html) with its parent environment.

For Fastly to be used in production, you must merge with the `master` environment.

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
