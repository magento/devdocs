---
group: cloud-guide
title: Customize error and maintenance pages
redirect_from:
   - /cloud/configure/fastly-vcl-extend-timeout.html
functional_areas:
  - Cloud
  - Setup
  - Configuration
---

When a request to the Fastly origin fails, Fastly returns default response pages with basic formatting and generic messaging that can be confusing for users. For example, Fastly returns the following default error page when a request to the Fastly origin fails because of a 503 error.

![Fastly default error page]

You can update your {{ site.var.data.ee }} store configuration to replace some default response pages with pages that have friendlier messaging and improved HTML styling as shown in the following example.

![Fastly custom error page]

Currently, you can customize the following Fastly response pages for your {{ site.data.var.ece }} project through the Magento Admin UI.

-  [Timeout or site maintenance outages (503 Service Unavailable)](#customize-the-503-error-page)
-  [WAF blocking events that occur when the WAF detects suspicious request traffic (403 Forbidden)](#customize-the-waf-error-page)

**HTML coding requirements:**

The HTML code for the custom page must meet the following requirements:

-  Content can contain up to 65,535 characters.
-  Specify all CSS inline in the HTML source.
-  Bundle images in the HTML page using base64 so that they display even if Fastly is offline. See [Data URIs on the css-tricks site](https://css-tricks.com/data-uris/).

## Customize the 503 error page

Customers see the default 503 error page in the following cases:

-  When a request to the Fastly origin returns a response status great than 500.
-  When the Fastly origin is down, for example due to a timeout, maintenance activity, or health issues.

You can customize the default page by adapting the following HTML code to include styling to match your {{ site.data.var.ee }} store theme and modifying the title and messaging as needed.

```html
<!DOCTYPE html>
<html>
   <head>
      <meta charset="UTF-8">
         <title>503</title>
   </head>
   <body>
      <p>Service unavailable</p>
   </body></html>
```

Verify that the modified source displays correctly in the browser. Then, add the customized HTML code to the Fastly configuration.

{:.procedure}
To add the custom response page to the Fastly configuration:

1. [Log in to the Magento Admin UI]({{ site.baseurl }}/cloud/onboarding/onboarding-tasks.html#admin).

1. Click **Stores** > **Settings** > **Configuration** > **Advanced** > **System**.

1. In the right pane, expand **Full Page Cache** > **Fastly Configuration** > **Custom Synthetic Pages**.

   ![Edit 503 error page]

1. Click **Set HTML**.

1. Copy and paste the source code for your custom response page into the HTML field.

   ![Update 503 error page]

1. Click **Upload** at the top of the page to upload the customized HTML source to the Fastly server.

1. Click **Save Config** at the top of the page to save the updated configuration file.

1. Refresh the cache.

   -  In the notification at the top of the page, click the *Cache Management* link.

   -  On the Cache Management page, click **Flush Magento Cache**.

## Customize the WAF error page

Customers see the following default WAF error page when a request to the Fastly origin fails with a `403 Forbidden` error caused by a [WAF]({{ site.baseurl }}/cloud/cdn/fastly-waf-service.html) blocking event.

![WAF error page]

The following code sample shows the HTML source for the default page:

```html
<html>
  <head>
    <title>Magento 403 Forbidden</title>
  </head>
  <body>
    <p>The requested URL was rejected.</p>
    <p>For additional information, please contact support and provide this reference ID:</p>
    <p>"} req.http.x-request-id {"</p>
    <p><button onclick='history.back();'>Go Back</button></p>
  </body>
</html>
```

You can use the **Custom Synthetic Pages** > **Edit WAF page** option in the Fastly configuration menu to customize the default code for your {{ site.data.var.ece }} project. When you edit the code, retain the following line that provides the reference ID for the WAF blocking event:

```html
<p>"} req.http.x-request-id {"</p>
```

 {:.bs-callout-info}
The Edit WAF option is available only if the Managed Cloud WAF service is enabled for your {{ site.var.data.ece }} project.

{:.procedure}
To edit the WAF error page:

1. [Log in to the Magento Admin UI]({{ site.baseurl }}/cloud/onboarding/onboarding-tasks.html#admin).

1. Click **Stores** > **Settings** > **Configuration** > **Advanced** > **System**.

1. In the right pane, expand **Full Page Cache** > **Fastly Configuration** > **Custom Synthetic Pages**.

   ![Edit WAF error page option]

1. Click **Edit WAF page**.

1. Complete the fields to update the HTML.

   ![Update WAF error page]

   -  **Status** — Select the `403 Forbidden` status.
   -  **MIME type** — Type `text/html`.
   -  **Content** — Edit the default HTML response to add custom CSS and update the title and messaging as needed.

1. Click **Upload** at the top of the page to upload the customized HTML source to the Fastly server.

1. Click **Save Config** at the top of the page to save the updated configuration file.

1. Refresh the cache.

   -  In the notification at the top of the page, click the **Cache Management** link.

   -  On the Cache Management page, click **Flush Magento Cache**.

## Display Magento error report number

By default, Fastly hides all Magento errors behind the _503 Service Unavailable_ error. To display the Magento error log report number so that you can find and review the error details in the logs, open the website omitting Fastly using these steps:

1. Retrieve the IP address of your store:

   -  For Pro Staging and Production environments:

      ```bash
      nslookup {your_project_id}.ent.magento.cloud
      ```

   -  For Pro Integration environments and Starter environments:

      ```bash
      nslookup gw.{your_region}.magentosite.cloud
      ```

1. Add your application domain and IP address to the hosts file on your local workstation:

   ```text
   {server_IP} {store_domain}
   ```

1. Clear the browser cache and cookies (or switch to incognito mode).

1. Open your store website again to view the Magento error code.

1. Use the Magento error code to find the details in the error report file:

   -  [Connect to the affected environment using SSH]({{ site.baseurl }}/cloud/env/environments-ssh.html#ssh).

   -  Locate the `./var/report/{error_number}` file.

<!-- Link definitions -->

[Edit 503 error page]: {{site.baseurl}}/common/images/cloud/cloud-fastly-custom-synthetic-pages-edit-html.png
{:width="650px"}

[Update 503 error page]: {{site.baseurl}}/common/images/cloud/cloud-fastly-customize-503-response.png
{:width="650px"}

[Edit WAF error page option]: {{site.baseurl}}/common/images/cloud/cloud-fastly-custom-synthetic-pages-edit-waf.png
{:width="650px"}

[Fastly default error page]: {{site.baseurl}}/common/images/cloud/cloud-fastly-503-example.png

[Fastly custom error page]: {{site.baseurl}}/common/images/cloud/cloud-fastly-new-error-page.png
{:width="650px"}

[WAF error page]: {{site.baseurl}}/common/images/cloud/cloud-fastly-waf-403-error.png

[Update WAF error page]: {{site.baseurl}}/common/images/cloud/cloud-fastly-edit-waf-html.png
{:width="650px"}

<!-- Link definitions -->

[Edit 503 error page]: {{site.baseurl}}/common/images/cloud/cloud-fastly-custom-synthetic-pages-edit-html.png
{:width="650px"}

[Update 503 error page]: {{site.baseurl}}/common/images/cloud/cloud-fastly-customize-503-response.png
{:width="650px"}

[Edit WAF error page option]: {{site.baseurl}}/common/images/cloud/cloud-fastly-custom-synthetic-pages-edit-waf.png
{:width="650px"}

[Fastly default error page]: {{site.baseurl}}/common/images/cloud/cloud-fastly-503-example.png

[Fastly custom error page]: {{site.baseurl}}/common/images/cloud/cloud-fastly-new-error-page.png
{:width="650px"}

[WAF error page]: {{site.baseurl}}/common/images/cloud/cloud-fastly-waf-403-error.png

[Update WAF error page]: {{site.baseurl}}/common/images/cloud/cloud-fastly-edit-waf-html.png
{:width="650px"}
