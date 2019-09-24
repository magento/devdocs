---
group: cloud-guide
title: Set up redirects to WordPress using Fastly
redirect_from:
   - /guides/v2.2/cloud/configure/fastly-vcl-wordpress.html
   - /guides/v2.3/cloud/configure/fastly-vcl-wordpress.html
functional_areas:
  - Cloud
  - Setup
---

The following example shows how to use a [Fastly Edge Dictionary](https://docs.fastly.com/guides/edge-dictionaries/working-with-dictionaries-using-the-api) with a custom VCL snippet to redirect incoming requests from a {{ site.data.var.ee }} store (`staging.example.com`) to a separate WordPress site (`customer.example.com`) that hosts related content like blog posts and customer stories.

{: .bs-callout-info }
We recommend adding custom VCL configurations to a Staging environment where you can test them before running against Production.

**Prerequisites**

-  Configure the {{ site.var.data.ece }} environment for Fastly services. See [Set up Fastly]({{ page.baseurl }}/cloud/cdn/configure-fastly.html).

-  Get credentials to access both the Fastly API and the Magento Admin UI for your {{ site.data.var.ece }} environment.

-  Identify the URL paths to redirect to the WordPress backend.

-  Submit a support ticket requesting the following Fastly service configuration changes required to use the custom VCL snippet for the WordPress redirects:

   -  Add the WordPress host to the Fastly backend configuration. Include the domain name for the WordPress host.

   -  Attach the following request condition to the Wordpress backend.

     ```json
      req.http.X-WP == “1”
     ```
     Incoming requests that match this request condition, which is set through the [custom VCL snippet](#vcl), redirect to the WordPress backend.

## Create an Edge Dictionary of WordPress paths {#edge-dictionary}

Edge Dictionaries create key-value pairs accessible to VCL functions during VCL snippet processing. In this example, you create an edge dictionary that provides the list of URL paths that to redirect from your store to the WordPress backend.

{% include cloud/admin-ui-login-step.md %}

1.  Click **Stores** > **Settings** > **Configuration** > **Advanced** > **System**.

1.  Expand **Full Page Cache** > **Fastly Configuration** > **Edge dictionaries**.

1.  Create the Dictionary container:

    - Click **Add container**.

    -  On the *Container* page, enter a **Dictionary name**—`wordpress_urls`.

    -  Select **Activate after the change** to enable the dictionary after you create it.

    -  Click **Upload** to attach the dictionary to your Fastly service configuration.

1.  Add the list of URLs for redirection to the the `wordpress_urls` dictionary:

    -  Click the Settings icon for the `wordpress_urls` dictionary.

       ![Configure Edge Dictionary]

    -  Add and save key-value pairs in the new dictionary. For this example, each **Key** is a URL path to redirect to the WordPress backend, and the **Value** is 1.

	   ![Add Edge Dictionary Items]

    -  Click **Cancel** to return to the system configuration page.

1.  Click **Save Config**.

1.  Refresh the cache according to the notification at the top of the page.

For more information about Edge Dictionaries, see [Creating and using Edge Dictionaries](https://docs.fastly.com/guides/edge-dictionaries/working-with-dictionaries-using-the-api) and [custom VCL snippets](https://docs.fastly.com/guides/edge-dictionaries/working-with-dictionaries-using-the-api#custom-vcl-examples) in the Fastly documentation.

## Create a VCL snippet for the WordPress redirect {#vcl}

The following custom VCL snippet code (JSON format) evaluates incoming requests and redirects those matching a path
 in the `wordpress_urls` edge dictionary to the WordPress backend specified in the Fastly service configuration.

```json
{
  "name": "wordpress_redirect",
  "dynamic": "0",
  "type": "recv",
  "priority": "5",
  "content": "if ( req.url.path ~ \"^\\/?([^\\/?]+)\") { if ( table.lookup(wordpress_urls, re.group.1, \"NOTFOUND\") != \"NOTFOUND\" ) { set req.http.X-WP = \"1\"; } }"
}
```

Review the example code and change values as needed:

-  `name`—Name for the VCL snippet. For this example, we used `wordpress_redirect`.

-  `dynamic`—Value 0 indicates a [regular snippet](https://docs.fastly.com/guides/vcl-snippets/using-regular-vcl-snippets) to upload to the versioned VCL for the Fastly configuration.

-  `priority`—Determines when the VCL snippet runs. The priority  is `5` to run this snippet code runs before any of the default Magento VCL snippets (`magentomodule_*`) assigned a priority of 50.

-  `type`—Specifies a location to insert the snippet in the versioned VCL code. This VCL is a `recv` snippet type which adds the snippet code to the `vcl_recv` subroutine below the default Fastly VCL code and above any objects.

-  `content`— The snippet of VCL code to run in one line, without line breaks.

    In this example, the VCL code logic extracts the first segment of the path `/mypath/someotherpath`, and then compares the path (`mypath`) to the paths in the `wordpress_urls` dictionary. Requests with matching paths are redirected to the WordPress backend. See the [Fastly VCL reference](https://docs.fastly.com/vcl/reference/) for information about creating Fastly VCL code snippets.

Add the custom VCL snippet to your Fastly service configuration from the Admin UI (requires Fastly module 1.2.58 or later). If you cannot access the Admin UI, save the JSON code example in a file and upload it using the Fastly API. See [Creating a VCL snippet using the Fastly API]({{  page.baseurl }}/cloud/cdn/cloud-vcl-custom-snippets.html#manage-custom-vcl-snippets-using-the-api).

## Add the custom VCL snippet

{% include cloud/admin-ui-login-step.md %}

1.	Click **Stores** > **Settings** > **Configuration** > **Advanced** > **System**.

1.  Expand **Full Page Cache** > **Fastly Configuration** > **Custom VCL Snippets**.

1.  Click **Create Custom Snippet**.

1.  Add the VCL snippet values:

	- **Name**—`wordpress_redirect`

	- **Type**—`recv`

	- **Priority**—`5`

	- **VCL** snippet content:

      ```
      if ( req.url.path ~ "^/?([^/?]+)")
	    {
		  if ( table.lookup(wordpress_urls, re.group.1, \"NOTFOUND\") != \"NOTFOUND\" )
	        {set req.http.X-WP = "1";
		    }
         }
      ```

1.  Click **Create** to generate the VCL snippet file with the name pattern `type_priority_name.vcl`, for example `recv_5_wordpress_redirect.vcl`

    ![Create VCL Snippet]

1.  After the page reloads, click **Upload VCL to Fastly** in the *Fastly Configuration* section to add the file to the Fastly service configuration.

1.  After the upload completes, refresh the cache according to the notification at the top of the page.

Fastly validates the updated version of the VCL code during the upload process. If the validation fails, edit the custom VCL snippet to fix the issue. Then, upload the VCL again.

{% include cloud/cloud-fastly-manage-vcl-from-admin.md %}

{: .bs-callout-info }
Instead of manually uploading custom VCL snippets, you can add snippets to the `$MAGENTO_CLOUD_APP_DIR/var/vcl_snippets_custom` directory in your environment. Snippets in this directory upload automatically when you click *upload VCL to Fastly* in the Magento Admin UI. See [Automated custom VCL snippets deployment](https://github.com/fastly/fastly-magento2/blob/master/Documentation/Guides/CUSTOM-VCL-SNIPPETS.md#automated-custom-vcl-snippets-deployment) in the Fastly CDN for Magento 2 module documentation.

<!-- Link definitions -->

[Configure Edge Dictionary]: {{site.baseurl}}/common/images/cloud/cloud-fastly-edge-dictionary-configure.png
{: width="550px"}

[Add Edge Dictionary Items]: {{site.baseurl}}/common/images/cloud/cloud-fastly-edge-dictionary-add-items.png
{: width="550px"}

[Create VCL Snippet]: {{site.baseurl}}/common/images/cloud/cloud-fastly-create-vcl-snippet.png
{: width="550px"}

