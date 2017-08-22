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

This information gets you started with installing and configuring Fastly. We provide additional information for backends and Origin shields, and error/maintenance page, and VCL snippets.

For VCL snippets, experience developing that code is required for advanced configurations.

## Get your Fastly credentials {#cloud-fastly-creds}
To get Fastly credentials, open a [support ticket]({{ page.baseurl }}cloud/welcome/get-help.html). You must provide your fully-qualified domain name.

We'll provide you with the following credentials for your Staging and Production services:

*	Fastly service ID
*	Fastly API key

Make note of which environment each set of credentials is used for. If you use the wrong credentials in an environment, you'll encounter issues with Fastly.

## Get started {#cloud-fastly-start}
You need to install Fastly in its own branch. Fine-tuning Fastly can be a complex process, depending on your needs and store size. If you already have a branch to work in, or know how to create a branch, continue to [installing Fastly](#cloud-fastly-setup).

To create a branch:

{% include cloud/cli-get-started.md %}

## Install Fastly in your new environment {#cloud-fastly-setup}
You should install the Fastly module on your local, pushing the code to Integration and deploying across to your Staging and Production environments. Don't configure the module in your local before building and deploying. You'll configure the module in those environments.

We provide Fastly services only for your Staging and Production environments. You cannot use the Fastly service in Intergration environments.

1.	In your local environment root directory, use a terminal to enter the following commands in the order shown:

		composer config repositories.fastly-magento2 git "https://github.com/fastly/fastly-magento2.git"
		composer require fastly/magento2

2.	Wait for dependencies to be updated.
3.	Enter the following command to fully update and clear the cache:

		php bin/magento setup:upgrade && php bin/magento cache:clean
3.	Add, commit, and push the changes to your code repository with the following command:

		git add -A; git commit -m "Install Fastly"; git push origin <branch name>

## Enable and configure Fastly using the Magento Admin {#cloud-fastly-config}
The minimum you need to use Fastly is to enable the module and add your Fastly credentials. After successfully testing the credentials, you can continue with advanced configurations and [VCL snippets](#custom-vcl).

We provide your Fastly Service ID and API key for Staging and Production environments. These credentials are different for each environment.

Complete the following configuration steps in Staging and Production environments:

1.	Log in to your local Magento Admin as an administrator.
2.	Click **Stores** > **Settings** > **Configuration** > **Advanced** > **System**.
3.	In the right pane, expand **Full Page Cache**.

	![Choose Fastly]({{ site.baseurl }}common/images/cloud_fastly_menu.png){:width="650px"}
4.	For **Caching Application**, uncheck the **Use system value** check box and select **Fastly CDN** from the drop-down list.

	![Choose Fastly]({{ site.baseurl }}common/images/cloud-fastly_enable-admin.png){:width="550px"}
5.	Expand **Fastly Configuration**.

		You can then [choose caching options](https://github.com/fastly/fastly-magento2/blob/master/Documentation/CONFIGURATION.md#configure-the-module){:target="_blank"}.
6.	When you're done, click **Save Config** at the top of the page.
7.	Clear the cache according to the notification. After you have cleared the cache, navigate back to Stores > Configuration > Advanced > System > Fastly Configuration and continue your configurations.

Configure the following features and enable additional [configuration options](https://github.com/fastly/fastly-magento2/blob/master/Documentation/CONFIGURATION.md#further-configuration-options){:target="_blank"}:

* [Configure backends and Origin shielding](#backend)
* [Create custom error/maintenance page](#fastly-errpg)
* [Upload Fastly VCL snippets](#upload-vcl-snippets)

<div class="bs-callout bs-callout-info" id="info" markdown="1">
*	Ignore the link to create a free Fastly account. We'll provide your Fastly credentials (Service ID and API Key).
*	With Fastly version 1.2.0 and later, you no longer need to upload your VCL to Fastly. The **Upload VCL to Fastly** button enables you to upload [VCL snippets](#custom-vcl).
</div>

## Configure backends and Origin shielding {#backend}
Backend settings provide fine tuning for Fastly performance with Origin shielding and timeouts. A _backend_ is a specific location (IP or domain) with configured Origin shield and timeout settings for checking and providing cached content.

_Origin shielding_ routes all requests for your store to a specific Point of Presence (POP). When a request is received, the POP checks for cached content and provides it. If it is not cached, it continues to the Shield POP, then to the Origin server which caches the content. The shields reduces traffic directly to the origin.

You can add multiple backends.

1. Access and expand **Fastly Configuration**.
2. Expand Backend settings and click the gear to configure or add a backend.
3. A modal opens with options to select and configure.
4. Select a **Shield** location (or datacenter) closest to your server region. For example, if Staging is on the West Coast of the United States, you may want to select a shield in US, Los Angeles, CA. This is the POP accessed for providing caching services.
5. Modify the timeout values (in miliseconds) for the connection to the shield, time between bytes, and time for the first byte. We recommend keeping the default timeout settings.
6. Optionally, select to Activate the backend and Shield after editing or saving.
7. Click **Upload** to save. The settings are commiunicated to Fastly.

For more information from Fastly, see the Magento 2 [Backend settings guide](https://github.com/fastly/fastly-magento2/blob/21b61c8189971275589219d418332798efc7db41/Documentation/Guides/BACKEND-SETTINGS.md){:target="_blank"}.

## Create a custom error/maintenance page {#fastly-errpg}
You can optionally create a custom page for errors or when your site is down for maintenance. Create your page with HTML code to provide detailed information why the site is temporarily down, instead of an HTTP error code.

To create a custom error/maintenance page:

1.	In the Fastly Configuration section, expand **Error/Maintenance Page** as the following figure shows.

	![Custom Fastly error page]({{ site.baseurl }}common/images/cloud-fastly_err-pg.png){:width="650px"}
2.	Click **Set HTML**.
3.	In the provided field, enter your HTML code.	The HTML you enter can be a maximum of 65,535 bytes in length.

	<div class="bs-callout bs-callout-info" id="info" markdown="1">
	Avoid using images on your site in the event Fastly is not available. To use images, refer to [Data URIs on the css-tricks site](https://css-tricks.com/data-uris/){:target="_blank"}.
	</div>
4.	When you're done, click **Upload** to send your updates to Fastly.
5.	In the Magento Admin, click **Save Config**.

## Upload Fastly VCL snippets {#upload-vcl-snippets}
A [Fastly VCL snippet](https://docs.fastly.com/guides/vcl-snippets/about-vcl-snippets){:target="_blank"} is an advanced option that enables you to modify Fastly behavior with service-oriented or versionless objects.

To use snippets, you must upload the Fastly VCL using the Magento Admin as follows:

1.	In the Fastly Configuration section, click **Upload VCL to Fastly** as the following figure shows.

	![Upload a Magento VCL to Fastly]({{ site.baseurl }}common/images/cloud_upload-vcl-to-fastly.png)

	<div class="bs-callout bs-callout-info" id="info" markdown="1">
  		If the **Upload VCL to Fastly** button does not display, you should upgrade the Fastly extension to version 1.2.0 or later. For details, see [Update extensions]({{ page.baseurl}}cloud/howtos/update-components.html). Fastly's Composer name is `fastly/magento2`.
	</div>

2.	Once the upload completes, the modal automatically closes with a success message.

With this uploaded, you can create and upload custom VCL snippets with advanced settings and options. You use APIs to add these VCL snippets, further adding them in your site code depending on the actions.

For more information, see [Fastly VCL documentation](https://docs.fastly.com/guides/vcl/guide-to-vcl){:target="_blank"}.

### Create custom VCL snippets {custom-vcl}
To create and upload custom VCL snippets, you need to use Fastly APIs at this time. Normally, you need to create VCL snippets using cURL commands through a terminal command. If you want an easier solution, we also provide a bash script to upload all snippets found in a directory.

For extensive details on cURL commands, see Fastly's [Using regular VCL snippets](https://docs.fastly.com/guides/vcl-snippets/using-regular-vcl-snippets){:target="_blank"} documentation.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
The installed Fastly module automatically uploads the following [VCL snippets](https://github.com/fastly/fastly-magento2/tree/master/etc/vcl_snippets){:target="_blank"} that drive the integration with Fastly. These uploaded snippets are prepended with "magentomodule_" with a priority of 50.
</div>

Copy and modify the following bash script into a file located in the same directory as your `.vcl` snippets. Add the specific version, Fastly Service ID, and Fastly API Key. When adding VCLs to Staging and Production, you may want to create two bash files with those Service IDs specified, or modify the code further.

	<pre>#!/bin/bash

	#############################################################################
	# Upload snippets from the current directory
	#
	# Requires you to specify following environment variables
	#  VERSION
	#  SERVICE_ID
	#  API_KEY
	#############################################################################

	if [ "x$VERSION" == "x" -o  "x$SERVICE_ID" == "x" -o "x$API_KEY" == "x" -o "xSNIPPET_NAME_PREFIX" == "x" ]; then
	cat <<ENDOF
	This script upload snippets from the local directory to their appropriate snippet type e.g. recv.vcl
	to recv type, fetch.vcl to fetch type etc.

	You need to define these variables
		 export VERSION=<SERVICE_ID_VERSION>
		 export SERVICE_ID=<SERVICE_ID>
		 export API_KEY=<API_KEY>
		 export SNIPPET_NAME_PREFIX=<SNIPPET_NAME_PREFIX_NO_SPACES>
	ENDOF
	exit 1
	fi

	rawurlencode() {
	while IFS="" read -r string; do
		local strlen=${#string}
		local encoded=""
		local pos c o

		for (( pos=0 ; pos<strlen ; pos++ )); do
			 c=${string:$pos:1}
			 case "$c" in
					[-_.~a-zA-Z0-9] ) o="${c}" ;;
					* )               printf -v o '%%%02x' "'$c"
			 esac
			 encoded+="${o}"
		done
		echo -n "${encoded}"
		echo -n %0A
	done
	}

	# Find all VCLs in this directory
	for vcl in *.vcl
	do

	TYPE=${vcl%.vcl}

	curl -X POST -s https://app.fastly.com/service/${SERVICE_ID}/version/${VERSION}/snippet \
	-H "Fastly-Key:$API_KEY" \
	--data "name=${SNIPPET_NAME_PREFIX}_${TYPE}&type=$TYPE&dynamic=0&content=$(cat $vcl | rawurlencode)";

	done</pre>

Create VCL snippet files with the extension .vcl with the required values.

* Service ID: The ID indicates the specific Staging or Production environment
* FASTLY_API_TOKEN: The API Key
* content: The snippet of VCL code to run
* priority: all Magento module uploaded snippets are 50. If you want an action to occur prior to Magento modules, enter a lower number. If after Magento modules, use a higher number.
* dynamic: Indicates if this is a [dynamic snippet](https://docs.fastly.com/guides/vcl-snippets/using-dynamic-vcl-snippets){:target="_blank"}

<div class="bs-callout bs-callout-warning" markdown="1">
When creating VCL snippets, make sure to carefully use the Service ID. If you want to add the snippets for Staging and Production environments, you will need to enter cURL commands twice with different Service IDs in each command. Keep this in mind when editing and deleting snippets from either environment.
</div>

Fastly returns a JSON response for the VCL snippets:

	{
	"service_id": "<Service Id>",
	"version": "<Editable Version>",
	"name": "my_regular_snippet",
	"type": "recv",
	"content": "if ( req.url ) {\n set req.http.my-snippet-test-header = \"true\";\n}",
	"priority": 100,
	"dynamic": 0,
	"id": "56789exampleid",
	"created_at": "2016-09-09T20:34:51+00:00",
	"updated_at": "2016-09-09T20:34:51+00:00",
	"deleted_at": null
	}

To review an individual snippet, enter the following API call in a terminal:

	curl -X GET -s https://api.fastly.com/service/<Service ID>/version/<Editable Version #>/snippet/<Snippet Name e.g my_regular_snippet> -H "Fastly-Key:FASTLY_API_TOKEN"

To list all regular VCL snippets attached to a service, enter the following API call in a terminal:

	curl -X GET -s https://api.fastly.com/service/<Service ID>/version/<Editable Version #>/snippet/ -H "Fastly-Key:FASTLY_API_TOKEN"

To update a VCL snippet using the API, list the snippet then enter a cURL command with the specific snippet information and edits:

	curl -X PUT -s https://api.fastly.com/service/<Service ID>/version/<Editable Version #>/snippet/<Snippet Name e.g my_regular_snippet> -H "Fastly-Key:FASTLY_API_TOKEN" -H 'Content-Type: application/x-www-form-urlencoded' --data $'content=if ( req.url ) {\n set req.http.my-snippet-test-header = \"affirmative\";\n}';

To delete an individual VCL snippet using the API, get a list of snippets and enter a cURL command with the speicific snippet information to delete. We recommend keeping a copy of the creation command and JSON if you need to recreate it later.

	curl -X DELETE -s https://api.fastly.com/service/<Service ID>/version/<Editable Version #>/snippet/<Snippet Name e.g my_regular_snippet> -H "Fastly-Key:FASTLY_API_TOKEN"

## Merge your Fastly branch {#cloud-fastly-merge}
When you're done with development, [merge your environment]({{ page.baseurl }}cloud/howtos/environment-tutorial-env-merge.html) with its parent environment.

For Fastly to be used in Staging and Production, you must merge with the `master` environment in Integration and [deploy]({{ page.baseurl }}cloud/live/stage-prod-live.html) to Staging and Production.

## Custom VCLs {#custom-vcl}
You're free to customize your Fastly VCL however you want, provided you follow Fastly's guidelines for [Mixing and matching Fastly VCL with custom VCL](https://docs.fastly.com/guides/vcl/mixing-and-matching-fastly-vcl-with-custom-vcl){:target="_blank"}.

Failure to follow these guidelines means your customizations won't work as expected.

#### Related topics

*	[Troubleshoot Fastly]({{ page.baseurl}}cloud/trouble/trouble_fastly.html)
*	[Fastly documentation](https://docs.fastly.com/guides){:target="_blank"}
*	[Fastly VCL documentation](https://docs.fastly.com/guides/vcl/guide-to-vcl){:target="_blank"}
