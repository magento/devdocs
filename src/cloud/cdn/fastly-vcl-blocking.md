---
group: cloud-guide
title: Custom VCL for blocking requests
redirect_from:
   - /cloud/configure/fastly-vcl-blacklist.html
   - /cloud/cdn/fastly-vcl-blacklist.html

functional_areas:
  - Cloud
  - Setup
---

You can use the Fastly CDN module for Magento 2 to create an Edge ACL with a list of IP addresses that you want to block. Then, you can use that list in combination with a VCL snippet to block incoming requests. The code checks the IP address of the incoming request. If it matches an IP address included in the ACL list, Fastly blocks the request from accessing your site and returns a `403 Forbidden error`. All other client IPs are allowed access.

**Prerequisites:**

{%include cloud/cloud-fastly-prereqs-custom-vcl.md%}

-  List of client IP addresses to block

## Create Edge ACL for blocking client IPs {#edge-acl}

You create an Edge ACL to define the list of IP addresses to block. After creating the ACL, you can use it in a custom VCL snippet to manage access to your Staging or Production site.

If you want to manage access for both Staging and Production sites, create the Edge ACL with the same name in both environments. The VCL snippet code will apply to both environments.

1. Log in to the Magento Admin.
1. Navigate to **Stores** > Settings > **Configuration** > **Advanced** > **System** > **Full Page Cache** > **Fastly Configuration**.
1. Expand the **Edge ACL** section.
1. Click **Add ACL** to create a list. For this example, name the list "blocklist".
1. Enter IP address values in the list. Any client IPs added to this list will be blocked access from the site.
1. Optionally, select the **Negated** checkbox if needed.

You reference the Edge ACL by name in your VCL snippet code.

## Create the custom VCL for the block list {#vcl}

{:.bs-callout-info}
This example shows advanced users how to create a VCL code snippet to configure custom blocking rules that can be uploaded to the Fastly service. You can configure a block list or allow list based on country from the {{ site.data.var.ee }} Admin UI using the [Blocking](https://github.com/fastly/fastly-magento2/blob/master/Documentation/Guides/BLOCKING.md) feature available in the Fastly CDN for Magento 2 module.

After you define the Edge ACL, you can use it to create the VCL snippet to block access to the IP addresses specified in the ACL. You can use the same VCL snippet in both Staging and Production environments, but you must upload the snippet to each environment separately.

The following custom VCL snippet code (JSON format) shows the logic to block incoming requests with a client IP address that matches an address in the blocklist ACL.

```json
{
  "name": "blocklist",
  "dynamic": "0",
  "type": "recv",
  "priority": "5",
  "content": "if ( client.ip ~ blocklist) { error 403 \"Forbidden\"; }"
}
```

Before creating a snippet based on this example, review the values to determine whether you need to make any changes:

-  `name`: Name for the VCL snippet. For this example, we used the name `blocklist`.

-  `priority`: Determines when the VCL snippet runs. The priority  is `5` to immediately run and check whether a Magento Admin UI requests are coming from an allowed IP address. The snippet runs before any of the default Magento VCL snippets (`magentomodule_*`) assigned a priority of 50. You must set the priority for each custom snippet higher or lower than 50 depending on when you want your snippet to run. Snippets with lower priority numbers run first.

-  `type`: Specifies the type of VCL snippet that determines the location of the snippet in the generated VCL code. In this example,  we use `recv`, which inserts the VCL code in the `vcl_recv` subroutine, below the boilerplate VCL and above any objects. See the [Fastly VCL snippet reference](https://docs.fastly.com/api/config#api-section-snippet) for the list of snippet types.

-  `content`: The snippet of VCL code to run, which checks the client IP address. If the IP is in the Edge ACL, it is blocked from access with a `403 Forbidden` error for the entire website. All other client IP addresses are allowed access.

After reviewing and updating the code for your environment, use either of the following methods to add the custom VCL snippet to your Fastly service configuration:

-  [Add the custom VCL snippet from the Magento Admin](#add-the-custom-vcl-snippet). This method is recommended if you can access the Magento Admin UI. (Requires [Fastly version 1.2.58]({{site.baseurl}}/cloud/cdn/configure-fastly.html#upgrade) or later.)

-  Save the JSON code example to a file (for example, `blocklist.json`) and [upload it using the Fastly API]({{site.baseurl}}/cloud/cdn/cloud-vcl-custom-snippets.html#manage-custom-vcl-snippets-using-the-api). Use this method if you cannot access the Magento Admin UI.

## Add the custom VCL snippet

{% include cloud/admin-ui-login-step.md %}

1. Click **Stores** > Settings > **Configuration** > **Advanced** > **System**.

1. Expand **Full Page Cache** > **Fastly Configuration** > **Custom VCL Snippets**.

1. Click **Create Custom Snippet**.

1. Add the VCL snippet values:

   -  **Name** — `blocklist`

   -  **Type** — `recv`

   -  **Priority** — `5`

   -  Add the **VCL** snippet content:

      ```conf
      if ( client.ip ~ blocklist) { error 403 "Forbidden"; }
      ```

1. Click **Create** to generate the VCL snippet file with the name pattern `type_priority_name.vcl`, for example `recv_5_blocklist.vcl`

1. After the page reloads, click **Upload VCL to Fastly** in the *Fastly Configuration* section to add the file to the Fastly service configuration.

1. After the uploads, refresh the cache according to the notification at the top of the page.

Fastly validates the updated version of the VCL code during the upload process. If the validation fails, edit the custom VCL snippet to fix the issue. Then, upload the VCL again.

## Additional VCL examples for blocking requests

The following examples show how to block requests using inline condition statements instead of an ACL list.

{: .bs-callout-warning}
In these examples, the VCL code is formatted as a JSON payload that can be saved to a file and submitted in a Fastly API request. You can submit the [VCL snippet from the Admin UI](#add-the-custom-vcl-snippet), or as a JSON string using the Fastly API. If you use the Fastly API with a JSON string, you must use a backslash to escape special characters to prevent validation errors.
See [Using dynamic VCL snippets](https://docs.fastly.com/vcl/vcl-snippets/) in the Fastly VCL documentation.

### VCL code sample: Block by country code

This example uses the two-character ISO 3166-1 country code for the country associated with the IP address.

```json
{
  "name": "blockbycountrycode",
  "dynamic": "0",
  "type": "recv",
  "priority": "5",
  "content": "if ( geoip.country_code == \"HK\" ) { error 405 \"Not allowed\";}"
}
```

{:.bs-callout-info}
Instead of using a custom VCL snippet, you can use the Fastly [Blocking](https://github.com/fastly/fastly-magento2/blob/master/Documentation/Guides/BLOCKING.md) feature in the {{ site.data.var.ece }} Admin UI to configure blocking by country code or a list of country codes.

### VCL code sample: Block by HTTP User-Agent request header

```json
{
  "name": "blockbyuseragent",
  "dynamic": "0",
  "type": "recv",
  "priority": "5",
  "content": "if ( req.http.User-Agent ~ \"(UCBrowser|MQQBrowser|LieBaoFast|Mb2345Browser)\" ) {error 405 \"Not allowed\";}"
}
```
