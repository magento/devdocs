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

-  List of client IP addresses to block
-  Account access and URL for the Magento Admin UI for the Staging or Production environment
-  Fastly API credentials for Staging and Production environments

## Create Edge ACL for blocking client IPs {#edge-acl}

You create an Edge ACL to define the list of IP addresses to block. After creating the ACL, you can use it in a custom VCL snippet to manage access to your Staging or Production site.

If you want to manage access for both Staging and Production sites, create the Edge ACL with the same name in both environments. The VCL snippet code will apply to both environments.

1. Log in to the Magento Admin.
1. Navigate to **Stores** > Settings > **Configuration** > **Advanced** > **System** > **Full Page Cache** > **Fastly Configuration**.
1. Expand the **Edge ACL** section.
1. Click **Add ACL** to create a list. For this example, name the list "blocklist".
1. Enter IP address values in the list. Any client IPs added to this list will be blocked access from the site.
1. Optionally, select the **Negated** checkbox if needed.

You will reference the Edge ACL by name in your VCL snippet code.

## Create blocklist.json {#vcl}

{:.bs-callout-info}
This example shows advanced users how to create custom VCL code snippet to configure blocking rules that can be uploaded to the Fastly service using the Fastly API. You can also configure a blocklist or allowlist from the {{ site.data.var.ee }} Admin UI. See [Blocking](https://github.com/fastly/fastly-magento2/blob/master/Documentation/Guides/BLOCKING.md) in the Fastly CDN for Magento 2 module documentation.

After you define the Edge ACL, you can use it to create the VCL snippet to block access to the IP addresses specified in the ACL. You can use the same VCL snippet in both Staging and Production environments, but you must upload the snippet to each environment separately.

Create a `blocklist.json` file with the following VCL code in JSON format:

```json
{
  "name": "blocklist",
  "dynamic": "0",
  "type": "recv",
  "priority": "5",
  "content": "if ( client.ip ~ blocklist) { error 403 \"Forbidden\"; }"
}
```

Review the following parameter values and update your code snippet if necessary:

-  `name`: Name for the VCL snippet. For this example, we used the name `blocklist`.
-  `priority`: Determines the VCL snippet call order. Set the priority to 5 to immediately run and check for blocked IP addresses. This priority runs before any of the uploaded and default Magento VCL snippets (`magentomodule_`) that have a priority of 50.
-  `type`: Specifies the type of VCL snippet that determines the location of the snippet in the generated VCL code. In this example,  we use `recv`, which inserts the VCL code in the `vcl_recv` subroutine, below the boilerplate VCL and above any objects. See the [Fastly VCL snippet reference](https://docs.fastly.com/api/config#api-section-snippet) for the list of snippet types.
-  `content`: The snippet of VCL code to run, which checks the client IP address. If the IP is in the Edge ACL, it is blocked from access with a `403 Forbidden` error for the entire website. All other client IP addresses are allowed access.

{:.bs-callout-info}
The default VCL snippets include a prepended name of `magentomodule_` with a priority of 50.  **Do not use the `magentomodule_` name** for your custom VCL Snippets. You must also set the priority for each custom snippet higher or lower than 50 depending on when you want your snippet to run. Lower priority numbers execute first.

## Finish adding the VCL {#complete}

After saving the VCL snippet, add the VCL snippet to the Fastly service configuration. See [Add VCL snippets using the Fastly API]({{ site.baseurl }}/cloud/cdn/cloud-vcl-custom-snippets.html#add-vcl-snippets-using-the-fastly-api).

## Additional VCL examples for blocking requests

The following examples show how to block requests using inline condition statements instead of an ACL list.

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
