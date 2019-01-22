---
group: cloud-guide
subgroup: 090_configure
title: Custom redirect to Wordpress VCL
redirect_from:
   - /guides/v2.1/cloud/configure/fastly-vcl-wordpress.html
   - /guides/v2.2/cloud/configure/fastly-vcl-wordpress.html
   - /guides/v2.3/cloud/configure/fastly-vcl-wordpress.html
functional_areas:
  - Cloud
  - Setup
---

You can create custom redirects from your Magento store to another backend hosted on another site using Fastly Edge Dictionaries with custom VCL snippets.
The following example shows how to redirect incoming requests from a {{ site.data.var.ee }} store (`staging.example.com`) to a separate WordPress site (`staging.customer.example.com`) that hosts related content like blog posts and customer stories.

{: .bs-callout .bs-callout-info}
We recommend adding custom VCL configurations to a staging environment where you can test them before running against production.

**Prerequisites**

-  Configure your {{ site.var.data.ece }} environment for Fastly services. See [Set up Fastly]({{ page.baseurl }}/cloud/cdn/configure-fastly.md). 

-  Get credentials to access both the Fastly API and the Admin UI for your {{ site.data.var.ece }} environment.

-  Identify the URL paths that you want to redirect to the WordPress backend.

-  Use the Fastly API to add the following configuration settings to the Fastly service configuration: 

   -  Add the WordPress host to the Fastly backend configuration, for example `staging.customer.example.com`.

   -  Attach the following request condition to the Wordpress backend. Incoming requests that meet this condition redirect to the WordPress backend.

     ```json
      req.http.X-WP == “1”
     ```
	 
     See the [Fastly API reference](https://docs.fastly.com/api/config#) for details on configuring the backend and request condition.

## Create Wordpress Edge Dictionary {#edge-dictionary}

Edge Dictionaries create key-value pairs accessible to VCL functions during VCL snippet processing. In this example, you create an edge dictionary that provides the list of URL paths that you want to redirect from your store to the WordPress backend. 

1.  Log in to the Admin UI.

1.  Navigate to **Stores** > **Configuration** > **Advanced** > **System** > **Fastly Configuration**.

1.  Expand the **Edge dictionaries** section.

1.  Create the Edge Dictionary container:

    - Click **Add container**.

    -  On the *Container* page, enter a Dictionary name. For this example, use the name `wordpress_urls`.

    -  Select **Activate after the change** to enable the dictionary after you create it.

    -  Click **Upload** to add the dictionary to your Fastly service configuration.

1.  Add the list of URLs for redirection to the the `wordpress_urls` dictionary:

    -  Click the Settings icon for the `wordpress_urls` dictonary.

       ![Configure Edge Dictionary]

    -  Add and save key-value pairs in the new dictionary. For this example, each **Key** is a URL path that you want to redirect to the WordPress backend, and the **Value** is 1. 
       
	   ![Add Edge Dictionary Items]
	 
    -  Click **Cancel** to return to the system configuration page.


## Create a VCL snippet for the WordPress redirect {#vcl}

The following example shows the VCL code for a regular custom VCL snippet that checks the first part of the path on incoming requests against the URL paths in the `wordpress_urls` dictionary. If the path matches any entry, the request condition `req.http.X-WP` is set to 1, which meets the condition for Fastly to route the request to the WordPress backend. 

```json
{
  "name": "wordpress",
  "dynamic": "0",
  "type": "recv",
  "priority": "5",
  "content": "if ( req.url.path ~ \"^\\/?([^\/?]+)") { if ( table.lookup(wordpress_urls, re.group.1, \"NOTFOUND\") != \"NOTFOUND\" ) { set req.http.X-WP = \"1\"; } }"
}
````

Review the values in the example to determine if you need to make changes:

  -  `name`: Name for the VCL snippet. For this example, we used the name `wordpress`.

  -  `priority`: Determines the order VCL snippets call. You want to set the priority to 5 to immediately run and check for URLs that should be redirected. This priority runs the snippet immediately and before any of the uploaded and default Magento VCL snippets (magentomodule) that have a priority of 50.

  -  `type`: For this VCL, we use `recv`, which places it in the vcl_recv subroutine below the boilerplate VCL and above any objects.

  -  `content`: The code that runs. The code extracts the first part `mypath` of the path `/mypath/someotherpath`.  It then compares that path against the Edge Dictionary `wordpress_urls`. If a match is found, the visitor is redirected to the Wordpress backend.

You can add the custom VCL snippet to your Fastly service configuration from the Admin UI (requires Fastly module 1.2.58 or later), or by saving the JSON code example in a file and uploading it using the Faslty API. See [Add VCL snippets using the Fastly API]({{ page.baseurl }}/cloud/cdn/cloud-vcl-custom-snippets.html#add-snippet).

#### To add the custom VCL snippet from the Admin UI

1.  From the Magento Admin UI, navigate to **Stores** > **Configuration** > **Advanced** > **System** > **Fastly Configuration**.

1.  Expand the **Custom VCL snippet** section.

1.  Click **Create Custom Snippet**.

1.  Complete the snippet form as shown in the following figure:

    ![Create VCL Snippet]

1.  After the page reloads, click **Upload VCL to Fastly** in the *Fastly Configuration* section.


{: .bs-callout .bs-callout-info}
Instead of manually uploading custom VCL snippets, you can add snippets to the `$MAGENTO_HOME/var/vcl_snippets_custom` directory in your environment. Snippets in this directory upload automatically any time you click *upload VCL to Fastly* in the Admin UI. See [Automated custom VCL snippets deployment](https://github.com/fastly/fastly-magento2/blob/master/Documentation/Guides/CUSTOM-VCL-SNIPPETS.md#automated-custom-vcl-snippets-deployment) in the Fastly-Magento module documentation. 


[Add Edge Dictionary Container]: {{ site.baseurl }}/common/images/cloud/cloud-fastly-edge-dictionary-example.png
{: width="650px"}

[Configure Edge Dictionary]: {{site.baseur l}}/common/images/cloud/cloud-fastly-edge-dictionary-configure.png
{: width="650px"}

[Add Edge Dictionary Items]: {{ site.baseurl}}/common/images/cloud/cloud-fastly-edge-dictionary-add-items.png
{: width="650px"}
[Create VCL Snippet]:{{site.baseurl}}/common/images/cloud/cloud-fastly-create-vcl-snippet.png
{: width="650px"}

