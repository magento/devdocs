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

Fastly and {{site.data.var.<ece>}} support creating custom Varnish Configuration Language (VCL) snippets. For best results, we recommend creating edge dictionaries and edge ACLs for your VCL snippets. You're free to customize your Fastly VCL snippets any way you like to complete custom code. The following examples and instructions walk through creating edge dictionaries, edge ACLs, and VCL snippets.

This information includes a walk-through creating snippets with [`curl` commands](#vcl-curl) or running a modified [bash script](#bash-script) with `.vcl` files. Don't worry, we walk you through the process with examples. Also, you can open a terminal to complete these commands. You do not need to SSH into a specific environment.

You need the following information to create VCL snippets:

* Fastly Service ID for Staging and Production to assign the snippets to a specific service or environment
* Fastly API key used for the `FASTLY_API_TOKEN` in the commands

For Fastly resources on creating VCL snippets, see:

* [All Fastly VCL content](https://docs.fastly.com/guides/vcl/){:target="_blank"}
*	[Fastly VCL guide](https://docs.fastly.com/guides/vcl/guide-to-vcl){:target="_blank"}
*	[Using regular VCL snippets](https://docs.fastly.com/guides/vcl-snippets/using-regular-vcl-snippets){:target="_blank"}
*	[Using dynamic VCL snippets](https://docs.fastly.com/guides/vcl-snippets/using-dynamic-vcl-snippets){:target="_blank"}
* [Mixing and matching Fastly VCL with custom VCL](https://docs.fastly.com/guides/vcl/mixing-and-matching-fastly-vcl-with-custom-vcl){:target="_blank"}

## Create VCL snippets with curl {#vcl-curl}
Using `curl` commands, you can directly access the Fastly API and generate VCL snippets directly to your specific service.

What you should know about the `curl` command and JSON values:

* Service ID: The ID indicates the specific Staging or Production service/environment. We provide this value.
* FASTLY_API_TOKEN: The API Key for your Fastly account. We provide this value.
* Editable Version #: The editable version for the VCL snippet from the first `curl`
* type: Specifies the location to place the snippet such as `init` (above subroutines) and within subroutines like `recv`. See [Mixing and matching Fastly VCL with custom VCL](https://docs.fastly.com/guides/vcl/mixing-and-matching-fastly-vcl-with-custom-vcl){:target="_blank"} for examples.
* content: The snippet of VCL code to run
* priority: All Magento module uploaded snippets are 50. If you want an action to occur prior to Magento modules, enter a lower number like 5. If after Magento modules, use a higher number like 75.
* dynamic: Indicates if this is a [dynamic snippet](https://docs.fastly.com/guides/vcl-snippets/using-dynamic-vcl-snippets){:target="_blank"}

### Get a version number
First, create a new service configuration version number with the following command. Your VCL snippets are versioned. You may notice the versioning when you upload VCLs during Fastly configuration. Make sure to enter your Service ID and API key in the command.

	curl -H "Fastly-Key: {FASTLY_API_TOKEN}" -H 'Content-Type: application/json' -H "Accept: application/json" -X POST https://api.fastly.com/service/{Service ID}/version

Fastly returns the editable version number and Service ID. You use the version number when creating, calling, and managing VCL snippets. For example:

	{
		"number":1,
		"service_id": "SU1Z0isxPaozGVKXdv0eY"
	}

### Create the VCL snippet
Create the VCL snippet on the new version. We recommend typing out your `curl` command to make sure everything is correct before entering it in a terminal. You can always copy and paste the command when

Use the following command as a template:

	curl -H "Fastly-Key: {FASTLY_API_TOKEN}" -H 'Content-Type: application/json' -H "Accept: application/json" -X POST https://api.fastly.com/service/{Service ID}/version/{Editable Version #}/snippet -d '{"name": "apply_acl", "type": "recv", "dynamic": 0, "priority": 100, "content": "if ((client.ip ~ {ACLNAME}) && !req.http.Fastly-FF){ error 403; }"}

After you run the `curl` command, Fastly returns a JSON response with the data:

	{
	  "id": "62Yd1WfiCBPENLloXfXmlO",
	  "service_id": "{Service ID}",
	  "version": "{Editable Version #}",
	  "name": "apply_acl",
	  "priority": "100",
	  "dynamic": "1",
	  "type": "hit",
	  "content": "if ((client.ip ~ {ACLNAME}) && !req.http.Fastly-FF){ error 403; }",
	  "created_at": "2016-08-15T09:37:10+00:00",
	  "updated_at": "2016-08-15T09:37:10+00:00",
	  "deleted_at": null
	}

### Validate and activate
When you add the VCL snippet, Fastly creates and assigns it to your service. Next, you should verify the entered VCL snippet validates with Fastly. Use the following command entering specifics for the snippet to validate:

	curl -H "Fastly-Key: {FASTLY_API_TOKEN}" -H 'Content-Type: application/json' -H "Accept: application/json" -X GET https://api.fastly.com/service/{Service ID}/version/{Editable Version #}/validate

Fastly should return: `"status": "ok"`. If you received an OK, activate the VCL snippet for that service:

Assuming no errors (if there are errors, fix them before proceeding), the last step is to activate the version:

	curl -H "Fastly-Key: {FASTLY_API_TOKEN}" -H 'Content-Type: application/json' -H "Accept: application/json" -X PUT https://api.fastly.com/service/{Service ID}/version/{Editable Version #}/activate

If received errors back from Fastly, track down the errors and edit the VCL snippet using this command:

	curl -X PUT -s https://api.fastly.com/service/<Service ID>/version/<Editable Version #>/snippet/<Snippet Name e.g my_regular_snippet> -H "Fastly-Key:FASTLY_API_TOKEN" -H 'Content-Type: application/x-www-form-urlencoded' --data $'content=if ( req.url ) {\n set req.http.my-snippet-test-header = \"affirmative\";\n}';

## Manage VCL snippets with curl {#manage-vcl}
To review an individual snippet, enter the following API call in a terminal:

	curl -X GET -s https://api.fastly.com/service/<Service ID>/version/<Editable Version #>/snippet/<Snippet Name e.g my_regular_snippet> -H "Fastly-Key:FASTLY_API_TOKEN"

To list all regular VCL snippets attached to a service, enter the following API call in a terminal:

	curl -X GET -s https://api.fastly.com/service/<Service ID>/version/<Editable Version #>/snippet/ -H "Fastly-Key:FASTLY_API_TOKEN"

To update a VCL snippet using the API, list the snippet then enter a `curl` command with the specific snippet version, name, and edits:

	curl -X PUT -s https://api.fastly.com/service/<Service ID>/version/<Editable Version #>/snippet/<Snippet Name e.g my_regular_snippet> -H "Fastly-Key:FASTLY_API_TOKEN" -H 'Content-Type: application/x-www-form-urlencoded' --data $'content=if ( req.url ) {\n set req.http.my-snippet-test-header = \"affirmative\";\n}';

To delete an individual VCL snippet using the API, get a list of snippets and enter a `curl` command with the speicific snippet information to delete. We recommend keeping a copy of the creation command and JSON if you need to recreate it later.

	curl -X DELETE -s https://api.fastly.com/service/<Service ID>/version/<Editable Version #>/snippet/<Snippet Name e.g my_regular_snippet> -H "Fastly-Key:FASTLY_API_TOKEN"

## Create edge dictionary {#edge-dictionary}
Edge Dictionaries create key-value pairs for running against your VCL snippet. These instructions include an example for a dictionary of bad referring domains you want to block access to.

1. Log in to the Magento Admin.
2. Navigate to **Stores** > **Configuration** > **Advanced** > **System** > **Fastly Configuration**.
3. Expand the **Edge dictionaries** section.
4. Click **Add container**. You need to create a container to hold up to 1,000 key-value pairs.
5. On the container, enter a Dictionary name. For this example, use the name for referers.
6. Select the checkbox for **Activate after the change** if you want to the dictionary after creating or editing the container.
7. Add key-value pairs in the new dictionary. For this example, enter the domains for bad refering websites you want to block from your site. Enter a value of 1.

You can use the Edge Dictionary by name in your VCL snippet code.

For more information on using Edge Dictionaries with your VCL snippets, see Fastly's [Creating and using Edge Dictionaries](https://docs.fastly.com/guides/edge-dictionaries/creating-and-using-dictionaries){:target="_blank"} and example [custom VCL snippets](https://docs.fastly.com/guides/edge-dictionaries/creating-and-using-dictionaries#custom-vcl-examples){:target="_blank"}.

## Create edge ACL {#edge-acl}
Edge ACLs create IP lists for managing access for your VCL snippet. These instructions include an example for a dictionary of IPs to white list or to block from the site. Or you can create an Edge ACL and VCL snippet manually in code and upload it. Fastly recommends using the manual method to keep your ACL and VCL content together.

1. Log in to the Magento Admin.
2. Navigate to **Stores** > **Configuration** > **Advanced** > **System** > **Fastly Configuration**.
3. Expand the **Edge ACL** section.
4. Click **Add ACL** to create a list.
5. Enter IP values in the list. Optionally, select the Negated checkbox if needed.

You can use the Edge ACL by name in your VCL snippet code.

For more information on using manually added ACLs with your VCL snippets, see Fastly's [Manually creating access control lists](https://docs.fastly.com/guides/access-control-lists/manually-creating-access-control-lists){:target="_blank"}.

## Example VCL snippets {#examples}
THe following are example VCL snippets using Edge Dictionaries and ACLs.

### Create block bad referers VCL {#bad-refer}
Create a VCL coded file to use with an Edge Dictionary of domains to block. For this example, you could use the referers dictionary. The priority is set to 5 to run before uploaded magentomodule snippets (priority 50).


* Name: block_bad_referers
* Within subroutine: vcl_recv
* Advanced options:
* Priority: 5
* Content:

      # capture host of referer into a header
        set req.http.Referer-Host = regsub(req.http.Referer, "^https?://?([^:/\s]+).*$", "\1");
      # check if referrer host is in blocklist table
        if (table.lookup(referer_blocklist, req.http.Referer-Host)) {
            error 403 "Forbidden";
        }

### Create block IP VCL {#block-ip}
Create a VCL coded file to use with an Edge ACL list to block a set of IPs from accessing the site. The priority is set to 5 to run before uploaded magentomodule snippets (priority 50).

* Name: block_bad_ips
* Within subroutine: vcl_recv
* Advanced options:
* Priority: 5
* Content:

      if ( client.ip ~ blocklist) {
        error 403 "Forbidden";
        }

### Extend Magento Admin timeout on Fastly {#admin-timeout}
Fastly has a strict timeout for the Magento Admin of three minutes. This may not be enough time for some extended actions. To extend the default timeout for the Magento Admin, you can make a VCL snippet file copy of this pass.vcl snippet from Fastly.

1. Copy the code from the [Fastly pass.vcl](https://github.com/fastly/fastly-magento2/blob/master/etc/vcl_snippets/pass.vcl){:target="_blank"} or copy the code below:

		# Deactivate gzip on origin
		unset bereq.http.Accept-Encoding;

		# Increase first byte timeouts for /admin* URLs to 3 minutes
		if ( req.url ~ "^/(index\.php/)?admin(_.*)?/" ) {
			set bereq.first_byte_timeout = 180s;
			}
2. In your copy, modify the `set bereq.first_byte_timeout = 180s;` from 180s (three minutes) to a higher amount. For example, enter 300s for five minutes or 600s for ten minutes.

You can create a `curl` command to overwrite the pass.vcl with a new version:

1. Use a [command to list the VCL](#manage-vcl) snippets. For example, enter the following command to get a list of all snippets to find the `pass.vcl`:

		curl -X GET -s https://api.fastly.com/service/<Service ID>/version/<Editable Version #>/snippet/ -H "Fastly-Key:FASTLY_API_TOKEN"
2. Build an update command for the `pass.vcl` using data from the located VCL snippet and the updated timeout. For example:

		curl -X PUT -s https://api.fastly.com/service/<Service ID>/version/<Editable Version #>/snippet/<Snippet Name for pass.vcl> -H "Fastly-Key:FASTLY_API_TOKEN" -H 'Content-Type: application/x-www-form-urlencoded' --data $'content=unset bereq.http.Accept-Encoding; if ( req.url ~ "^/(index\.php/)?admin(_.*)?/" ) { set bereq.first_byte_timeout = 300s; }';
3. Enter the `curl` command to update, validate, and activate.

## Creating VCL snippets with a Bash script {#bash-snippets}
We provide another solution then entering `curl` commands to create VCL snippets using `.vcl` files and a bash script to upload all snippets found in a directory.

To create VCL snippets this way:

* Create VCL (`.vcl`) files with code snippets in a single directory
* Create and modify the bash script, saving it in the same directory with the `.vcl` files
* Run the bash script to upload the VCL snippets

### Configure the bash script {#bash-script}
Copy and modify the following bash script into a file located in the same directory as your `.vcl` snippets. Give the bash script file a name like `upload_snippets.sh`. Add the specific version, Fastly Service ID, and Fastly API key (or token). When adding VCLs to Staging and Production, you may want to create two bash files with those Service IDs specified, or modify the code further.

<div class="bs-callout bs-callout-warning" markdown="1">
When modifying the bash script, make sure to carefully use the Service ID. If you want to add the snippets for Staging and Production environments, you will need to enter `curl` commands twice with different Service IDs in each command. Keep this in mind when editing and deleting snippets from either environment.
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

### Run the bash script {#run-script}
When you have VCLs to upload, it's time to run the bash script.

To run the script and verify scripts:

1. In a terminal, move to the directory with the VCL snippets and bash script files.
2. Run the bash script by entering the file name. For example, enter `upload_snippets`.
3. As the script runs, VCL snippets should be generating and uploading to Fastly.
4. To list all all regular VCL snippets attached to a service, enter the following API call with the appropriate information:

	   curl -X  GET -s https://api.fastly.com/service/<Service ID>/version/<Editable Version #>/snippet/ -H "Fastly-Key:FASTLY_API_TOKEN"

#### Related topics

* [Fastly in Cloud]({{ page.baseurl}}cloud/welcome/cloud-fastly.html)
* [Set up Fastly]({{ page.baseurl}}cloud/access-acct/fastly.html)
* [Troubleshoot Fastly]({{ page.baseurl}}cloud/trouble/trouble_fastly.html)
