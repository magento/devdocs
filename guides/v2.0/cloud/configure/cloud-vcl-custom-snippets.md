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

[Fastly]({{page.baseurl}}/cloud/basic-information/cloud-fastly.html) and {{site.data.var.ece}} support creating custom Varnish Configuration Language (VCL) snippets. For best results, we recommend creating Edge Dictionaries and Edge ACLs for your VCL snippets. You are free to customize your Fastly VCL snippets to complete custom code. The following examples and instructions walk through creating edge dictionaries, edge ACLs, and VCL snippets.

Use the _terminal_ application to create and upload VCL snippets. You do not need an SSH connection into a specific environment. The following walk-through show you how to create regular VCL snippet files using JSON code.

Gather the following information:

-   Fastly Service ID for Staging and Production to assign the snippets to a specific service or environment
-   Fastly API key used for the `FASTLY_API_TOKEN` in the commands

Review the following sections:

-   [Understand VCL snippet values](#vcl-curl)—Provides an overview of values for Fastly VCL JSON.
-   [The custom VCL snippet process](#process)—Walks you through the entire process, including links to custom VCL snippets you can create with ease.

## Understand VCL snippet values {#vcl-curl}
You can use the following key/value pairs in JSON snippets in VCL files and in `cURL` commands.

<table>
  <tr>
    <th style="width: 150px;">Value</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>service_id</td>
    <td>The ID of a specific Staging or Production environment. We provide this value. Add the <code>SERVICE_ID</code> key to set up your bash script for custom VCL snippets.</td>
  </tr>
  <tr>
    <td>API_KEY</td>
    <td>The API Key to access your Fastly account. We provide this value. Add this value to your bash script.</td>
  </tr>
  <tr>
    <td>version</td>
    <td>The version of service for validating and activating. Fastly uses <code>Editable Version #</code> in their example values. Add the <code>SERVICE_ID_VERSION</code> key in the bash script.</td>
  </tr>
  <tr>
    <td>type</td>
    <td>
      Specifies a location for the generated snippet, such as <code>init</code> (above subroutines) and <code>recv</code> (within subroutines). See <a href="https://docs.fastly.com/api/config#snippet">Fastly VCL snippet object values</a> for information on these values.
    </td>
  </tr>
  <tr>
    <td>content</td>
    <td>The snippet of VCL code to run. We recommend keeping this code in a single line. The VCL snippet code, cURL commands, and bash script require the content code in a single line.</td>
  </tr>
  <tr>
    <td>priority</td>
    <td>
      <p>Determines the order VCL snippets call. Lower values run first, from `1` to `100`. All uploaded snippets from a Magento module have a value of `50`. If you want an action to occur last or to override Magento default VCL snippets, use a higher number, such as `100`. To have code occur immediately, use a lower value, such as `5`.</p>
      <p>Any VCL snippet with a priority value of `5` runs immediately, which is best for blacklists, whitelists, and redirects. Priority `100` is best for overriding default VCL snippet code and for extending timeouts. If you do not set a priority with your cURL command, the default value set is `100`.</p>
    </td>
  </tr>
  <tr>
    <td>dynamic</td>
    <td>
      Indicates if this is a <a href="https://docs.fastly.com/guides/vcl-snippets/using-dynamic-vcl-snippets">dynamic snippet</a> or <a href="https://docs.fastly.com/guides/vcl-snippets/using-regular-vcl-snippets">regular snippet</a>.
    </td>
  </tr>
  <tr>
    <td>active</td>
    <td>Indicates if the snippet or version is activated and in use. Returns <code>true</code> or <code>false</code>. Make note of the version number for an active snippet. Use this to clone the version.</td>
  </tr>
</table>

The following is an example of a returned JSON for a customer VCL snippet:

```json
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
```

## The custom VCL snippet process {#process}
To create custom VCL snippets, prepare the VCL configurations, save them to files, and continue with the following:

1.  [Locate the active VCL version](#list). Use this version to clone.
1.  [Clone the active VCL version](#clone). All changes save to this new version. It remains _inactive_ until you _activate_ it.
1.  [Create VCL snippets](#create-snippet) in VCL files. We provide a number of examples to get you started.
1.  [Add VCL snippets to Fastly configuration](#add-snippet). Repeat this step for all JSON files.
1.  [Validate and activate](#validate) the new configuration and all associated VCL snippets.

The following are **best practices and recommendations**:

-   The default VCL snippets you uploaded include a prepended name of `magentomodule_` with a priority of `50`. For your custom VCL snippets, **do not use the `magentomodule_` name**. Also, consider the priority of your custom snippets and whether they should override the default snippets.
-   Do not forget to _always_ locate and clone the active version, and edit the bash script with the new version! _Version_ is not part of your VCL snippet files.
-   If you want to override values and settings from the [default Fastly VCL snippets](https://github.com/fastly/fastly-magento2/tree/master/etc/vcl_snippets){:target="\_blank"}, we recommend creating a new snippet with updated values and code with a higher priority value of `100`. You should not try to override default VCLs. We provide an example for [Custom extend Admin timeout VCL]({{page.baseurl}}/cloud/configure/fastly-vcl-extend-timeout.html).

## Export Fastly Service ID and API Token
You can save Fastly service credentials into the bash environment variables and use them in cURL commands:

    export FASTLY_SERVICE_ID=<Service ID>
    export FASTLY_API_TOKEN=<API Token>

The exported environment variables are available only in the current bash session and are lost when you close the terminal. You can redefine variables simply by exporting a new value. To view the list of exported variables related to Fastly:

    export | grep FASTLY

## Locate the currently active VCL snippet version {#list}
To view a list of all VCL snippets by version:

    curl -H "Fastly-Key: ${FASTLY_API_TOKEN}" https://api.fastly.com/service/${FASTLY_SERVICE_ID}/version/active

Look for the `active` key from the returned list. You need the version to perform a clone in the next section.

For more information on this Fastly API, see this [get version command](https://docs.fastly.com/api/config#version_dfde9093f4eb0aa2497bbfd1d9415987){:target="\_blank"}.

## Clone the active VCL version and all snippets {#clone}
Clone the version using the active version number. This creates a copy of all existing VCL snippets for that version using a new version number. After you clone the version, you can [modify and add](#create-snippet) VCL snippets. Save the new version number for the bash script.

    curl -H "Fastly-Key: ${FASTLY_API_TOKEN}" https://api.fastly.com/service/${FASTLY_SERVICE_ID}/version/{Current Active Version #}/clone -X PUT

You can save the new version into a bash environment variable for use in cURL commands:

    export FASTLY_VERSION=<Version>

For more information on this Fastly API, see this [clone command](https://docs.fastly.com/api/config#version_7f4937d0663a27fbb765820d4c76c709){:target="\_blank"}.

### Create custom VCL snippets {#create-snippet}
Create a JSON file with the following content and format:

```json
{
  "name": "<name>",
  "dynamic": "0",
  "type": "<type>",
  "priority": "100",
  "content": "<code all in one line>"
}
```

The values include:

-   `name`—Name for the VCL snippet.
-   `dynamic`—Indicates if this is a <a href="https://docs.fastly.com/guides/vcl-snippets/using-dynamic-vcl-snippets">dynamic snippet</a> or <a href="https://docs.fastly.com/guides/vcl-snippets/using-regular-vcl-snippets">regular snippet</a>.
-   `type`—Specifies a location for the generated snippet, such as `init` (above subroutines) and `recv` (within subroutines). See [Fastly VCL snippet object values](https://docs.fastly.com/api/config#snippet){:target="\_blank"} for information on these values.
-   `priority`—Determines the order VCL snippets call. Lower values run first, from `1` to `100`. All uploaded snippets from a Magento module have a value of `50`. If you want an action to occur last or to override Magento default VCL snippets, use a higher number, such as `100`. To have code occur immediately, use a lower value, such as `5`.
-   `content`—The snippet of VCL code to run in one line, without line breaks.

For detailed examples and custom code, see the following:

-   [Custom whitelist VCL]({{page.baseurl}}/cloud/configure/fastly-vcl-whitelist.html)
-   [Custom blacklist VCL]({{page.baseurl}}/cloud/configure/fastly-vcl-blacklist.html)
-   [Custom extend Admin timeout VCL]({{page.baseurl}}/cloud/configure/fastly-vcl-extend-timeout.html)
-   [Custom redirect to Wordpress VCL]({{page.baseurl}}/cloud/configure/fastly-vcl-wordpress.html)
-   [Custom block bad referer VCL]({{page.baseurl}}/cloud/configure/fastly-vcl-badreferer.html)

## Add VCL snippets to Fastly configuration {#add-snippet}
To upload a prepared VCL snippet:

    curl -H "Fastly-Key: ${FASTLY_API_TOKEN}" https://api.fastly.com/service/${FASTLY_SERVICE_ID}/version/${FASTLY_VERSION}/snippet -H 'Content-Type: application/json' -X POST --data @<filename.json>

The `<filename.vcl>` is the name of the file you prepared in the previous step. Repeat this command for each VCL snippet.

If you receive a `500 Internal Server Error` response from the Fastly service, check if you are trying to upload a valid JSON file.

## Validate and activate snippets for a version {#validate}
When you add the VCL snippets to the version, Fastly creates and assigns it to your service according to the version number. Next, validate the VCL snippets for the version using with Fastly:

    curl -H "Fastly-Key: ${FASTLY_API_TOKEN}" https://api.fastly.com/service/${FASTLY_SERVICE_ID}/version/${FASTLY_VERSION}/validate

If you received `"status": "ok"`, activate the version for that service.

Assuming there were no errors (if there are errors, fix them before proceeding), activate the version:

    curl -H "Fastly-Key: ${FASTLY_API_TOKEN}" https://api.fastly.com/service/${FASTLY_SERVICE_ID}/version/${FASTLY_VERSION}/activate -X PUT

All VCL snippets associated with the version become active. This deactivates snippets using a previous version.

## Manage regular VCL snippets with curl {#manage-vcl}
To list all regular VCL snippets attached to a service:

    curl -H "Fastly-Key: ${FASTLY_API_TOKEN}" https://api.fastly.com/service/${FASTLY_SERVICE_ID}/version/${FASTLY_VERSION}/snippet

To review an individual snippet:

    curl -H "Fastly-Key: ${FASTLY_API_TOKEN}" https://api.fastly.com/service/${FASTLY_SERVICE_ID}/version/${FASTLY_VERSION}/snippet/<snippet_name>

The `<snippet_name>` is the name of a snippet, such as `my_regular_snippet`.

To update a snippet, modify the JSON file you prepared on the [Create VCL snippets](#create-snippet) step and send the following request:

    curl -H "Fastly-Key: ${FASTLY_API_TOKEN}" https://api.fastly.com/service/${FASTLY_SERVICE_ID}/version/${FASTLY_VERSION}/snippet/<snippet_name> -H 'Content-Type: application/json' -X PUT --data @<filename.json>

If you want to override values and settings from the [default Fastly VCL snippets](https://github.com/fastly/fastly-magento2/tree/master/etc/vcl_snippets){:target="\_blank"}, we recommend creating a new snippet with updated values and code that use a priority of `100`.

To delete an individual VCL snippet using the API, get a list of snippets and enter a `curl` command with the specific snippet name to delete:

    curl -H "Fastly-Key: ${FASTLY_API_TOKEN}" https://api.fastly.com/service/${FASTLY_SERVICE_ID}/version/${FASTLY_VERSION}/snippet/<snippet_name> -X DELETE

#### Fastly resources
You can learn more about creating VCL snippets with the following Fastly resources:

-   [All Fastly VCL content](https://docs.fastly.com/guides/vcl/){:target="\_blank"}
-   [Fastly VCL guide](https://docs.fastly.com/guides/vcl/guide-to-vcl){:target="\_blank"}
-   [Mixing and matching Fastly VCL with custom VCL](https://docs.fastly.com/guides/vcl/mixing-and-matching-fastly-vcl-with-custom-vcl){:target="\_blank"}
-   [Fastly VCL snippet object values](https://docs.fastly.com/api/config#snippet){:target="\_blank"}

Fastly supports two types of snippets:

-   [Regular snippets](https://docs.fastly.com/guides/vcl-snippets/using-regular-vcl-snippets){:target="\_blank"} are versioned VCL snippets. The code and settings are locked per version to create, modify, and deploy with the Fastly service.
-   [Dynamic snippets](https://docs.fastly.com/guides/vcl-snippets/using-dynamic-vcl-snippets){:target="\_blank"} are snippets you can only create via API calls. These snippets do not have a version and deploy separately from your Fastly service.
