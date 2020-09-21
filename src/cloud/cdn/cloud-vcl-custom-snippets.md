---
group: cloud-guide
title: Custom Fastly VCL snippets
redirect_from:
   - /cloud/configure/cloud-vcl-custom-snippets.html
functional_areas:
  - Cloud
  - Setup
---

Fastly supports a customized version of the Varnish Configuration Language (VCL) to customize the Fastly service configuration. For example, you can allow, block, or redirect access for specific users or IPs using VCL code blocks in combination with edge and ACL dictionaries.

Custom VCL snippets are blocks of VCL logic added to the active VCL version. A custom VCL snippet modifies how Fastly caching services respond to request traffic. For example, you can add a custom VCL snippet to allow request traffic only from specified client IP addresses, or to block traffic from websites known for sending referral spam to your {{ site.data.var.ece }} sites.

Custom VCL snippets—generated, compiled, and transmitted to all Fastly caches—load and activate without server downtime.

{:.bs-callout-info}
Before adding custom VCL code, edge dictionaries, and ACLs to your Fastly module configuration, verify that the Fastly caching service works with the default configuration. See [Set up Fastly]({{ site.baseurl }}/cloud/cdn/configure-fastly.html).

Fastly supports two types of custom VCL snippets:

-  [Regular snippets](https://docs.fastly.com/en/guides/about-vcl-snippets)—Custom regular VCL snippets are dependent on a specific VCL version. You can create, modify, and deploy regular VCL snippets from the Magento Admin UI or the Fastly API.

-  [Dynamic snippets](https://docs.fastly.com/guides/vcl-snippets/using-dynamic-vcl-snippets)—VCL snippets created using the Fastly API. You can modify and deploy dynamic snippets without having to update the Fastly VCL version for your service.

We recommend using custom VCL snippets with Edge Dictionaries and Access Control Lists (ACL) to store data used in your custom code.

-  [**Edge dictionary**](https://docs.fastly.com/guides/edge-dictionaries/about-edge-dictionaries)—Stores data as key-value pairs in a dictionary container that can be referenced from custom VCL snippets

-  [**Edge ACL**](https://docs.fastly.com/guides/access-control-lists/about-acls)—Stores the client IP address data that defines the access control list for block or allow rules implemented using custom VCL snippets

The dictionary and ACL data is deployed to the Fastly Edge nodes accessible across network regions. Additionally, the data can be updated dynamically across the network without requiring you to redeploy the VCL code for your staging or production environment.

 {:.bs-callout-info}
You must [set up Fastly]({{ site.baseurl }}/cloud/cdn/configure-fastly.html) before you can add custom VCL snippets.

## Custom VCL snippet examples and tutorials

The examples and instructions in the {{ site.data.var.ece }} documentation explain how to use regular custom VCL snippets with edge dictionaries and edge ACLs. For detailed VCL tutorial, reference, and troubleshooting information, see the following Fastly documentation:

-  [Guide to Fastly VCL](https://docs.fastly.com/guides/vcl/guide-to-vcl)—High level information about the Fastly Varnish implementation, Fastly VCL extensions, and resources for learning more about Varnish and VCL.
-  [Fastly VCL reference](https://docs.fastly.com/guides/vcl/)—Detailed programming reference to develop and troubleshoot Fastly custom VCL and custom VCL snippets.

You can create and manage custom VCL snippets from the Magento Admin UI or by using the Fastly API:

-  [Magento Admin UI](#manage-custom-vcl-snippets-from-the-magento-admin-ui)—We recommend using the Magento Admin UI to manage custom VCL snippets because it automates the process to validate and upload the custom snippet and apply your changes to the Fastly service configuration. Additionally, you can view and edit the custom VCL snippets added to the Fastly service configuration from the Admin UI.

-  [Fastly API](#manage-custom-vcl-snippets-using-the-api)—Manage custom VCL snippets using the API if you cannot access the Magento Admin UI. For example, if the site is down and you need to troubleshoot the Fastly service configuration or add a custom VCL snippet. Additionally, some operations can only be completed using the API, for example reactivating an older VCL version or viewing all the VCL snippets included in a specified the VCL version. See [API quick reference for VCL snippets](#manage-vcl).

### Example VCL snippet code {#vcl-curl}

The following example shows the custom VCL snippet (JSON format) that filters traffic by client IP address:

```json
{
  "service_id": "FASTLY_SERVICE_ID",
  "version": "{Editable Version #}",
  "name": "apply_acl",
  "priority": "100",
  "dynamic": "1",
  "type": "hit",
  "content": "if ((client.ip ~ {ACLNAME}) && !req.http.Fastly-FF){ error 403; }"
}
```

{: .bs-callout-warning}
In this example, the VCL code is formatted as a JSON payload that can be saved to a file and submitted in a Fastly API request. When sending the snippet as JSON for an API request, you must use a backslash to escape special characters in the code to prevent JSON validation errors. See [Using dynamic VCL snippets](https://docs.fastly.com/vcl/vcl-snippets/) in the Fastly VCL documentation. If you submit the VCL snippet from the Magento Admin UI, you do not have to escape special characters.

The VCL logic in the `content` field performs the following actions:

-  Checks the incoming IP address, `client.ip` on each request

-  Blocks any request with an IP address included in the *ACLNAME* edge ACL, returning a `403 Forbidden` error

The following table provides details about key data for custom VCL snippets.  For a more detailed reference, see the [VCL snippets](https://docs.fastly.com/api/config#api-section-snippet) reference in the Fastly documentation.

| Value      | Description
|------------|------------------------------------------------------------------------------------------------------------------------------
| `service_id` | The Fastly Service ID for a specific Staging or Production environment. This ID is assigned when your project is added to the {{ site.data.var.ece }} Fastly service account. See [Get credentials]({{ site.baseurl }}/cloud/cdn/configure-fastly.html).
| `API_KEY`  | The API Key to access your Fastly account. See [Get credentials]({{ site.baseurl }}/cloud/cdn/configure-fastly.html).
| `number`    | The number of the VCL version that the snippet is added to. Fastly uses *Editable Version #* in their example values. If you add custom snippets from the API, you include the version number in the API request. If you add custom VCL from the Magento Admin UI, the version is provided for you.
| `type`       | Specifies a location for inserting the generated snippet, such as init (above subroutines) and recv (within subroutines). See Fastly VCL snippet object values for information on these values. See the Fastly [VCL snippets](https://docs.fastly.com/api/config#api-section-snippet) reference.
| `content`    | The snippet of VCL code to run. Fastly does not support all VCL language features, and it also provides extensions with custom functionality. See the [Fastly VCL programming reference](https://docs.fastly.com/vcl/reference/) for information about supported VCL code features.
| `priority`   | Numeric value from `1` to `100` that specifies when the custom VCL snippet code runs. Snippets with lower priority values run first. If not specified, the `priority` value defaults to `100`.<br><br> Any custom VCL snippet with a priority value of `5` runs immediately, which is best for VCL code that implements request routing (block and allow lists and redirects). Priority `100` is best for overriding default VCL snippet code. <br><br>All [default VCL snippets]({{ site.baseurl }}/cloud/cdn/configure-fastly.html#upload-vcl-snippets) included in the Magento-Fastly module have `priority=50`.<br>-  Assign a high priority like `100` to run custom VCL code after all other VCL functions and override the default VCL code.
| `dynamic` | Indicates if this is a [regular snippet](https://docs.fastly.com/en/guides/about-vcl-snippets) which is included in the versioned VCL for the Fastly service configuration, or a [dynamic snippet](https://docs.fastly.com/vcl/vcl-snippets/using-dynamic-vcl-snippets/) which can be modified and deployed without requiring a new VCL version.
| `active`  | Indicates if the snippet or version is activated and in use. Returns `true` or `false`. Make note of the version number for an active snippet. Use this to clone the version.

## Manage custom VCL snippets from the Magento Admin UI

You can [add custom VCL snippets](https://github.com/fastly/fastly-magento2/blob/master/Documentation/Guides/CUSTOM-VCL-SNIPPETS.md) from the *Fastly Configuration* > *Custom VCL Snippets* section in the Magento Admin UI.

![Manage custom VCL snippets]

The *Custom VCL snippets* view shows only the snippets added through the Magento Admin UI. If snippets are added using the Fastly API, use the API to [manage them](#manage-custom-vcl-snippets-using-the-api).

See the following examples that show how to create and manage custom VCL snippets from the Magento Admin UI:

-  [Custom VCL for IP allowlist]({{ site.baseurl }}/cloud/cdn/fastly-vcl-allowlist.html)
-  [Block referral spam]({{ site.baseurl }}/cloud/cdn/fastly-vcl-badreferer.html)

## Manage custom VCL snippets using the API

The following walk-through shows you how to create regular VCL snippet files and add them to your Fastly service configuration using the Fastly API. You can create and manage the snippets from the _terminal_ application. You do not need an SSH connection into a specific environment.

**Prerequisites:**

-  Configure your {{ site.var.data.ece }} environment for Fastly services. See [Set up Fastly]({{ site.baseurl }}/cloud/cdn/configure-fastly.html).

-  [Get Fastly API credentials]({{ site.baseurl }}/cloud/cdn/configure-fastly.html) to authenticate requests to the Fastly API. Make sure that you get the credentials for the correct environment: Staging or Production.

-  Save Fastly service credentials as bash environment variables that you can use in cURL commands:

   ```bash
   export FASTLY_SERVICE_ID=<Service ID>
   ```

   ```bash
   export FASTLY_API_TOKEN=<API Token>
   ```

   The exported environment variables are available only in the current bash session and are lost when you close the terminal. You can redefine variables by exporting a new value. To view the list of exported variables related to Fastly:

   ```bash
   export | grep FASTLY
   ```

### Add VCL snippets using the Fastly API

Complete the following steps to add custom VCL snippets using the Fastly API.

1. [Locate the active VCL version](#list). Use this version to clone.

1. [Clone the active VCL version](#clone). All changes save to this new version. It remains _inactive_ until you _activate_ it.

1. [Create custom VCL snippets](#create-snippet) in JSON files.

1. [Add custom VCL snippet to the Fastly configuration](#add-snippet). Repeat this step for all JSON files.

1. [Validate and activate](#validate) the new configuration and all associated VCL snippets.

#### Step 1: Locate the active VCL  version {#list}

Use the Fastly API [get version](https://docs.fastly.com/api/config#version_dfde9093f4eb0aa2497bbfd1d9415987) operation to get the active VCL version number:

```bash
curl -H "Fastly-Key: $FASTLY_API_TOKEN" https://api.fastly.com/service/$FASTLY_SERVICE_ID/version/active
```

In the JSON response, note the active VCL version number returned in the `number` key, for example `"number": 99`. You need the version number when you clone the VCL for editing.

```json
{
  "testing": false,
  "locked": true,
  "number": 99,
  "active": true,
  "service_id": "872zhjyxhto5SIRb3GAE0",
  "staging": false,
  "created_at": "2019-01-29T22:38:53Z",
  "deleted_at": null,
  "comment": "Magento Module uploaded VCL",
  "updated_at": "2019-01-29T22:39:06Z",
  "deployed": false
}
```

Save the active version number in a bash environment variable for use in subsequent API requests:

```bash
export FASTLY_VERSION_ACTIVE=<Version>
```

#### Step 2: Clone the active VCL version and all snippets {#clone}

Before you can add or modify custom VCL snippets, you must create a copy of the active VCL version for editing. Use the Fastly API [clone](https://docs.fastly.com/api/config#version_7f4937d0663a27fbb765820d4c76c709) operation:

```bash
curl -H "Fastly-Key: $FASTLY_API_TOKEN" https://api.fastly.com/service/$FASTLY_SERVICE_ID/version/$FASTLY_VERSION_ACTIVE/clone -X PUT
```

In the JSON response, the version number is incremented, and the *active* key value is `false`. You can modify the new, inactive VCL version locally.

```json
{
  "testing": false,
  "locked": false,
  "number": 100,
  "active": false,
  "service_id": "vW2bLFWhhto5SIRb3GAE0",
  "staging": false,
  "created_at": "2019-01-29T22:38:53Z",
  "deleted_at": null,
  "comment": "Magento Module uploaded VCL",
  "updated_at": "2019-01-29T22:39:06Z",
  "deployed": false
}
```

Save the new version number in a bash environment variable for use in subsequent commands:

```bash
export FASTLY_EDIT_VERSION=<Version>
```

#### Step 3: Create a custom VCL snippets {#create-snippet}

Create and save your custom VCL code in a JSON file with the following content and format:

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

-  `name`—Name for the VCL snippet.

-  `dynamic`—Indicates if this is a [regular snippet](https://docs.fastly.com/en/guides/about-vcl-snippets) or a [dynamic snippet](https://docs.fastly.com/guides/vcl-snippets/using-dynamic-vcl-snippets).

-  `type`—Specifies the location for inserting the generated snippet, such as `init` (above subroutines) and `recv` (within subroutines). See [Fastly VCL snippet object values](https://docs.fastly.com/api/config#snippet) for information on these values.

-  `priority`—A value from `1` to `100` that determines when the custom VCL snippet code runs. Custom VCL snippets with lower values run first.

   All default VCL code from the Fastly VCL module has a `priority` of `50`. If you want an action to occur last or to override the default VCL code, use a higher number, such as `100`. To run custom VCL snippet code immediately, set the priority to a lower value, such as `5`.

-  `content`—The snippet of VCL code to run in one line, without line breaks. See [Example custom VCL snippet](#vcl-curl).

#### Step 4: Add VCL snippet to Fastly configuration {#add-snippet}

Use the Fastly API [create snippet](https://docs.fastly.com/api/config#snippet_41e0e11c662d4d56adada215e707f30d) operation to add the custom VCL snippet to the VCL version.

```bash
curl -H "Fastly-Key: $FASTLY_API_TOKEN" https://api.fastly.com/service/$FASTLY_SERVICE_ID/version/$FASTLY_EDIT_VERSION/snippet -H 'Content-Type: application/json' -X POST --data @<filename.json>
```

The `<filename.vcl>` is the name of the file you prepared in the previous step. Repeat this command for each VCL snippet.

If you receive a `500 Internal Server Error` response from the Fastly service, check the JSON file syntax to make sure you are uploading a valid file.

#### Step 5: Validate and activate custom VCL snippets {#validate}

After you add a custom VCL snippet, Fastly inserts the snippet in the VCL version that you are editing. To apply your changes, complete the following steps to validate the VCL snippet code and activate the VCL version.

1. Use the Fastly API [validate VCL version](https://docs.fastly.com/api/config#version_97f8cf7bfd5dc2e5ea1933d94dc5a9a6) operation to verify the updated VCL code.

   ```bash
   curl -H "Fastly-Key: $FASTLY_API_TOKEN" https://api.fastly.com/service/$FASTLY_SERVICE_ID/version/$FASTLY_EDIT_VERSION/validate
   ```

   If the Fastly API returns an error, fix the issue and validate the updated VCL version again.

1. Use the Fastly API [activate](https://docs.fastly.com/api/config#version_0b79ae1ba6aee61d64cc4d43fed1e0d5) operation to activate the new VCL version.

   ```bash
   curl -H "Fastly-Key: $FASTLY_API_TOKEN" https://api.fastly.com/service/$FASTLY_SERVICE_ID/version/$FASTLY_EDIT_VERSION/activate -X PUT
   ```

### API quick reference for VCL snippets {#manage-vcl}

These API request examples use exported environment variables to provide the credentials to authenticate with Fastly. For details on these commands, see the [Fastly API reference](https://docs.fastly.com/api/config#vcl).

 {:.bs-callout-info}
Use these commands to manage snippets that you added using the Fastly API. If you added snippets from the Magento Admin UI, see [Manage VCL snippets using the Admin UI](#manage-custom-vcl-snippets-from-the-magento-admin-ui).

-  **Get active VCL version number**

   ```bash
   curl -H "Fastly-Key: $FASTLY_API_TOKEN" https://api.fastly.com/service/$FASTLY_SERVICE_ID/version/active
   ```

-  **List all regular VCL snippets attached to a service**

   ```bash
   curl -H "Fastly-Key: $FASTLY_API_TOKEN" https://api.fastly.com/service/$FASTLY_SERVICE_ID/version/$FASTLY_VERSION/snippet
   ```

-  **Review an individual snippet**

   ```bash
   curl -H "Fastly-Key: $FASTLY_API_TOKEN" https://api.fastly.com/service/$FASTLY_SERVICE_ID/version/$FASTLY_VERSION/snippet/<snippet_name>
   ```

   The `<snippet_name>` is the name of a snippet, such as `my_regular_snippet`.

-  **Update a snippet**

   Modify the [prepared JSON file](#create-snippet) and send the following request:

   ```bash
   curl -H "Fastly-Key: $FASTLY_API_TOKEN" https://api.fastly.com/service/$FASTLY_SERVICE_ID/version/$FASTLY_VERSION/snippet/<snippet_name> -H 'Content-Type: application/json' -X PUT --data @<filename.json>
   ```

-  **Delete an individual VCL snippet**

    Get a list of snippets and use the following `curl` command with the specific snippet name to delete:

   ```bash
   curl -H "Fastly-Key: $FASTLY_API_TOKEN" https://api.fastly.com/service/$FASTLY_SERVICE_ID/version/$FASTLY_VERSION/snippet/<snippet_name> -X DELETE
   ```

-  **Override values in the [default Fastly VCL code](https://github.com/fastly/fastly-magento2/tree/master/etc/vcl_snippets)**

   Create a new snippet with updated values and assign a priority of `100`.

<!-- Link definitions -->

[Manage custom VCL snippets]: {{site.baseurl}}/common/images/cloud/cloud-fastly-edit-snippets.png
{:width="650px"}
