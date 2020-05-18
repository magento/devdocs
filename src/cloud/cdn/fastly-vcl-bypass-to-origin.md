---
group: cloud-guide
title: Custom VCL to bypass Fastly
redirect_from:
   - /cloud/configure/fastly-vcl-badreferer.html
functional_areas:
  - Cloud
  - Setup
---

You can create a custom VCL snippet to bypass Fastly caching and submit requests directly to the origin server, for example to determine whether site issues are caused by caching, or to troubleshoot headers. You can configure the snippet to bypass Fastly for requests from a specific IP address or URL.

{:.bs-callout-info}
We recommend testing custom VCL configurations in a Staging environment before merging them into a Production environment.

{:.procedure}
Prerequisites

{%include cloud/cloud-fastly-prereqs-custom-vcl.md%}

{:.procedure}
To bypass Fastly and submit requests to the origin server:

{% include cloud/admin-ui-login-step.md %}

1. Click **Stores** > Settings > **Configuration** > **Advanced** > **System**.

1. Expand **Full Page Cache** > **Fastly Configuration** > **Custom VCL Snippets**.

1. Click **Create Custom Snippet**.

1. Add the VCL snippet values:

   -  **Name** — `bypass_fastly`

   -  **Type** — `recv`

   -  **Priority** — `5`

   -  **VCL** snippet content —

      The following example bypasses Fastly for a specific IP address:

      ```conf
      if (client.ip == "<Your IPv4 IP address>" || client.ip == "<Your IPv6 IP address>") {
        return(pass);
      }
      ```

      The following example bypasses Fastly for a specific URL pattern:

      ```conf
      if (req.url ~ "/media/feeds/GoogleShoppingHiVisNew.xml") {  return (pass);}
      ```

      For an exact URL match, use the `==` operator instead of the `~` operator. See the [Fastly VCL reference] for details.

1. Click **Create**.

   ![Create Fastly Bypass VCL snippet]

1. After the page reloads, click **Upload VCL to Fastly** in the *Fastly Configuration* section.

1. After the upload completes, refresh the cache according to the notification at the top of the page.

   Fastly validates the updated VCL version during the upload process. If the validation fails, edit your custom VCL snippet to fix any issues. Then, upload the VCL again.

{% include cloud/cloud-fastly-manage-vcl-from-admin.md %}

 {:.bs-callout-info}
Instead of manually uploading custom VCL snippets, you can add snippets to the `$MAGENTO_CLOUD_APP_DIR/var/vcl_snippets_custom` directory in your environment. Snippets in this directory upload automatically any time you click *upload VCL to Fastly* in the Admin UI. See [Automated custom VCL snippets deployment][] in the Fastly CDN module for Magento 2 documentation.

<!-- Link definitions -->

[Create Fastly Bypass VCL snippet]: {{ site.baseurl }}/common/images/cloud/cloud-fastly-create-bypass-snippet.png
{:width="550px"}

[Manage custom VCL snippets]: {{ site.baseurl }}/common/images/cloud/cloud-fastly-edit-snippets.png
{:width="550px"}

[Checking cache]: https://docs.fastly.com/en/guides/checking-cache#using-curl

[Fastly VCL reference]: https://docs.fastly.com/vcl/

[Automated custom VCL snippets deployment]: https://github.com/fastly/fastly-magento2/blob/master/Documentation/Guides/CUSTOM-VCL-SNIPPETS.md#automated-custom-vcl-snippets-deployment
