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
functional_areas:
  - Cloud
  - Setup
---

[Fastly]({{ page.baseurl}}cloud/basic-information/cloud-fastly.html) and {{site.data.var.ece}} support creating custom Varnish Configuration Language (VCL) snippets. For best results, we recommend creating Edge Dictionaries and Edge ACLs for your VCL snippets. You're free to customize your Fastly VCL snippets any way you like to complete custom code. The following examples and instructions walk through creating edge dictionaries, edge ACLs, and VCL snippets.

To create and upload these VCL snippets, you use a terminal application. You do not need to SSH into a specific environment. This information includes a walk-through creating regular snippets a bash command and `.vcl` snippet files of JSON code. _Don't worry, we walk you through the process with examples._

You need the following information to create VCL snippets:

* Fastly Service ID for Staging and Production to assign the snippets to a specific service or environment
* Fastly API key used for the `FASTLY_API_TOKEN` in the commands

To get started, review the following sections:

* [Understand VCL snippet values](#vcl-curl): Provides an overview of values for Fastly VCL JSON.
* [Prepare to create VCL snippets](#prepare): You only need to do this once!
* [The custom VCL snippet process](#process): Walks you through the entire process, including links to custom VCL snippets you can create with ease.

## Understand VCL snippet values {#vcl-curl}
Your VCL snippets include the following values. You can use these key/value pairs in JSON snippets in `.vcl` files and in `cURL` commands.

<table>
<tr>
    <th style="width: 150px;">Value</th>
    <th>Description</th>
</tr>
<tr>
<td>service_id</td>
<td>The ID indicates the specific Staging or Production service/environment. We provide this value. You will use this value when setting up your bash script for custom VCL snippets for <code>SERVICE_ID</code>.</td>
</tr>
<tr>
<td>API_KEY</td>
<td>The API Key for your Fastly account. We provide this value. You will add this value to your bash script.</td>
</tr>
<tr>
<td>version</td>
<td>The version of the service you add snippets to for validating and activating. Fastly uses <code>Editable Version #</code> in their example values. In the bash script, we use <code>SERVICE_ID_VERSION</code> for this value.</td>
</tr>
<tr>
<td>type</td>
<td>Specifies the location to place the generated snippet such as <code>init</code> (above subroutines) and within subroutines like <code>recv</code>. See <a href="https://docs.fastly.com/api/config#snippet">Fastly VCL snippet object values</a> for information on these values.</td>
</tr>
<tr>
<td>content</td>
<td>The snippet of VCL code to run. We recommend keeing this code all in one line. The VCL snippet code, cURL commands, and bash script require the content code in one line.</td>
</tr>
<tr>
<td>priority</td>
<td><p>Determines the order VCL snippets call. Lower values run first, from 1 to 100. All Magento module uploaded snippets are 50. If you want an action to occur last or override Magento default VCL snippets, enter a higher number like 100. To have code occur immediately, enter a lower value like 5.</p>
<p>Any VCL snippet at priority 5 will run immediately, best for blacklists, whitelists, and redirects. Priority 100 is best for overriding default VCL snippet code and values, best for extending timeouts. If you do not set a priority with your cURL command, the default value set is 100.</p></td>
</tr>
<tr>
<td>dynamic</td>
<td>Indicates if this is a <a href="https://docs.fastly.com/guides/vcl-snippets/using-dynamic-vcl-snippets">dynamic snippet</a> or <a href="https://docs.fastly.com/guides/vcl-snippets/using-regular-vcl-snippets">regular snippet</a>.</td>
</tr>
<tr>
<td>active</td>
<td>Indicates if the snippet or version is activated and currently in use. Returns <code>true</code> or <code>false</code>. Make note of the version number for an active snippet. You will use this to clone the version. </td>
</tr>
</table>

The following is an example of a returned JSON for a customer VCL snippet:

{% highlight json %}
{
  "id": "62Yd1WfiCBPENLloXfXmlO",
  "service_id": "{FASTLY_SERVICE_ID}",
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
{% endhighlight %}

## Prepare to create VCL snippets {#prepare}
Before creating custom VCL snippets, you need to set up and save two bash script files, one for each Staging and Production. Each file will include the specific Fastly Service ID per environment. When creating VCL snippets, you will create a series of VCL snippet files (`.vcl`) with JSON code. The bash scripts run through all `.vcl` files, creating and running CURL commands, to push custom VCL snippets to Staging or Production for a cloned version.

Anytime you want to add or edit existing VCLs, you will need to edit the files and change the version number to match the new cloned version.

To create the bash script files:

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
          -H 'Content-Type: application/json' \
          -H "Fastly-Key: $API_KEY" \
          --data "name=${SNIPPET_NAME_PREFIX}_${TYPE}&type=$TYPE&dynamic=0&content=$(cat $vcl | rawurlencode)";
          done
2. Save two versions of the file: `staging_snippets.sh` and `production_snippets.sh`.
3. In `staging_snippets.sh`, edit the following values and save:

    * `SERVICE_ID`: Replace `<SERVICE_ID>` with the Service ID for your Staging environment.
    * `API_KEY`: Replace `<API_KEY>` with your Fastly API Key.
    * `SNIPPET_NAME_PREFIX`: Replace `<SNIPPET_NAME_PREFIX_NO_SPACES>` with a value of your choice. Do not use `magentocloud` as the prefix.
4. In `production_snippets.sh`, edit the following values and save:

    * `SERVICE_ID`: Replace `<SERVICE_ID>` with the Service ID for your Staging environment.
    * `API_KEY`: Replace `<API_KEY>` with your Fastly API Key.
    * `SNIPPET_NAME_PREFIX`: Replace `<SNIPPET_NAME_PREFIX_NO_SPACES>` with a value of your choice. Do not use `magentocloud` as the prefix.
5. Optional, save the files to their own directories.

  For example if you want different custom VCL snippets for Staging then Production, you can save the `staging_snippets.sh` bash script and Staging `.vcl` files into the same directory. When you run that bash script, only those custom VCLs generate to Staging.

<div class="bs-callout bs-callout-warning" markdown="1">
When modifying the bash scripts, make sure to carefully enter the correct Service ID. Fastly assigns different Service IDs per Staging and Production environments.
</div>

## The custom VCL snippet process {#process}
To create custom VCLs, you should have the VCL configurations prepared and saved to files. You can then continue with the following:

1. [Locate the active VCL version](#list). You will use this version to clone.
2. [Clone the active VCL version](#clone). All changes will save to this new version. It remains inactive until you activate it.
3. [Create VCL snippets](#create-snippet) in `.vcl` files. We provide a number of examples to get you started.
4. [Add VCL snippets to Fastly configuration](#add-snippet). Repeat this step for all `.json` files you have.
5. [Validate and activate](#validate) the new configuration and all associated VCL snippets.

The following are **best practices and recommendations**:

* The default VCL snippets you uploaded included a prepended name of `magentomodule_` with a priority of 50. For your custom VCL snippets, **do not use the `magentomodule_` name**. Also consider the priority of your custom snippets if they should override the default snippets.
* Don't forget to always locate the active version, clone, and edit the bash script with the new version! Version is not part of your VCL snippet files.
* If you want to override values and settings from the [default Fastly VCL snippets](https://github.com/fastly/fastly-magento2/tree/master/etc/vcl_snippets){:target="_blank"}, we recommend creating a new snippet with updated values and code with a higher priority value of 100. You should not try overwriting default VCLs. We provide an example for [Custom extend Admin timeout VCL]({{page.baseurl}}cloud/configure/fastly-vcl-extend-timeout.html).

## Export Fastly Service ID and API Token
You can save Fastly service credentials into the bash environment variables and use these variables in cURL commands:

  export FASTLY_SERVICE_ID=<Service ID>
  export FASTLY_API_TOKEN=<API Token>

The exported environment variables are available only in current bash session and will be lost when you close a terminal. You can redefine variables simply by exporting a new value. You can get the list of exported variables related to Fastly using the following command:

  export | grep FASTLY

## Locate the currently active VCL snippet version {#list}
To view an entire list of all VCL snippets by version, use the following command:

	curl -H "Fastly-Key: ${FASTLY_API_TOKEN}" https://api.fastly.com/service/${FASTLY_SERVICE_ID}/version/active

Look for the `active` key from the returned list. This is the version you will clone in the next section.

For more information on this Fastly API, see this [get version command](https://docs.fastly.com/api/config#version_dfde9093f4eb0aa2497bbfd1d9415987){:target="_blank"}.

## Clone the active VCL version and all snippets {#clone}
Clone the version using the active version number. This creates a copy of all existing VCL snippets for that version with a new version number. After you clone the version, you can [modify and add](#create-snippet) VCL snippets. Save the new version number as you will need it for the bash script.

	curl -H "Fastly-Key: ${FASTLY_API_TOKEN}" https://api.fastly.com/service/${FASTLY_SERVICE_ID}/version/{Current Active Version #}/clone -X PUT

You can save the new version into a bash environment variable to use it in cURL commands:

  export FASTLY_VERSION=<Version>

For more information on this Fastly API, see this [clone command](https://docs.fastly.com/api/config#version_7f4937d0663a27fbb765820d4c76c709){:target="_blank"}.

### Create custom VCL snippets {#create-snippet}
Create a `.json` file with the following JSON content and format:

{% highlight json %}
{
  "name": "<name>",
  "dynamic": "0",
  "type": "<type>",
  "priority": "100",
  "content": "<code all in one line>",
}
{% endhighlight %}

The values include:

* `name`: Name for the VCL snippet.
* `dynamic`: Indicates if this is a <a href="https://docs.fastly.com/guides/vcl-snippets/using-dynamic-vcl-snippets">dynamic snippet</a> or <a href="https://docs.fastly.com/guides/vcl-snippets/using-regular-vcl-snippets">regular snippet</a>.
* `type`: Specifies the location to place the generated snippet such as `init` (above subroutines) and within subroutines like `recv`. See [Fastly VCL snippet object values](https://docs.fastly.com/api/config#snippet){:target="_blank"} for information on these values.
* `priority`: Determines the order VCL snippets call. Lower values run first, from 1 to 100. All Magento module uploaded snippets are 50. If you want an action to occur last or override Magento default VCL snippets, enter a higher number like 100. To have code occur immediately, enter a lower value like 5.
* `content`: The snippet of VCL code to run in one line, without line breaks.

For detailed examples and custom code, see the following:

* [Custom whitelist VCL]({{page.baseurl}}cloud/configure/fastly-vcl-whitelist.html)
* [Custom blacklist VCL]({{page.baseurl}}cloud/configure/fastly-vcl-blacklist.html)
* [Custom extend Admin timeout VCL]({{page.baseurl}}cloud/configure/fastly-vcl-extend-timeout.html)
* [Custom redirect to Wordpress VCL]({{page.baseurl}}cloud/configure/fastly-vcl-wordpress.html)
* [Custom block bad referer VCL]({{page.baseurl}}cloud/configure/fastly-vcl-badreferer.html)

<!-- ### Update an existing VCL snippet {#update}
Locate the snippet you want to update from the list of snippets included in the cloned version. You can use the following command to list the snippets:

	curl -X GET -s https://api.fastly.com/service/<FASTLY_SERVICE_ID>/version/<Cloned version #>/snippet/ -H "Fastly-Key: <FASTLY_API_TOKEN>"

Copy the data and build a `curl` command with the cloned version number, name, and edits. The following is an example template for the update command. You would enter the cloned version number for `Editable Version #` and data for the command in `--data`.

	curl -X PUT -s https://api.fastly.com/service/<FASTLY_SERVICE_ID>/version/<Editable Version #>/snippet/<Snippet Name e.g my_regular_snippet> -H "Fastly-Key: <FASTLY_API_TOKEN>" -H 'Content-Type: application/x-www-form-urlencoded' --data $'content=if ( req.url ) {\n set req.http.my-snippet-test-header = \"affirmative\";\n}';

If you want to override values and settings from the [default Fastly VCL snippets](https://github.com/fastly/fastly-magento2/tree/master/etc/vcl_snippets){:target="_blank"}, we recommend creating a new snippet with updated values and code with a priority of 100 (overrides the defaults). -->

## Add VCL snippets to Fastly configuration {#add-snippet}
Upload prepared VCL snippets with following command:

	curl -H "Fastly-Key: ${FASTLY_API_TOKEN}" https://api.fastly.com/service/${FASTLY_SERVICE_ID}/version/${FASTLY_VERSION}/snippet -H 'Content-Type: application/json' -X POST --data @<filename.json>

where `<filename.vcl>` is a name of file you prepared on the previous step. Repeat this command for all VCL snippets you want to add.

If you get a `500 Internal Server Error` response from Fastly service, check if you are trying to upload a valid JSON file.

## Validate and activate snippets for a version {#validate}
When you add the VCL snippets to the version, Fastly creates and assigns it to your service per that version number. Next, you should validate the entered VCL snippets with Fastly. Use the following command to validate all snippets for the version:

	curl -H "Fastly-Key: ${FASTLY_API_TOKEN}" https://api.fastly.com/service/${FASTLY_SERVICE_ID}/version/${FASTLY_VERSION}/validate

Fastly should return: `"status": "ok"`. If you received an OK, activate the version for that service.

Assuming no errors (if there are errors, fix them before proceeding), the last step is to activate the version with the following command. All VCL snippets associated with the version activate and the previous version snippets deactivate.

	curl -H "Fastly-Key: ${FASTLY_API_TOKEN}" https://api.fastly.com/service/${FASTLY_SERVICE_ID}/version/${FASTLY_VERSION}/activate -X PUT

<--If your received errors back from Fastly, track down the errors and update the specific snippet with the following command. Make sure to use the same version number you are working to activate.

	curl -H "Fastly-Key: ${FASTLY_API_TOKEN}" https://api.fastly.com/service/${FASTLY_SERVICE_ID}/version/${FASTLY_VERSION}/snippet/<Snippet Name e.g my_regular_snippet> -H 'Content-Type: application/x-www-form-urlencoded' -X PUT --data $'content=if ( req.url ) {\n set req.http.my-snippet-test-header = \"affirmative\";\n}';

For more information on these Fastly APIs, see [validate](https://docs.fastly.com/api/config#version_97f8cf7bfd5dc2e5ea1933d94dc5a9a6){:target="_blank"} and [activate](https://docs.fastly.com/api/config#version_0b79ae1ba6aee61d64cc4d43fed1e0d5){:target="_blank"} commands. -->

## Manage regular VCL snippets with curl {#manage-vcl}
To list all regular VCL snippets attached to a service, enter the following API call in a terminal:

  curl -H "Fastly-Key: ${FASTLY_API_TOKEN}" https://api.fastly.com/service/${FASTLY_SERVICE_ID}/version/${FASTLY_VERSION}/snippet

To review an individual snippet, enter the following API call in a terminal:

  curl -H "Fastly-Key: ${FASTLY_API_TOKEN}" https://api.fastly.com/service/${FASTLY_SERVICE_ID}/version/${FASTLY_VERSION}/snippet/<snippet_name>

where `<snippet_name>` is a snippet name e.g. my_regular_snippet.

To update a snippet you can modify a JSON file you prepared on the [Create VCL snippets](#create-snippet) step and send the following request:

  curl -H "Fastly-Key: ${FASTLY_API_TOKEN}" https://api.fastly.com/service/${FASTLY_SERVICE_ID}/version/${FASTLY_VERSION}/snippet/<snippet_name> -H 'Content-Type: application/json' -X PUT --data @<filename.json>

If you want to override values and settings from the [default Fastly VCL snippets](https://github.com/fastly/fastly-magento2/tree/master/etc/vcl_snippets){:target="_blank"}, we recommend creating a new snippet with updated values and code with a priority of 100 (overrides the defaults).

To delete an individual VCL snippet using the API, get a list of snippets and enter a `curl` command with the speicific snippet name to delete:

  curl -H "Fastly-Key: ${FASTLY_API_TOKEN}" https://api.fastly.com/service/${FASTLY_SERVICE_ID}/version/${FASTLY_VERSION}/snippet/<snippet_name> -X DELETE

#### Fastly resources
For Fastly resources on creating VCL snippets, you can review their docs:

* [All Fastly VCL content](https://docs.fastly.com/guides/vcl/){:target="_blank"}
*	[Fastly VCL guide](https://docs.fastly.com/guides/vcl/guide-to-vcl){:target="_blank"}
* [Mixing and matching Fastly VCL with custom VCL](https://docs.fastly.com/guides/vcl/mixing-and-matching-fastly-vcl-with-custom-vcl){:target="_blank"}
* [Fastly VCL snippet object values](https://docs.fastly.com/api/config#snippet){:target="_blank"}

Fastly supports two types of snippets. We recommend and document how to create and use regular snippets.

* [Regular snippets](https://docs.fastly.com/guides/vcl-snippets/using-regular-vcl-snippets){:target="_blank"} are versioned VCL snippets. The code and settings are locked per version to create, modify, and deploy with the Fastly service.
* [Dynamic snippets](https://docs.fastly.com/guides/vcl-snippets/using-dynamic-vcl-snippets){:target="_blank"} are snippets you can only create via API calls. These snippets do not have a version and deploy separately from your Fastly service.

#### Related topics

* [Fastly in Cloud]({{page.baseurl}}cloud/basic-information/cloud-fastly.html)
* [Set up Fastly]({{page.baseurl}}cloud/access-acct/fastly.html)
* [Troubleshoot Fastly]({{page.baseurl}}cloud/trouble/trouble_fastly.html)
