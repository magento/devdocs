---
group: cloud-guide
title: Block referral spam
redirect_from:
   - /cloud/configure/fastly-vcl-badreferer.html
functional_areas:
  - Cloud
  - Setup
---

The following example shows how to configure [Fastly Edge Dictionary](https://docs.fastly.com/guides/edge-dictionaries/working-with-dictionaries-using-the-api) with a custom VCL snippet to block referral spam from your {{ site.data.var.ece }} site.

 {:.bs-callout-info}
We recommend adding custom VCL configurations to a Staging environment where you can test them before running them against the Production environment.

**Prerequisites:**

-  Configure the {{ site.var.data.ece }} environment for Fastly services. See [Set up Fastly]({{ site.baseurl }}/cloud/cdn/configure-fastly.html).

-  Get Admin credentials for your {{ site.data.var.ece }} environment.

-  Review your site logs for fake referral URLs and make a list of domains to block.

## Create a referrer block list

Edge Dictionaries create key-value pairs accessible to VCL functions during VCL snippet processing. In this example, you create an edge dictionary that provides the list of referrer websites to block.

{% include cloud/admin-ui-login-step.md %}

1. Click **Stores** > **Settings** > **Configuration** > **Advanced** > **System**.

1. Expand **Full Page Cache** > **Fastly Configuration** > **Edge dictionaries**.

1. Create the Dictionary container:

   -  Click **Add container**.

   -  On the *Container* page, enter a **Dictionary name**—`referrer_blocklist`.

   -  Select **Activate after the change** to deploy your changes to the version of the Fastly service configuration that you are editing.

   -  Click **Upload** to attach the dictionary to your Fastly service configuration.

1. Add the list of domain names to block to the `referrer_blocklist` dictionary:

   -  Click the Settings icon for the `referrer_blocklist` dictionary.

   -  Add and save key-value pairs in the new dictionary. For this example, each **Key** is the domain name of a referrer URL to block and **Value** is `true`.

      ![Add bad referrer dictionary items]

   -  Click **Cancel** to return to the system configuration page.

1. Click **Save Config**.

1. Refresh the cache according to the notification at the top of the page.

For more information about Edge Dictionaries, see [Creating and using Edge Dictionaries](https://docs.fastly.com/guides/edge-dictionaries/working-with-dictionaries-using-the-api) and [custom VCL snippets](https://docs.fastly.com/guides/edge-dictionaries/working-with-dictionaries-using-the-api#custom-vcl-examples) in the Fastly documentation.

## Create a custom VCL snippet to block referrer spam

The following custom VCL snippet code (JSON format) checks incoming requests and blocks requests from any referrer site included in the `referrer_blocklist` edge dictionary.

```json
{
  "name": "block_bad_referrer",
  "dynamic": "0",
  "type": "recv",
  "priority": "5",
  "content": "set req.http.Referer-Host = regsub(req.http.Referer, \"^https?://?([^:/\\s]+).*$\", \"\\1\"); if (table.lookup(referrer_blocklist, req.http.Referer-Host)) { error 403 \"Forbidden\"; }"
}
```

Review the example code and change values as needed:

-  `name` — Name for the VCL snippet. For this example, we used `block_bad_referrer`.

-  `dynamic` — Value 0 indicates a [regular snippet](https://docs.fastly.com/guides/vcl-snippets/using-regular-vcl-snippets) to upload to the versioned VCL for the Fastly configuration.

-  `priority` — Determines when the VCL snippet runs. The priority  is `5` to run this snippet code before any of the default Magento VCL snippets (`magentomodule_*`) assigned a priority of 50.

-  `type` — Specifies a location to insert the snippet in the VCL version. In this example, the VCL snippet is a `recv` snippet. When the snippet is inserted into the VCL version, it is added to the `vcl_recv` subroutine,  below the default Fastly VCL code and above any objects.

-  `content` — The snippet of VCL code to run in one line, without line breaks.

In this example, the VCL code logic captures the host of a referrer website into a header, and then compares the host name to the list of URLs in the `referrer_blocklist` dictionary.

If the host name matches, the request is blocked with a `403 Forbidden` error.

See the [Fastly VCL reference](https://docs.fastly.com/vcl/reference/) for information about creating Fastly VCL code snippets.

Add the custom VCL snippet to your Fastly service configuration from the Magento Admin UI (requires Fastly module 1.2.58 or later). If you cannot access the Admin UI, save the JSON code example in a file and upload it using the Fastly API. See [Creating a VCL snippet using the Fastly API]({{  site.baseurl }}/cloud/cdn/cloud-vcl-custom-snippets.html(#manage-custom-vcl-snippets-using-the-api).

## Add the custom VCL snippet

{% include cloud/admin-ui-login-step.md %}

1. Click **Stores** > **Settings** > **Configuration** > **Advanced** > **System**.

1. Expand **Full Page Cache** > **Fastly Configuration** > **Custom VCL Snippets**.

1. Click **Create Custom Snippet**.

1. Add the VCL snippet values:

   -  **Name** — `block_bad_referrer`

   -  **Type** — `recv`

   -  **Priority** — `5`

   -  **VCL** snippet content —

      ```conf
      set req.http.Referer-Host = regsub(req.http.Referer,
      "^https?://?([^:/\s]+).*$", "1");
      if (table.lookup(referrer_blocklist, req.http.Referer-Host)) {
        error 403 "Forbidden";
      }
      ```

1. Click **Create**.

   ![Create custom referrer block VCL snippet]

1. After the page reloads, click **Upload VCL to Fastly** in the *Fastly Configuration* section.

1. After the upload completes, refresh the cache according to the notification at the top of the page.

Fastly validates the updated VCL version during the upload process. If the validation fails, edit your custom VCL snippet to fix any issues. Then, upload the VCL again.

{% include cloud/cloud-fastly-manage-vcl-from-admin.md %}

 {:.bs-callout-info}
Instead of manually uploading custom VCL snippets, you can add snippets to the `$MAGENTO_CLOUD_APP_DIR/var/vcl_snippets_custom` directory in your environment. Snippets in this directory upload automatically any time you click *upload VCL to Fastly* in the Admin UI. See [Automated custom VCL snippets deployment](https://github.com/fastly/fastly-magento2/blob/master/Documentation/Guides/CUSTOM-VCL-SNIPPETS.md#automated-custom-vcl-snippets-deployment) in the Fastly CDN module for Magento 2 documentation.

<!-- Link definitions -->

[Add bad referrer dictionary items]: {{site.baseurl}}/common/images/cloud/cloud-fastly-referrer-blocklist-dictionary.png
{:width="550px"}

[Create custom referrer block VCL snippet]: {{site.baseurl}}/common/images/cloud/cloud-fastly-create-referrer-block-snippet.png
{:width="550px"}

[Manage custom VCL snippets]: {{site.baseurl}}/common/images/cloud/cloud-fastly-edit-snippets.png
{:width="550px"}
