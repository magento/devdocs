---
layout: default
group: cloud
subgroup: 090_configure
title: Set up whitelist VCL
menu_title: Set up whitelist VCL
menu_order: 7
menu_node:
version: 2.0
github_link: cloud/configure/fastly-vcl-whitelist.md
functional_areas:
  - Cloud
  - Setup
---

This example creates an ACL list for whitelisted IPs. You will then create a bash script with information for the custom VCL.

We provide another solution than entering `curl` commands to create VCL snippets using `.vcl` files and a bash script to upload all snippets found in a directory. You will create .vcl files of just VCL code. The bash script runs using values from environment variables to generate and run `curl` commands.

To add the whitelist IP VCL, you do the following:

* Set up your bash script
* Create VCL (`.vcl`) files with code snippets in a single directory
* Save the bash script in the same directory with the `.vcl` files
* Run the bash script to upload the VCL snippets to each environment

## Create edge ACL {#edge-acl}
Edge ACLs create IP lists for managing access for your VCL snippet. For this example, create an ACL of IPs to whitelist access to your site. Then create custom VCL snippets to manage access by providing normal access, redirecting to a specific location, or [displaying a 403 Forbidden message](#block-ip).

1. Log in to the Magento Admin.
2. Navigate to **Stores** > **Configuration** > **Advanced** > **System** > **Fastly Configuration**.
3. Expand the **Edge ACL** section.
4. Click **Add ACL** to create a list. For this example, name the list "whitelist-ip".
5. Enter IP values in the list. Optionally, select the Negated checkbox if needed.

You can use the Edge ACL by name in your VCL snippet code.

## Configure the bash script {#bash-script}
1. Copy the following bash script.

      	#!/bin/bash

      	#############################################################################
      	# Upload snippets from the current directory
      	#
      	# Requires you to specify following environment variables
      	#  VERSION - The new cloned version of the VCL
      	#  SERVICE_ID - Service ID for Staging or Production
      	#  API_KEY - Fastly API Key for your account
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
2. Save two versions of the file: `staging_snippets.sh` and `pro_snippets.sh`.
3. In `staging_snippets.sh`, edit the following values and save:

    * `VERSION`: Replace `<SERVICE_ID_VERSION>` with the cloned version number.
    * `SERVICE_ID`: Replace `<SERVICE_ID>` with the Service ID for your Staging environment.
    * `API_KEY`: Replace `<API_KEY>` with your Fastly API Key.
    * `SNIPPET_NAME_PREFIX`: Replace `<SNIPPET_NAME_PREFIX_NO_SPACES>` with ...???  (QUESTION: do they need this? magentocloud should not be used as a prefix)
4. In `production_snippets.sh`, edit the following values and save:

    * `VERSION`: Replace `<SERVICE_ID_VERSION>` with the cloned version number.
    * `SERVICE_ID`: Replace `<SERVICE_ID>` with the Service ID for your Staging environment.
    * `API_KEY`: Replace `<API_KEY>` with your Fastly API Key.
    * `SNIPPET_NAME_PREFIX`: Replace `<SNIPPET_NAME_PREFIX_NO_SPACES>` with ...???  (QUESTION: do they need this? magentocloud should not be used as a prefix)
5. Optional, save the files to their own directories.

  For example if you want different custom VCL snippets for Staging then Production, you can save the `staging_snippets.sh` bash script and Staging .vcl files into the same directory. When you run that bash script, only those custom VCLs generate to Staging.

<div class="bs-callout bs-callout-warning" markdown="1">
When modifying the bash scripts, make sure to carefully enter the correct Service ID. Fastly assigns different Service IDs per Staging and Production environments.
</div>

## Create whitelist.vcl {#whitelist-vcl}
A VCL snippet file (`.vcl`) should include the following values:

* `name`: Name for the VCL snippet
* `priority`: Determines the order VCL snippets call. Lower values run first, from 1 to 100. All Magento module uploaded snippets are 50. If you want an action to occur last or override Magento default VCL snippets, enter a higher number like 100. To have code occur immediately, enter a lower value like 5.
* `type`: Specifies the location to place the generated snippet such as `init` (above subroutines) and within subroutines like `recv`. See [Fastly VCL snippet object values](https://docs.fastly.com/api/config#snippet){:target="_blank"} for information on these values.
* `content`: The snippet of VCL code to run

Create a whitelist.vcl file with the following JSON content:

{% highlight json %}
{
  "name": "whitelist-ip",
  "priority": "5",
  "type": "recv",
  "content": "if ((req.url ~ "^/admin") && !(client.ip ~ whitelist) && !req.http.Fastly-FF) { error 403 "Forbidden"; }",
}
{% end highlight %}

## Run the bash script {#run-script}
To create and push your customer VCLs to Fastly, you will run the bash script per Staging and Production. When the script runs, it cycles through all .vcl files in the same directory. As the commands complete, those VCL snippets are generated with Fastly according to the Service ID.

To run the script and verify scripts:

1. In a terminal, move to the directory with the VCL snippets and bash script files. For example, change to the production VCL snippet folder.
2. Run the bash script by entering the file name. For example, enter `production_snippets`.
3. As the script runs, VCL snippets should be generating and uploading to Fastly.

## Validate and activate the VCL snippet
With the VCL snippet added to Fastly, you need to validate then activate the snippet.

1. In the terminal, enter the following command to validate all snippets for the version:

	   curl -H "Fastly-Key: {FASTLY_API_TOKEN}" -H 'Content-Type: application/json' -H "Accept: application/json" -X GET https://api.fastly.com/service/{Service ID}/version/{Editable Version #}/validate

  Fastly should return: `"status": "ok"`. If you received an OK, activate the version for that service.
2. Activate the VCL version with the following command. All VCL snippets associated with the version activate.

	   curl -H "Fastly-Key: {FASTLY_API_TOKEN}" -H 'Content-Type: application/json' -H "Accept: application/json" -X PUT https://api.fastly.com/service/{Service ID}/version/{Editable Version #}/activate
3. To list all all regular VCL snippets attached to a service, enter the following API call with the appropriate information:

	   curl -X  GET -s https://api.fastly.com/service/<Service ID>/version/<Editable Version #>/snippet/ -H "Fastly-Key:FASTLY_API_TOKEN"
