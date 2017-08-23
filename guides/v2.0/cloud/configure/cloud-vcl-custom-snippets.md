---
layout: default
group: cloud
subgroup: 090_configure
title: Custom Fastly VCL snippets
menu_title: Custom Fastly VCL snippets
menu_order: 7
menu_node:
version: 2.0
github_link: cloud/configure/cloud-vcl-custom-snippets.md
---

Fastly and {{site.data.var.<ece>}} support creating custom Varnish Configuration Language (VCL) snippets. For best results, we recommend creating edge dictionaries and edge ACLs for your VCL snippets. This section details how to create snippets using a bash script, VCL snippet files, and edge dictionaries and ACLs if needed.

To create and implement VCL snippets:

* Create VCL (`.vcl`) files with code snippets
* Create and modify the bash script, saving it in the same directory with the `.vcl` files
* Run the bash script to upload the VCL snippets

For Fastly resources on creating VCL snippets, see:

*	[Fastly VCL documentation](https://docs.fastly.com/guides/vcl/guide-to-vcl){:target="_blank"}
*	[Using regular VCL snippets](https://docs.fastly.com/guides/vcl-snippets/using-regular-vcl-snippets){:target="_blank"}
*	[Using dynamic VCL snippets](https://docs.fastly.com/guides/vcl-snippets/using-dynamic-vcl-snippets){:target="_blank"}
* [Mixing and matching Fastly VCL with custom VCL](https://docs.fastly.com/guides/vcl/mixing-and-matching-fastly-vcl-with-custom-vcl){:target="_blank"}

## Configure the bash script {#bash-script}
We provide an easier solution then entering cURL commands to create VCL snippets. Currently, to create and upload custom VCL snippets, you need to use Fastly APIs with cURL commands for [regular](https://docs.fastly.com/guides/vcl-snippets/using-regular-vcl-snippets){:target="_blank"} and [dynamic](https://docs.fastly.com/guides/vcl-snippets/using-dynamic-vcl-snippets){:target="_blank"} snippets. We also provide a bash script to upload all snippets found in a directory.

Copy and modify the following bash script into a file located in the same directory as your `.vcl` snippets. Add the specific version, Fastly Service ID, and Fastly API Key. When adding VCLs to Staging and Production, you may want to create two bash files with those Service IDs specified, or modify the code further.

<div class="bs-callout bs-callout-warning" markdown="1">
When modifying the bash script, make sure to carefully use the Service ID. If you want to add the snippets for Staging and Production environments, you will need to enter cURL commands twice with different Service IDs in each command. Keep this in mind when editing and deleting snippets from either environment.
</div>

	#!/bin/bash

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

	done

## Working with VCL snippet files {#vcl-working}
Create VCL snippet files with the extension `.vcl` with the required values. After you run the bash script to upload the VCL snippets, Fastly returns a JSON response for the VCL snippets:

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

The important values for the VCL snippet include:

	* `Service ID`: The ID indicates the specific Staging or Production environment. We provide this value.
	* `FASTLY_API_TOKEN`: The API Key for your Fastly account. We provide this value.
	* `content`: The snippet of VCL code to run
	* `priority`: All Magento module uploaded snippets are 50. If you want an action to occur prior to Magento modules, enter a lower number. If after Magento modules, use a higher number.
	* `dynamic`: Indicates if this is a [dynamic snippet](https://docs.fastly.com/guides/vcl-snippets/using-dynamic-vcl-snippets){:target="_blank"}

To review an individual snippet, enter the following API call in a terminal:

	curl -X GET -s https://api.fastly.com/service/<Service ID>/version/<Editable Version #>/snippet/<Snippet Name e.g my_regular_snippet> -H "Fastly-Key:FASTLY_API_TOKEN"

To list all regular VCL snippets attached to a service, enter the following API call in a terminal:

	curl -X GET -s https://api.fastly.com/service/<Service ID>/version/<Editable Version #>/snippet/ -H "Fastly-Key:FASTLY_API_TOKEN"

To update a VCL snippet using the API, list the snippet then enter a cURL command with the specific snippet information and edits:

	curl -X PUT -s https://api.fastly.com/service/<Service ID>/version/<Editable Version #>/snippet/<Snippet Name e.g my_regular_snippet> -H "Fastly-Key:FASTLY_API_TOKEN" -H 'Content-Type: application/x-www-form-urlencoded' --data $'content=if ( req.url ) {\n set req.http.my-snippet-test-header = \"affirmative\";\n}';

To delete an individual VCL snippet using the API, get a list of snippets and enter a cURL command with the speicific snippet information to delete. We recommend keeping a copy of the creation command and JSON if you need to recreate it later.

	curl -X DELETE -s https://api.fastly.com/service/<Service ID>/version/<Editable Version #>/snippet/<Snippet Name e.g my_regular_snippet> -H "Fastly-Key:FASTLY_API_TOKEN"

## Create custom VCLs {#vcl-custom}
You're free to customize your Fastly VCL snippets any way you like to complete custom code. The following examples and instructions walk through creating edge dictionaries, edge ACLs, and VCL snippets.

### Create edge dictionary {#edge-dictionary}
Edge dictionaries create key-value pairs for running against your VCL snippet. These instructions include an example for a dictionary of bad referring domains you want to block access to.

1. Log in to the Magento Admin.
2. Navigate to **Stores** > **Configuration** > **Advanced** > **System** > **Fastly Configuration**.
3. Expand the **Edge dictionaries** section.
4. Click **Add container**. You need to create a container to hold up to 1,000 key-value pairs.
5. On the container, enter a Dictionary name. For this example, use the name for referers.
6. Select the checkbox for **Activate after the change** if you want to the dictionary after creating or editing the container.
7. Add key-value pairs in the new dictionary. For this example, enter the domains for bad refering websites you want to block from your site. Enter a value of 1.

You can reference and use this edge dictionary with your VCL snippet code.

### Create edge ACL {#edge-acl}
Edge ACLs create IP lists for managing access for your VCL snippet. These instructions include an example for a dictionary of IPs to white list or to block from the site.

1. Log in to the Magento Admin.
2. Navigate to **Stores** > **Configuration** > **Advanced** > **System** > **Fastly Configuration**.
3. Expand the **Edge ACL** section.
4. Click **Add ACL** to create a list.
5. Enter IP values in the list. Optionally, select the Negated checkbox if needed.

You can reference and use this edge ACL with your VCL snippet code.

### Create block bad referers VCL {#bad-refer}
Create a VCL coded file to use with an edge dictionary of domains to block. For this example, you could use the referers dictionary. The priority is set to 5 to run before uploaded magentomodule snippets (priority 50).

Name: block_bad_referers
Within subroutine: vcl_recv
Advanced options:
Priority: 5
Content

  # capture host of referer into a header
    set req.http.Referer-Host = regsub(req.http.Referer, "^https?://?([^:/\s]+).*$", "\1");
  # check if referrer host is in blocklist table
    if (table.lookup(referer_blocklist, req.http.Referer-Host)) {
        error 403 "Forbidden";
    }

### Create block IP VCL {#block-ip}
Create a VCL coded file to use with an ACL list to block a set of IPs from accessing the site. The priority is set to 5 to run before uploaded magentomodule snippets (priority 50).

Name: block_bad_ips
Within subroutine: vcl_recv
Advanced options:
Priority: 5
Content

  if ( client.ip ~ blocklist) {
    error 403 "Forbidden";
    }
