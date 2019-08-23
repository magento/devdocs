---
group: cloud-guide
title: Secure access to Magento Admin UI by client IP address
redirect_from:
   - /guides/v2.2/cloud/configure/fastly-vcl-whitelist.html
   - /guides/v2.3/cloud/configure/fastly-vcl-whitelist.html
functional_areas:
  - Cloud
  - Setup
---

The following example shows how to use a custom VCL snippet with a [Fastly Access Control List (ACL)](https://docs.fastly.com/guides/access-control-lists/about-acls) to secure access to the Magento Admin UI for a {{ site.data.var.ece }} project environment by client IP address. When you add the custom VCL snippet, Fastly allows only requests from IP addresses included in the ACL.

**Prerequisites**

-  Configure the {{ site.var.data.ece }} environment for Fastly services. See [Set up Fastly]({{ page.baseurl }}/cloud/cdn/configure-fastly.html).

-  Get Magento Admin UI credentials for your {{ site.data.var.ece }} environment.

-  List of client IP addresses allowed to access the Magento Admin UI.

## Create Edge ACL for allowing client IPs {#edge-acl}

Edge ACLs create IP address lists for managing access to your site. In this example, you create an Edge ACL and add the list of client IP addresses allowed to access the Magento Admin UI for your project environment.

{% include cloud/admin-ui-login-step.md %}

1.  Click **Stores** > **Settings** > **Configuration** > **Advanced** > **System**.

1.  Expand **Full Page Cache** > **Fastly Configuration** > **ACL**.

1.  Create the ACL container:

    - Click **Add ACL**.

    -  On the *ACL Container* page, enter a **ACL name**—`allowlist`.

    -  Select **Activate after the change** to deploy your changes to the version of the Fastly service configuration that you are editing.

    -  Click **Upload** to attach the ACL to your Fastly service configuration.

1. Add the list of IP addresses allowed to access the Magento Admin UI:

   -  Click the Settings icon for the `allowlist` ACL.

   -  Add and save the *IP Value* for each client IP address.

   -  Click **Cancel** to return to the system configuration page.

1.  Click **Save Config**.

1.  Refresh the cache according to the notification at the top of the page.

## Create the custom vcl snippet to secure Magento Admin UI access {#vcl}

The following custom VCL snippet code (JSON format) filters requests to the Magento Admin UI and allows access if the client IP address matches an address in the `allowlist` ACL.

Create an `allowlist.json` file with the following JSON content:

```json
{
  "name": "allowlist",
  "dynamic": "0",
  "type": "recv",
  "priority": "5",
  "content": "if ((req.url ~ \"^/admin\") && !(client.ip ~ allowlist) && !req.http.Fastly-FF) { error 403 \"Forbidden\"; }"
}
```

Review the following values for the code to determine if you need to make changes:

-  `name`—Name for the VCL snippet. For this example, `allowlist`.

-  `priority`—Determines when the VCL snippet runs. The priority  is `5` to immediately run and check whether a Magento Admin UI requests are coming from an allowed IP address. The snippet runs before any of the default Magento VCL snippets (`magentomodule_*`) assigned a priority of 50.

-  `type`—Specifies Specifies a location to insert the snippet in the versioned VCL code. This VCL is a `recv` snippet type which adds the snippet code to the `vcl_recv` subroutine below the default Fastly VCL code and above any objects.

-  `content`—The snippet of VCL code to run. In this example, the code filters requests to the Magento Admin UI and allows access if the client IP address matches an address in the `allowlist` ACL. If the address doesn't match the request is blocked with a `403 Forbidden` error.

   If the URL for your Magento Admin UI was changed, replace the sample value `/admin` with the URL for your environment. For example, `/company-admin`.

In the code sample, the condition `!req.http.Fastly-FF` is important when using Origin Shielding. Do not remove or edit this code.

Add the custom VCL snippet to your Fastly service configuration from the Magento Admin UI (requires Fastly module 1.2.58 or later). If you cannot access the Magento Admin UI, save the JSON code example in a file and upload it using the Fastly API. See [Creating a VCL snippet using the Fastly API]({{ page.baseurl }}/cloud/cdn/cloud-vcl-custom-snippets.html#manage-custom-vcl-snippets-using-the-api).

## Add the custom VCL snippet {#add-whitelist-vcl}

{% include cloud/admin-ui-login-step.md %}

1.  Click **Stores** > **Settings** > **Configuration** > **Advanced** > **System**.

1.  Expand **Full Page Cache** > **Fastly Configuration** > **Custom VCL Snippets**.

1.  Click **Create Custom Snippet**.

1.  Add the VCL snippet values:

    -  **Name**—`allowlist`

    -  **Type**—`recv`

	-  **Priority**—`5`

    -  Add the **VCL** snippet content:

	   ```
	   if ((req.url ~ "^/admin") && !(client.ip ~ allowlist) && !req.http.Fastly-FF) { error 403 "Forbidden";
	   ```

1.  Click **Create** to generate the VCL snippet file with the name pattern `type_priority_name.vcl`, for example `recv_5_allowlist.vcl`

1.  After the page reloads, click **Upload VCL to Fastly** in the *Fastly Configuration* section to add the file to the Fastly service configuration.

 1.  After the upload completes, refresh the cache according to the notification at the top of the page.

Fastly validates the updated version of the VCL code during the upload process. If the validation fails, edit the custom VCL snippet to fix the issue. Then, upload the VCL again.

{% include cloud/cloud-fastly-manage-vcl-from-admin.md %}

{: .bs-callout-info }
Instead of manually uploading custom VCL snippets, you can add snippets to the `$MAGENTO_CLOUD_APP_DIR/var/vcl_snippets_custom` directory in your environment. Snippets in this directory upload automatically when you click *upload VCL to Fastly* in the Magento Admin UI. See [Automated custom VCL snippets deployment](https://github.com/fastly/fastly-magento2/blob/master/Documentation/Guides/CUSTOM-VCL-SNIPPETS.md#automated-custom-vcl-snippets-deployment) in the Fastly CDN for Magento 2 module documentation.

