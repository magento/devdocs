---
group: cloud-guide
subgroup: 090_configure
title: Custom Fastly VCL snippets
redirect_from:
   - /guides/v2.1/cloud/configure/cloud-vcl-custom-snippets.html
   - /guides/v2.2/cloud/configure/cloud-vcl-custom-snippets.html
   - /guides/v2.3/cloud/configure/cloud-vcl-custom-snippets.html
functional_areas:
  - Cloud
  - Setup
---

Custom VCL snippets are blocks of VCL logic inserted into the [default VCL code]({{ page.baseurl}}/cloud/cdn/configure-fastly.html#upload-vcl-snippets) installed when you enabled the Fastly-Magento module in your environment. These snippets are generated, compiled, and transmitted to all Fastly caches, loaded, and
activated without server downtime.

You can use custom snippets to modify how Fastly caching services respond to request traffic. For example, you can create a custom VCL snippet to restrict access to a specified list of client IP addresses, or to block traffic from websites known for sending referral spam to your {{ site.data.var.ece }} sites. 

Fastly supports two types of custom VCL snippets:

-   [Regular snippets](https://docs.fastly.com/guides/vcl-snippets/using-regular-vcl-snippets)—Versioned VCL snippets with VCL code and settings associated with a specific version of the VCL code for your environment. You create, modify, and deploy regular VCL snippets to the Fastly service configuration for a specific environment.

-   [Dynamic snippets](https://docs.fastly.com/guides/vcl-snippets/using-dynamic-vcl-snippets)—Unversioned VCL snippets created using the Fastly API. You can modify these snippets and deploy them without having to update the Fastly VCL version for your service.

We recommend using custom VCL snippets with Edge Dictionaries and Access Control Lists (ACL) to store data used in your custom code. 

-  [**Edge dictionary**](https://docs.fastly.com/guides/edge-dictionaries/about-edge-dictionaries)—Stores data as key-value pairs in a dictionary container that can be referenced from custom VCL snippets

-  [**Edge ACL**](https://docs.fastly.com/guides/access-control-lists/about-acls)—Stores the client IP address data that defines the access control list for block or allow rules implemented using custom VCL snippets


The dictionary and ACL data is deployed to the Fastly Edge nodes accessible across network regions. Additionally, the data can be updated dynamically across the network without requiring you to redeploy the VCL code for your staging or production environment.

{: .bs-callout .bs-callout-info}
You must [set up Fastly](#install-configure) before you can add custom VCL snippets.

## Custom VCL snippet examples and tutorials

The examples and instructions included in the {{ site.data.var.ece }} documentation explain how to use regular custom VCL snippets with edge dictionaries and edge ACLs.  It is not a comprehensive guide to Fastly VCL. For detailed VCL tutorial, reference, and troubleshooting information, see the following documentation:

-   [Guide to Fastly VCL](https://docs.fastly.com/guides/vcl/guide-to-vcl)—High level information about the Fastly Varnish implementation, Fastly VCL extensions, and resources for learning more about Varnish and VCL.
-   [Fastly VCL reference](https://docs.fastly.com/guides/vcl/)—Detailed programming reference to develop and troubleshoot Fastly custom VCL and custom VCL snippets.


You can create and manage custom VCL snippets from the Magento Admin UI or by using the Fastly API:

- [Magento Admin UI](#manage-custom-vcl-snippets-from-the-admin-ui)—We recommend using the Magento Admin UI to create, add, and manage VCL snippets because it automates the process of cloning the active VCL code (VCL version) for editing, saving and validating the custom VCL snippet, inserting the snippet into the VCL version, and uploading the new VCL version to Fastly. Additionally, you can create, view, and manage snippets from the UI without submitting multiple API requests and manually managing the active VCL version.

- [Fastly API](#manage-vcl-snippets-using-the-api)—When you create and manage snippets using the Fastly API, you submit multiple API requests to complete the process to clone the active VCL version, create, validate, add, and manage VCL snippets, and to manage the active VCL version uploaded to Fastly. Use this method if you cannot access the Admin UI, for example if your site is down, and you need to update the Fastly VCL version.


### Manage VCL snippets from the Admin UI

You can [add custom VCL snippets](https://github.com/fastly/fastly-magento2/blob/master/Documentation/Guides/CUSTOM-VCL-SNIPPETS.md) from the *Fastly Configuration* > *Custom VCL Snippets* section in the Admin UI.

![Manage custom VCL snippets]

The *Custom VCL snippets* view shows only the snippets added through the Admin UI. If snippets are added using the Fastly API, [manage them using the API](#manage-vcl).

#### To add a VCL snippet to the Admin UI 

See the following topics for examples:

- [Set up redirects to WordPress using Fastly]({{ page.baseurl }}/cloud/cdn/fastly-vcl-wordpress.html)
- [Block referral spam]({{ page.baseurl }}/cloud/cdn/fastly-vcl-badreferer.html)

####  To delete a VCL snippet from the Admin UI

Deleting a custom VCL snippet from the Admin UI removes the snippet from the UI, but it does not remove the VCL file from the Fastly VCL version. Use one of the following options to remove or delete the snippet from your configuration.

- Upload an empty version of the snippet file to Fastly to remove the VCL logic from the active VCL version:

	- Edit the snippet and delete the **VCL** snippet content.

	- Save the configuration.

	- Upload the VCL to Fastly to apply your changes.
	
- Use the Fastly API to remove the VCL snippet file from the Fastly service configuration. See [Using regular snippets](#manage-vcl).


### Manage VCL snippets using the API

The following walk-through shows you how to create regular VCL snippet files and add them to your Fastly service configuration using the Fastly API. You can create and manage the snippets from the _terminal_ application. You do not need an SSH connection into a specific environment. 

**Prerequisites**

-  Configure your {{ site.var.data.ece }} environment for Fastly services. See [Set up Fastly]({{ page.baseurl }}/cloud/cdn/configure-fastly.html). 

-  [Get Fastly API credentials]({{ page.baseurl }}/cloud/cdn/configure-fastly.html) to authenticate requests to the Fastly API. Make sure that you get the credentials for the correct environment, Staging or Production.

-  Save Fastly service credentials as bash environment variables that you can use in cURL commands:
 
   ```
   export FASTLY_SERVICE_ID=<Service ID>
   ```
   ```
   export FASTLY_API_TOKEN=<API Token>
   ```

   The exported environment variables are available only in the current bash session and are lost when you close the terminal. You can redefine variables by exporting a new value. To view the list of exported variables related to Fastly:

   ```
   export | grep FASTLY
   ```

The  following steps outline the process for adding custom VCL snippets to your Fastly service configuration using the Fastly API. 

1.  [Locate the active VCL version](#list). Use this version to clone.
1.  [Clone the active VCL version](#clone). All changes save to this new version. It remains _inactive_ until you _activate_ it.
1.  [Create VCL snippets](#create-snippet) in VCL files. We provide a number of examples to get you started.
1.  [Add VCL snippets to Fastly configuration](#add-snippet). Repeat this step for all JSON files.
1.  [Validate and activate](#validate) the new configuration and all associated VCL snippets.

**Best practices and recommendations**

-  The default VCL snippets that you uploaded when you [enabled Fastly in your environment]({{ page.baseurl }}/cloud/cdn/configure-fastly.html) include a prepended name of `magentomodule_` with a priority of `50`. For your custom VCL snippets, **do not use the `magentomodule_` name**. Also, consider the priority of your custom snippets and whether they should override the default snippets.

-  Do not forget to _always_ locate and clone the active version, and edit the bash script with the new version! _Version_ is not part of your VCL snippet files.

-  If you want to override values and settings from the [default Fastly VCL snippets](https://github.com/fastly/fastly-magento2/tree/master/etc/vcl_snippets), we recommend creating a new snippet with updated values and code with a higher priority value of `100`. You should not try to override default VCLs.

-  When you create and manage custom VCL snippets, make sure that you are using the credentials for the correct environment to avoid changing the wrong Fastly service configuration.

#### Step 1: Locate the active VCL  version {#list}

Use the Fastly API [get version](https://docs.fastly.com/api/config#version_dfde9093f4eb0aa2497bbfd1d9415987) operation to get the active VCL version number:

```
curl -H "Fastly-Key: $FASTLY_API_TOKEN" https://api.fastly.com/service/$FASTLY_SERVICE_ID/version/active
```

In the JSON response, note the active VCL version number returned in the `number` key, for example `"number": 99`. You need the version number when you clone the VCL for editing.

```
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

```
export FASTLY_VERSION_ACTIVE=<Version>
```
#### Step 2: Clone the active VCL version and all snippets {#clone}

Before you can add or modify custom VCL snippets, you must create a copy of the active VCL code using the Fastly API [clone ](https://docs.fastly.com/api/config#version_7f4937d0663a27fbb765820d4c76c709) operation:  

    curl -H "Fastly-Key: $FASTLY_API_TOKEN" https://api.fastly.com/service/$FASTLY_SERVICE_ID/version/$FASTLY_VERSION_ACTIVE/clone -X PUT
	
In the JSON response, the version number is incremented, and the *active* key value is `false`. You can modify the new, inactive VCL version locally.

```
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

    export FASTLY_EDIT_VERSION_=<Version>


#### Step 3: Create custom VCL snippets {#create-snippet}

Create and save your custom VCL code in a JSON file with the following content and format:

```
{
  "name": "<name>",
  "dynamic": "0",
  "type": "<type>",
  "priority": "100",
  "content": "<code all in one line>" (See [Example custom VCL snippet](#vcl-curl).
}
```

The values include:

-   `name`—Name for the VCL snippet.

-   `dynamic`—Indicates if this is a [regular snippet](https://docs.fastly.com/guides/vcl-snippets/using-regular-vcl-snippets) or a [dynamic snippet](https://docs.fastly.com/guides/vcl-snippets/using-dynamic-vcl-snippets).

-   `type`—Specifies the location for inserting the generated snippet, such as `init` (above subroutines) and `recv` (within subroutines). See [Fastly VCL snippet object values](https://docs.fastly.com/api/config#snippet) for information on these values.

-   `priority`—A value from `1` to `100` that determines when the custom VCL snippet code runs. Custom VCL snippets with lower values run first.

     All default VCL code from the Fastly VCL module has a `priority` of `50`. If you want an action to occur last or to override the default VCL code, use a higher number, such as `100`. To run custom VCL snippet code immediately, set the priority to a lower code occur immediately, use a lower value, such as `5`.
	 
-   `content`—The snippet of VCL code to run in one line, without line breaks. (See [Example custom VCL snippet](#vcl-curl).)

#### Step 4: Add VCL snippets to Fastly configuration {#add-snippet}

Use the following Fastly API [create snippet](https://docs.fastly.com/api/config#snippet_41e0e11c662d4d56adada215e707f30d) operation to add the snippet to the VCL version.

```
curl -H "Fastly-Key: $FASTLY_API_TOKEN" https://api.fastly.com/service/$FASTLY_SERVICE_ID/version/$FASTLY_EDIT_VERSION/snippet -H 'Content-Type: application/json' -X POST --data @<filename.json>
```

The `<filename.vcl>` is the name of the file you prepared in the previous step. Repeat this command for each VCL snippet.

If you receive a `500 Internal Server Error` response from the Fastly service, check the JSON file syntax to make sure you are uploading a valid file.

#### Step 5: Validate and activate snippets for a version {#validate}

When you add a custom VCL snippet to the VCL version, Fastly inserts the snippet in the VCL version, and assigns the updated VCL version to your service according to the version number. You must use the Fastly API [validate VCL version](https://docs.fastly.com/api/config#version_97f8cf7bfd5dc2e5ea1933d94dc5a9a6) operation to verify the updated VCL code before you can activate the new version.

```
curl -H "Fastly-Key: $FASTLY_API_TOKEN" https://api.fastly.com/service/$FASTLY_SERVICE_ID/version/$FASTLY_VERSION/validate
```

If the Fastly API returns an error, fix the issue and validate the updated VCL version again. 

If you received `"status": "ok"`, use the Fastly API [activate](https://docs.fastly.com/api/config#version_0b79ae1ba6aee61d64cc4d43fed1e0d5) operation to activate the new VCL version for your project environment.

```bash
curl -H "Fastly-Key: $FASTLY_API_TOKEN" https://api.fastly.com/service/$FASTLY_SERVICE_ID/version/$FASTLY_VERSION/activate -X PUT
```

All VCL snippets associated with the version become active. This deactivates snippets using a previous version.


### API quick reference for VCL snippets {#manage-vcl}

These API request examples use exported environment variables to provide the credentials to authenticate with Fastly. For details on these commands, see the [Fastly API reference](https://docs.fastly.com/api/config#vcl).

{: .bs-callout .bs-callout-info}
Use these commands to manage snippets that you added using the Fastly API. If you added snippets from the Admin UI, see [Managing VCL snippets using the Admin UI](#manage-vcl-snippets-from-the-admin-ui).

- **Get active VCL version number**

```
    curl -H "Fastly-Key: $FASTLY_API_TOKEN" https://api.fastly.com/service/$FASTLY_SERVICE_ID/version/active
```

-  **List all regular VCL snippets attached to a service**
   
   ```
   curl -H "Fastly-Key: $FASTLY_API_TOKEN" https://api.fastly.com/service/$FASTLY_SERVICE_ID/version/$FASTLY_VERSION/snippet
   ```
   
-  **Review an individual snippet**

   ```
   curl -H "Fastly-Key: $FASTLY_API_TOKEN" https://api.fastly.com/service/$FASTLY_SERVICE_ID/version/$FASTLY_VERSION/snippet/<snippet_name>
   ```
   
   The `<snippet_name>` is the name of a snippet, such as `my_regular_snippet`.
   
-  **Update a snippet**

   Modify the [prepared JSON file](#create-snippet) and send the following request:
	
   ```
   curl -H "Fastly-Key: $FASTLY_API_TOKEN" https://api.fastly.com/service/$FASTLY_SERVICE_ID/version/$FASTLY_VERSION/snippet/<snippet_name> -H 'Content-Type: application/json' -X PUT --data @<filename.json>
   ```  
	 
-  **Delete an individual VCL snippet** 

    Get a list of snippets and use the following `curl` command with the specific snippet name to delete:
   
   ```
   curl -H "Fastly-Key: $FASTLY_API_TOKEN" https://api.fastly.com/service/$FASTLY_SERVICE_ID/version/$FASTLY_VERSION/snippet/<snippet_name> -X DELETE
   ``` 
-  **Override values in the [default Fastly VCL code](https://github.com/fastly/fastly-magento2/tree/master/etc/vcl_snippets)**

   Create a new snippet with updated values and assign a priority of `100`.

### Example VCL snippet code {#vcl-curl}

The following example shows the JSON code for a custom VCL snippet that filters traffic by client IP address.

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

The VCL logic in the `content` field performs the following actions:

- Checks the incoming IP address, `client.ip` on each request

- Blocks any request with an IP address included in the *ACLNAME* edge ACL, returning a `403 Forbidden` error


**VCL snippet fields**

The following table provides details about key data for custom VCL snippets.  For a more detailed reference, see the [VCL snippets](https://docs.fastly.com/api/config#api-section-snippet) reference in the Fastly documentation.


| Value      | Description                                                
|------------|------------------------------------------------------------------------------------------------------------------------------
| `service_id` | The Fastly Service ID for a specific Staging or Production environment. This ID is assigned when your project is added to the {{ site.data.var. ece }} Fastly service account. See [Get credentials]({{ page.baseurl }}/cloud/cdn/configure-fastly.html).   
| `API_KEY`  | The API Key to access your Fastly account. See [Get credentials]({{ page.baseurl }}/cloud/cdn/configure-fastly.html).      
| `number`    | The number of the VCL version that the snippet is added to. Fastly uses *Editable Version #* in their example values. If you add custom snippets from the API, you include the version number in the API request. If you add custom VCL from the Magento Admin UI, the version is provided for you. 
| `type`       | Specifies a location for inserting the generated snippet, such as init (above subroutines) and recv (within subroutines). See Fastly VCL snippet object values for information on these values. See the Fastly [VCL snippets](https://docs.fastly.com/api/config#api-section-snippet) reference.
| `content`    | The snippet of VCL code to run. Fastly does not support all VCL language features, and it also provides extensions with custom functionality. See the [Fastly VCL programming reference](https://docs.fastly.com/vcl/reference/) for information about supported VCL code features. 
| `priority`   | Numeric value from `1` to `100` that specifies when the custom VCL snippet code runs. Snippets with lower priority values run first. If not specified, the `priority ` value defaults to `100`.<br><br> Any custom VCL snippet with a priority value of `5` runs immediately, which is best for VCL code that implements request routing (block and allow lists and redirects). Priority `100` is best for overriding default VCL snippet code. <br><br>All [default VCL snippets]({{ page.baseurl }}/cloud/cdn/configure-fastly.html#upload-vcl-snippets) included in the Magento-Fastly module have `priority=50`.<br>-  Assign a high priority like `100` to run custom VCL code after all other VCL functions and override the default VCL code.
| `dynamic` | Indicates if this is a [regular snippet](https://docs.fastly.com/vcl/vcl-snippets/using-dynamic-vcl-snippets/) which is included in the versioned VCL for the Fastly service configuration, or a [dynamic snippet](https://docs.fastly.com/vcl/vcl-snippets/using-dynamic-vcl-snippets/) which can be modified and deployed without requiring a new VCL version.
| `active`  | Indicates if the snippet or version is activated and in use. Returns `true` or `false`. Make note of the version number for an active snippet. Use this to clone the version. 
{:style="table-layout:auto;"}


<!-- Link definitions -->

[Manage custom VCL snippets]: {{site.baseurl}}/common/images/cloud/cloud-fastly-edit-snippets.png
{: width="650px"}
