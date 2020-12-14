---
group: cloud-guide
title: Custom VCL for allowing requests
functional_areas:
  - Cloud
  - Setup
  - Security
redirect_from:
   - /cloud/configure/fastly-vcl-whitelist.html
   - /cloud/cdn/fastly-vcl-whitelist.html
---

You can use a Fastly Edge ACL list in combination with a custom VCL code snippet to filter incoming requests and allow access by IP address. The ACL list specifies the IP addresses to allow.

Create an allow list to limit access to your Staging environment so that only requests from specified IP addresses for internal developers and approved external services are permitted. You can also create an allow list to secure access to the Magento Admin UI on Staging and Production environments.

The following example shows how to use a custom VCL snippet with a [Fastly Access Control List (ACL)](https://docs.fastly.com/guides/access-control-lists/about-acls) to secure access to the Magento Admin UI for a {{ site.data.var.ece }} project environment. When you add the custom VCL snippet to the Cloud enviroment, Fastly allows only requests from IP addresses included in the ACL.

{:.bs-callout-tip}
For Staging and Integration environments that should not be publicly accessible, you can use the HTTP access control option available in the [Magento Cloud Project UI]({{site.baseurl}}/cloud/project/project-webint-branch.html#security) to manage access to the entire site by IP address.

**Prerequisites:**

{%include cloud/cloud-fastly-prereqs-custom-vcl.md%}

-  List of client IP addresses to include on the allow list

## Create Edge ACL for allowing client IPs {#edge-acl}

Edge ACLs create IP address lists for managing access to your site. In this example, you create an Edge ACL and add the list of client IP addresses allowed to access the Magento Admin UI for your project environment.

{% include cloud/admin-ui-login-step.md %}

1. Click **Stores** > Settings > **Configuration** > **Advanced** > **System**.

1. Expand **Full Page Cache** > **Fastly Configuration** > **ACL**.

1. Create the ACL container:

   -  Click **Add ACL**.

   -  On the *ACL Container* page, enter a **ACL name**—`allowlist`.

   -  Select **Activate after the change** to deploy your changes to the version of the Fastly service configuration that you are editing.

   -  Click **Upload** to attach the ACL to your Fastly service configuration.

1. Add the list of IP addresses allowed to access the Magento Admin UI:

   -  Click the Settings icon for the `allowlist` ACL.

   -  Add and save the *IP Value* for each client IP address.

   -  Click **Cancel** to return to the system configuration page.

1. Click **Save Config**.

1. Refresh the cache according to the notification at the top of the page.

## Create the custom VCL snippet to secure Magento Admin UI access {#vcl}

The following custom VCL snippet code (JSON format) shows the logic to filter requests to the Magento Admin UI and allow access if the client IP address matches an address in the `allowlist` ACL.

```json
{
  "name": "allowlist",
  "dynamic": "0",
  "type": "recv",
  "priority": "5",
  "content": "if ((req.url ~ \"^/admin\") && !(client.ip ~ allowlist) && !req.http.Fastly-FF) { error 403 \"Forbidden\"; }"
}
```

Before creating your own snippet from this example, review the values to determine whether you need to make any changes:

-  `name` — Name for the VCL snippet. For this example, `allowlist`.

-  `priority` — Determines when the VCL snippet runs. The priority  is `5` to immediately run and check whether a Magento Admin UI requests are coming from an allowed IP address. The snippet runs before any of the default Magento VCL snippets (`magentomodule_*`) assigned a priority of 50. You must set the priority for each custom snippet higher or lower than 50 depending on when you want your snippet to run. Snippets with lower priority numbers run first.

-  `type` — Specifies a location to insert the snippet in the versioned VCL code. This VCL is a `recv` snippet type which adds the snippet code to the `vcl_recv` subroutine below the default Fastly VCL code and above any objects.

-  `content` — The snippet of VCL code to run. In this example, the code filters requests to the Magento Admin UI and allows access if the client IP address matches an address in the `allowlist` ACL. If the address does not match, the request is blocked with a `403 Forbidden` error.

   If the URL for your Magento Admin UI was changed, replace the sample value `/admin` with the URL for your environment. For example, `/company-admin`.

In the code sample, the condition `!req.http.Fastly-FF` is important when using [Origin Shielding]({{site.baseurl}}/cloud/cdn/configure-fastly-customize-cache.html#configure-back-ends-and-origin-shielding). Do not remove or edit this code.

After reviewing and updating the code for your environment, use either of the following methods to add the custom VCL snippet to your Fastly service configuration:

-  [Add the custom VCL snippet from the Magento Admin](#add-the-custom-vcl-snippet). This method is recommended if you can access the Magento Admin UI. (Requires [Fastly CDN module for Magento 2 version 1.2.58]({{site.baseurl}}/cloud/cdn/configure-fastly.html#upgrade) or later.)

-  Save the JSON code example to a file (for example, `allowlist.json`) and [upload it using the Fastly API]({{site.baseurl}}/cloud/cdn/cloud-vcl-custom-snippets.html#manage-custom-vcl-snippets-using-the-api). Use this method if you cannot access the Magento Admin UI.

## Add the custom VCL snippet

{% include cloud/admin-ui-login-step.md %}

1. Click **Stores** > Settings > **Configuration** > **Advanced** > **System**.

1. Expand **Full Page Cache** > **Fastly Configuration** > **Custom VCL Snippets**.

1. Click **Create Custom Snippet**.

1. Add the VCL snippet values:

   -  **Name** — `allowlist`

   -  **Type** — `recv`

   -  **Priority** — `5`

   -  Add the **VCL** snippet content:

      ```conf
      if ((req.url ~ "^/admin") && !(client.ip ~ allowlist) && !req.http.Fastly-FF) { error 403 "Forbidden";}
      ```

1. Click **Create** to generate the VCL snippet file with the name pattern `type_priority_name.vcl`, for example `recv_5_allowlist.vcl`

1. After the page reloads, click **Upload VCL to Fastly** in the *Fastly Configuration* section to add the file to the Fastly service configuration.

1. After the upload completes, refresh the cache according to the notification at the top of the page.

Fastly validates the updated version of the VCL code during the upload process. If the validation fails, edit the custom VCL snippet to fix the issue. Then, upload the VCL again.

{% include cloud/cloud-fastly-manage-vcl-from-admin.md %}

 {:.bs-callout-info}
Instead of manually uploading custom VCL snippets, you can add snippets to the `$MAGENTO_CLOUD_APP_DIR/var/vcl_snippets_custom` directory in your environment. Snippets in this directory upload automatically when you click *upload VCL to Fastly* in the Magento Admin UI. See [Automated custom VCL snippets deployment](https://github.com/fastly/fastly-magento2/blob/master/Documentation/Guides/CUSTOM-VCL-SNIPPETS.md#automated-custom-vcl-snippets-deployment) in the Fastly CDN for Magento 2 module documentation.
