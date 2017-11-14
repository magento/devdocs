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

## Creating VCL snippets with a bash script {#bash-snippets}
We provide another solution than entering `curl` commands to create VCL snippets using `.vcl` files and a bash script to upload all snippets found in a directory. You will create .vcl files of just VCL code. The bash script runs using values from environment variables to generate and run `curl` commands. 

To create VCL snippets this way:

* Add environment variables to your Staging and Production environments
* Create VCL (`.vcl`) files with code snippets in a single directory
* Save the bash script in the same directory with the `.vcl` files
* Run the bash script to upload the VCL snippets to each environment

### Configure environment variables {#bash-env}
You will need to add environment variables to your Staging and Production servers to run the bash script.

* `VERSION`: The version of your Fastly VCL
* `SERVICE_ID`: The specific Fastly Service ID for this environment. You will have one for Staging and Production, two different ID values for this variable.
* `API_KEY`: Your Fastly API key

### Configure the bash script {#bash-script}
Copy and modify the following bash script into a file located in the same directory as your `.vcl` snippets. Give the bash script file a name like `upload_snippets.sh`. Add the specific version, Fastly Service ID, and Fastly API key (or token). When adding VCLs to Staging and Production, you may want to create two bash files with those Service IDs specified, or modify the code further.

<div class="bs-callout bs-callout-warning" markdown="1">
When modifying the bash script, make sure to carefully use the Service ID. If you want to add the snippets for Staging and Production environments, you will need to run the bash script in both environments.
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
